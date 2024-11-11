import React from 'react';
import TerminalLine from '../components/TerminalLine';

function Skills() {
  return (
    <main className="skills-page">
      <section className="skills-content">
        <div className="terminal-window">
          <TerminalLine 
            content="$ ls skills/"
            className="prompt"
            typingSpeed={35}
          />
          <div className="skills-grid">
            <div className="skill-category">
              <TerminalLine 
                content="Languages:"
                className="category-title"
                typingSpeed={35}
              />
              <ul>
                <li><TerminalLine content="Python" typingSpeed={35} /></li>
                <li><TerminalLine content="JavaScript" typingSpeed={35} /></li>
                <li><TerminalLine content="Java" typingSpeed={35} /></li>
                <li><TerminalLine content="HTML/CSS" typingSpeed={35} /></li>
              </ul>
            </div>
            <div className="skill-category">
              <TerminalLine 
                content="Technologies:"
                className="category-title"
                typingSpeed={35}
              />
              <ul>
                <li><TerminalLine content="React" typingSpeed={35} /></li>
                <li><TerminalLine content="Node.js" typingSpeed={35} /></li>
                <li><TerminalLine content="Git" typingSpeed={35} /></li>
                <li><TerminalLine content="SQL" typingSpeed={35} /></li>
              </ul>
            </div>
            <div className="skill-category">
              <TerminalLine 
                content="Tools:"
                className="category-title"
                typingSpeed={35}
              />
              <ul>
                <li><TerminalLine content="VS Code" typingSpeed={35} /></li>
                <li><TerminalLine content="GitHub" typingSpeed={35} /></li>
                <li><TerminalLine content="Terminal" typingSpeed={35} /></li>
                <li><TerminalLine content="Figma" typingSpeed={35} /></li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Skills; 