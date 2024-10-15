import React from 'react';
import './styles/Footer.css'; // Import the CSS
import logo from './assets/logo.svg'; // Import the SVG from the assets folder
import YoutubeLogo from './assets/youtube_logo.svg'; // Import the SVG from the assets folder
import TiktokLogo from './assets/logo.svg'; // Import the SVG from the assets folder
import LinkedlnLogo from './assets/logo.svg'; // Import the SVG from the assets folder

const Footer = () => {
  return (
    <footer className="footer">
      <img src={logo} alt="Logo" className="logo" />
      <div className="social-links">
        <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">
          <img src={YoutubeLogo} alt="Youtube Icon" className="icon" /> {/* You can use custom SVGs like this */}
        </a>
        <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer">
          <img src={TiktokLogo} alt="LinkedIn Icon" className="icon" />
        </a>
        <a href="mailto:your.email@example.com">
          <img src={LinkedlnLogo} alt="Email Icon" className="icon" />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
