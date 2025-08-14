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
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
