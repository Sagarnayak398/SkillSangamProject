import React, { useEffect, useState } from 'react';

function EmergencyContacts() {
  const [contacts, setContacts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState('');

  useEffect(() => {
    setTimeout(() => {
      setContacts([
        { _id: '1', name: 'Military Hospital', type: 'Medical', phone: '123-456-7890', email: 'hospital@army.in' },
        { _id: '2', name: 'Emergency Helpline', type: 'General', phone: '1800-999-000', email: 'help@army.in' },
        { _id: '3', name: 'Fire Brigade', type: 'Fire', phone: '101', email: 'fire@army.in' },
        { _id: '4', name: 'Police', type: 'Security', phone: '100', email: 'police@army.in' },
      ]);
      setLoading(false);
    }, 1200);
  }, []);

  const filtered = contacts.filter(c =>
    c.name.toLowerCase().includes(search.toLowerCase()) ||
    c.type.toLowerCase().includes(search.toLowerCase()) ||
    c.phone.includes(search)
  );

  return (
    <div className="container py-4">
      <h2 className="mb-4">Emergency Contact Network</h2>

      <input
        type="search"
        className="form-control mb-4"
        placeholder="Search by name, type or phone..."
        value={search}
        onChange={e => setSearch(e.target.value)}
      />

      {loading ? (
        <div className="d-flex justify-content-center my-5">
          <div className="spinner-border text-danger" role="status" aria-label="Loading"></div>
        </div>
      ) : filtered.length === 0 ? (
        <p className="text-center text-muted">No contacts found.</p>
      ) : (
        <div className="table-responsive shadow-sm">
          <table className="table table-striped table-hover align-middle">
            <thead className="table-dark">
              <tr>
                <th>Name</th>
                <th>Type</th>
                <th>Phone</th>
                <th>Email</th>
              </tr>
            </thead>
            <tbody>
              {filtered.map(({ _id, name, type, phone, email }) => (
                <tr key={_id}>
                  <td>{name}</td>
                  <td>
                    <span className={`badge ${
                      type === 'Medical' ? 'bg-success' :
                      type === 'Fire' ? 'bg-danger' :
                      type === 'Security' ? 'bg-warning text-dark' :
                      'bg-info text-dark'
                    }`}>
                      {type}
                    </span>
                  </td>
                  <td><a href={`tel:${phone}`}>{phone}</a></td>
                  <td><a href={`mailto:${email}`}>{email}</a></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}

export default EmergencyContacts;
