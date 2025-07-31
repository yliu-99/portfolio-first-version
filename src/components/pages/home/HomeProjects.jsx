import "./HomeProjects.scss";
import { Link } from "react-router-dom";

function HomeProjects() {
  return (
    <div className="projects">
      <div className="container">
        <div className="projects-header">
          <h2>MY PROJECTS</h2>
        </div>
        
        <div className="projects-grid">
          <Link to="/projects/fable-fragrances" className="project-card" data-project="FABLE FRAGRANCES">
            <div className="project-image">
              <img src="src/assets/projects/fable-fragrances.png" alt="Fable Fragrances Project" />
            </div>
            <div className="project-info">
              <h3>FABLE FRAGRANCES</h3>
              <div className="project-chips">
                <span className="chip">graphic design</span>
                <span className="chip">photoshop</span>
                <span className="chip">product design</span>
              </div>
            </div>
          </Link>
          
          <Link to="/projects/vancouver-horror" className="project-card" data-project="VANCOUVER HORROR SHOW">
            <div className="project-image">
              <img src="src/assets/projects/vancouver-horror-show.png" alt="Vancouver Horror Show Project" />
            </div>
            <div className="project-info">
              <h3>VANCOUVER HORROR SHOW</h3>
              <div className="project-chips">
                <span className="chip">graphic design</span>
                <span className="chip">branding</span>
                <span className="chip">redesign</span>
              </div>
            </div>
          </Link>
          
          <Link to="/projects/thrash-hair" className="project-card" data-project="THRASH! HAIR COLOUR">
            <div className="project-image">
              <img src="src/assets/projects/thrash.svg" alt="Thrash Hair Colour Project" />
            </div>
            <div className="project-info">
              <h3>THRASH! HAIR COLOUR</h3>
              <div className="project-chips">
                <span className="chip">graphic design</span>
                <span className="chip">illustrator</span>
                <span className="chip">product design</span>
              </div>
            </div>
          </Link>
          
          <Link to="../project-detail/ApexMoutainBikes.jsx" className="project-card" data-project="APEX MOUNTAIN BIKES">
            <div className="project-image">
              <img src="src/assets/projects/apex.png" alt="Apex Mountain Bikes Project" />
            </div>
            <div className="project-info">
              <h3>APEX MOUNTAIN BIKES</h3>
              <div className="project-chips">
                <span className="chip">video</span>
                <span className="chip">music production</span>
                <span className="chip">storytelling</span>
              </div>
            </div>
          </Link>
          
          <Link to="/projects/true-horizons" className="project-card" data-project="TRUE HORIZONS">
            <div className="project-image">
              <img src="src/assets/projects/true-horizons.png" alt="True Horizons Project" />
            </div>
            <div className="project-info">
              <h3>TRUE HORIZONS</h3>
              <div className="project-chips">
                <span className="chip">video</span>
                <span className="chip">storytelling</span>
              </div>
            </div>
          </Link>
          
          <Link to="/projects/mythbusters" className="project-card" data-project="MYTHBUSTERS">
            <div className="project-image">
              <img src="src/assets/projects/mythbusters.png" alt="Mythbusters Project" />
            </div>
            <div className="project-info">
              <h3>MYTHBUSTERS</h3>
              <div className="project-chips">
                <span className="chip">motion graphics</span>
                <span className="chip">sound design</span>
                <span className="chip">storytelling</span>
              </div>
            </div>
          </Link>
        </div>
        
        <div className="view-all">
          <Link to="/projects" className="view-all-btn">ALL PROJECTS</Link>
        </div>
      </div>
    </div>
  );
}

export default HomeProjects;