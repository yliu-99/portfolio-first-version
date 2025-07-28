import './Footer.scss';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Footer() {
  return (
    <footer className="footer">
        <div className="red divider"></div>
        <div className="blue divider"></div>
    <div className="footer-content">
      <div className="container">
        <h4>YUHAN LIU.</h4>
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
      </div>
      <p className="copyright">
        © 2025 Yuhan Liu. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;