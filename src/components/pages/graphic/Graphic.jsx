import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronUp, faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';
import { projectsData, getProjectsByCategory } from '../../../data/projectsData';
import SEO from '../../SEO/SEO';
import { createProjectSchema, createBreadcrumbSchema } from '../../SEO/schemas';
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

  // Create structured data for graphic design showcase
  const graphicJsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      createBreadcrumbSchema([
        { name: "Home", url: "/" },
        { name: "Graphic Design", url: "/graphic" }
      ]),
      {
        "@type": "CollectionPage",
        "name": "Graphic Design Portfolio",
        "description": "Professional graphic design portfolio showcasing branding, print design, and digital illustrations by Yuhan Liu, Vancouver-based designer.",
        "url": "https://yliu-99.github.io/portfolio-first-version/graphic",
        "mainEntity": {
          "@type": "ItemList",
          "numberOfItems": graphicProjects.length,
          "itemListElement": graphicProjects.map((project, index) => ({
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
      <div className="graphic-page">
        <div className="loading-overlay">
          <div className="loading-spinner"></div>
        </div>
      </div>
    );
  }

  return (
    <div className="graphic-page">
      <SEO
        title="Graphic Design Portfolio, Yuhan Liu Vancouver Designer"
        description="Explore Yuhan Liu's professional graphic design portfolio featuring bold branding projects, print design, digital illustrations, and visual storytelling. Vancouver-based BCIT New Media designer creating impactful design solutions."
        keywords="graphic design portfolio vancouver, yuhan liu graphic design, branding design vancouver, print design portfolio, digital illustrations, visual storytelling design, vancouver graphic designer, creative design projects"
        canonicalUrl="https://yliu-99.github.io/portfolio-first-version/graphic"
        ogType="website"
        jsonLd={graphicJsonLd}
      />
      {/* Header Section */}
      <section className="discipline-header">
        <div className="container">
          <div className="header-content">
            <h1 className="discipline-title">GRAPHIC DESIGN</h1>
            <p className="discipline-description">
              <strong>Bold, impactful design that tells compelling stories.</strong> My graphic design projects span from <em>branding and visual identity</em> to <em>print design and digital illustrations</em>. Each project showcases attention to detail with a focus on <strong>creative visual storytelling</strong> and effective communication. Discover professional design work created with passion for innovative solutions.
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