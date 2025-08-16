import { 
  ProjectDetailLayout, 
  ProjectHero, 
  ProjectGoals, 
  ProjectProcess, 
  RelatedProjects 
} from './ProjectDetailComponents';

import SEO from '../../SEO/SEO';
import { createProjectSchema, createBreadcrumbSchema } from '../../SEO/schemas';
import './ProjectDetail.scss';

import { projectsData } from '../../../data/projectsData'; // Import projects data

// Import images directly
const fableFragrancesImage = "https://i.postimg.cc/NjVMJGD0/fable-fragrances.png";
const thrashHairImage = "https://i.postimg.cc/X796SjnJ/Logo-Dark-OG.png";
const vancouverHorrorShowImage = "https://i.postimg.cc/VNCN3yZW/vancouver-horror-show.png";

// Import process images
import swatchScreenshot from '../../../assets/projects/fable/swatch-screenshot.png';
import sabreBusinessCard from '../../../assets/projects/fable/sabre-businesscard.png';
import bansheeBackPanel from '../../../assets/projects/fable/banshee-back-panel.jpeg';
import fableBansheeAd from '../../../assets/projects/fable/fable-banshee-ad.png';
import logoGreen from '../../../assets/projects/fable/logo-green.png';

// Placeholder image for process steps (replace with actual images later)
const placeholderImage = "https://via.placeholder.com/800x400";

// Array of process images (replace these with your actual image imports or links)
const processImages = [
  swatchScreenshot, // Brand Brainstorming
  sabreBusinessCard, // Design Process
  bansheeBackPanel, // Packaging Design
  fableBansheeAd, // After Effects Animation
  logoGreen, // From Sabre to Fable
];

