import Overview from "./Overview";
import Values from "./Values";
import Goals from "./Goals"; 
import Gallery from "./Gallery";
import './About.scss';

function About() {
  return (
    <div className="about">
      <Overview />
      <Values />
      <Goals />
      <Gallery />
    </div>
  );
}

export default About;