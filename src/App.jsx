import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home';
import ScpDetail from './ScpDetail';
import { scpData } from './scpData';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home scpData={scpData} />} />
          <Route path="/scp/:id" element={<ScpDetail scpData={scpData} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
