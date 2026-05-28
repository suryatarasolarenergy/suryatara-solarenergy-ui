import React from "react";

import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt
} from "react-icons/fa";

import "../../styles/website/Footer.css";

const Footer = () => {

  return (

    <footer className="website-footer">

      <div className="footer-container">

        {/* Left */}

        <div className="footer-about">

          <div className="footer-logo">

            <span className="footer-logo-icon">
              ☀
            </span>

            <div>

              <h3>
                SURYATARA
              </h3>

              <span>
                SOLAR ENERGY
              </span>

            </div>

          </div>

          <p>
            Sustainable solar energy solutions for homes,
            industries, and commercial businesses across India.
          </p>

        </div>

        {/* Links */}

        <div className="footer-links">

          <h4>
            Quick Links
          </h4>

          <a href="/">
            Home
          </a>

          <a href="/about">
            About
          </a>

          <a href="/services">
            Services
          </a>

          <a href="/contact">
            Contact
          </a>

        </div>

        {/* Contact */}

        <div className="footer-contact">

          <h4>
            Contact
          </h4>

          <p>
            <FaPhoneAlt />

            +91 9876543210
          </p>

          <p>
            <FaEnvelope />

            info@suryatara.com
          </p>

          <p>
            <FaMapMarkerAlt />

            Uttar Pradesh, India
          </p>

        </div>

      </div>

      {/* Bottom */}

      <div className="footer-bottom">

        © 2026 Suryatara Solar Energy.
        All Rights Reserved.

      </div>

    </footer>

  );
};

export default Footer;