import React from 'react';
import TerminalLine from '../components/TerminalLine';

function Work() {
  return (
    <main className="work-page">
      <section className="work-content">
        <div className="terminal-window">
          <TerminalLine 
            content="ls projects/"
            className="prompt"
            typingSpeed={35}
          />
          <div className="projects-grid">
            <div className="project-card">
              <TerminalLine 
                content="Personal Portfolio"
                className="project-title"
                typingSpeed={35}
              />
              <TerminalLine 
                content="A terminal-themed portfolio website built with React"
                className="project-description"
                typingSpeed={35}
              />
              <div className="project-tech">
                <TerminalLine content="React" typingSpeed={35} />
                <TerminalLine content="JavaScript" typingSpeed={35} />
                <TerminalLine content="CSS" typingSpeed={35} />
              </div>
            </div>
            {/* Add more project cards with TerminalLine components */}
          </div>
        </div>
      </section>
    </main>
  );
}

export default Work; 