import React from 'react';
import { 
  ProjectDetailLayout, 
  ProjectHero, 
  ProjectGoals, 
  ProjectProcess, 
  RelatedProjects 
} from './ProjectDetailComponents';
import './ProjectDetail.scss';

// Video and image imports
const trueHorizonsVid = "https://www.youtube.com/embed/EbJEhks53lA?si=RYiRPDSJ0d7MVQMW";
const apexMountainBikesVid = "https://www.youtube.com/embed/dO7TxaDxEjk?si=Z77HXMo1kgau1YqQ";
const mythbustersVid = "https://www.youtube.com/embed/ioG4kkKj6ZM?si=ymFZFlZC33jhShYV";

// Process images - replace with actual project images
const storyboardPdf = "https://drive.google.com/file/d/1zRLun-fw6RbOUZaCl8d7FCBJVg5gMmMY/preview"; // Replace with your actual PDF link
const characterDesignImage = "https://i.postimg.cc/sDkxmN1d/a-aesthetic.png";
const filmingSetupImage = "https://i.postimg.cc/7YGMbdjp/Screenshot-2025-08-15-152626.png";
const editingImage = "https://i.postimg.cc/NFhTXf3S/Screenshot-2025-08-15-152858.png";
const motionGraphicsImage = "https://i.postimg.cc/Gh89kCLx/motion-graphics.jpg";
const soundEditingImage = "https://i.postimg.cc/15q58rBW/adobe-audition.jpg";

