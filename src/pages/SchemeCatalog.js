import React, { useEffect, useState } from 'react';

function SchemeCatalog() {
  const [schemes, setSchemes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const schemesPerPage = 3;

  useEffect(() => {
    // Mock API call with timeout
    setTimeout(() => {
      setSchemes([
        { _id: '1', title: 'Military Housing Scheme', description: 'Affordable housing for veterans.', eligibility: 'Retired personnel', deadline: '2025-12-31' },
        { _id: '2', title: 'Education Support', description: 'Scholarships for children of armed forces.', eligibility: 'Children under 18', deadline: '2025-08-15' },
        { _id: '3', title: 'Medical Aid Scheme', description: 'Medical assistance for active duty soldiers.', eligibility: 'Active personnel', deadline: '2026-01-15' },
        { _id: '4', title: 'Pension Scheme', description: 'Timely pension disbursement.', eligibility: 'Retired', deadline: '2025-11-30' },
        { _id: '5', title: 'Skill Development', description: 'Skill training for veterans.', eligibility: 'Veterans', deadline: '2025-10-01' },
      ]);
      setLoading(false);
    }, 1500);
  }, []);

  // Filter schemes by search
  const filteredSchemes = schemes.filter(s =>
    s.title.toLowerCase().includes(search.toLowerCase()) ||
    s.description.toLowerCase().includes(search.toLowerCase())
  );

  // Pagination logic
  const indexOfLast = currentPage * schemesPerPage;
  const indexOfFirst = indexOfLast - schemesPerPage;
  const currentSchemes = filteredSchemes.slice(indexOfFirst, indexOfLast);
  const totalPages = Math.ceil(filteredSchemes.length / schemesPerPage);

  const changePage = (page) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="container py-4">
      <h2 className="mb-4">Welfare Scheme Catalog</h2>

      <input
        type="search"
        className="form-control mb-4"
        placeholder="Search schemes..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      {loading ? (
        <div className="d-flex justify-content-center my-5">
          <div className="spinner-border text-primary" role="status" aria-label="Loading">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      ) : filteredSchemes.length === 0 ? (
        <p className="text-center text-muted">No schemes found.</p>
      ) : (
        <>
          <div className="row">
            {currentSchemes.map(({ _id, title, description, eligibility, deadline }) => (
              <div key={_id} className="col-md-6 col-lg-4 mb-4">
                <div className="card h-100 shadow-sm">
                  <div className="card-body d-flex flex-column">
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text flex-grow-1">{description}</p>
                    <ul className="list-group list-group-flush mb-3">
                      <li className="list-group-item"><strong>Eligibility:</strong> {eligibility}</li>
                      <li className="list-group-item"><strong>Apply by:</strong> {new Date(deadline).toLocaleDateString()}</li>
                    </ul>
                    <button className="btn btn-primary mt-auto">View Details</button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Pagination */}
          <nav aria-label="Page navigation">
            <ul className="pagination justify-content-center">
              {[...Array(totalPages)].map((_, i) => (
                <li key={i} className={`page-item ${currentPage === i + 1 ? 'active' : ''}`}>
                  <button className="page-link" onClick={() => changePage(i + 1)}>{i + 1}</button>
                </li>
              ))}
            </ul>
          </nav>
        </>
      )}
    </div>
  );
}

export default SchemeCatalog;
