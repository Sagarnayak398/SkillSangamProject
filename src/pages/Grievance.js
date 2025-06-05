import React, { useEffect, useState } from 'react';

function Grievance() {
  const [grievances, setGrievances] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Mock fetch grievances
    setTimeout(() => {
      setGrievances([
        {
          _id: '1',
          title: 'Delayed Pension',
          status: 'Pending',
          description: 'Pension disbursement delayed for 3 months.',
          date: '2025-05-10',
        },
        {
          _id: '2',
          title: 'Housing Issue',
          status: 'Resolved',
          description: 'Maintenance issue in army quarters.',
          date: '2025-04-15',
        },
      ]);
      setLoading(false);
    }, 1000);
  }, []);

  if (loading) return <p>Loading grievances...</p>;

  return (
    <div className="container">
      <h2>Track Grievances</h2>
      {grievances.length === 0 ? (
        <p>No grievances found.</p>
      ) : (
        <ul className="list-group">
          {grievances.map(({ _id, title, status, description, date }) => (
            <li key={_id} className="list-group-item mb-2 shadow-sm">
              <h5>{title}</h5>
              <p>{description}</p>
              <p><strong>Status:</strong> {status}</p>
              <p><small>Filed on: {new Date(date).toLocaleDateString()}</small></p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Grievance;
