import  { useState, useEffect } from 'react';

function ProjectsStats({ projects }) {
  const [animatedStats, setAnimatedStats] = useState({
    totalProjects: 0,
    videoProjects: 0,
    designProjects: 0
  });

  const stats = {
    totalProjects: projects.length,
    videoProjects: projects.filter(p => p.chips.includes('video')).length,
    designProjects: projects.filter(p => 
      p.chips.includes('graphic design') || p.chips.includes('motion graphics')
    ).length
  };

  useEffect(() => {
    // Animate numbers counting up
    const duration = 1000;
    const steps = 30;
    const increment = duration / steps;

    Object.keys(stats).forEach(key => {
      let current = 0;
      const target = stats[key];
      const step = target / steps;

      const timer = setInterval(() => {
        current += step;
        if (current >= target) {
          current = target;
          clearInterval(timer);
        }
        setAnimatedStats(prev => ({
          ...prev,
          [key]: Math.floor(current)
        }));
      }, increment);
    });
  }, []);

  return (
    <section className="projects-stats">
      <div className="container">
        <div className="stats-grid">
          <div className="stat-item">
            <div className="stat-number">{animatedStats.totalProjects}</div>
            <div className="stat-label">Total Projects</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">{animatedStats.videoProjects}</div>
            <div className="stat-label">Video Projects</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">{animatedStats.designProjects}</div>
            <div className="stat-label">Design Projects</div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ProjectsStats;
