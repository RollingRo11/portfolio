import React from 'react';
import TerminalLine from './TerminalLine';

function Home() {
  return (
    <section id="home">
      <div className="terminal-window">
        <TerminalLine 
          content="whoami" 
          className="prompt"
        />
        <div className="terminal-output">
          <TerminalLine 
            content="Rohan Kathuria" 
          />
        </div>

        <TerminalLine 
          content="cat current_status.txt" 
          className="prompt"
        />
        <div className="terminal-output">
          <TerminalLine 
            content="Computer Science Student @ Northeastern University" 
          />
          <TerminalLine 
            content="Specializing in AI/ML Development" 
          />
        </div>

        <TerminalLine 
          content="./show_interests.sh" 
          className="prompt"
        />
        <div className="terminal-output">
          <TerminalLine 
            content="• Artificial Intelligence" 
          />
          <TerminalLine 
            content="• Machine Learning" 
          />
          <TerminalLine 
            content="• Software Engineering" 
          />
        </div>
      </div>
    </section>
  );
}

export default Home;
