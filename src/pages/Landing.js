import React from 'react';
import TerminalLine from '../components/TerminalLine';
import { Link } from 'react-router-dom';

function Landing() {
  return (
    <main className="landing">
      <section className="hero">
        <div className="hero-content">
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
        </div>
        <div className="scroll-prompt-wrapper">
          <TerminalLine 
            content="[Scroll to explore]"
            className="scroll-text"
            typingSpeed={100}
          />
        </div>
      </section>

      <section className="featured-projects">
        <h2 className="section-title">Featured Projects</h2>
        <div className="projects-grid">
          <div className="project-card">
            <h3>Personal Portfolio</h3>
            <p>A terminal-themed portfolio website built with React</p>
            <div className="project-tech">
              <span>React</span>
              <span>JavaScript</span>
              <span>CSS</span>
            </div>
          </div>
          {/* Add 1-2 more featured projects */}
        </div>
        <div className="cta">
          <Link to="/work" className="cta-link">View All Projects →</Link>
        </div>
      </section>
    </main>
  );
}

export default Landing;