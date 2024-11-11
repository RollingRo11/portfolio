import React from 'react';

function Footer() {
  return (
    <footer>
      <div className="footer-content">
        <div className="terminal-window">
          <div className="contact-section">
            <h2 className="contact-header">$ cat contact.txt</h2>
            <div className="contact-info">
              <div className="contact-line">
                <span className="contact-label">Email:</span>
                <span className="contact-value">kathuria.ro@northeastern.edu</span>
              </div>
              <div className="contact-line">
                <span className="contact-label">GitHub:</span>
                <span className="contact-value">
                  <a href="https://github.com/rollingro11" target="_blank" rel="noopener noreferrer">
                    github.com/rollingro11
                  </a>
                </span>
              </div>
              <div className="contact-line">
                <span className="contact-label">LinkedIn:</span>
                <span className="contact-value">
                  <a href="https://linkedin.com/in/rohankathuria" target="_blank" rel="noopener noreferrer">
                    linkedin.com/in/rohankathuria
                  </a>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
