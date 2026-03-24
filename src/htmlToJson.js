import JSZip from 'jszip';

// Utility to convert SCP HTML to JSON
export function htmlToJson(htmlString) {
  const parser = new DOMParser();
  const doc = parser.parseFromString(htmlString, 'text/html');

  // Extract item number from title
  const title = doc.querySelector('h1')?.textContent || '';
  const itemNumber = title.match(/SCP-\d+/)?.[0] || '';

  // Extract object class - assuming it's in a paragraph after a strong tag
  const objectClassElement = doc.querySelector('strong');
  const objectClass = objectClassElement?.nextSibling?.textContent?.trim() || 'Unknown';

  // Extract sections
  const sections = {};
  const headings = doc.querySelectorAll('h2');
  headings.forEach(heading => {
    const sectionName = heading.textContent.toLowerCase().replace(/\s+/g, '').replace(/:/g, '');
    const content = [];
    let next = heading.nextElementSibling;
    while (next && next.tagName !== 'H2') {
      if (next.tagName === 'P') {
        content.push(next.textContent);
      }
      next = next.nextElementSibling;
    }
    sections[sectionName] = content.join(' ');
  });

  // Extract image
  const img = doc.querySelector('img');
  const image = img ? img.src : null;

  // Extract addendums if any
  const addendums = [];
  const addendumHeadings = doc.querySelectorAll('h3');
  addendumHeadings.forEach(heading => {
    if (heading.textContent.toLowerCase().includes('addendum')) {
      const content = [];
      let next = heading.nextElementSibling;
      while (next && next.tagName !== 'H3' && next.tagName !== 'H2') {
        if (next.tagName === 'P') {
          content.push(next.textContent);
        }
        next = next.nextElementSibling;
      }
      addendums.push(content.join(' '));
    }
  });

  return {
    itemNumber,
    objectClass,
    specialContainmentProcedures: sections.specialcontainmentprocedures || '',
    description: sections.description || '',
    image,
    addendums
  };
}

// Function to load HTML files from zip and convert to JSON
export async function loadScpDataFromZip(zipFile) {
  const zip = new JSZip();
  const zipContent = await zip.loadAsync(zipFile);
  const scpData = {};

  for (const [path, file] of Object.entries(zipContent.files)) {
    if (path.endsWith('.html')) {
      const htmlString = await file.async('text');
      const scpJson = htmlToJson(htmlString);
      if (scpJson.itemNumber) {
        const id = scpJson.itemNumber.replace('SCP-', '');
        scpData[id] = scpJson;
      }
    }
  }

  return scpData;
}