function FableFragrances() {
  // Create image mapping for proper imports
  const imageMap = {
    'https://i.postimg.cc/NjVMJGD0/fable-fragrances.png': fableFragrancesImage,
    'https://i.postimg.cc/X796SjnJ/Logo-Dark-OG.png': thrashHairImage,
    'https://i.postimg.cc/VNCN3yZW/vancouver-horror-show.png': vancouverHorrorShowImage
  };

  // Filter for design projects excluding the current project (Fable Fragrances)
  const designProjects = projectsData.filter(project => 
    project.category === 'design' && project.id !== 'fable'
  );
  
  // Define related projects with proper image imports
  const relatedProjects = designProjects.map(project => ({
    title: project.title,
    category: project.category,
    slug: project.slug,
    media: imageMap[project.media] || project.media, // Use imported image or fallback to original
    mediaType: project.type
  }));

  // SEO data for this specific project
  const projectData = {
    title: "Fable Fragrances",
    slug: "fable-fragrances",
    description: "Fable Fragrances brand design project featuring perfume packaging, logo design, and visual identity created in Adobe Photoshop. A comprehensive branding project showcasing storytelling through design.",
    category: "Brand Design",
    year: "2024",
    chips: ['graphic design', 'photoshop', 'branding', 'packaging'],
    image: "https://i.postimg.cc/NjVMJGD0/fable-fragrances.png"
  };

  const projectJsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      createProjectSchema(projectData),
      createBreadcrumbSchema([
        { name: "Home", url: "/" },
        { name: "Projects", url: "/projects" },
        { name: "Fable Fragrances", url: "/projects/fable-fragrances" }
      ])
    ]
  };

  return (
    <ProjectDetailLayout projectTitle="Fable Fragrances Brand Design">
      <SEO
        title="Fable Fragrances Brand Design Project, Yuhan Liu Vancouver Designer"
        description="Explore Fable Fragrances, a comprehensive brand design project featuring perfume packaging, logo design, and visual identity. Created by Yuhan Liu using Adobe Photoshop, showcasing storytelling through thoughtful branding and packaging design."
        keywords="fable fragrances project, brand design portfolio, packaging design vancouver, perfume branding, logo design project, photoshop design work, yuhan liu branding, visual identity design, storytelling design"
        canonicalUrl="https://yliu-99.github.io/portfolio-first-version/projects/fable-fragrances"
        ogType="article"
        ogImage="https://i.postimg.cc/NjVMJGD0/fable-fragrances.png"
        jsonLd={projectJsonLd}
      />
      
      {/* Hero Section */}
      <ProjectHero 
        title="FABLE FRAGRANCES"
        category="Brand Design"
        year="2024"
        description="Fable Fragrances represents a comprehensive brand design project featuring **perfume packaging design**, **visual identity creation**, and **storytelling through branding**. This BCIT New Media project demonstrates expertise in Adobe Photoshop while creating an emotional narrative through thoughtful packaging design and brand development."
        media={fableFragrancesImage}
        mediaType="image"
        chips={['graphic design', 'photoshop', 'branding', 'packaging']}
        bgColor="red"
      />
      
      {/* Goals Section */}
      <ProjectGoals customContent={
        <div>
          <p>
            The primary objective was to create a <strong>cohesive brand identity</strong> that effectively communicates the brand's story through <em>thoughtful packaging design</em> while demonstrating advanced skills in <strong>Adobe Photoshop</strong>. This project challenged me to design within the constraints of a comprehensive brand identity system while communicating an emotional narrative through packaging design.
          </p>
          <p>
            I chose to focus on <strong>perfume branding</strong> for this project because of its deep connection to <em>self-expression and imagination</em>. Perfume invites creativity by nature as it's personal, emotional, and often intangible, making it the perfect medium to build a brand rooted in <strong>visual storytelling</strong> and <strong>brand narrative development</strong>.
          </p>
        </div>
      } />
      
      {/* Process Section */}
      <ProjectProcess title="Process & Development">
        <div className="custom-process-content">
          
          <p>
            Fable Fragrances is one of the first brand design projects I completed at BCIT, developed as a part of the Photoshop course. This project allowed us to explore visual storytelling while also building our technical skills in Adobe Photoshop and After Effects. The project challenged me to not only design within the constraints of a brand identity system but also to communicate an emotional narrative through packaging design.
          </p>
          
          <h3>Brand Brainstorming</h3>
          <p>
            I chose to focus on perfume as the product for this project because of its deep connection to self-expression and imagination. Perfume invites creativity by nature as it's personal, emotional, and often intangible, which makes it the perfect medium to build a brand rooted in storytelling.
          </p>
          <p>
            I wanted the brand to carry a mythical, ethereal tone, which led me to the theme of folklore and fairytales. Originally, I named the brand Sabre and chose a muted green as the primary color to evoke a natural, mysterious atmosphere. The sword-inspired name hinted at something that is both delicate and powerful, which were qualities I wanted to reflect in the product and packaging.
          </p>
          
          <div className="process-image">
            <img src={processImages[0]} alt="Brand brainstorming and color palette exploration" />
          </div>
          
          <h3>Design Process</h3>
          <p>
            The project unfolded in stages, beginning with the creation of a logo and business card. The logo features the company name with a sword piercing through the initial "S," visually reinforcing the original brand name's meaning. 
          </p>
          <p>
            Designing the business card presented a practical challenge as it needed to include 7 lines of detailed information while maintaining a clean and readable layout. I used Photoshop guides to stay within the print-safe area and experimented with font sizing and weight to establish a clear visual hierarchy.
          </p>
          
          <div className="process-image">
            <img src={processImages[1]} alt="Logo design and business card layout development" />
          </div>
          
          <h3>Packaging Design</h3>
          <p>
            To bring the brand narrative to life, I wanted the packaging to do more than just look appealing—it had to tell a story. I selected the subject of a banshee from Celtic folklore as the inspiration for this particular product. I researched the banshee, envisioned a specific scene, and sketched out a concept that would be used to translate into the package design.
          </p>
          <p>
            From there, I used a combination of Photoshop techniques including custom brushes, blend modes, textures, and the pen tool to create an illustration that wrapped around the box. I also wrote a short story to accompany the visuals, describing a banshee wandering through the woods at night. This narrative was integrated directly onto the packaging, stretched across the three back panels to create a sense of immersion for the consumer.
          </p>
          <p>
            Additional design elements like the logo, ingredient list, barcode, and required product details were added to create realism.
          </p>
          
          <div className="process-image">
            <img src={processImages[2]} alt="Packaging illustration process showing banshee concept development" />
          </div>
          
          <h3>After Effects Animation</h3>
          <p>
            Once the packaging design was complete, I exported the assets as high-quality JPGs and imported them into After Effects to build a 3D mockup of the box. I assembled each side, added lighting, shadows, reflections, and background elements to create a polished, realistic visual.
          </p>
          <p>
            The box was positioned at an angle and brought back into Photoshop to create a banner ad that featured the brand slogan and graphics complementary to the packaging. To enhance the final presentation of the packaging, I created a short, animated video where the box slowly rotates to showcase each side—highlighting both the graphic work and the embedded storytelling elements.
          </p>
          
          <div className="process-image">
            <img src={processImages[3]} alt="After Effects 3D mockup and animation process" />
          </div>
          
          <h3>From Sabre to Fable</h3>
          <p>
            As I revisited this project during Term 3, I took a step back to reflect on the overall brand identity. Although Sabre served as the initial name, I realized it didn't fully capture the essence of the concept. The heart of this project was storytelling—not just in a metaphorical sense, but quite literally: fairytales, folklore, enchanted creatures, and nature.
          </p>
          <p>
            With that in mind, I decided to rename the brand Fable, a name that would better represent the soul of the product and the emotional experience I intended to create. This new name ties together the themes of fantasy, mystery, and narrative that really define this brand.
          </p>
          
          <h3>Reflection</h3>
          <p>
            This project was an excellent introduction to brand design and visual storytelling. It taught me how to balance aesthetic appeal with narrative depth, and how packaging design can be a powerful medium for emotional connection. The process of evolving from Sabre to Fable also showed me the importance of stepping back and ensuring that every element—from name to visual identity—truly serves the brand's core message.
          </p>
          <p>
            Working with Adobe Photoshop and After Effects on this project built my technical foundation while the storytelling aspect helped me understand the importance of concept development in design work. This project remains a significant milestone in my journey as a designer, representing my first deep dive into comprehensive brand development.
          </p>
          
        </div>
      </ProjectProcess>
      
      {/* Related Projects */}
      <RelatedProjects 
        projects={relatedProjects}
        title="More Design Projects"
      />
      
    </ProjectDetailLayout>
  );
}

export default FableFragrances;
