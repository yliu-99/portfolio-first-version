import "./HomeProjects.scss";
import { Link } from "react-router-dom";
import { projectsData } from "../../../data/projectsData";
import { useState } from "react";

function HomeProjects() {
  const featuredProjects = projectsData.filter(
    project => project.featured && project.id !== 'thrash' && project.id !== 'horizons'
  );
  const [selectedIdx, setSelectedIdx] = useState(0);

  return (
    <div className="projects">
      <div className="container">
        <div className="projects-header">
          <h2>MY PROJECTS</h2>
        </div>
        <div className="projects-box-layout unified-box">
          <div className="sidebar-and-details">
            <aside className="projects-sidebar">
              <div className="sidebar-nav-list">
                {featuredProjects.map((project, idx) => (
                  <div
                    key={project.id}
                    className={`sidebar-title${selectedIdx === idx ? ' active' : ''}`}
                    tabIndex={0}
                    role="button"
                    aria-pressed={selectedIdx === idx}
                    onClick={() => setSelectedIdx(idx)}
                    onKeyDown={e => {
                      if (e.key === 'Enter' || e.key === ' ') {
                        setSelectedIdx(idx);
                      }
                    }}
                  >
                    {project.title}
                  </div>
                ))}
              </div>
              <div className="sidebar-view-all">
                <Link to="/projects" className="view-all-btn">ALL PROJECTS</Link>
              </div>
            </aside>
            <section className="project-details-box">
              <div className="project-image-full">
                {featuredProjects[selectedIdx].type === "image" ? (
                  <img src={featuredProjects[selectedIdx].media} alt={featuredProjects[selectedIdx].title + " Project"} />
                ) : (
                  <iframe
                    src={featuredProjects[selectedIdx].media + (featuredProjects[selectedIdx].media.includes('youtube.com') ? '&controls=0' : '')}
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
                  <span className="project-title">{featuredProjects[selectedIdx].title}</span>
                  <span className="project-year-inline">{featuredProjects[selectedIdx].year}</span>
                </div>
                <div className="project-chips">
                  {featuredProjects[selectedIdx].chips.map((chip, idx) => (
                    <span className="chip" key={idx}>{chip}</span>
                  ))}
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomeProjects;