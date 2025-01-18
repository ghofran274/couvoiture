import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faInfoCircle,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import {
  faFacebookF,
  faTwitter,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">ShareMyRide</div>
      <div className="nav-links">
        <Link to="/" className="nav-link">
          <FontAwesomeIcon icon={faHome} className="nav-icon" /> Home
        </Link>
        <Link to="/about" className="nav-link">
          <FontAwesomeIcon icon={faInfoCircle} className="nav-icon" /> About
        </Link>
        <Link to="/contact" className="nav-link">
          <FontAwesomeIcon icon={faPhone} className="nav-icon" /> Contact
        </Link>

        <div className="social-icons">
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="social-link"
          >
            <FontAwesomeIcon icon={faFacebookF} />
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="social-link"
          >
            <FontAwesomeIcon icon={faTwitter} />
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="social-link"
          >
            <FontAwesomeIcon icon={faInstagram} />
          </a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
