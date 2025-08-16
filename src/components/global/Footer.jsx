import "./Footer.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="footer">
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
            <div className="contact">
              <a href="mailto:yuhancreates@gmail.com" className="email-link">
                yuhancreates@gmail.com
              </a>
              <div className="social-links">
                <a href="https://www.linkedin.com/in/yuhan-liu-1a571524b/" target="_blank" rel="noopener noreferrer" className="social-link">
                  <FontAwesomeIcon icon="fa-brands fa-linkedin" />
                </a>
                <a href="https://instagram.com/_yuhan.liu_" target="_blank" rel="noopener noreferrer" className="social-link">
                  <FontAwesomeIcon icon="fa-brands fa-instagram" />
                </a>
                <a href="https://www.youtube.com/@Yuhan_Liu" target="_blank" rel="noopener noreferrer" className="social-link">
                  <FontAwesomeIcon icon="fa-brands fa-youtube" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
