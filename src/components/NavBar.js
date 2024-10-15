import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './styles/NavBar.css'; // Import the CSS for styling
import logo from './assets/logo.svg'; // Import the SVG from the assets folder

const Navbar = () => {
  // State to toggle the hamburger menu
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen); // Toggle the menu state
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img src={logo} alt="Logo" className="logo" />
      </div>
      
      {/* Hamburger menu for mobile */}
      <div className="hamburger" onClick={toggleMenu}>
        <div></div>
        <div></div>
        <div></div>
      </div>

      {/* Navbar links, with conditional class for mobile view */}
      <ul className={`navbar-links ${isMenuOpen ? 'active' : ''}`}>
        <li><Link to="/" onClick={toggleMenu}>Home</Link></li>
        <li><Link to="/about" onClick={toggleMenu}>About</Link></li>
        <li><Link to="/portfolio" onClick={toggleMenu}>Portfolio</Link></li>
        <li><Link to="/mission" onClick={toggleMenu}>Mission</Link></li>
        <li><Link to="/contact" onClick={toggleMenu}>Contact</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
