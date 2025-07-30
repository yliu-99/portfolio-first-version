import "./Footer.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="footer">
      <div className="red divider"></div>
      <div className="blue divider"></div>
      <div className="footer-content">
        <div className="container">
          <div className="footer-row">
            <div className="left-section">
              <h4>
                <Link to="/" className="home-link">
                  YUHAN LIU.
                </Link>
              </h4>
            </div>
            
            <ul className="socials">
              <li className="youtube">
                <Link to="/video">
                  <FontAwesomeIcon icon="fa-brands fa-youtube" />
                </Link>
              </li>
              <li className="linkedin">
                <Link to="/about">
                  <FontAwesomeIcon icon="fa-brands fa-square-linkedin" />
                </Link>
              </li>
              <li className="instagram">
                <Link to="/projects">
                  <FontAwesomeIcon icon="fa-brands fa-square-instagram" />
                </Link>
              </li>
            </ul>
            <div className="contact">
              <a href="mailto:yuhancreates@gmail.com" className="email-link">
                yuhancreates@gmail.com
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