function TrueHorizons() {
  // Define related projects
  const relatedProjects = [
    {
      title: "APEX MOUNTAIN BIKES",
      category: "video",
      slug: "apex-mountain-bikes",
      media: apexMountainBikesVid,
      mediaType: "video"
    },
    {
      title: "MYTHBUSTERS",
      category: "video",
      slug: "mythbusters", 
      media: mythbustersVid,
      mediaType: "video"
    }
  ];

  return (
    <ProjectDetailLayout projectTitle="True Horizons Travel Commercial">
      
      {/* Hero Section */}
      <ProjectHero 
        title="TRUE HORIZONS"
        category="Video Production"
        year="Apr 2025"
        description="A story-driven commercial for a fictional travel company that explores the power of authentic connections. This 4-5 minute video was created as my final project for Video Storytelling at BCIT, demonstrating full production workflow from concept to completion."
        media={trueHorizonsVid}
        mediaType="video"
        chips={['video storytelling', 'directing', 'editing', 'motion graphics', 'sound design']}
        bgColor="blue"
      />
      
      {/* Goals Section */}
      <ProjectGoals customContent={
        <div>
          <p>
            This video was created as my Term 2 Final Project for the Video Storytelling course at BCIT. The objective was to develop a story-driven commercial for a fictional company by planning, scripting, filming, and editing a 4–5 minute video that communicated a specific brand value. The project challenged us to demonstrate our understanding of the full film production process and apply effective visual storytelling techniques.
          </p>
          <p>
            It also required technical proficiency in Adobe Premiere Pro and Audition, meeting industry standards for audio, pacing, and framing. Working in a small team of three, we collaboratively managed all aspects of production—from pre-visualization to post-production—making this a well-rounded project that combined creative direction with hands-on media production skills.
          </p>
        </div>
      } />
      
      {/* Process Section */}
      <ProjectProcess 
        title="Production Process" 
        showTableOfContents={true}
      >
        <div className="custom-process-content">
          
          <p>
            For this project, I was challenged to take on multiple roles including writer, director, actor, sound designer, video editor, motion graphics designer, and costume planner. Our team chose to build a story around a fictional travel company called True Horizons, whose brand value focused on forging meaningful connections through travel. We felt this theme would resonate strongly with an audience of students and young adults who, like us, value authentic friendships.
          </p>
          
          <p>
            As none of us had prior experience producing a video of this scale, we encountered some obstacles during the process and had to troubleshoot creatively while also sticking to a tight timeline and strict technical specifications. The production process taught me how to remain adaptable and problem solve, and watching the final video come together after weeks of hard work was an incredibly rewarding experience.
          </p>
          
          <h3>Writing and Storyboarding</h3>
          <p>
            In a previous term, our group was tasked with creating a storyboard that would eventually become the foundation for a full video project. Knowing we would be handling everything—from acting and filming to editing—within a team of just three people, we carefully considered what kind of story would be logistically feasible yet emotionally compelling. We decided to limit the story to two main characters close to our age, which would allow us to create a heartfelt story with realistic acting and relatable dynamics.
          </p>

          <div className="process-image pdf-embed" style={{ height: '600px', border: '2px solid var(--black)', margin: '2rem 0' }}>
            <iframe 
              src={storyboardPdf}
              width="100%" 
              height="100%" 
              style={{ border: 'none' }}
              title="True Horizons Storyboard PDF"
            />
          </div>

          <p>
            The story is about two long-distance friends who reconnect through travel to help one of them overcome emotional struggles due to online criticism. The story focuses on the power of real-world connections, emphasizing how meaningful relationships outweigh fleeting online validation. After solidifying the concept, we began developing a storyboard that laid out the core beats, transitions, and major emotional moments.
          </p>
          
          <p>
            Once we presented our initial storyboard, our instructor gave us critical feedback that helped us with clarity and storytelling. We were encouraged to add scenes that would provide more context and better show the evolving connection between the characters. We also had to consider how to differentiate a platonic friendship from a romantic one, especially through subtle visual cues. This process helped us think like our viewers and refine our scenes to be more universally understandable.
          </p>
          
          <h3>Video Planning</h3>
          <p>
            Several months after our initial storyboard, we were given the assignment to begin filming. I developed Pinterest boards for each character, which served as visual style guides for costumes, props, and character design. These helped establish personality through appearance—our shy painter wore oversized, cozy clothes, while our confident photographer character had a more polished, expressive style.
          </p>
          
          <div className="process-image">
            <img src={characterDesignImage} alt="Pinterest mood boards showing character styling and costume design" />
          </div>
          
          <p>
            We catalogued each shot, assigned locations, and listed necessary props before setting a shoot schedule. This pre-production planning was crucial for managing our limited time and resources effectively.
          </p>
          
          <h3>Scripting</h3>
          <p>
            One challenge was incorporating dialogue into a story we initially envisioned as almost entirely visual. After learning that spoken lines were a project requirement, we brainstormed dialogue moments that would feel authentic and enhance the emotional impact. We focused the spoken content around the most emotionally tense part of the story. We felt that introducing more dialogue at this point would be a powerful way to draw the audience into a moment of emotional vulnerability and deepen their connection to the characters.
          </p>
          
          <p>
            We also included smaller lines of inner dialogue, under-the-breath comments and reactions that added more texture and personality to the characters.
          </p>
          
          <h3>Filming Process</h3>
          <p>
            Filming took place over several weeks and involved significant coordination and on-the-fly problem-solving. We filmed multiple takes of each scene, playing with the angle and framing to allow flexibility in editing and to capture the best emotional expressions. Lav mics were used for the audio, and we carefully concealed them in costumes and tested before every shoot.
          </p>
          
          <div className="process-image">
            <img src={filmingSetupImage} alt="Behind-the-scenes shot showing filming setup with lighting and equipment" />
          </div>
          
          <p>
            We also used both natural and artificial lighting to create different moods and create visual contrast between scenes. To simulate time shifts, we changed outfits and adjusted sets while filming in the same locations.
          </p>
          
          <h3>Video Editing</h3>
          <p>
            We began editing in Adobe Premiere Pro by assembling our primary timeline and organizing scenes. With a large volume of footage, we had to make selective cuts while preserving the core narrative. One creative workaround we used was using side-by-side layout to show different character perspectives simultaneously, which saved us time. We constantly reviewed our edits to ensure that transitions were smooth and moments of tension or resolution felt natural.
          </p>
          
          <div className="process-image">
            <img src={editingImage} alt="Adobe Premiere Pro timeline showing video editing workflow" />
          </div>
          
          <p>
            Editing became a balancing act between storytelling and runtime constraints, pushing us to think critically about which moments carried the most weight. Once our first edit was complete, we realized some parts of the story lacked emotional clarity or felt disjointed. Because much of the narrative was visual, some themes didn't come through as clearly as we had imagined during pre-production. Additional filming allowed us to bridge these gaps, making the story more cohesive and impactful.
          </p>
          
          <p>
            Since our characters met and communicated via social media, we also added motion graphics that mimicked these interactions using Adobe Stock templates, and customized animations in Premiere Pro. We created text bubbles, notifications, likes, and message effects that matched the iPhone aesthetic.
          </p>
          
          <div className="process-image">
            <img src={motionGraphicsImage} alt="Motion graphics elements showing social media interface design" />
          </div>
          
          <p>
            We made sure these elements blended seamlessly into the footage by adjusting colors, motion blur, and transitions, ensuring that there are no strong visual inconsistencies that would take the viewers out of the experience.
          </p>
          
          <h3>Sound Editing</h3>
          <p>
            Sound editing was completed in Adobe Audition, where we mixed dialogue, ambient sound, music, and effects. Using our lavalier recordings, I equalized and normalized the audio to maintain consistent levels around -15 LKFS, with a ceiling of -2.0 dBTP. Where needed, I replaced poor-quality audio with sound effects or re-recorded small lines for clarity.
          </p>
          
          <div className="process-image">
            <img src={soundEditingImage} alt="Adobe Audition interface showing audio mixing and sound design work" />
          </div>
          
          <p>
            I also layered in music, choosing a nostalgic folk song to highlight warm moments and a rising synth pad to build tension during the emotional climax. Panning and subtle volume changes helped bring out more realism and enhanced the mood throughout. Once the audio mix was complete, I re-imported everything into Premiere for syncing and export.
          </p>
          
          <h3>What I Learned</h3>
          <p>
            This project was a major learning experience in creative problem-solving, collaboration, and production planning. Despite limited resources and experience, our team maintained a high level of commitment and adaptability. Looking back, I would approach pre-production with more precision, especially storyboarding, which could have clarified our vision and saved time during filming.
          </p>
          
          <p>
            I'd also experiment more with camera angles and close-up shots to better convey emotion. This project deepened my respect for video storytelling and gave me a clearer understanding of how small creative choices shape the viewer's experience.
          </p>
          
        </div>
      </ProjectProcess>
      
      {/* Related Projects */}
      <RelatedProjects 
        projects={relatedProjects}
        title="More Video Projects"
      />
      
    </ProjectDetailLayout>
  );
}

export default TrueHorizons;
