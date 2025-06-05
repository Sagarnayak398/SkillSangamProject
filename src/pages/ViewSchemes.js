import React, { useState } from 'react';
import './ViewSchemes.css';

const schemes = [
  { id: 1, title: 'Education Aid', description: 'Financial support for children’s education.', eligibility: 'Children of active personnel' },
  { id: 2, title: 'Medical Reimbursement', description: 'Reimbursement for medical expenses.', eligibility: 'Retired personnel' },
  { id: 3, title: 'Housing Scheme', description: 'Low-interest loans for home purchase.', eligibility: 'Active service personnel' },
];

function ViewSchemes() {
  const [search, setSearch] = useState('');

  const filteredSchemes = schemes.filter(s =>
    s.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="schemes-container">
      <h2>Available Welfare Schemes</h2>
      <input
        type="text"
        placeholder="Search schemes..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <div className="scheme-list">
        {filteredSchemes.map(scheme => (
          <div className="scheme-card" key={scheme.id}>
            <h3>{scheme.title}</h3>
            <p>{scheme.description}</p>
            <small><strong>Eligibility:</strong> {scheme.eligibility}</small>
            <button onClick={() => alert('Redirecting to Apply Form...')}>Apply</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ViewSchemes;
