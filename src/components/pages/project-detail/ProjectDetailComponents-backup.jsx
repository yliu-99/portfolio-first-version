// ProjectDetailLayout.jsx - Main layout wrapper for consistency
import React from "react";
import "./ProjectDetail.scss";
import "../../../data/projectsData"; // Import projects data for consistency

function ProjectDetailLayout({ children, projectTitle }) {
  React.useEffect(() => {
    // Update page title
    document.title = `${projectTitle} - Yuhan Liu`;
  }, [projectTitle]);

  return <div className="project-detail-page">{children}</div>;
}

// ProjectHero.jsx - Reusable hero component
import { useState } from "react";
import YouTube from "react-youtube";

// Helper to extract YouTube video ID from embed URL or URL
function getYouTubeId(url) {
  const match = url.match(/(?:\/embed\/|v=)([a-zA-Z0-9_-]{11})/);
  return match ? match[1] : null;
}

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
                style={{
                  width: "100%",
                }}
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
  // If customContent is provided, use it instead of structured goals
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
          {/* Challenge Section */}
          {challenge && (
            <div className="goal-card challenge-card">
              <div className="card-icon">🎯</div>
              <h3>Challenge</h3>
              <p>{challenge}</p>
            </div>
          )}

          {/* Solution Section */}
          {solution && (
            <div className="goal-card solution-card">
              <div className="card-icon">💡</div>
              <h3>Solution</h3>
              <p>{solution}</p>
            </div>
          )}

          {/* Individual Goals */}
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

// ProjectProcess.jsx - Enhanced process section with better UX

function ProjectProcess({
  title = "Process & Development",
  children,
  sections = [],
  showProgressBar = true,
}) {
  const [activeSection, setActiveSection] = React.useState(0);

  // If using custom children content
  if (children) {
    return (
      <section className="project-process">
        <div className="container">
          <h2 className="section-title">{title}</h2>

          <div className="process-content enhanced">
            {children}
          </div>

          {showProgressBar && (
            <div className="reading-progress">
              <div className="progress-bar" id="reading-progress-bar"></div>
            </div>
          )}
        </div>
      </section>
    );
  }

          {showProgressBar && (
            <div className="reading-progress">
              <div className="progress-bar" id="reading-progress-bar"></div>
            </div>
          )}
        </div>
      </section>
    );
  }

  // Structured sections version with enhanced navigation
  return (
    <section className="project-process">
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
                  <h3 className="section-subtitle" id={section.subtitle.toLowerCase().replace(/\s+/g, '-')}>
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
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                      }}
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
                    <h4>Key Takeaways</h4>
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
}

// RelatedProjects.jsx - Navigation to other projects
import { Link } from "react-router-dom";

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
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                    }}
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

// ProjectDetailTemplate.jsx - Complete template for copy-paste
function ProjectDetailTemplate() {
  return (
    <ProjectDetailLayout projectTitle="PROJECT NAME HERE">
      {/* Hero Section */}
      <ProjectHero
        title="PROJECT TITLE"
        category="design" // or "video", "motion"
        year="2024"
        description="Brief project description goes here..."
        media="/path/to/hero-media.jpg" // or .mp4
        mediaType="image" // or "video"
        chips={["graphic design", "branding", "photoshop"]}
        bgColor="blue" // 'blue', 'red', or 'gradient'
      />

      {/* Goals Section - Option 1: Structured */}
      <ProjectGoals
        challenge="The main challenge or problem this project addressed..."
        solution="How the project solved the challenge..."
        goals={[
          {
            icon: "🎨",
            title: "Creative Excellence",
            description: "Deliver outstanding visual design...",
          },
          {
            icon: "⏱️",
            title: "Timely Delivery",
            description: "Complete project within timeline...",
          },
        ]}
      />

      {/* Goals Section - Option 2: Custom Content */}
      {/* 
      <ProjectGoals customContent={
        <div>
          <p>Custom content goes here with full flexibility...</p>
          <h3>Subheading</h3>
          <p>More content...</p>
        </div>
      } />
      */}

      {/* Process Section - Option 1: Custom JSX */}
      <ProjectProcess title="Design Process">
        <div className="custom-process-content">
          <h3>Research & Discovery</h3>
          <p>Detailed explanation of the research phase...</p>

          <div className="process-image">
            <img src="/path/to/process-image.jpg" alt="Research phase" />
          </div>

          <h3>Ideation & Sketching</h3>
          <p>How ideas were developed and refined...</p>

          <h3>Digital Design</h3>
          <p>Translation to digital formats...</p>

          <h3>Final Implementation</h3>
          <p>How the final solution was delivered...</p>
        </div>
      </ProjectProcess>

      {/* Process Section - Option 2: Structured Sections */}
      {/* 
      <ProjectProcess 
        title="Development Process"
        sections={[
          {
            subtitle: "Research Phase",
            content: "Detailed description of research...",
            image: "/path/to/research-image.jpg"
          },
          {
            subtitle: "Design Phase", 
            content: "How the design was developed...",
            video: "/path/to/design-video.mp4"
          },
          {
            subtitle: "Implementation",
            content: <div><p>Custom JSX content here...</p><ul><li>Item 1</li><li>Item 2</li></ul></div>
          }
        ]}
      />
      */}

      {/* Related Projects */}
      <RelatedProjects
        projects={[
          {
            title: "RELATED PROJECT 1",
            category: "design",
            slug: "related-project-1",
            media: "/path/to/related1.jpg",
            mediaType: "image",
          },
          {
            title: "RELATED PROJECT 2",
            category: "video",
            slug: "related-project-2",
            media: "/path/to/related2.mp4",
            mediaType: "video",
          },
        ]}
      />
    </ProjectDetailLayout>
  );
}

export {
  ProjectDetailLayout,
  ProjectHero,
  ProjectGoals,
  ProjectProcess,
  RelatedProjects,
  ProjectDetailTemplate,
};
