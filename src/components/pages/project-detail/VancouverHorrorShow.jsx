import React from 'react';
import { ProjectDetailLayout, ProjectHero, ProjectGoals, ProjectProcess, RelatedProjects } from './ProjectDetailComponents';
import './ProjectDetail.scss';

import { projectsData, getProjectBySlug } from '../../../data/projectsData'; // Import projects data

// Import images directly
const fableFragrancesImage = "https://i.postimg.cc/NjVMJGD0/fable-fragrances.png";
const thrashHairImage = "https://i.postimg.cc/X796SjnJ/Logo-Dark-OG.png";
const vancouverHorrorShowImage = "https://i.postimg.cc/VNCN3yZW/vancouver-horror-show.png";

function VancouverHorrorShow() {
  // Get project data from projectsData
  const projectData = getProjectBySlug('vancouver-horror-show');
  
  // Create image mapping for proper imports
  const imageMap = {
    'https://i.postimg.cc/NjVMJGD0/fable-fragrances.png': fableFragrancesImage,
    'https://i.postimg.cc/X796SjnJ/Logo-Dark-OG.png': thrashHairImage
  };

  // Filter for design projects excluding the current project and limit to 2
  const designProjects = projectsData.filter(project => 
    project.category === 'design' && project.id !== 'vancouver'
  ).slice(0, 2);
  
  // Define related projects with proper image imports
  const relatedProjects = designProjects.map(project => ({
    title: project.title,
    category: project.category,
    slug: project.slug,
    media: imageMap[project.media] || project.media,
    mediaType: project.type
  }));

  return (
    <ProjectDetailLayout projectTitle="Vancouver Horror Show Poster Design">
      
      <ProjectHero 
        title={projectData.title}
        category={projectData.category}
        year={projectData.year}
        description={projectData.description}
        media={vancouverHorrorShowImage}
        mediaType="image"
        chips={projectData.chips}
        bgColor="gradient"
      />
      
      <ProjectGoals customContent={
        <div>
          <div style={{ 
            textAlign: 'center', 
            padding: '4rem 2rem',
            fontSize: '1.5rem',
            color: 'var(--gray)',
            fontFamily: 'var(--title)',
            fontWeight: '300'
          }}>
            <h2 style={{ 
              fontSize: '3rem', 
              marginBottom: '1rem',
              color: 'var(--black)',
              fontWeight: '900'
            }}>
              COMING SOON
            </h2>
            <p>This project page is currently under construction.</p>
            <p>Check back soon for the full case study and process details.</p>
          </div>
        </div>
      } />
      
      <RelatedProjects 
        projects={relatedProjects}
        title="More Design Projects"
      />
    </ProjectDetailLayout>
  );
}

export default VancouverHorrorShow;
