import React from 'react';
import TerminalLine from './TerminalLine';

function About() {
  return (
    <section id="about">
      <div className="terminal-window">
        <TerminalLine 
          content="cat about.txt" 
          className="prompt"
        />
        <div className="terminal-output">
          <TerminalLine 
            content="Name: Rohan Kathuria" 
          />
          <TerminalLine 
            content="Location: Boston, MA" 
          />
          <TerminalLine 
            content="Education: Northeastern University" 
          />
          <TerminalLine 
            content="Major: Computer Science" 
          />
          <TerminalLine 
            content="Expected Graduation: 2027" 
          />
        </div>

        <TerminalLine 
          content="cat personal.txt" 
          className="prompt"
        />
        <div className="terminal-output">
          <TerminalLine 
            content="I'm a passionate computer science student with a deep interest in AI and machine learning. When I'm not coding, you'll find me:" 
          />
          <div className="interests-list">
            <TerminalLine 
              content="• Building and customizing mechanical keyboards" 
            />
            <TerminalLine 
              content="• Exploring new technologies and programming languages" 
            />
            <TerminalLine 
              content="• [Add another hobby/interest]" 
            />
            <TerminalLine 
              content="• [Add another hobby/interest]" 
            />
          </div>
        </div>

        <TerminalLine 
          content="cat keyboard_builds.txt" 
          className="prompt"
        />
        <div className="terminal-output">
          <TerminalLine 
            content="Recent Keyboard Builds:" 
          />
          <div className="keyboard-builds">
            <TerminalLine 
              content="• [Keyboard Model 1] - [Switch type] - [Special features]" 
            />
            <TerminalLine 
              content="• [Keyboard Model 2] - [Switch type] - [Special features]" 
            />
            <TerminalLine 
              content="Current Project: [Details about current keyboard build]" 
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
