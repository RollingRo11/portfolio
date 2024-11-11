import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Header({ className }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className={className}>
      <nav>
        <Link to="/" className="logo-text">Rohan Kathuria</Link>
        <div className={`nav-links ${isMenuOpen ? 'open' : ''}`}>
          <Link to="/work" onClick={() => setIsMenuOpen(false)}>Work</Link>
          <Link to="/skills" onClick={() => setIsMenuOpen(false)}>Skills</Link>
          <Link to="/about" onClick={() => setIsMenuOpen(false)}>About</Link>
        </div>
      </nav>
    </header>
  );
}

export default Header;
