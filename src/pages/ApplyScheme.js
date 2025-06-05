import React, { useEffect, useState } from 'react';

function ApplyScheme() {
  const [schemes, setSchemes] = useState([]);
  const [form, setForm] = useState({ schemeId: '', aadhaar: '', file: null });
  const [errors, setErrors] = useState({});
  const [submitMessage, setSubmitMessage] = useState('');
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setSchemes([
        { _id: '1', title: 'Military Housing Scheme' },
        { _id: '2', title: 'Education Support Scheme' },
      ]);
    }, 500);
  }, []);

  const validate = () => {
    const errs = {};
    if (!form.schemeId) errs.schemeId = 'Please select a scheme.';
    if (!form.aadhaar) errs.aadhaar = 'Aadhaar number is required.';
    else if (!/^\d{12}$/.test(form.aadhaar)) errs.aadhaar = 'Aadhaar must be 12 digits.';
    return errs;
  };

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === 'file') {
      setForm(prev => ({ ...prev, file: files[0] }));
    } else {
      setForm(prev => ({ ...prev, [name]: value }));
    }
    setErrors(prev => ({ ...prev, [name]: null }));
    setSubmitMessage('');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }
    setSubmitting(true);

    // Mock submission delay
    setTimeout(() => {
      setSubmitMessage('Application submitted successfully!');
      setForm({ schemeId: '', aadhaar: '', file: null });
      setSubmitting(false);
    }, 1500);
  };

  return (
    <div className="container py-4" style={{ maxWidth: '600px' }}>
      <h2 className="mb-4">Apply for a Welfare Scheme</h2>
      <form onSubmit={handleSubmit} noValidate>
        <div className="mb-3">
          <label htmlFor="schemeId" className="form-label">Choose Scheme</label>
          <select
            id="schemeId"
            name="schemeId"
            className={`form-select ${errors.schemeId ? 'is-invalid' : ''}`}
            value={form.schemeId}
            onChange={handleChange}
            disabled={submitting}
          >
            <option value="">-- Select a scheme --</option>
            {schemes.map(s => (
              <option key={s._id} value={s._id}>{s.title}</option>
            ))}
          </select>
          {errors.schemeId && <div className="invalid-feedback">{errors.schemeId}</div>}
        </div>

        <div className="mb-3">
          <label htmlFor="aadhaar" className="form-label">Aadhaar Number</label>
          <input
            type="text"
            id="aadhaar"
            name="aadhaar"
            className={`form-control ${errors.aadhaar ? 'is-invalid' : ''}`}
            value={form.aadhaar}
            onChange={handleChange}
            maxLength={12}
            disabled={submitting}
          />
          {errors.aadhaar && <div className="invalid-feedback">{errors.aadhaar}</div>}
        </div>

        <div className="mb-3">
          <label htmlFor="file" className="form-label">Upload Supporting Documents (optional)</label>
          <input
            type="file"
            id="file"
            name="file"
            className="form-control"
            onChange={handleChange}
            disabled={submitting}
            accept=".pdf,.jpg,.png"
          />
          {form.file && (
            <small className="text-muted">Selected file: {form.file.name}</small>
          )}
        </div>

        <button type="submit" className="btn btn-primary" disabled={submitting}>
          {submitting ? (
            <>
              <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
              Submitting...
            </>
          ) : (
            'Apply'
          )}
        </button>
      </form>
      {submitMessage && <div className="alert alert-success mt-3">{submitMessage}</div>}
    </div>
  );
}

export default ApplyScheme;
