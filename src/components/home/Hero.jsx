import "./Hero.scss";

function Hero() {
  return (
    <div className="hero">
      <div className="container">
        <div className="hero-content"></div>
        <div className="hero-elements">
          <div className="circle">
            <img src="src\assets\hero\bluecircle.png" alt="" />
          </div>
          <div className="moth">
            <img src="src\assets\hero\luna-moth.png" alt="" />
          </div>
          <div className="animated-text">
            <img src="src\assets\hero\circletext.svg" alt="" />
          </div>
          <div className="design-text">
            <h4>DESIGN</h4>
          </div>
        </div>
      </div>
      
    </div>
  );
}

export default Hero;
