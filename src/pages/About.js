import React from 'react';
import TerminalLine from '../components/TerminalLine';

function About() {
  return (
    <main className="about-page">
      <section className="about-content">
        <div className="terminal-window">
          <TerminalLine 
            content="cat about.txt"
            className="prompt"
            typingSpeed={35}
          />
          <div className="about-text">
            <TerminalLine 
              content="I'm a Computer Science student at Northeastern University, graduating in 2028."
              typingSpeed={35}
            />
            <TerminalLine 
              content="My journey in technology is driven by a passion for solving complex problems and creating innovative solutions."
              typingSpeed={35}
            />
            <TerminalLine 
              content="Currently focusing on:"
              typingSpeed={35}
            />
            <ul>
              <li>
                <TerminalLine 
                  content="Artificial Intelligence & Machine Learning"
                  typingSpeed={35}
                />
              </li>
              <li>
                <TerminalLine 
                  content="Software Development"
                  typingSpeed={35}
                />
              </li>
              <li>
                <TerminalLine 
                  content="Web Technologies"
                  typingSpeed={35}
                />
              </li>
            </ul>
          </div>
        </div>
      </section>
    </main>
  );
}

export default About; 