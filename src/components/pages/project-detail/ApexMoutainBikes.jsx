import { 
  ProjectDetailLayout, 
  ProjectHero, 
  ProjectGoals, 
  ProjectProcess, 
  RelatedProjects 
} from './ProjectDetailComponents';

import './ProjectDetail.scss';

import '../../../data/projectsData'; // Import projects data

// Placeholder image for all media
const placeholderImage = "https://via.placeholder.com/800x400";
const apexMoutainBikesVid = 'https://www.youtube.com/embed/dO7TxaDxEjk?si=Z77HXMo1kgau1YqQ';
import apexScreenshot from '../../../assets/projects/apex/apex-screenshot.png';
import apexInterview from '../../../assets/projects/apex/apex-interview.png';
import garageBand from '../../../assets/projects/apex/garage-band.jpg';
import premierPro from '../../../assets/projects/apex/premier-pro.jpg';


// images

const trueHorizonsVid = "https://www.youtube.com/embed/EbJEhks53lA?si=RYiRPDSJ0d7MVQMW";
const mythbustersVid = "https://www.youtube.com/embed/ioG4kkKj6ZM?si=ymFZFlZC33jhShYV";

function ApexMountainBikes() {
  // Define related projects
  const relatedProjects = [
    {
      title: "TRUE HORIZONS",
      category: "video",
      slug: "true-horizons",
      media: trueHorizonsVid,
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
    <ProjectDetailLayout projectTitle="Apex Mountain Bikes Commercial">
      
      {/* Hero Section */}
      <ProjectHero 
        title="APEX MOUNTAIN BIKES"
        category="Video Production"
        year="Feb 2025"
        description="The goal of this group project was to write, film, produce music, and edit a 2-minute talking head commercial for a fictional mountain bike company. We used the 3-point lighting technique and incorporated provided mountain bike footage. This project was created for the Video Storytelling (MDIA 2565) course during Term 2 of the New Media Design and Web Development Diploma at BCIT."
        media={apexMoutainBikesVid}
        mediaType="video"
        chips={['video', 'music production', 'storytelling','commercial']}
        bgColor="blue"
      />
      
      {/* Goals Section */}
      <ProjectGoals customContent={
        <div>
          <p>
            The goal of this group project was to write, film, produce music, and edit a 2-minute talking head commercial for a fictional mountain bike company. We used the 3-point lighting technique and incorporated provided mountain bike footage. This project was created for the Video Storytelling (MDIA 2565) course during Term 2 of the New Media Design and Web Development Diploma at BCIT.
          </p>
        </div>
      } />
      
      {/* Process Section - Enhanced with Better UX */}
      <ProjectProcess 
        title="Process" 
        showTableOfContents={true}
      >
        <div className="custom-process-content">
          
          <p>
            This project required us to apply a combination of technical skills and creative decision-making to produce an engaging talking head commercial. It was a chance to explore storytelling through visual and audio elements while working collaboratively under time constraints. We were expected to demonstrate our proficiency in GarageBand, Premiere Pro, and Audition. The focus was not just on executing the technical aspects, but also on making thoughtful creative choices, from framing and lighting to pacing and sound, which all would help bring our fictional brand to life.
          </p>
          
          <h3>Brainstorming</h3>
          <p>
            Our team began by reviewing the provided mountain bike footage and brainstorming the overall tone and personality of the video. We chose an unscripted interview format to keep things natural and avoid a "hard-sell" feel, with our actor playing a professional mountain biker reviewing the brand. To guide the flow, we prepared 20 prompts with sample responses and walked through them with the actor ahead of filming. This helped balance structure with spontaneity and saved time on set. As a group, we discussed our target audience and decided to appeal to a younger demographic that values style, reliability, and excitement.
          </p>
          
          <div className="process-image">
            <img src={apexScreenshot} alt="a mountain biker carrying their bike up a hill" />
          </div>
          
          <h3>Filming</h3>
          <p>
            On filming day, we spent the first hour reviewing the process and running lines with the actor. Then we set up the scene, adding props, costume elements, and lighting. After the camera and mic were ready, we ran a few test takes to make sure the actor felt comfortable. Since I developed the talking points, I gave feedback and guidance to help ensure a smooth filming process. We recorded about three videos, and the main interview was captured in one single continuous take to maintain consistency. We also filmed behind-the-scenes clips—such as the actor walking in, sitting down, and adjusting his clothes—to add a natural and authentic feel to the commercial.
          </p>
          
          <div className="process-image">
            <img src={apexInterview} alt="" />
          </div>
          
          <h3>Music Production</h3>
          <p>
            When working on the music in GarageBand, I was drawn to an R&B/Hip Hop sound to match the laid-back and stylish vibe we wanted. I selected a set of loops that worked well together and layered them to create different musical sections. I added pitched vocal samples for harmonies and placed them throughout the A section for variation. Then I created a B section with a Hip Hop drum beat, intended for a break in the interview where we focus on showing the product in action. After finishing the first draft, I shared it with the team. We realized it was a bit too long, so I trimmed parts of the A section to keep the total duration just under two minutes, in line with the project requirements.
          </p>
          
          <div className="process-image">
            <img src={garageBand} alt="" />
          </div>
          
          <h3>Video Edit</h3>
          <p>
            Once the music was finalized, our team focused on editing and syncing the video to the track. We opened with behind-the-scenes footage to set the tone, and cut in bike clips that matched the interview content to maintain flow and viewer interest. During sound editing, I noticed some room echo caused by filming in a large space with the mic too far from the actor. In hindsight, a quick test recording could've helped us catch and fix this early by adjusting the mic placement. To improve audio clarity, I used Adobe Audition to reduce echo, adjusted panning, and balanced the music volume. I also enhanced the dialogue for consistent volume and overall clarity.
          </p>
          
          <div className="process-image">
            <img src={premierPro} alt="" />
          </div>
          
          <h3>Final Touches</h3>
          <p>
            To wrap up the video, we added final touches like an ending screen with our logo and a link to the website. We also included smoother transitions between scenes to give the commercial a polished, professional feel.
          </p>
          
          <h3>Reflection</h3>
          <p>
            This project was a great first attempt at managing a video production of this scale, and it taught us a lot about combining storytelling, audio, and visual design within a team setting. One key takeaway was the importance of testing our technical setup—specifically audio—before filming. A simple test recording could have helped us catch the echo issues early and adjust the mic placement or camera distance accordingly. Despite those challenges, we're proud of what we accomplished. The final video captured the tone and personality we aimed for and gave us a solid foundation to build on for future projects.
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

export default ApexMountainBikes;