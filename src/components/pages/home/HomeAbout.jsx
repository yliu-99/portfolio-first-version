import './HomeAbout.scss';
import profileImg from '../../../assets/about/yuhan-liu-profile-pic-red-blue.png';

function HomeAbout() {
  return (
    
    <div className="about-hero-box">
      
      <div className="about-img">
        <img
          src={profileImg}
          alt="Yuhan Liu profile"
          className="profile-img"
        />
      </div>
      <div className="about-content">
        <div className="intro-text">
          <p>I am a</p>
          <h2 className="multi-disciplinary">
            MULTI-DISCIPLINARY <br />
            DESIGNER
          </h2>
         <div className="favourite-design">
           <p>my favourite kinds of design are</p>
           <div className="favourite-words">
             <span>bold</span>{' '}
             <span>fun</span>{' '}
             <span>unapologetic</span>{' '}
             <span>experimental</span>{' '}
             <span>impactful</span>{' '}
             {/* add more as needed */}
           </div>
         </div>
        </div>
        <div className="inspiration-section">
          <p className="inspiration-intro">I take inspiration from</p>
          <div className="inspiration-words">
            <h4>FILM</h4>
            <h4>VIDEO GAMES</h4>
            <h4>MUSIC</h4>
          </div>
          <a href="/about" className="more-btn">
            MORE
          </a>
        </div>
      </div>
    </div>
  );
}

export default HomeAbout;
