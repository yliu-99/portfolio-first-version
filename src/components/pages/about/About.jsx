import Overview from "./Overview";
import Values from "./Values";
import Goals from "./Goals"; 
import Gallery from "./Gallery";
import SEO from "../../SEO/SEO";
import { personSchema, createBreadcrumbSchema } from "../../SEO/schemas";
import './About.scss';

function About() {
  // Structured data for about page
  const aboutJsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      personSchema,
      createBreadcrumbSchema([
        { name: "Home", url: "/" },
        { name: "About", url: "/about" }
      ])
    ]
  };

  return (
    <div className="about">
      <SEO
        title="About Yuhan Liu, Vancouver Graphic Designer | Creative Portfolio"
        description="Meet Yuhan Liu, a passionate graphic designer and multimedia artist from Vancouver. BCIT New Media graduate with expertise in branding, visual identity, and creative design solutions. Discover her artistic journey and creative philosophy."
        keywords="about yuhan liu, vancouver graphic designer, bcit new media graduate, creative artist vancouver, multimedia designer, graphic design professional, visual artist biography, creative portfolio vancouver"
        canonicalUrl="https://yliu-99.github.io/portfolio-first-version/about"
        ogType="profile"
        jsonLd={aboutJsonLd}
      />
      <Overview />
      <Values />
      <Goals />
      <Gallery />
    </div>
  );
}

export default About;