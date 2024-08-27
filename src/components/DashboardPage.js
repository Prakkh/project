import React from 'react';
import './DashboardPage.css';

function DashboardPage() {
  return (
    <div className="dashboard-container">
      <div className="logo">
          <img src="logoo.jpg" alt="Dragon Logo" />
      </div>
      <div className="sidebar">
        <div className="files-section">
          <h3>Files</h3>
          <ul>
            <li><input type="checkbox"  /> File 1</li>
            <li><input type="checkbox"  /> File 2</li>
            <li><input type="checkbox"  /> File 3</li>
            <li><input type="checkbox" /> File 4</li>
          </ul>
        </div>
        <div className="history-section">
          <h3>History</h3>
          <ul>
            <li>Roar 1</li>
            <li>Roar 2</li>
            <li>Roar 3</li>
            <li>Roar 4</li>
          </ul>
        </div>
        <div className="profile-section">
          <div className="profile-icon">
            <span>👤</span>
            <span>Person Name</span>
            <span>↻</span>
          </div>
        </div>
      </div>
      <div className="main-content">
        <div className="new-roar">
          <button>+ New ROAR</button>
        </div>
        <div className="welcome-message">
          <h1>Welcome back friend!</h1>
          <input type="text" placeholder="What shall we discuss today?" />
        </div>
      </div>
    </div>
  );
}

export default DashboardPage;
