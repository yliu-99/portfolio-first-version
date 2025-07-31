import React from 'react';

function ProjectsFilter({ chips, activeFilter, onFilterChange }) {
  const filterCategories = [
    { key: 'all', label: 'All Projects', icon: '⚡' },
    { key: 'video', label: 'Video', icon: '🎬' },
    { key: 'graphic design', label: 'Design', icon: '🎨' },
    { key: 'motion graphics', label: 'Motion', icon: '✨' },
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
              <span className="chip-icon">{category.icon}</span>
              <span className="chip-label">{category.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ProjectsFilter;