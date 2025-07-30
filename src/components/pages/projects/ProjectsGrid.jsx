import React from 'react';
import ProjectsCard from './ProjectsCard';

function ProjectsGrid({ projects, isLoading }) {
  return (
    <section className="projects-grid-section">
      <div className="container">
        {isLoading && (
          <div className="loading-overlay">
            <div className="loading-spinner"></div>
          </div>
        )}
        <div className={`projects-grid ${isLoading ? 'loading' : ''}`}>
          {projects.map((project, index) => (
            <ProjectsCard 
              key={project.id} 
              project={project} 
              index={index}
              variant="detailed" // Different from home page
            />
          ))}
        </div>
        {projects.length === 0 && !isLoading && (
          <div className="no-results">
            <h3>No projects found</h3>
            <p>Try selecting a different filter category</p>
          </div>
        )}
      </div>
    </section>
  );
}

export default ProjectsGrid;