import { useState } from "react";
import axios from "axios";
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
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });



  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post("http://localhost:5000/api/contact", formData);

      alert("Message sent successfully!");
      console.log(res.data);

      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });

    } catch (error) {
      console.log(error);
      alert("Something went wrong!");
    }
  };

  return (
    <section id="contact" className="contact">

      <motion.h1 className="contact-title">
        Contact Me
      </motion.h1>

      <div className="contact-container">

        {/* INFO SECTION */}
        <div className="contact-info">
          <h2>Get in Touch</h2>

          <div className="info">
            <FaEnvelope />
            <span>shuklabhawna81@gmail.com</span>
          </div>

          <div className="info">
            <FaPhoneAlt />
            <span>+91 7652898661</span>
          </div>

          <div className="info">
            <FaMapMarkerAlt />
            <span>India</span>
          </div>

          <div className="social-icons">
            <a href="https://github.com/bhawna-shukla">
              <FaGithub />
            </a>
            <a href="https://www.linkedin.com/in/bhawna-shukla-860b83305/">
              <FaLinkedin />
            </a>
          </div>
        </div>

        {/* FORM */}
        <motion.form className="contact-form" onSubmit={handleSubmit}>

          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
          />

          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            required
          />

          <input
            type="text"
            name="subject"
            placeholder="Subject"
            value={formData.subject}
            onChange={handleChange}
            required
          />

          <textarea
            name="message"
            rows="6"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            required
          />

          <button type="submit">Send Message</button>

        </motion.form>

      </div>
    </section>
  );
}

export default Contact;