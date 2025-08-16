// Projects.jsx - Main Projects Page
import React, { useState, useEffect } from 'react';
import ProjectsFilter from './ProjectsFilter';  
import ProjectsGrid from './ProjectsGrid';
import SEO from '../../SEO/SEO';
import { createProjectSchema, createBreadcrumbSchema } from '../../SEO/schemas';
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

  // Create structured data for all projects
  const projectsJsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      createBreadcrumbSchema([
        { name: "Home", url: "/" },
        { name: "Projects", url: "/projects" }
      ]),
      {
        "@type": "CollectionPage",
        "name": "Design Projects Portfolio",
        "description": "A comprehensive collection of graphic design and multimedia projects by Yuhan Liu, showcasing expertise in branding, web design, and creative visual solutions.",
        "url": "https://yliu-99.github.io/portfolio-first-version/projects",
        "mainEntity": {
          "@type": "ItemList",
          "numberOfItems": projectsData.length,
          "itemListElement": projectsData.map((project, index) => ({
            "@type": "ListItem",
            "position": index + 1,
            "item": createProjectSchema(project)
          }))
        }
      }
    ]
  };

  return (
    <div className="projects-page">
      <SEO
        title="Design Projects Portfolio, Yuhan Liu Vancouver Graphic Designer"
        description="Explore Yuhan Liu's comprehensive portfolio of graphic design projects featuring branding, web design, print media, and multimedia creations. Professional design work from Vancouver-based BCIT New Media graduate showcasing creative excellence."
        keywords="design projects portfolio, yuhan liu projects, vancouver graphic design portfolio, branding projects, web design showcase, creative design examples, multimedia portfolio, professional design work vancouver"
        canonicalUrl="https://yliu-99.github.io/portfolio-first-version/projects"
        ogType="website"
        jsonLd={projectsJsonLd}
      />
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