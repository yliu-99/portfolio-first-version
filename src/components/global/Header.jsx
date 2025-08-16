import "./Header.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import logoFull from "../../assets/logo/logo-full.png"; // Adjust path if necessary

function Header() {
  const [rotation, setRotation] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollFraction = scrollTop / docHeight;
      const rotationDegree = scrollFraction * 360; // Calculate rotation based on scroll progress
      setRotation(rotationDegree);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
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
              <a href="https://www.youtube.com/@Yuhan_Liu" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon="fa-brands fa-youtube" />
              </a>
            </li>
            <li className="linkedin">
              <a href="https://www.linkedin.com/in/yuhan-liu-1a571524b/" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon="fa-brands fa-square-linkedin" />
              </a>
            </li>
            <li className="instagram">
              <a href="https://instagram.com/_yuhan.liu_" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon="fa-brands fa-square-instagram" />
              </a>
            </li>
          </ul>
          <nav className="main-menu">
            <ul className="navigation">
              <li>
                <a href="/about">ABOUT</a>
              </li>
              <li>
                <a href="/projects">PROJECTS</a>
              </li>
              <li className="center-link">
                <a href="/" className="middle">
                  <div
                    className="logo"
                    style={{
                      transform: `rotate(${rotation}deg)`, // Apply rotation dynamically
                      transition: "transform 0.1s linear", // Smooth rotation
                    }}
                  >
                    <img
                      src={logoFull}
                      alt="yuhan liu's logo"
                    />
                  </div>
                  YUHAN LIU
                </a>
              </li>
              <li>
                <a href="/graphic">GRAPHIC</a>
              </li>
              <li>
                <a href="/video">VIDEO</a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}

export default Header;