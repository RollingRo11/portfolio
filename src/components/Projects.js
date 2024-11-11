import React from 'react';
import TerminalLine from './TerminalLine';

function Projects() {
  return (
    <section id="projects">
      <div className="terminal-window">
        <TerminalLine 
          content="ls -la ~/projects/" 
          className="prompt"
        />
        <div className="terminal-output">
          <div className="project-card">
            <TerminalLine 
              content="Project: AI Image Generator" 
              className="project-title"
            />
            <TerminalLine 
              content="Tech Stack: Python, TensorFlow, React" 
            />
            <TerminalLine 
              content="Description: A deep learning model that generates unique images from text descriptions." 
            />
            <TerminalLine 
              content={<a href="https://github.com/yourusername/project1">View Project →</a>} 
            />
          </div>

          <div className="project-card">
            <TerminalLine 
              content="Project: Machine Learning Stock Predictor" 
              className="project-title"
            />
            <TerminalLine 
              content="Tech Stack: Python, Scikit-learn, Pandas" 
            />
            <TerminalLine 
              content="Description: Predicts stock market trends using historical data and machine learning algorithms." 
            />
            <TerminalLine 
              content={<a href="https://github.com/yourusername/project2">View Project →</a>} 
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects;
