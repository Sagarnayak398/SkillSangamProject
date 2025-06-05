import React, { useState } from 'react';
import './ViewSOS.css';

const mockSOSData = [
  { id: 1, type: 'Medical', message: 'Need ambulance at Station B', timestamp: '2025-06-02 09:30 AM' },
  { id: 2, type: 'Fire', message: 'Fire in housing block C', timestamp: '2025-06-01 07:10 PM' },
];

function ViewSOS() {
  const [alerts, setAlerts] = useState(mockSOSData);

  const triggerSOS = () => {
    alert('🚨 SOS Triggered!');
    // add logic to post SOS to backend
  };

  return (
    <div className="sos-container">
      <h2>SOS Alerts</h2>
      <button className="trigger-sos" onClick={triggerSOS}>🚨 Trigger New SOS</button>
      <div className="sos-list">
        {alerts.map(alert => (
          <div className="sos-alert" key={alert.id}>
            <h4>{alert.type} Emergency</h4>
            <p>{alert.message}</p>
            <small>{alert.timestamp}</small>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ViewSOS;
