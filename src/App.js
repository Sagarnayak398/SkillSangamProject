// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';

import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import ProtectedRoute from './components/protectedRoute';
import Dashboard from './pages/Dashboard';
import SchemeCatalog from './pages/SchemeCatalog';
import ApplyScheme from './pages/ApplyScheme';
import EmergencyContacts from './pages/EmergencyContacts';
import Marketplace from './pages/Marketplace';
import Grievance from './pages/Grievance';
import ViewSchemes from './pages/ViewSchemes';
import ViewSOS from './pages/ViewSOS';
import ViewMarketplace from './pages/ViewMarketplace';
import ViewGrievances from './pages/ViewGrievances';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/Register" element={<Register />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/schemes" element={<SchemeCatalog />} />
        <Route path="/apply" element={<ApplyScheme />} />
        <Route path="/emergency" element={<EmergencyContacts />} />
        <Route path="/marketplace" element={<Marketplace />} />
        <Route path="/grievance" element={<Grievance />} />
        <Route path="/view-schemes" element={<ViewSchemes />} />
  <Route path="/view-sos" element={<ViewSOS />} />
  <Route path="/view-marketplace" element={<ViewMarketplace />} />
  <Route path="/view-grievances" element={<ViewGrievances />} />
      </Routes>
    </Router>
  );
}

export default App;
