import Overview from "../about/Overview";
import Values from "../about/Values";
import Goals from "../about/Goals"; 
import Gallery from "../about/Gallery";
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