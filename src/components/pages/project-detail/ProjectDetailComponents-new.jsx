// ProjectDetailComponents.jsx - Enhanced components for better narrative structure
import React, { useState } from "react";
import { Link } from "react-router-dom";
import YouTube from "react-youtube";
import "./ProjectDetail.scss";
import "../../../data/projectsData";

// Helper to extract YouTube video ID from embed URL or URL
function getYouTubeId(url) {
  const match = url.match(/(?:\/embed\/|v=)([a-zA-Z0-9_-]{11})/);
  return match ? match[1] : null;
}

// ProjectDetailLayout.jsx - Main layout wrapper for consistency
function ProjectDetailLayout({ children, projectTitle }) {
  React.useEffect(() => {
    document.title = `${projectTitle} - Yuhan Liu`;
  }, [projectTitle]);

  return <div className="project-detail-page">{children}</div>;
}

// ProjectHero.jsx - Enhanced hero component
function ProjectHero({
  title,
  category,
  year,
  description,
  media,
  mediaType = "image",
  chips = [],
  bgColor = "blue",
}) {
  const [mediaLoaded, setMediaLoaded] = useState(false);

  const getBgClass = () => {
    switch (bgColor) {
      case "red":
        return "hero-bg--red";
      case "gradient":
        return "hero-bg--gradient";
      default:
        return "hero-bg--blue";
    }
  };

  return (
    <section className={`project-hero ${getBgClass()}`}>
      <div className="container">
        <div className="hero-content">
          <div className="hero-info">
            <div className="project-meta">
              <span className="category-tag">{category}</span>
              <span className="year-tag">{year}</span>
            </div>

            <h1 className="project-title">{title}</h1>
            <p className="project-description">{description}</p>

            {chips.length > 0 && (
              <div className="hero-chips">
                {chips.map((chip, index) => (
                  <span
                    key={chip}
                    className="chip"
                    style={{ "--chip-delay": `${index * 0.1}s` }}
                  >
                    {chip}
                  </span>
                ))}
              </div>
            )}
          </div>

          <div className="hero-media">
            {mediaType === "video" && getYouTubeId(media) ? (
              <YouTube
                videoId={getYouTubeId(media)}
                opts={{
                  width: "100%",
                  height: "100%",
                  playerVars: {
                    autoplay: 1,
                    mute: 1,
                    controls: 0,
                    loop: 1,
                    playlist: getYouTubeId(media),
                  },
                }}
                className={mediaLoaded ? "loaded" : ""}
                onReady={() => setMediaLoaded(true)}
                style={{ width: "100%", height: "100%" }}
              />
            ) : mediaType === "video" ? (
              <video
                src={media}
                autoPlay
                muted
                loop
                playsInline
                style={{ width: "100%" }}
                onLoadedData={() => setMediaLoaded(true)}
              />
            ) : (
              <img
                src={media}
                onLoad={() => setMediaLoaded(true)}
                className={mediaLoaded ? "loaded" : ""}
                alt={title}
              />
            )}
            <div className="media-glow"></div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ProjectGoals.jsx - Goals/objectives section
function ProjectGoals({ goals = [], challenge, solution, customContent }) {
  if (customContent) {
    return (
      <section className="project-goals">
        <div className="container">
          <h2 className="section-title">Project Goals</h2>
          <div className="goals-content">{customContent}</div>
        </div>
      </section>
    );
  }

  return (
    <section className="project-goals">
      <div className="container">
        <h2 className="section-title">Project Goals</h2>
        <div className="goals-grid">
          {challenge && (
            <div className="goal-card challenge-card">
              <div className="card-icon">🎯</div>
              <h3>Challenge</h3>
              <p>{challenge}</p>
            </div>
          )}
          {solution && (
            <div className="goal-card solution-card">
              <div className="card-icon">💡</div>
              <h3>Solution</h3>
              <p>{solution}</p>
            </div>
          )}
          {goals.map((goal, index) => (
            <div
              key={index}
              className="goal-card"
              style={{ "--card-delay": `${index * 0.1}s` }}
            >
              <div className="card-icon">{goal.icon || "⚡"}</div>
              <h3>{goal.title}</h3>
              <p>{goal.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Enhanced ProjectProcess component with better UX
function ProjectProcess({
  title = "Process & Development",
  children,
  sections = [],
  showProgressBar = false,
  showTableOfContents = false,
}) {
  const [activeSection, setActiveSection] = React.useState(0);

  // Custom content version with enhanced features
  if (children) {
    React.useEffect(() => {
      // Add smooth scrolling to headings
      const headings = document.querySelectorAll('.process-content h3');
      headings.forEach((heading, index) => {
        const id = heading.textContent.toLowerCase().replace(/\s+/g, '-').replace(/[^\w-]/g, '');
        heading.id = id;
        
        // Add section numbers
        if (!heading.querySelector('.section-number')) {
          const sectionNumber = document.createElement('span');
          sectionNumber.className = 'section-number';
          sectionNumber.textContent = String(index + 1).padStart(2, '0');
          heading.insertBefore(sectionNumber, heading.firstChild);
        }
      });

      // Reading progress bar
      if (showProgressBar) {
        const updateProgress = () => {
          const processSection = document.querySelector('.process-content');
          if (!processSection) return;

          const rect = processSection.getBoundingClientRect();
          const progress = Math.max(0, Math.min(1, 
            (window.innerHeight - rect.top) / (window.innerHeight + rect.height)
          ));
          
          const progressBar = document.getElementById('reading-progress-bar');
          if (progressBar) {
            progressBar.style.transform = `scaleX(${progress})`;
          }
        };

        window.addEventListener('scroll', updateProgress);
        updateProgress();

        return () => window.removeEventListener('scroll', updateProgress);
      }
    }, [showProgressBar]);

    return (
      <section className="project-process enhanced">
        <div className="container">
          <h2 className="section-title">{title}</h2>
          
          {showTableOfContents && (
            <div className="table-of-contents">
              <h4>📋 In This Section</h4>
              <nav className="toc-nav">
                <a href="#brainstorming">Brainstorming</a>
                <a href="#filming">Filming</a>
                <a href="#music-production">Music Production</a>
                <a href="#video-edit">Video Edit</a>
                <a href="#final-touches">Final Touches</a>
                <a href="#reflection">Reflection</a>
              </nav>
            </div>
          )}

          <div className="process-content enhanced">
            {children}
          </div>

          {showProgressBar && (
            <div className="reading-progress">
              <div className="progress-label">Reading Progress</div>
              <div className="progress-track">
                <div className="progress-bar" id="reading-progress-bar"></div>
              </div>
            </div>
          )}
        </div>
      </section>
    );
  }

  // Structured sections version
  return (
    <section className="project-process enhanced">
      <div className="container">
        <h2 className="section-title">{title}</h2>

        {sections.length > 1 && (
          <div className="process-navigation">
            <div className="process-steps">
              {sections.map((section, index) => (
                <button
                  key={index}
                  className={`step-indicator ${index <= activeSection ? 'completed' : ''} ${index === activeSection ? 'active' : ''}`}
                  onClick={() => setActiveSection(index)}
                >
                  <span className="step-number">{index + 1}</span>
                  <span className="step-title">{section.subtitle}</span>
                </button>
              ))}
            </div>
          </div>
        )}

        <div className="process-sections enhanced">
          {sections.map((section, index) => (
            <div
              key={index}
              className={`process-section ${index === activeSection ? 'active' : ''}`}
              style={{ "--section-delay": `${index * 0.2}s` }}
            >
              {section.subtitle && (
                <div className="section-header">
                  <span className="section-number">{String(index + 1).padStart(2, '0')}</span>
                  <h3 className="section-subtitle">
                    {section.subtitle}
                  </h3>
                </div>
              )}

              <div className="section-content">
                {section.image && (
                  <div className="section-media">
                    <img
                      src={section.image}
                      alt={section.subtitle || `Process step ${index + 1}`}
                    />
                  </div>
                )}

                {section.video && getYouTubeId(section.video) ? (
                  <div className="section-media">
                    <YouTube
                      videoId={getYouTubeId(section.video)}
                      opts={{
                        width: "100%",
                        height: "100%",
                        playerVars: {
                          autoplay: 1,
                          mute: 1,
                          controls: 0,
                          loop: 1,
                          playlist: getYouTubeId(section.video),
                        },
                      }}
                    />
                  </div>
                ) : section.video ? (
                  <div className="section-media">
                    <video
                      src={section.video}
                      autoPlay
                      muted
                      loop
                      playsInline
                      style={{ width: "100%", height: "100%", objectFit: "cover" }}
                    />
                  </div>
                ) : null}

                <div className="section-text">
                  {typeof section.content === "string" ? (
                    <p>{section.content}</p>
                  ) : (
                    section.content
                  )}
                </div>

                {section.keyPoints && (
                  <div className="key-points">
                    <h4>💡 Key Takeaways</h4>
                    <ul>
                      {section.keyPoints.map((point, pointIndex) => (
                        <li key={pointIndex}>{point}</li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>

              {index < sections.length - 1 && (
                <div className="section-divider">
                  <button 
                    className="next-section-btn"
                    onClick={() => setActiveSection(index + 1)}
                  >
                    Next: {sections[index + 1].subtitle}
                    <svg width="16" height="16" viewBox="0 0 16 16">
                      <path d="M8 1l7 7-7 7M1 8h14" stroke="currentColor" strokeWidth="2" fill="none"/>
                    </svg>
                  </button>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Enhanced RelatedProjects component
function RelatedProjects({ projects = [], title = "Related Projects" }) {
  if (projects.length === 0) return null;

  return (
    <section className="related-projects">
      <div className="container">
        <h2 className="section-title">{title}</h2>
        <div className="related-grid">
          {projects.map((project, index) => (
            <Link
              key={project.slug}
              to={`/projects/${project.slug}`}
              className="related-card"
              style={{ "--card-delay": `${index * 0.1}s` }}
            >
              <div className="related-media">
                {project.mediaType === "video" && getYouTubeId(project.media) ? (
                  <YouTube
                    videoId={getYouTubeId(project.media)}
                    opts={{
                      playerVars: {
                        autoplay: 1,
                        mute: 1,
                        controls: 0,
                        loop: 1,
                        playlist: getYouTubeId(project.media),
                      },
                    }}
                    style={{
                      width: "100%",
                      height: "100%",
                      display: "block",
                      position: "absolute",
                      top: 0,
                      left: 0
                    }}
                    iframeClassName="full-size-iframe"
                    className="youtube-wrapper"
                  />
                ) : project.mediaType === "video" ? (
                  <video
                    src={project.media}
                    autoPlay
                    muted
                    loop
                    playsInline
                    style={{ width: "100%", height: "100%", objectFit: "cover" }}
                  />
                ) : (
                  <img src={project.media} alt={project.title} />
                )}
              </div>
              <div className="related-info">
                <h3 className="related-title">{project.title}</h3>
                <span className="related-category">{project.category}</span>
              </div>
            </Link>
          ))}
        </div>
        <div className="all-projects-link">
          <Link to="/projects" className="btn">
            View All Projects
          </Link>
        </div>
      </div>
    </section>
  );
}

export {
  ProjectDetailLayout,
  ProjectHero,
  ProjectGoals,
  ProjectProcess,
  RelatedProjects,
};
