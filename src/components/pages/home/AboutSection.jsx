import "./AboutSection.scss";

function About() {
  return (
    <div className="about">
      <div className="container">
        <div className="about-content">
          <div className="intro-text">
            <p>I am a</p>
            <h2 className="multi-disciplinary">
              MULTI-DISCIPLINARY <br />
              DESIGNER
            </h2>
          </div>

          <div className="inspiration-section">
            <p className="inspiration-intro">I take inspiration from</p>
            <div className="inspiration-words">
              <h4>FILM</h4>
              <h4>ART</h4>
              <h4>VIDEO GAMES</h4>
              <h4>MUSIC</h4>
            </div>

            <a href="/about" className="more-btn">
              MORE
            </a>
          </div>
        </div>
      </div>
      <div className="logo-decoration">
        <div className="left">
          <img src="src/assets/logo/logo-full.png" alt="" />
        </div>
        <div className="right">
          <img src="src/assets/logo/logo-full.png" alt="" />
        </div>
      </div>
    </div>
  );
}

export default About;
