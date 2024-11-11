import React from 'react';
import TerminalLine from './TerminalLine';

function Skills() {
  return (
    <section id="skills">
      <div className="terminal-window">
        <TerminalLine 
          content="cat skills.json" 
          className="prompt"
        />
        <div className="terminal-output">
          <div className="skills-grid">
            <div className="skill-category">
              <TerminalLine 
                content="Languages:" 
                className="category-title"
              />
              <TerminalLine content="• Python" />
              <TerminalLine content="• JavaScript" />
              <TerminalLine content="• Java" />
              <TerminalLine content="• C++" />
            </div>

            <div className="skill-category">
              <TerminalLine 
                content="Frameworks:" 
                className="category-title"
              />
              <TerminalLine content="• React" />
              <TerminalLine content="• Node.js" />
              <TerminalLine content="• TensorFlow" />
              <TerminalLine content="• PyTorch" />
            </div>

            <div className="skill-category">
              <TerminalLine 
                content="Tools:" 
                className="category-title"
              />
              <TerminalLine content="• Git" />
              <TerminalLine content="• Docker" />
              <TerminalLine content="• AWS" />
              <TerminalLine content="• Linux" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills; 