import React from 'react';
import './HomeContent.scss';

function HomeContent() {
  return (
    <section className="home-content" id="vancouver-graphic-designer">
      <div className="container">
        <div className="content-grid">
          
          {/* Main Content */}
          <div className="main-content">
            <h1 className="sr-only">Yuhan Liu - Vancouver Graphic Designer & Multimedia Artist</h1>
            
            <div className="intro-section">
              <h2>Vancouver Graphic Designer & Creative Storyteller</h2>
              <p>
                Welcome to the creative portfolio of <strong>Yuhan Liu</strong>, a passionate <em>graphic designer and multimedia artist</em> based in <strong>Vancouver, BC</strong>. As a recent <strong>BCIT New Media Design & Web Development</strong> graduate, I specialize in creating <em>compelling visual narratives</em> that bridge the gap between traditional design principles and innovative digital media.
              </p>
              
              <p>
                My work spans across <strong>brand identity design</strong>, <em>web development</em>, <strong>print media</strong>, and <em>video production</em>, with each project rooted in thoughtful storytelling and strategic visual communication. Drawing from my diverse background in music and theatre, I bring a unique perspective to every creative challenge.
              </p>
            </div>

            <div className="expertise-section">
              <h3>Design Expertise & Creative Services</h3>
              <div className="expertise-grid">
                <div className="expertise-item">
                  <h4>Brand Identity & Visual Design</h4>
                  <p>Comprehensive <strong>branding solutions</strong> including logo design, visual identity systems, and <em>brand strategy development</em> for businesses and organizations across Vancouver.</p>
                </div>
                
                <div className="expertise-item">
                  <h4>Digital Media & Web Design</h4>
                  <p>Modern <strong>web design and development</strong> services featuring responsive layouts, user-centered design, and <em>interactive multimedia experiences</em>.</p>
                </div>
                
                <div className="expertise-item">
                  <h4>Print Design & Packaging</h4>
                  <p>Professional <strong>print design services</strong> encompassing packaging design, marketing materials, and <em>publication layouts</em> with attention to detail and production quality.</p>
                </div>
                
                <div className="expertise-item">
                  <h4>Video Production & Motion Graphics</h4>
                  <p>Creative <strong>video content creation</strong> and motion graphics design, leveraging storytelling expertise from music and theatre background.</p>
                </div>
              </div>
            </div>

            <div className="approach-section">
              <h3>Creative Approach & Design Philosophy</h3>
              <p>
                My design philosophy centers on <strong>meaningful visual storytelling</strong> that creates genuine connections between brands and their audiences. Every project begins with understanding the core message and target audience, allowing me to craft <em>authentic and impactful design solutions</em>.
              </p>
              
              <p>
                As a <strong>Vancouver-based creative professional</strong>, I'm passionate about collaborating with local businesses and organizations to bring their visions to life through thoughtful design and strategic creative direction.
              </p>
            </div>

            <div className="cta-section">
              <h3>Let's Create Something Amazing Together</h3>
              <p>
                Ready to elevate your brand with professional <strong>graphic design services in Vancouver</strong>? I'm currently accepting new projects and would love to discuss how we can bring your creative vision to life.
              </p>
              <div className="cta-buttons">
                <a href="/projects" className="btn primary">View My Work</a>
                <a href="/about" className="btn secondary">Learn More About Me</a>
                <a href="mailto:yuhancreates@gmail.com" className="btn tertiary">Get In Touch</a>
              </div>
            </div>
          </div>

          {/* Sidebar Info */}
          <aside className="sidebar-content">
            <div className="quick-info">
              <h4>Quick Info</h4>
              <ul>
                <li><strong>Location:</strong> Vancouver, BC</li>
                <li><strong>Education:</strong> BCIT New Media Design</li>
                <li><strong>Specialties:</strong> Branding, Web Design, Video</li>
                <li><strong>Experience:</strong> Multidisciplinary Creative</li>
              </ul>
            </div>

            <div className="skills-highlight">
              <h4>Technical Skills</h4>
              <div className="skills-list">
                <span className="skill">Adobe Creative Suite</span>
                <span className="skill">Web Development</span>
                <span className="skill">Brand Strategy</span>
                <span className="skill">Video Production</span>
                <span className="skill">UI/UX Design</span>
                <span className="skill">Print Design</span>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}

export default HomeContent;
