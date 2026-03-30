import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { scpData } from './Home';

function ScpDetail() {
  const { id } = useParams();
  const scpId = parseInt(id, 10);
  const scp = scpData.find((entry) => entry.id === scpId);

  if (!scp) {
    return (
      <div className="scp-detail">
        <h1>SCP Not Found</h1>
        <p>The requested SCP entry does not exist in our database.</p>
        <Link to="/">← Back to Catalogue</Link>
      </div>
    );
  }

  return (
    <div className="scp-detail">
      <Link to="/">← Back to Catalogue</Link>
      <h1>{scp.itemNumber}</h1>
      <p><strong className="object-class">Object Class: {scp.objectClass}</strong></p>
      <h2>Special Containment Procedures</h2>
      <p>{scp.specialContainmentProcedures}</p>
      <h2>Description</h2>
      <p>{scp.description}</p>
      {scp.image && <img src={scp.image} alt={scp.itemNumber} />}
      {scp.addendums.length > 0 && (
        <div>
          <h2>Addendums</h2>
          {scp.addendums.map((addendum, index) => (
            <p key={index}>{addendum}</p>
          ))}
        </div>
      )}
    </div>
  );
}

export default ScpDetail;