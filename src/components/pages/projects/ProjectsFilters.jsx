import React from 'react';
import './ProjectsFilter.scss';

function ProjectsFilter({ chips, activeFilter, onFilterChange }) {
  const filterCategories = [
    { key: 'all', label: 'All Projects', icon: '⚡' },
    { key: 'video', label: 'Video', icon: '🎬' },
    { key: 'graphic design', label: 'Design', icon: '🎨' },
    { key: 'motion graphics', label: 'Motion', icon: '✨' },
    { key: 'music production', label: 'Audio', icon: '🎵' },
    { key: 'storytelling', label: 'Story', icon: '📖' }
  ];

  return (
    <section className="projects-filter">
      <div className="container">
        <div className="filter-header">
          <h2>Filter by Category</h2>
        </div>
        <div className="filter-chips">
          {filterCategories.map((category) => (
            <button
              key={category.key}
              className={`filter-chip ${activeFilter === category.key ? 'active' : ''}`}
              onClick={() => onFilterChange(category.key)}
            >
              <span className="chip-icon">{category.icon}</span>
              <span className="chip-label">{category.label}</span>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ProjectsFilter;