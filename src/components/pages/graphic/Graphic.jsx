import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronUp, faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';
import { projectsData, getProjectsByCategory } from '../../../data/projectsData';
import './Graphic.scss';

function Graphic() {
  const [graphicProjects, setGraphicProjects] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Get all graphic design projects (category: 'design')
    const projects = getProjectsByCategory('design');
    setGraphicProjects(projects);
    setIsLoading(false);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  if (isLoading) {
    return (
      <div className="graphic-page">
        <div className="loading-overlay">
          <div className="loading-spinner"></div>
        </div>
      </div>
    );
  }

  return (
    <div className="graphic-page">
      {/* Header Section */}
      <section className="discipline-header">
        <div className="container">
          <div className="header-content">
            <h1 className="discipline-title">GRAPHIC DESIGN</h1>
            <p className="discipline-description">
              I love design that is bold, impactful, and tells a story. My graphic design projects range from branding and print design to digital illustrations and marketing materials. Each project is crafted with attention to detail and a focus on visual storytelling.
            </p>
          </div>
        </div>
      </section>

      {/* Projects Showcase */}
      <section className="discipline-projects">
        {graphicProjects.map((project, index) => (
          <div key={project.id} className={`project-feature ${index % 2 === 0 ? 'left-aligned' : 'right-aligned'}`}>
            <div className="project-media">
              {project.type === 'image' ? (
                <img src={project.media} alt={project.title} />
              ) : project.type === 'video' ? (
                <iframe
                  src={project.media}
                  title={project.title}
                  frameBorder="0"
                  allowFullScreen
                />
              ) : null}
            </div>
            <div className="project-content">
              <div className="project-meta">
                <span className="project-year">{project.year}</span>
                <div className="project-chips">
                  {project.chips.map((chip, chipIndex) => (
                    <span key={chipIndex} className="chip">
                      {chip}
                    </span>
                  ))}
                </div>
              </div>
              <h2 className="project-title">{project.title}</h2>
              <p className="project-description">{project.description}</p>
              <Link to={`/projects/${project.slug}`} className="project-link">
                <span>VIEW PROJECT</span>
                <FontAwesomeIcon icon={faExternalLinkAlt} />
              </Link>
            </div>
          </div>
        ))}
      </section>

      {/* Back to Top */}
      <div className="back-to-top-container">
        <button className="back-to-top" onClick={scrollToTop}>
          Back to Top
        </button>
      </div>
    </div>
  );
}

export default Graphic;