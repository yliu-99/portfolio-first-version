import "./header.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Header() {
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
              <a href="#">
                <FontAwesomeIcon icon="fa-brands fa-youtube" />
              </a>
            </li>
            <li className="linkedin">
              <a href="#">
                <FontAwesomeIcon icon="fa-brands fa-square-linkedin" />
              </a>
            </li>
            <li className="instagram">
              <a href="#">
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
                  <div className="logo">
                    <img
                      src="src\assets\logo\logo-full.png"
                      alt="yuhan liu's logo, y and l combined together to look like an hourglass"
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
