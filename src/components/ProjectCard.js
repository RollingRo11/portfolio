function ProjectCard({ project }) {
  return (
    <div 
      className="project-card"
      role="button"
      tabIndex={0}
      onClick={() => handleProjectClick(project)}
      onKeyPress={(e) => e.key === 'Enter' && handleProjectClick(project)}
    >
      {/* Project content */}
    </div>
  );
} 