import { useState } from 'react';

function ProjectsCard({ project, index, variant = 'default' }) {
  const [isHovered, setIsHovered] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);

  const getBackgroundPattern = (index) => {
    const patterns = ['dots', 'lines', 'grid', 'waves'];
    return patterns[index % patterns.length];
  };

  const getAccentColor = (index) => {
    return index % 2 === 0 ? 'blue' : 'red';
  };

  return (
    <div 
      className={`project-card project-card--${variant} pattern--${getBackgroundPattern(index)} accent--${getAccentColor(index)}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{ '--animation-delay': `${index * 0.1}s` }}
    >
      <div className="card-background"></div>
      
      <a href={`/projects/${project.slug}`} className="card-link">
        <div className="project-media">
          {project.type === 'video' ? (
            <iframe
              src={`${project.media}?autoplay=1&mute=1&start=30`}
              title={project.title}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className={imageLoaded ? 'loaded' : ''}
              onLoad={() => setImageLoaded(true)}
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                pointerEvents: 'none' // Prevent interaction with play button
              }}
            ></iframe>
          ) : (
            <img 
              src={project.media} 
              alt={project.title}
              onLoad={() => setImageLoaded(true)}
              className={imageLoaded ? 'loaded' : ''}
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
          )}
          <div className="media-overlay"></div>
        </div>
        
        <div className="project-content">
          <div className="project-header">
            <h3 className="project-title">{project.title}</h3>
            {variant === 'detailed' && (
              <div className="project-year">{project.year || '2024'}</div>
            )}
          </div>
          
          {variant === 'detailed' && (
            <p className="project-description">
              {project.description || 'A creative project showcasing multidisciplinary design skills.'}
            </p>
          )}
          
          <div className="project-chips">
            {project.chips.map((chip, chipIndex) => (
              <span 
                key={chip} 
                className="chip"
                style={{ '--chip-delay': `${chipIndex * 0.05}s` }}
              >
                {chip}
              </span>
            ))}
          </div>
          
          {variant === 'detailed' && (
            <div className="project-meta">
              <span className="view-project">
                View Project →
              </span>
            </div>
          )}
        </div>
      </a>
    </div>
  );
}

export default ProjectsCard;