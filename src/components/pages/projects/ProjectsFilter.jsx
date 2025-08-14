import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faGrip, 
  faVideo, 
  faPalette, 
  faWandMagicSparkles 
} from '@fortawesome/free-solid-svg-icons';

function ProjectsFilter({ chips, activeFilter, onFilterChange }) {
  const filterCategories = [
    { key: 'all', label: 'All Projects', icon: faGrip },
    { key: 'video', label: 'Video', icon: faVideo },
    { key: 'graphic design', label: 'Design', icon: faPalette },
    { key: 'motion graphics', label: 'Motion', icon: faWandMagicSparkles },
  ];

  return (
    <section className="projects-filter">
      <div className="container">
        <div className="filter-header">
          <h2>Filter by Category</h2>
        </div>
        <div className="filter-chips">
          {filterCategories.map((category) => (
            <div
              key={category.key}
              className={`filter-chip ${activeFilter === category.key ? 'active' : ''}`}
              onClick={() => onFilterChange(category.key)}
              role="button" // Adds accessibility for clickable divs
              tabIndex={0} // Makes it focusable
              onKeyPress={(e) => {
                if (e.key === 'Enter') onFilterChange(category.key); // Handle Enter key for accessibility
              }}
            >
              <FontAwesomeIcon icon={category.icon} className="chip-icon" />
              <span className="chip-label">{category.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ProjectsFilter;