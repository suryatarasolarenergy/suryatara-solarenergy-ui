import React from "react";

import {
  FaPhoneAlt,
  FaEnvelope,
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn
} from "react-icons/fa";

import "../../styles/website/Topbar.css";

const Topbar = () => {

  return (

    <div className="website-topbar">

      {/* Left */}

      <div className="website-topbar-left">

        <a href="tel:+919876543210">

          <FaPhoneAlt />

          +91 9876543210

        </a>

        <a href="mailto:info@suryatara.com">

          <FaEnvelope />

          info@suryatara.com

        </a>

      </div>

      {/* Right */}

      <div className="website-topbar-right">

        <span>
          Clean Energy For Better Future ☀
        </span>

        <div className="website-social-icons">

          <a href="/">

            <FaFacebookF />

          </a>

          <a href="/">

            <FaInstagram />

          </a>

          <a href="/">

            <FaLinkedinIn />

          </a>

        </div>

      </div>

    </div>

  );
};

export default Topbar;