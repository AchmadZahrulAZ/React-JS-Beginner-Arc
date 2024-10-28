import React from 'react';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">Logoipsum</div>
      <ul className="nav-links">
        <li>About</li>
        <li>Our Services</li>
        <li>Portfolio</li>
        <li>Blog</li>
        <li>Contact</li>
        <li>
          <button className="get-in-touch">Get In Touch</button>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
