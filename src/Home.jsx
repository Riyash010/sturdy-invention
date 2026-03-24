import React from 'react';
import { Link } from 'react-router-dom';

function Home({ scpData }) {
  return (
    <div className="home-container">
      <header className="site-header">
        <h1>SCP Foundation</h1>
        <p>Secure. Contain. Protect.</p>
      </header>
      <main className="catalogue">
        <h2>Secure Containment Catalogue</h2>
        <div className="scp-grid">
          {Object.keys(scpData).map(id => (
            <Link key={id} to={`/scp/${id}`} className="scp-link">
              <div className="scp-card">
                <img src={scpData[id].image} alt={scpData[id].itemNumber} className="scp-image" />
                <h3>{scpData[id].itemNumber}</h3>
                <p className="object-class">Object Class: {scpData[id].objectClass}</p>
              </div>
            </Link>
          ))}
        </div>
      </main>
    </div>
  );
}

export default Home;