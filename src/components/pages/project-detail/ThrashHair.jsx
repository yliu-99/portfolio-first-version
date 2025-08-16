import React from 'react';
import { ProjectDetailLayout, ProjectHero, ProjectGoals, ProjectProcess, RelatedProjects } from './ProjectDetailComponents';
import './ProjectDetail.scss';

import { projectsData } from '../../../data/projectsData'; // Import projects data

// Import images directly
const fableFragrancesImage = "https://i.postimg.cc/NjVMJGD0/fable-fragrances.png";
const vancouverHorrorShowImage = "https://i.postimg.cc/VNCN3yZW/vancouver-horror-show.png";
const thrashHairImage = "https://i.postimg.cc/X796SjnJ/Logo-Dark-OG.png";

// Placeholder images - replace with actual project images
const proposalImage = "https://i.postimg.cc/26RDWs53/Illustration-Proposal-4.jpg";
const finalLogoImage = "https://via.placeholder.com/800x500/000000/FF1493?text=Final+Logo+Design";
const visualElementsImage = "https://i.postimg.cc/wvVGBZyC/thrash-assets.jpg";
const mockupsImage = "https://i.postimg.cc/Jn2jK59y/3-D-Mockup.png";
const styleGuidePdf = "https://drive.google.com/file/d/1jnN-dZLWF0lXQhCsSH5wXSioaGQvwuZ-/preview";

// Logo sketch images - replace with actual project images
const logoSketch1 = "https://i.postimg.cc/y8mWWyjm/sketch-1.jpg";
const logoSketch2 = "https://i.postimg.cc/8zQj10Rk/sketch-2.jpg";
const logoSketch3 = "https://i.postimg.cc/SNznbhzt/sketch-3.jpg";
const logoSketch4 = "https://i.postimg.cc/Wpydy3tk/sketch-4.jpg";
const logoSketch5 = "https://i.postimg.cc/CKw58nrW/sketch-5.jpg";

