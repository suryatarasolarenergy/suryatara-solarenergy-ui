import React, { useState } from "react";

import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaClock,
  FaWhatsapp,
  FaPaperPlane
} from "react-icons/fa";

import "./../../styles/website/Contact.css";

const Contact = () => {

  /* Form State */

  const [formData, setFormData] = useState({
    fullName: "",
    mobile: "",
    email: "",
    city: "",
    message: ""
  });

  /* Handle Change */

  const handleChange = (e) => {

    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value
    });

  };

  /* Submit */

  const handleSubmit = (e) => {

    e.preventDefault();

    console.log("Contact Form Data : ", formData);

    alert("Your query has been submitted successfully.");

    setFormData({
      fullName: "",
      mobile: "",
      email: "",
      city: "",
      message: ""
    });

  };

  return (

    <div className="contact-page">

      {/* Hero Section */}

      <section className="contact-hero-section">

        <div className="contact-hero-overlay">

          <div className="contact-hero-content">

            <h1>
              Contact Us
            </h1>

            <p>
              Get in touch with Suryatara Solar Energy
              for solar installation and consultation.
            </p>

          </div>

        </div>

      </section>

      {/* Contact Section */}

      <section className="contact-main-section">

        {/* Left */}

        <div className="contact-left">

          <span className="contact-tag">
            GET IN TOUCH
          </span>

          <h2>
            Let’s Discuss Your Solar Project
          </h2>

          <p>
            Contact our expert team for rooftop solar,
            industrial solar solutions, GIS monitoring
            and complete solar EPC services.
          </p>

          {/* Contact Cards */}

          <div className="contact-info-list">

            <div className="contact-info-card">

              <div className="contact-info-icon">

                <FaPhoneAlt />

              </div>

              <div>

                <h4>
                  Phone Number
                </h4>

                <p>
                  +91 9876543210
                </p>

              </div>

            </div>

            <div className="contact-info-card">

              <div className="contact-info-icon">

                <FaEnvelope />

              </div>

              <div>

                <h4>
                  Email Address
                </h4>

                <p>
                  info@suryatarasolar.com
                </p>

              </div>

            </div>

            <div className="contact-info-card">

              <div className="contact-info-icon">

                <FaMapMarkerAlt />

              </div>

              <div>

                <h4>
                  Office Address
                </h4>

                <p>
                  Shamli, Uttar Pradesh, India
                </p>

              </div>

            </div>

            <div className="contact-info-card">

              <div className="contact-info-icon">

                <FaClock />

              </div>

              <div>

                <h4>
                  Working Hours
                </h4>

                <p>
                  Mon - Sat : 9 AM - 7 PM
                </p>

              </div>

            </div>

          </div>

        </div>

        {/* Right */}

        <div className="contact-form-wrapper">

          <form
            className="contact-form"
            onSubmit={handleSubmit}
          >

            <h3>
              Send Your Query
            </h3>

            <div className="contact-form-group">

              <label>
                Full Name
              </label>

              <input
                type="text"
                name="fullName"
                placeholder="Enter full name"
                value={formData.fullName}
                onChange={handleChange}
                required
              />

            </div>

            <div className="contact-form-group">

              <label>
                Mobile Number
              </label>

              <input
                type="text"
                name="mobile"
                placeholder="Enter mobile number"
                value={formData.mobile}
                onChange={handleChange}
                required
              />

            </div>

            <div className="contact-form-group">

              <label>
                Email Address
              </label>

              <input
                type="email"
                name="email"
                placeholder="Enter email address"
                value={formData.email}
                onChange={handleChange}
              />

            </div>

            <div className="contact-form-group">

              <label>
                City
              </label>

              <input
                type="text"
                name="city"
                placeholder="Enter city"
                value={formData.city}
                onChange={handleChange}
              />

            </div>

            <div className="contact-form-group">

              <label>
                Message
              </label>

              <textarea
                rows="5"
                name="message"
                placeholder="Write your requirement..."
                value={formData.message}
                onChange={handleChange}
              ></textarea>

            </div>

            <button
              type="submit"
              className="contact-submit-btn"
            >

              <FaPaperPlane />

              Submit Query

            </button>

            <button
              type="button"
              className="whatsapp-btn"
            >

              <FaWhatsapp />

              Chat On WhatsApp

            </button>

          </form>

        </div>

      </section>

      {/* Map Section */}

      <section className="contact-map-section">

        <iframe
          title="map"
          src="https://maps.google.com/maps?q=Shamli&t=&z=13&ie=UTF8&iwloc=&output=embed"
          loading="lazy"
        ></iframe>

      </section>

    </div>

  );
};

export default Contact;