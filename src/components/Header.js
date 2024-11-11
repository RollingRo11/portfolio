import React from 'react';
import { Link } from 'react-router-dom';

function Header({ className }) {
  return (
    <header className={className}>
      <nav>
        <Link to="/" className="logo-text">Rohan Kathuria</Link>
        <div className="nav-links">
          <Link to="/work">Work</Link>
          <Link to="/skills">Skills</Link>
          <Link to="/about">About</Link>
        </div>
      </nav>
    </header>
  );
}

export default Header;
