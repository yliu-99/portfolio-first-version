import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import logoFull from '../../assets/logo/logo-full.png';
import './Hamburger.scss';

function Hamburger() {
  const [isOpen, setIsOpen] = useState(false);
  const [rotation, setRotation] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollFraction = Math.min(scrollTop / docHeight, 1); // Clamp to max 1
      const rotationDegree = scrollFraction * 360; // This will now max at exactly 360°
      setRotation(rotationDegree);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    // Cleanup on unmount
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <>
      {/* Main Header - visible on large screens */}
      <header className="header">
        <div className="header-container">
          <div className="red-bar"></div>
          <div className="gradient-blur"></div>
          <div className="dividers">
            <div className="red divider"></div>
            <div className="blue divider"></div>
          </div>
          <div className="container">
            <ul className="socials">
              <li className="youtube">
                <a href="https://www.youtube.com/@Yuhan_Liu" target="_blank" rel="noopener noreferrer" aria-label="YouTube">
                  <FontAwesomeIcon icon="fa-brands fa-youtube" />
                </a>
              </li>
              <li className="linkedin">
                <a href="https://www.linkedin.com/in/yuhan-liu-1a571524b/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                  <FontAwesomeIcon icon="fa-brands fa-square-linkedin" />
                </a>
              </li>
              <li className="instagram">
                <a href="https://instagram.com/_yuhan.liu_" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                  <FontAwesomeIcon icon="fa-brands fa-square-instagram" />
                </a>
              </li>
            </ul>
            <nav className="main-menu">
              <ul className="navigation">
                <li>
                  <Link to="/about" title="About Yuhan Liu - Vancouver Graphic Designer">ABOUT</Link>
                </li>
                <li>
                  <Link to="/projects" title="Design Projects Portfolio - Graphic Design & Multimedia">PROJECTS</Link>
                </li>
                <li className="center-link">
                  <Link to="/" className="middle" title="Yuhan Liu Portfolio - Home">
                    <div
                      className="logo"
                      style={{
                        transform: `rotate(${rotation}deg)`,
                        transition: "transform 0.1s linear",
                      }}
                    >
                      <img
                        src={logoFull}
                        alt="Yuhan Liu Logo - Vancouver Graphic Designer"
                      />
                    </div>
                    YUHAN LIU
                  </Link>
                </li>
                <li>
                  <Link to="/graphic" title="Graphic Design Portfolio - Branding & Visual Identity">GRAPHIC</Link>
                </li>
                <li>
                  <Link to="/video" title="Video & Motion Graphics Portfolio - Multimedia Content">VIDEO</Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>

      {/* Mobile Header with Hamburger - visible on small screens */}
      <header className="mobile-header">
        <div className="mobile-header-container">
          <div className="red-bar"></div>
          <div className="mobile-nav">
            <Link to="/" className="logo-link" onClick={closeMenu}>
              <div
                className="logo"
                style={{
                  transform: `rotate(${rotation}deg)`,
                  transition: "transform 0.1s linear",
                }}
              >
                <img src={logoFull} alt="yuhan liu's logo" />
              </div>
            </Link>
            
            <div
              className={`hamburger-btn ${isOpen ? 'open' : ''}`}
              onClick={toggleMenu}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  toggleMenu();
                }
              }}
              aria-label="Toggle navigation menu"
            >
              <span className="hamburger-line"></span>
              <span className="hamburger-line"></span>
              <span className="hamburger-line"></span>
            </div>
          </div>
        </div>
        
        {/* Mobile Menu Overlay */}
        <div 
          className={`mobile-menu-overlay ${isOpen ? 'open' : ''}`}
          onClick={closeMenu}
        >
          <nav className="mobile-menu" onClick={(e) => e.stopPropagation()}>
            {/* Close button */}
            <div 
              className="close-btn"
              onClick={closeMenu}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  closeMenu();
                }
              }}
              aria-label="Close navigation menu"
            >
              <span className="close-line"></span>
              <span className="close-line"></span>
            </div>
            
            <ul className="mobile-navigation">
              <li>
                <Link to="/" onClick={closeMenu} title="Home - Yuhan Liu Portfolio">HOME</Link>
              </li>
              <li>
                <Link to="/about" onClick={closeMenu} title="About Yuhan Liu - Vancouver Graphic Designer">ABOUT</Link>
              </li>
              <li>
                <Link to="/projects" onClick={closeMenu} title="Design Projects Portfolio - Graphic Design & Multimedia">PROJECTS</Link>
              </li>
              <li>
                <Link to="/graphic" onClick={closeMenu} title="Graphic Design Portfolio - Branding & Visual Identity">GRAPHIC</Link>
              </li>
              <li>
                <Link to="/video" onClick={closeMenu} title="Video & Motion Graphics Portfolio - Multimedia Content">VIDEO</Link>
              </li>
            </ul>
            
            <ul className="mobile-socials">
              <li>
                <a href="https://www.youtube.com/@Yuhan_Liu" target="_blank" rel="noopener noreferrer" aria-label="YouTube" onClick={closeMenu}>
                  <FontAwesomeIcon icon="fa-brands fa-youtube" />
                  <span>YouTube</span>
                </a>
              </li>
              <li>
                <a href="https://www.linkedin.com/in/yuhan-liu-1a571524b/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" onClick={closeMenu}>
                  <FontAwesomeIcon icon="fa-brands fa-square-linkedin" />
                  <span>LinkedIn</span>
                </a>
              </li>
              <li>
                <a href="https://instagram.com/_yuhan.liu_" target="_blank" rel="noopener noreferrer" aria-label="Instagram" onClick={closeMenu}>
                  <FontAwesomeIcon icon="fa-brands fa-square-instagram" />
                  <span>Instagram</span>
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    </>
  );
}

export default Hamburger;
