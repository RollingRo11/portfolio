import React from 'react';
import TerminalLine from './TerminalLine';

function LandingPage() {
  return (
    <div className="landing-content">
      <TerminalLine 
        content="$ whoami"
        className="landing-prompt"
        typingSpeed={35}
      />
      <TerminalLine 
        content="Rohan Kathuria"
        className="landing-name"
        typingSpeed={35}
      />
      <TerminalLine 
        content="$ cat introduction.txt"
        className="landing-prompt"
        typingSpeed={35}
      />
      <div className="landing-intro">
        <TerminalLine 
          content="Computer Science Student @ Northeastern University"
          typingSpeed={35}
        />
        <TerminalLine 
          content="Passionate about AI/ML and Software Development"
          typingSpeed={35}
        />
      </div>
      <TerminalLine 
        content="[Scroll to explore]"
        className="scroll-prompt"
        typingSpeed={35}
      />
    </div>
  );
}

export default LandingPage; 