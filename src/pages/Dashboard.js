import React from 'react';
import './Dashboard.css';
import { useNavigate } from 'react-router-dom';

function Dashboard() {
  const navigate = useNavigate();

  // Load user from localStorage (after login)
  const user = JSON.parse(localStorage.getItem('user'));

  // Default fallback if user is not in localStorage (e.g., not logged in)
  const userName = user?.name || 'User';
  const userRole = user?.role || 'N/A';

  return (
    <div className="dashboard-container">
      <h2>Welcome, {userName}!</h2>
      <p className="user-role">Role: <strong>{userRole}</strong></p>

      <div className="cards-container">
        <div className="dashboard-card schemes-card">
          <h3>🎖 Welfare Schemes Applied</h3>
          <p>3 schemes currently in progress</p>
          <button onClick={() => navigate('/view-schemes')}>View Schemes</button>
        </div>

        <div className="dashboard-card sos-card">
          <h3>🚨 SOS Alerts</h3>
          <p>1 recent emergency alert</p>
          <button onClick={() => navigate('/view-sos')}>View SOS</button>
        </div>

        <div className="dashboard-card marketplace-card">
          <h3>📦 Marketplace Posts</h3>
          <p>5 active listings</p>
          <button onClick={() => navigate('/view-marketplace')}>Go to Marketplace</button>
        </div>

        <div className="dashboard-card grievance-card">
          <h3>📝 Grievances Filed</h3>
          <p>2 grievances being processed</p>
          <button onClick={() => navigate('/view-grievances')}>Track Grievances</button>
        </div>
      </div>

      <div className="quick-actions">
        <h3>Quick Actions</h3>
        <button className="sos-quick-btn" onClick={() => alert('SOS Triggered! 🚨')}>
          🚨 Trigger SOS
        </button>
        <button onClick={() => navigate('/apply')}>Apply for Scheme</button>
        <button onClick={() => navigate('/view-marketplace')}>Post in Marketplace</button>
      </div>
    </div>
  );
}

export default Dashboard;
