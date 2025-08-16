import "./HomeProjects.scss";
import { Link, useNavigate } from "react-router-dom";
import { projectsData } from "../../../data/projectsData";
import { useState, useEffect, useRef } from "react";
import YouTube from 'react-youtube';

// Helper to extract YouTube video ID from embed URL
function getYouTubeId(url) {
  const match = url.match(/(?:\/embed\/|v=)([a-zA-Z0-9_-]{11})/);
  return match ? match[1] : null;
}

function HomeProjects() {
  const navigate = useNavigate();
  const featuredProjects = projectsData.filter(
    (project) =>
      project.featured && project.id !== "thrash" && project.id !== "horizons"
  );
  const [selectedIdx, setSelectedIdx] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const intervalRef = useRef(null);

  // Auto-cycle through projects
  useEffect(() => {
    if (!isHovered) {
      intervalRef.current = setInterval(() => {
        setSelectedIdx((prevIdx) => 
          (prevIdx + 1) % featuredProjects.length
        );
      }, 4000); // Change every 4 seconds
    } else {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [isHovered, featuredProjects.length]);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const handleNavItemMouseEnter = (idx) => {
    setSelectedIdx(idx);
  };

  const handleNavItemClick = (project) => {
    navigate(`/projects/${project.slug}`);
  };

  const handleMediaClick = () => {
    // Navigate to project details when media is clicked (mobile interaction)
    navigate(`/projects/${featuredProjects[selectedIdx].slug}`);
  };

  const handleNavItemSelect = (idx) => {
    // For mobile: just change selection, don't navigate
    setSelectedIdx(idx);
  };

  const handleNavItemDesktopClick = (project, idx) => {
    // For desktop: navigate immediately
    navigate(`/projects/${project.slug}`);
  };

  return (
    <div className="projects">
      {/* Title moved to top for regular horizontal orientation */}
      <div className="projects-header-top">
        <h2 data-text="FEATURED PROJECTS">FEATURED PROJECTS</h2>
      </div>
      
      <div className="projects-box-layout unified-box">
        <div className="sidebar-and-details">
          <div className="projects-header-vertical">
            <h2 data-text="FEATURED PROJECTS">FEATURED PROJECTS</h2>
          </div>
          
          {/* Horizontal scrollable nav for portrait mode */}
          <nav className="projects-nav-horizontal">
            <div className="horizontal-nav-list">
              {featuredProjects.map((project, idx) => (
                <div
                  key={project.id}
                  className={`horizontal-nav-item${
                    selectedIdx === idx ? " active" : ""
                  }`}
                  onClick={() => handleNavItemSelect(idx)}
                  onMouseEnter={() => handleNavItemMouseEnter(idx)}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") {
                      handleNavItemSelect(idx);
                    }
                  }}
                >
                  {project.title}
                </div>
              ))}
            </div>
            <Link to="/projects" className="horizontal-view-all-btn">
              ALL PROJECTS
            </Link>
          </nav>

          <aside 
            className="projects-sidebar"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <div className="sidebar-nav-list">
              {featuredProjects.map((project, idx) => (
                <div
                  key={project.id}
                  className={`sidebar-project-title${
                    selectedIdx === idx ? " active" : ""
                  }`}
                  tabIndex={0}
                  role="button"
                  aria-pressed={selectedIdx === idx}
                  onMouseEnter={() => handleNavItemMouseEnter(idx)}
                  onClick={() => handleNavItemDesktopClick(project, idx)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") {
                      handleNavItemDesktopClick(project, idx);
                    }
                  }}
                >
                  {project.title}
                </div>
              ))}
            </div>
            <div className="sidebar-view-all">
              <Link to="/projects" className="view-all-btn">
                ALL PROJECTS
              </Link>
            </div>
          </aside>
          <section className="project-details-box">
            <div 
              className="project-image-full"
              onClick={handleMediaClick}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault();
                  handleMediaClick();
                }
              }}
              aria-label={`View ${featuredProjects[selectedIdx].title} project details`}
            >
              {featuredProjects[selectedIdx].type === "image" ? (
                <img
                  src={featuredProjects[selectedIdx].media}
                  alt={featuredProjects[selectedIdx].title + " Project"}
                />
              ) : getYouTubeId(featuredProjects[selectedIdx].media) ? (
                <YouTube
                  videoId={getYouTubeId(featuredProjects[selectedIdx].media)}
                  opts={{
                    width: '100%',
                    height: '100%',
                    playerVars: {
                      autoplay: 1,
                      mute: 1,
                      controls: 0,
                      loop: 1,
                      start: 10,
                      playlist: getYouTubeId(featuredProjects[selectedIdx].media),
                      modestbranding: 1,
                      rel: 0,
                      showinfo: 0
                    },
                  }}
                  className="youtube-player"
                  style={{ width: "100%", height: "100%", pointerEvents: "none" }}
                />
              ) : (
                <video
                  src={featuredProjects[selectedIdx].media}
                  autoPlay
                  muted
                  loop
                  playsInline
                  style={{ width: "100%", height: "100%", pointerEvents: "none" }}
                />
              )}
              
              {/* Mobile tap indicator */}
              <div className="mobile-tap-indicator">
                <span className="tap-text">TAP TO VIEW PROJECT</span>
                <span className="tap-icon">👆</span>
              </div>
            </div>
            <div className="project-info-overlay">
              <div className="project-chips">
                {featuredProjects[selectedIdx].chips.map((chip, idx) => (
                  <span className="chip" key={idx}>
                    {chip}
                  </span>
                ))}
              </div>
            </div>
          </section>
        </div>
      </div>
      
      {/* ALL PROJECTS button moved outside and below the box */}
      <div className="projects-view-all-bottom">
        <Link to="/projects" className="view-all-btn-bottom">
          ALL PROJECTS
        </Link>
      </div>
    </div>
  );
}

export default HomeProjects;
