import React from 'react';

export default function Navbar({ setToken }) {
  const handleLogout = () => {
    localStorage.removeItem('token'); // Menghapus token dari localStorage
    setToken(null); // Mengatur token di state App menjadi null
  };

  return (
    <nav className="navbar bg-primary border-bottom shadow">
      <div className="container">
        <h1 className="navbar-brand text-white m-0">
          <i className="bi bi-robot"></i> LumoshiveAI
        </h1>
        <button className="btn btn-danger" onClick={handleLogout}>
          <i className="bi bi-box-arrow-right me-2"></i>
          Logout
        </button>
      </div>
    </nav>
  );
}