function ThrashHair() {
  // Create image mapping for proper imports
  const imageMap = {
    'https://i.postimg.cc/NjVMJGD0/fable-fragrances.png': fableFragrancesImage,
    'https://i.postimg.cc/VNCN3yZW/vancouver-horror-show.png': vancouverHorrorShowImage
  };

  // Filter for design projects excluding the current project (Thrash Hair) and limit to 2
  const designProjects = projectsData.filter(project => 
    project.category === 'design' && project.id !== 'thrash'
  );
  
  // Define related projects with proper image imports
  const relatedProjects = designProjects.map(project => ({
    title: project.title,
    category: project.category,
    slug: project.slug,
    media: imageMap[project.media] || project.media, // Use imported image or fallback to original
    mediaType: project.type
  }));

  return (
    <ProjectDetailLayout projectTitle="Thrash! Hair Color Brand Identity">
      
      <ProjectHero 
        title="THRASH! HAIR COLOR"
        category="Brand Design"
        year=" 2025"
        description="A punk-inspired hair color brand identity created for my Illustration course at BCIT. This project challenged me to adapt cultural aesthetics into brand design, showcasing my Adobe Illustrator skills through logo design, visual elements, packaging, and comprehensive style guide development."
        media={thrashHairImage}
        mediaType="image"
        chips={['branding', 'illustration', 'adobe illustrator', 'packaging design', 'style guide']}
        bgColor="red"
      />
      
      <ProjectGoals customContent={
        <div>
          <p>
            Thrash! Hair Color was completed as the Term Project for my Illustration course during Term 2 at BCIT. The goal of this project was to develop a brand identity and design assets for either a physical product or a mobile app using Adobe Illustrator. The project began with a proposal outlining the chosen product, brand overview, competitive analysis, timeline, and included mood boards, color palettes, and logo concepts for the client to choose from.
          </p>
          <p>
            After the client selected the final brand concept, I created the finalized logo, visual elements, packaging design, style guide, and mockups in Illustrator, and exported them in the appropriate formats for client use. This project allowed me to showcase my Adobe Illustrator skills while highlighting my design process, planning, branding strategies, and problem-solving abilities.
          </p>
        </div>
      } />
      
      <ProjectProcess 
        title="Process & Development" 
        showTableOfContents={true}
      >
        <div className="custom-process-content">
          
          <p>
            For this project, I set out to challenge myself creatively by adapting a preexisting cultural aesthetic into a brand concept. I chose to design a hair color brand inspired by punk culture, which was an aesthetic I had not explored in depth before. This decision allowed me to experiment with bold textures, patterns, and unconventional visual strategies in Adobe Illustrator. Collaborating with my instructor as the "client" added another layer of complexity; I had to interpret and respond to external feedback during the design process, adapting my ideas to align with both creative direction and practical constraints. Overall, this project pushed me to expand my visual design skills and rethink how I approach brand development from concept to execution.
          </p>
          
          <h3>Product Brainstorming</h3>
          <p>
            Hair dye was a natural product choice for me, as it's something I've personally used as a form of self-expression, especially during my late teens and early twenties. Bright hair colors are a striking way for individuals to express their identity without speaking a word. The connection between hair color and alternative subcultures—particularly punk—made it a perfect fit for the brand concept I wanted to explore.
          </p>
          <p>
            I named the brand "Thrash!" after researching terminology tied to punk, rock, and metal music scenes. Of course, the exclamation mark was a necessary addition to the brand name; together, they capture the raw energy and rebellious spirit of the punk aesthetic, setting a bold and unapologetic tone for the overall brand storytelling.
          </p>
          
          <h3>Proposal & Competitive Analysis</h3>
          <p>
            The proposal phase included a competitive analysis of three major players in the alt hair color market: Manic Panic, Arctic Fox, and Good Dye Young. Each had a strong niche, from Manic Panic's legacy and vibrant color range to Arctic Fox's conditioning formula and pop culture collaborations, and Good Dye Young's rock celebrity influence. This analysis helped me identify an opportunity for a louder, grittier visual style that emphasized energy and defiance.
          </p>
          
          <div className="process-image">
            <img src={proposalImage} alt="Competitive analysis showing research of existing hair color brands" />
          </div>
          
          <p>
            I developed two moodboards—one heavily influenced by classic punk design with rough edges, clashing fonts, and high-contrast neon tones; the other took cues from cyberpunk and techwear fashion for a sleeker, futuristic vibe. Alongside these, I sketched five rough logo ideas inspired by both themes. These early concepts laid the foundation for the brand's visual identity and provided the client with clear creative directions to choose from.
          </p>
          
          <h3>Logo Design</h3>
          <p>
            After receiving feedback, the client selected the punk-inspired direction and a rough logo concept that fused various typefaces in a DIY, cut-and-paste style. I brought the hand sketch into Illustrator and began translating it into vector form. I experimented with mixing different fonts to maintain legibility while achieving a chaotic, hand-crafted look.
          </p>
          
          <div className="process-image-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem', margin: '2rem 0' }}>
            <img src={logoSketch1} alt="Logo sketch concept 1" style={{ width: '100%', height: 'auto', border: '2px solid var(--black)' }} />
            <img src={logoSketch2} alt="Logo sketch concept 2" style={{ width: '100%', height: 'auto', border: '2px solid var(--black)' }} />
            <img src={logoSketch3} alt="Logo sketch concept 3" style={{ width: '100%', height: 'auto', border: '2px solid var(--black)' }} />
            <img src={logoSketch4} alt="Logo sketch concept 4" style={{ width: '100%', height: 'auto', border: '2px solid var(--black)' }} />
            <img src={logoSketch5} alt="Logo sketch concept 5" style={{ width: '100%', height: 'auto', border: '2px solid var(--black)' }} />
          </div>
          
          <p>
            To reinforce the punk theme, I replaced the letter "s" with a jagged lightning bolt made from overlapping triangles. I added rough background blocks to the letters "t" and "r," using the Direct Selection Tool to distort edges and simulate a cutout texture. Effects like grain and layering helped enhance the distressed aesthetic. The final logo used an off-black base with a bright magenta accent, with the intention that the highlight color could be adapted per hair dye shade in packaging.
          </p>
          
          <div className="process-image">
            <img src={thrashHairImage} alt="Final logo design with lightning bolt and distressed effects" />
          </div>
          
          <h3>Visual Elements</h3>
          <p>
            To expand the brand's visual language, I created a suite of illustrated elements that would be used in patterns, packaging, and marketing assets. Drawing inspiration from common punk motifs—such as skulls, hearts, stars, lips, and safety pins—I reinterpreted these with my own illustrative twist. I also created a full illustration of a woman with a brightly colored mohawk to be featured on the packaging and promotional materials.
          </p>
          
          <div className="process-image">
            <img src={visualElementsImage} alt="Collection of punk-inspired visual elements and illustrations" />
          </div>
          
          <p>
            In total, I designed nine distinct elements and compiled them into a repeating pattern to be used in the style guide. All items were laid out using artboards within a single Illustrator file for consistency.
          </p>
          
          <h3>Mockups & Packaging</h3>
          <p>
            I started the mockup creation process with a bold, two-toned business card that utilized the brand's color palette and visual elements. A skull with a mohawk with a circular background anchored the center, creating division in the layout between personal details (such as employee name and position) and company info (company site).
          </p>
          
          <div className="process-image">
            <img src={mockupsImage} alt="Product packaging mockups and business card designs" />
          </div>
          
          <p>
            For the packaging, I used a black-and-white base with an accent color that will change based on the color of the product. For this mockup, I used the same magenta used in the original logo. Visual elements were placed across panels to encourage customers to interact with the full box when looking at the packaging. Key messages like "Scream your color, shred the norm" and "Cruelty-Free & Vegan" were added to side panels, reinforcing brand values. I added practical details like barcode, ingredients, and usage instructions to simulate a production-ready design. After completing the flat packaging artwork, I used Illustrator's 3D tools to build a product mockup and later featured it in a promotional poster design.
          </p>
          
          <h3>Style Guide</h3>
          <p>
            The brand style guide compiled all of the finalized assets and usage rules into a final, clear document. I developed logo variations for different contexts (light vs. dark backgrounds), outlined spacing and sizing rules, and included a simplified icon version for smaller-scale use. The finalized color palette included core tones like hot magenta, fluorescent cyan, and sunglow yellow, accompanied by pairings for visual flexibility.
          </p>
          
          <div className="process-image pdf-embed" style={{ height: '600px', border: '2px solid var(--black)', margin: '2rem 0' }}>
            <iframe 
              src={styleGuidePdf}
              width="100%" 
              height="100%" 
              style={{ border: 'none' }}
              title="Thrash! Hair Color Style Guide PDF"
            />
          </div>
          
          <p>
            The chosen typography were Citrus Gothic for bold titles and Montserrat for clean body text. The guide also showcased the brand pattern, individual visual elements, business card design, and packaging mockups. I kept the style guide layout minimal to keep the focus on creating clarity and usability.
          </p>
          
          <h3>Exporting Deliverables</h3>
          <p>
            To wrap up the project, I organized all design assets into folders sorted by usage: print, digital, and reference. Packaging, business cards, and posters were exported in CMYK for accurate print reproduction, while digital assets remained in RGB. Logo variations and visual elements were saved in both PNG and SVG formats to be used across various platforms. The brand style guide was exported as a high-resolution PDF to make it easy for clients to reference or print. Everything was clearly labeled, structured, and zipped into a final package before handed over to the client.
          </p>
          
        </div>
      </ProjectProcess>
      
      <RelatedProjects 
        projects={relatedProjects}
        title="More Design Projects"
      />
    </ProjectDetailLayout>
  );
}

export default ThrashHair;