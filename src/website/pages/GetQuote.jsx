import React, { useState } from "react";

import {
  FaUser,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaBolt,
  FaSolarPanel,
  FaCheckCircle
} from "react-icons/fa";

import "./../../styles/website/GetQuote.css";

const GetQuote = () => {

  const [formData, setFormData] = useState({
    fullName: "",
    mobile: "",
    city: "",
    monthlyBill: "",
    roofSize: "",
    solarType: "",
    message: ""
  });

  const [submitted, setSubmitted] = useState(false);

  /* Handle Change */

  const handleChange = (e) => {

    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value
    });
  };

  /* Handle Submit */

  const handleSubmit = (e) => {

    e.preventDefault();

    console.log("Quote Request Submitted:", formData);

    /*
      Future API Call

      axios.post("/api/get-quote", formData)

    */

    setSubmitted(true);

    /* Reset */

    setFormData({
      fullName: "",
      mobile: "",
      city: "",
      monthlyBill: "",
      roofSize: "",
      solarType: "",
      message: ""
    });

    setTimeout(() => {
      setSubmitted(false);
    }, 4000);
  };

  return (

    <div className="getquote-page">

      {/* Hero */}

      <div className="quote-hero">

        <div className="quote-overlay">

          <h1>
            Get Your Solar Quote
          </h1>

          <p>
            Share your requirements and our solar experts
            will contact you with the best solution.
          </p>

        </div>

      </div>

      {/* Main Section */}

      <div className="quote-container">

        {/* Left */}

        <div className="quote-info-section">

          <span className="quote-tag">
            SURYATARA SOLAR ENERGY
          </span>

          <h2>
            Start Saving With Solar Energy
          </h2>

          <p>
            Get customized solar installation pricing for
            your home, office, industry, or commercial building.
          </p>

          <div className="quote-benefits">

            <div className="quote-benefit-card">

              <FaBolt className="benefit-icon" />

              <div>

                <h4>
                  Reduce Electricity Bills
                </h4>

                <p>
                  Save up to 90% on monthly electricity cost.
                </p>

              </div>

            </div>

            <div className="quote-benefit-card">

              <FaSolarPanel className="benefit-icon" />

              <div>

                <h4>
                  High Quality Solar Panels
                </h4>

                <p>
                  Reliable solar systems with long life.
                </p>

              </div>

            </div>

            <div className="quote-benefit-card">

              <FaCheckCircle className="benefit-icon" />

              <div>

                <h4>
                  Government Subsidy Support
                </h4>

                <p>
                  Complete support for subsidy and approvals.
                </p>

              </div>

            </div>

          </div>

        </div>

        {/* Right Form */}

        <div className="quote-form-section">

          <h3>
            Request Free Quote
          </h3>

          <form onSubmit={handleSubmit}>

            <div className="quote-form-grid">

              {/* Full Name */}

              <div className="quote-input-box">

                <label>
                  Full Name
                </label>

                <div className="quote-input-wrapper">

                  <FaUser />

                  <input
                    type="text"
                    name="fullName"
                    placeholder="Enter full name"
                    value={formData.fullName}
                    onChange={handleChange}
                    required
                  />

                </div>

              </div>

              {/* Mobile */}

              <div className="quote-input-box">

                <label>
                  Mobile Number
                </label>

                <div className="quote-input-wrapper">

                  <FaPhoneAlt />

                  <input
                    type="text"
                    name="mobile"
                    placeholder="Enter mobile number"
                    value={formData.mobile}
                    onChange={handleChange}
                    required
                  />

                </div>

              </div>

              {/* City */}

              <div className="quote-input-box">

                <label>
                  City
                </label>

                <div className="quote-input-wrapper">

                  <FaMapMarkerAlt />

                  <input
                    type="text"
                    name="city"
                    placeholder="Enter city"
                    value={formData.city}
                    onChange={handleChange}
                    required
                  />

                </div>

              </div>

              {/* Electricity Bill */}

              <div className="quote-input-box">

                <label>
                  Monthly Electricity Bill
                </label>

                <div className="quote-input-wrapper">

                  <FaBolt />

                  <input
                    type="text"
                    name="monthlyBill"
                    placeholder="Example ₹3000"
                    value={formData.monthlyBill}
                    onChange={handleChange}
                    required
                  />

                </div>

              </div>

              {/* Roof Size */}

              <div className="quote-input-box">

                <label>
                  Roof Size
                </label>

                <input
                  type="text"
                  name="roofSize"
                  placeholder="Example 1200 sq.ft"
                  value={formData.roofSize}
                  onChange={handleChange}
                />

              </div>

              {/* Solar Type */}

              <div className="quote-input-box">

                <label>
                  Solar Requirement
                </label>

                <select
                  name="solarType"
                  value={formData.solarType}
                  onChange={handleChange}
                  required
                >

                  <option value="">
                    Select Requirement
                  </option>

                  <option value="Residential">
                    Residential Solar
                  </option>

                  <option value="Commercial">
                    Commercial Solar
                  </option>

                  <option value="Industrial">
                    Industrial Solar
                  </option>

                </select>

              </div>

            </div>

            {/* Message */}

            <div className="quote-input-box">

              <label>
                Additional Message
              </label>

              <textarea
                rows="5"
                name="message"
                placeholder="Write your requirement..."
                value={formData.message}
                onChange={handleChange}
              />

            </div>

            {/* Button */}

            <button
              type="submit"
              className="quote-submit-btn"
            >
              Submit Quote Request
            </button>

            {/* Success */}

            {
              submitted &&
              <div className="quote-success-message">

                Quote request submitted successfully.

              </div>
            }

          </form>

        </div>

      </div>

    </div>

  );
};

export default GetQuote;