import { motion } from "framer-motion";
import {
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaGithub,
  FaLinkedin,
} from "react-icons/fa";

import "./Contact.css";

function Contact() {
  return (
    <section id="contact" className="contact">

      <motion.h1
        className="contact-title"
        initial={{ opacity: 0, y: -40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Contact Me
      </motion.h1>

      <p className="contact-subtitle">
        Let's connect and build something amazing together.
      </p>

      <div className="contact-container">

        <motion.div
          className="contact-info"
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.7 }}
        >

          <h2>Get in Touch</h2>

          <p>
            Feel free to contact me for internships, freelance projects,
            collaborations, or full-time opportunities.
          </p>

          <div className="info">
            <FaEnvelope className="contact-icon" />
            <span>yourgmail@gmail.com</span>
          </div>

          <div className="info">
            <FaPhoneAlt className="contact-icon" />
            <span>+91 XXXXX XXXXX</span>
          </div>

          <div className="info">
            <FaMapMarkerAlt className="contact-icon" />
            <span>India</span>
          </div>

          <div className="social-icons">

            <a href="https://github.com/yourusername" target="_blank" rel="noreferrer">
              <FaGithub />
            </a>

            <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noreferrer">
              <FaLinkedin />
            </a>

          </div>

        </motion.div>

        <motion.form
          className="contact-form"
          initial={{ x: 100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.7 }}
        >

          <input
            type="text"
            placeholder="Your Name"
            required
          />

          <input
            type="email"
            placeholder="Your Email"
            required
          />

          <textarea
            rows="6"
            placeholder="Your Message"
            required
          ></textarea>

          <button type="submit">
            Send Message
          </button>

        </motion.form>

      </div>

    </section>
  );
}

export default Contact;