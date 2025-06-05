// src/components/Navbar.js
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

function Navbar() {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem('user'));

  const handleLogout = () => {
    localStorage.removeItem('user');
    localStorage.removeItem('token');
    navigate('/login');
  };

  return (
    <nav className="navbar">
      <h1>Welfare Portal</h1>
      
      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/dashboard">Dashboard</Link>
        <Link to="/schemes">Schemes</Link>
        <Link to="/apply">Apply</Link>
        <Link to="/emergency">Emergency</Link>
        <Link to="/marketplace">Marketplace</Link>
        <Link to="/grievance">Grievance</Link>

        {!user ? (
          <>
            <Link to="/login">Login</Link>
            <Link to="/register">Register</Link>
          </>
        ) : (
          <button onClick={handleLogout} className="logout-btn">Logout</button>
        )}
      </div>

      <div className="user-info">
        {user ? <span>👋 Hello, {user.name}</span> : <span>🔐 Please log in</span>}
      </div>
    </nav>
  );
}

export default Navbar;
