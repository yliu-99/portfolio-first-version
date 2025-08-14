import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronUp, faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';
import { projectsData } from '../../../data/projectsData';
import './Video.scss';

function Video() {
  const [videoProjects, setVideoProjects] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Get all video and motion projects (categories: 'video' and 'motion')
    const projects = projectsData.filter(project => 
      project.category === 'video' || project.category === 'motion'
    );
    setVideoProjects(projects);
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
      <div className="video-page">
        <div className="loading-overlay">
          <div className="loading-spinner"></div>
        </div>
      </div>
    );
  }

  return (
    <div className="video-page">
      {/* Header Section */}
      <section className="discipline-header">
        <div className="container">
          <div className="header-content">
            <h1 className="discipline-title">VIDEO & MOTION GRAPHICS</h1>
            <p className="discipline-description">
              Cinematic storytelling and motion graphics that bring narratives to life through movement, sound, and visual innovation.
            </p>
          </div>
        </div>
      </section>

      {/* Projects Showcase */}
      <section className="discipline-projects">
        {videoProjects.map((project, index) => (
          <div key={project.id} className={`project-feature ${index % 2 === 0 ? 'left-aligned' : 'right-aligned'}`}>
            <div className="project-media">
              {project.type === 'video' ? (
                <iframe
                  src={project.media}
                  title={project.title}
                  frameBorder="0"
                  allowFullScreen
                />
              ) : project.type === 'image' ? (
                <img src={project.media} alt={project.title} />
              ) : null}
            </div>
            <div className="project-content">
              <div className="project-meta">
                <span className="project-year">{project.year}</span>
                <span className="project-category">{project.category}</span>
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

export default Video;