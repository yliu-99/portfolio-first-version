import React from 'react';
import { ProjectDetailLayout, ProjectHero, ProjectGoals, ProjectProcess, RelatedProjects } from './ProjectDetailComponents';
import './ProjectDetail.scss';

import { projectsData, getProjectBySlug } from '../../../data/projectsData'; // Import projects data

// Import images directly
function Mythbusters() {
  // Get project data from projectsData
  const projectData = getProjectBySlug('mythbusters');
  
  // Video links for related projects
  const trueHorizonsVideo = "https://www.youtube.com/embed/EbJEhks53lA?si=RYiRPDSJ0d7MVQMW";
  const apexMountainBikesVideo = "https://www.youtube.com/embed/dO7TxaDxEjk?si=Z77HXMo1kgau1YqQ";

  // Filter for video projects excluding the current project and limit to 2
  const videoProjects = projectsData.filter(project => 
    project.category === 'video' && project.id !== 'mythbusters'
  ).slice(0, 2);
  
  // Define related projects
  const relatedProjects = [
    {
      title: "TRUE HORIZONS",
      category: "video",
      slug: "true-horizons",
      media: trueHorizonsVideo,
      mediaType: "video"
    },
    {
      title: "APEX MOUNTAIN BIKES",
      category: "video",
      slug: "apex-mountain-bikes",
      media: apexMountainBikesVideo,
      mediaType: "video"
    }
  ];

  return (
    <ProjectDetailLayout projectTitle="Mythbusters Video Project">
      
      <ProjectHero 
        title={projectData.title}
        category={projectData.category}
        year={projectData.year}
        description={projectData.description}
        media={projectData.media}
        mediaType="video"
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
        title="More Video Projects"
      />
    </ProjectDetailLayout>
  );
}

export default Mythbusters;
