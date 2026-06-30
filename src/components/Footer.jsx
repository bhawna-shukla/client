import { FaGithub, FaLinkedin, FaEnvelope, FaArrowUp, FaInstagram } from "react-icons/fa";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">

        <div className="footer-left">
          <h2>Bhawna Shukla</h2>
          <p>
            MERN Stack Developer | Data Analytics Enthusiast
          </p>
        </div>

        <div className="footer-links">
          <h3>Quick Links</h3>

          <a href="#home">Home</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </div>

        <div className="footer-social">
          <h3>Connect</h3>

          <div className="social-icons">

            <a
              href="https://github.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub />
            </a>

            <a
              href="https://linkedin.com/in/yourusername"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin />
            </a>

            <a
              href="https://linkedin.com/in/yourusername"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram />
            </a>

            <a href="mailto:yourgmail@gmail.com">
              <FaEnvelope />
            </a>

          </div>
        </div>

      </div>

      <div className="footer-bottom">

        <p>© 2026 Bhawna Shukla | All Rights Reserved</p>

        <a href="#home" className="top-btn">
          <FaArrowUp />
        </a>

      </div>
    </footer>
  );
}

export default Footer;