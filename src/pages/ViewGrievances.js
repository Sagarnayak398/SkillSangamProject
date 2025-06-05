
import React, { useState } from 'react';
import './ViewGrievances.css';

const initialGrievances = [
  { id: 1, type: 'Medical', description: 'Delay in medical bill reimbursement.', status: 'Pending' },
  { id: 2, type: 'Housing', description: 'Water leakage in army quarters.', status: 'Resolved' },
];

function ViewGrievances() {
  const [grievances, setGrievances] = useState(initialGrievances);
  const [form, setForm] = useState({ type: '', description: '' });

  const fileGrievance = () => {
    setGrievances([...grievances, { ...form, id: grievances.length + 1, status: 'Pending' }]);
    setForm({ type: '', description: '' });
  };

  return (
    <div className="grievance-container">
      <h2>Grievance Redressal</h2>

      <div className="grievance-form">
        <select value={form.type} onChange={(e) => setForm({ ...form, type: e.target.value })}>
          <option value="">Select Type</option>
          <option value="Medical">Medical</option>
          <option value="Housing">Housing</option>
          <option value="Other">Other</option>
        </select>
        <textarea
          placeholder="Describe your issue..."
          value={form.description}
          onChange={(e) => setForm({ ...form, description: e.target.value })}
        />
        <button onClick={fileGrievance}>Submit</button>
      </div>

      <div className="grievance-list">
        {grievances.map(item => (
          <div className="grievance-item" key={item.id}>
            <h4>{item.type}</h4>
            <p>{item.description}</p>
            <strong>Status: {item.status}</strong>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ViewGrievances;
