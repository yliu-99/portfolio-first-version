import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronUp, faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';
import { projectsData } from '../../../data/projectsData';
import SEO from '../../SEO/SEO';
import { createProjectSchema, createBreadcrumbSchema } from '../../SEO/schemas';
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

  // Create structured data for video/motion showcase
  const videoJsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      createBreadcrumbSchema([
        { name: "Home", url: "/" },
        { name: "Video & Motion", url: "/video" }
      ]),
      {
        "@type": "CollectionPage",
        "name": "Video & Motion Graphics Portfolio",
        "description": "Professional video production and motion graphics portfolio showcasing storytelling, animation, and multimedia content by Yuhan Liu, Vancouver multimedia artist.",
        "url": "https://yliu-99.github.io/portfolio-first-version/video",
        "mainEntity": {
          "@type": "ItemList",
          "numberOfItems": videoProjects.length,
          "itemListElement": videoProjects.map((project, index) => ({
            "@type": "ListItem",
            "position": index + 1,
            "item": createProjectSchema(project)
          }))
        }
      }
    ]
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
      <SEO
        title="Video & Motion Graphics Portfolio, Yuhan Liu Vancouver Multimedia Artist"
        description="Discover Yuhan Liu's video production and motion graphics portfolio featuring compelling storytelling, animation, and multimedia content. Vancouver-based multimedia artist with music and theatre background creating engaging visual narratives."
        keywords="video production portfolio, motion graphics vancouver, multimedia artist portfolio, video storytelling, animation portfolio, video editing vancouver, motion design, creative video content, multimedia production vancouver"
        canonicalUrl="https://yliu-99.github.io/portfolio-first-version/video"
        ogType="website"
        jsonLd={videoJsonLd}
      />
      {/* Header Section */}
      <section className="discipline-header">
        <div className="container">
          <div className="header-content">
            <h1 className="discipline-title">VIDEO & MOTION GRAPHICS</h1>
            <p className="discipline-description">
              Drawing from my background in <strong>music and theatre</strong>, I create <em>compelling visual stories</em> through video production and motion graphics. This portfolio showcases my expertise in <strong>video production, animation, storytelling, and sound design</strong> where I blend creativity with technical skills to produce engaging multimedia content that resonates with audiences.
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