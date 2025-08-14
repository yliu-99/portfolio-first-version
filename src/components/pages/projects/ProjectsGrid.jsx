import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronUp } from '@fortawesome/free-solid-svg-icons';
import ProjectsCard from './ProjectsCard';

function ProjectsGrid({ projects, isLoading }) {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <section className="projects-grid-section">
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
        <div className="back-to-top-container">
          <button className="back-to-top" onClick={scrollToTop}>
            Back to Top
          </button>
        </div>
    </section>
  );
}

export default ProjectsGrid;