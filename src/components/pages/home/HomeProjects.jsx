import "./HomeProjects.scss";
import { Link } from "react-router-dom";
import { projectsData } from "../../../data/projectsData";
import { useState, useEffect, useRef } from "react";

function HomeProjects() {
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

  const handleNavItemClick = (projectId) => {
    window.location.href = `/project/${projectId}`;
  };

  return (
    <div className="projects">
      <div className="projects-box-layout unified-box">
        <div className="sidebar-and-details">
          <div className="projects-header-vertical">
            <h2 data-text="FEATURED PROJECTS">FEATURED PROJECTS</h2>
          </div>
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
                  onClick={() => handleNavItemClick(project.id)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") {
                      handleNavItemClick(project.id);
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
            <div className="project-image-full">
              {featuredProjects[selectedIdx].type === "image" ? (
                <img
                  src={featuredProjects[selectedIdx].media}
                  alt={featuredProjects[selectedIdx].title + " Project"}
                />
              ) : (
                <iframe
                  src={
                    featuredProjects[selectedIdx].media +
                    (featuredProjects[selectedIdx].media.includes("youtube.com")
                      ? "&autoplay=1&mute=1&controls=0&start=30"
                      : "?autoplay=1&muted=1&t=30")
                  }
                  title={featuredProjects[selectedIdx].title + " Video"}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  style={{ width: "100%", height: "100%" }}
                ></iframe>
              )}
            </div>
            <div className="project-info-overlay">
              <div className="project-title-row">
                <span className="project-title">
                  {featuredProjects[selectedIdx].title}
                </span>
                <span className="project-year-inline">
                  {featuredProjects[selectedIdx].year}
                </span>
              </div>
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
    </div>
  );
}

export default HomeProjects;
