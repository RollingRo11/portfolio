import React from "react";
import TerminalLine from './TerminalLine';

function Header({ className = '' }) {
  const [scrolled, setScrolled] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header className={`${scrolled ? 'scrolled' : ''} ${className}`}>
      <div className="header-content">
        <h1 className="header-container">
          <TerminalLine 
            content="$ Rohan Kathuria"
            className="terminal-name"
            typingSpeed={35} // Slowed down from 15
          />
        </h1>
        <nav>
          <TerminalLine 
            content={
              <div className="nav-links">
                <a href="#about">~/about</a>
                <a href="#skills">~/skills</a>
                <a href="#projects">~/projects</a>
              </div>
            }
            typingSpeed={25} // Slowed down from 10
          />
        </nav>
      </div>
    </header>
  );
}

export default Header;
