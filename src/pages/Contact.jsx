import "./Contact.css"; 

import mostafa from "../assets/mostfa.jpg";
import ghof from "../assets/ghof.jpg";
import abouda from "../assets/abouda.jpg";
import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div>
      <section className="Contact-Section">
        <div className="container">
          <h1>Contact Us</h1>
          <p>
            We'd love to hear from you! Whether you have a question, feedback,
            or suggestion, feel free to reach out to us.
          </p>

          <h2>Get in Touch</h2>
          <p>
            If you need assistance or have any queries, you can contact us
            through the form below or reach out to us via email or social media.
          </p>

          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Your Name</label>
              <input
                type="text"
                id="name"
                name="name"
                required
                placeholder="Enter your name"
                value={formData.name}
                onChange={handleChange}
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Your Email</label>
              <input
                type="email"
                id="email"
                name="email"
                required
                placeholder="Enter your email"
                value={formData.email}
                onChange={handleChange}
              />
            </div>

            <div className="form-group">
              <label htmlFor="message">Your Message</label>
              <textarea
                id="message"
                name="message"
                rows="4"
                required
                placeholder="Write your message"
                value={formData.message}
                onChange={handleChange}
              ></textarea>
            </div>

            <button type="submit" className="submit-btn">
              Send Message
            </button>
          </form>

         
          <h2>Meet Our Team</h2>
          <div className="team-container">
            <div className="team-member">
              <img src={mostafa} alt="Team Member 1" className="team-img" />
              <h3>Mostafa Gaied</h3>
              <p>CEO & Founder</p>
              <a
                href="https://instagram.com/mostafagaied"
                target="_blank"
                rel="noopener noreferrer"
                className="instagram-link"
              >
                <FontAwesomeIcon icon={faInstagram} /> gaiedmostfa
              </a>
            </div>
            <div className="team-member">
              <img src={abouda} alt="Team Member 2" className="team-img" />
              <h3>Abdelbari Brahim</h3>
              <p>Lead Developer</p>
              <a
                href="https://instagram.com/brahimabdelbari"
                target="_blank"
                rel="noopener noreferrer"
                className="instagram-link"
              >
                <FontAwesomeIcon icon={faInstagram} /> brahimabdelbari
              </a>
            </div>
            <div className="team-member">
              <img src={ghof} alt="Team Member 3" className="team-img" />
              <h3>Ghofrane Kerkeni</h3>
              <p>Marketing Manager</p>
              <a
                href="https://instagram.com/ghofrane.kr"
                target="_blank"
                rel="noopener noreferrer"
                className="instagram-link"
              >
                <FontAwesomeIcon icon={faInstagram} /> ghofrane.kr
              </a>
            </div>
          </div>
        </div>
      </section>

      <footer>
        <p>&copy; 2024 ShareMyRide. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default ContactUs;
