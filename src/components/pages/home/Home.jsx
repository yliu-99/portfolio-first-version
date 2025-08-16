import HomeHero from "./HomeHero";
import HomeAbout from "./HomeAbout";
import HomeProjects from "./HomeProjects";
import SEO from "../../SEO/SEO";
import { personSchema, websiteSchema, createBreadcrumbSchema } from "../../SEO/schemas";

function Home() {
    // Structured data for homepage
    const homeJsonLd = {
      "@context": "https://schema.org",
      "@graph": [
        personSchema,
        websiteSchema,
        createBreadcrumbSchema([
          { name: "Home", url: "/" }
        ])
      ]
    };

    return (
        <div className="home-page">
          <SEO
            title="Graphic Design Vancouver, Yuhan Liu BCIT New Media Portfolio"
            description="Vancouver-based graphic designer and multimedia artist Yuhan Liu showcases innovative design projects. BCIT New Media graduate specializing in branding, web design, and creative visual storytelling solutions."
            keywords="graphic design vancouver, yuhan liu portfolio, bcit new media, vancouver designer, creative portfolio, multimedia artist, branding design vancouver, web design portfolio, visual storytelling, digital design vancouver"
            canonicalUrl="https://yliu-99.github.io/portfolio-first-version/"
            ogType="website"
            jsonLd={homeJsonLd}
          />
          <HomeHero />
          <HomeProjects />
        </div>
    );
}

export default Home;