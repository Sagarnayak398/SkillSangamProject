import React, { useState } from 'react';
import './Register.css';

function Register() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    role: 'officer',
  });

  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState(null); // success or error message

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setMessage(null);
  };

  const validate = () => {
    const errors = {};
    if (!formData.name.trim()) errors.name = 'Name is required';
    if (!/\S+@\S+\.\S+/.test(formData.email)) errors.email = 'Invalid email';
    if (formData.password.length < 6) errors.password = 'Password must be 6+ characters';
    return errors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const errors = validate();
    if (Object.keys(errors).length > 0) {
      setMessage({ type: 'error', text: Object.values(errors).join(', ') });
      return;
    }

    setLoading(true);
    setMessage(null);

    try {
      const response = await fetch('http://localhost:5000/api/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setMessage({ type: 'success', text: 'Registered successfully! You can now login.' });
        setFormData({
          name: '',
          email: '',
          password: '',
          role: 'officer',
        });
      } else {
        setMessage({ type: 'error', text: data.message || 'Registration failed' });
      }
    } catch (err) {
      setMessage({ type: 'error', text: 'Network error. Please try again.' });
    }

    setLoading(false);
  };

  return (
    <div className="register-container">
      <h2>User Registration</h2>

      {message && (
        <p className={message.type === 'error' ? 'error-msg' : 'success-msg'}>
          {message.text}
        </p>
      )}

      <form onSubmit={handleSubmit} noValidate>
        <label>Name</label>
        <input
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />

        <label>Email</label>
        <input
          name="email"
          type="email"
          value={formData.email}
          onChange={handleChange}
          required
        />

        <label>Password</label>
        <div className="password-wrapper">
          <input
            name="password"
            type={showPassword ? 'text' : 'password'}
            value={formData.password}
            onChange={handleChange}
            required
          />
          <button
            type="button"
            onClick={() => setShowPassword((prev) => !prev)}
            className="show-hide"
          >
            {showPassword ? 'Hide' : 'Show'}
          </button>
        </div>

        <label>Role</label>
        <select name="role" value={formData.role} onChange={handleChange}>
          <option value="officer">Officer</option>
          <option value="family">Family Member</option>
          <option value="admin">Admin</option>
        </select>

        <button type="submit" disabled={loading} className="submit-btn">
          {loading ? 'Registering...' : 'Register'}
        </button>
      </form>
    </div>
  );
}

export default Register;
