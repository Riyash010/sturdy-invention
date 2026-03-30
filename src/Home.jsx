import React from 'react';
import { Link } from 'react-router-dom';

const publicBase = import.meta.env.BASE_URL || '/';

export const scpData =
  [
    {
      id: 1, // if data comes from a db make sure it's unique
      itemNumber: "SCP-002",
      objectClass: "Euclid",
      specialContainmentProcedures: "SCP-002 is to be kept in a locked container at all times. Personnel assigned to SCP-002 must wear full protective gear when handling the object.",
      description: "SCP-002 resembles a large, tarnished bell. When rung, it causes all listeners to experience intense euphoria followed by sudden death.",
      image: `${publicBase}images/scp-002-1.jpg`,
      addendums: ["Addendum 002-1: Testing shows that the bell's effect is auditory-based."]
    },
    {
      id: 2,
      itemNumber: "SCP-003",
      objectClass: "Euclid",
      specialContainmentProcedures: "SCP-003 is housed in a standard secure locker. No personnel are to interact with SCP-003 without Level 3 clearance.",
      description: "SCP-003 is a rusty coffee machine that produces an endless supply of coffee. The coffee has anomalous properties that induce addiction.",
      image: `${publicBase}images/scp-003-1.jpg`,
      addendums: []
    },
    {
      id: 3,
      itemNumber: "SCP-004",
      objectClass: "Euclid",
      specialContainmentProcedures: "SCP-004 is contained in a 5m x 5m x 5m reinforced steel chamber. Access requires Level 4 approval.",
      description: "SCP-004 consists of 12 metal spheres that can be arranged to form various shapes. Each configuration has different effects.",
      image: `${publicBase}images/scp-004-1.jpg`,
      addendums: ["Addendum 004-1: Configuration Alpha causes time dilation."]
    },
    {
      id: 4,
      itemNumber: "SCP-005",
      objectClass: "Safe",
      specialContainmentProcedures: "SCP-005 is to be kept in a standard key cabinet. Use is restricted to testing purposes only.",
      description: "SCP-005 is a small key that can open any lock. It has no anomalous properties beyond its function.",
      image: `${publicBase}images/scp-005-1.jpg`,
      addendums: []
    },
    {
      id: 5,
      itemNumber: "SCP-006",
      objectClass: "Safe",
      specialContainmentProcedures: "SCP-006 is stored in a climate-controlled vault. Personnel must wear protective suits when handling.",
      description: "SCP-006 is a fountain that produces water with healing properties. Overuse can lead to dependency.",
      image: `${publicBase}images/scp-006-1.jpg`,
      addendums: ["Addendum 006-1: Water from SCP-006 has been used in medical trials."]
    }
  ];

function Home() {
  return (
    <div className="home-container">
      <header className="site-header">
        <h1>SCP Foundation</h1>
        <p>Secure. Contain. Protect.</p>
      </header>
      <main className="catalogue">
        <h2>Secure Containment Catalogue</h2>
        <div className="scp-grid">
          {scpData.map((obj, index) => {
            // that index is for iteration count! 
            return (
              <>
                <Link key={obj.id} to={`/scp/${obj.id}`} className="scp-link">
                  <div className="scp-card">
                    <img src={obj.image} alt={obj.itemNumber} className="scp-image" />
                    <h3>{obj.itemNumber}</h3>
                    <p className="object-class">Object Class: {obj.objectClass}</p>
                  </div>
                </Link>
              </>
            )
          })}
        </div>
      </main>
    </div>
  );
}

export default Home;