import React from 'react';
import TerminalLine from './TerminalLine';

function Footer() {
  return (
    <footer>
      <center>
        <div className="terminal-window footer-content">
          <TerminalLine 
          content="contact --list-all" 
          className="prompt"
        />
        <div className="terminal-output">
          <TerminalLine 
            content="Email: rohan.kathuria@live.com" 
          />
          <TerminalLine 
            content="Phone: (832) 920-4070" 
          />
          <div className="social-links">
            <TerminalLine 
              content={
                <>
                  <a href="https://www.linkedin.com/in/rohanekathuria" target="_blank" rel="noopener noreferrer">linkedin.com/in/rohanekathuria</a>
                  {" | "}
                  <a href="https://github.com/RollingRo11" target="_blank" rel="noopener noreferrer">github.com/RollingRo11</a>
                </>
              }
            />
          </div>
        </div>
      </div>
      </center>
    </footer>
  );
}

export default Footer;
