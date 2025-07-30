// Projects.jsx - Main Projects Page
import React, { useState, useEffect } from 'react';
import ProjectsHero from './ProjectsHero.jsx';
import ProjectsFilter from './ProjectsFilter.jsx';
import ProjectsGrid from './ProjectsGrid.jsx';
import ProjectsStats from './ProjectsStats.jsx';
import { projectsData } from '../../../data/projectsData.js';
import './Projects.scss';

function Projects() {
  const [filteredProjects, setFilteredProjects] = useState(projectsData);
  const [activeFilter, setActiveFilter] = useState('all');
  const [isLoading, setIsLoading] = useState(false);

  // Get all unique chips from projects
  const allChips = [...new Set(projectsData.flatMap(project => project.chips))];

  const handleFilterChange = (filterType) => {
    setIsLoading(true);
    setActiveFilter(filterType);
    
    // Simulate loading animation
    setTimeout(() => {
      if (filterType === 'all') {
        setFilteredProjects(projectsData);
      } else {
        const filtered = projectsData.filter(project => 
          project.chips.includes(filterType)
        );
        setFilteredProjects(filtered);
      }
      setIsLoading(false);
    }, 300);
  };

  return (
    <div className="projects-page">
      <ProjectsHero />
      <ProjectsStats projects={projectsData} />
      <ProjectsFilter 
        chips={allChips}
        activeFilter={activeFilter}
        onFilterChange={handleFilterChange}
      />
      <ProjectsGrid 
        projects={filteredProjects}
        isLoading={isLoading}
      />
    </div>
  );
}

export default Projects;