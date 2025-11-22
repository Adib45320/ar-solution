import { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const whatsappLink = "https://wa.me/8801763636997";
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="container nav-container">
        <Link to="/" className="logo" onClick={closeMenu}>
          <img src="/Main Logo.png" alt="AR Solution Logo" className="logo-image" />
          <span className="logo-text">AR Solution</span>
        </Link>
        
        <button className="hamburger" onClick={toggleMenu} aria-label="Toggle menu">
          <span className={`hamburger-line ${isMenuOpen ? 'open' : ''}`}></span>
          <span className={`hamburger-line ${isMenuOpen ? 'open' : ''}`}></span>
          <span className={`hamburger-line ${isMenuOpen ? 'open' : ''}`}></span>
        </button>
        
        <div className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
          <Link to="/" className="nav-link" onClick={closeMenu}>Home</Link>
          <Link to="/about" className="nav-link" onClick={closeMenu}>About</Link>
          <Link to="/services" className="nav-link" onClick={closeMenu}>Services</Link>
          <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="cta-button" onClick={closeMenu}>
            Contact Us
          </a>
        </div>
      </div>
      {isMenuOpen && <div className="overlay" onClick={closeMenu}></div>}
    </nav>
  );
};

export default Navbar;
