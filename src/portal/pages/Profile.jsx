import React, { useState } from "react";

import {
  FaUserCircle,
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaLock,
  FaCamera,
  FaSave
} from "react-icons/fa";

import "./../../styles/portal/Profile.css";

const Profile = () => {

  /* Dummy User Data */

  const [profileData, setProfileData] = useState({
    fullName: "Rahul Sharma",
    email: "rahul@gmail.com",
    phone: "+91 9876543210",
    address: "Indore, Madhya Pradesh",
    password: "123456"
  });

  /* Handle Change */

  const handleChange = (e) => {

    setProfileData({
      ...profileData,
      [e.target.name]: e.target.value
    });
  };

  /* Save */

  const handleSave = () => {

    alert("Profile updated successfully.");
  };

  return (

    <div className="portal-profile-page">

      {/* Header */}

      <div className="portal-profile-header">

        <div>

          <h2>
            My Profile
          </h2>

          <p>
            Manage your account information
          </p>

        </div>

      </div>

      {/* Profile Card */}

      <div className="portal-profile-wrapper">

        {/* Left Section */}

        <div className="portal-profile-left">

          <div className="profile-image-box">

            <FaUserCircle className="profile-big-icon" />

            <button className="change-photo-btn">

              <FaCamera />

            </button>

          </div>

          <h3>
            {profileData.fullName}
          </h3>

          <p>
            Solar Customer
          </p>

        </div>

        {/* Right Section */}

        <div className="portal-profile-right">

          <div className="portal-profile-grid">

            {/* Full Name */}

            <div className="portal-input-group">

              <label>

                <FaUserCircle />

                Full Name

              </label>

              <input
                type="text"
                name="fullName"
                value={profileData.fullName}
                onChange={handleChange}
              />

            </div>

            {/* Email */}

            <div className="portal-input-group">

              <label>

                <FaEnvelope />

                Email

              </label>

              <input
                type="email"
                name="email"
                value={profileData.email}
                onChange={handleChange}
              />

            </div>

            {/* Phone */}

            <div className="portal-input-group">

              <label>

                <FaPhoneAlt />

                Phone

              </label>

              <input
                type="text"
                name="phone"
                value={profileData.phone}
                onChange={handleChange}
              />

            </div>

            {/* Address */}

            <div className="portal-input-group">

              <label>

                <FaMapMarkerAlt />

                Address

              </label>

              <input
                type="text"
                name="address"
                value={profileData.address}
                onChange={handleChange}
              />

            </div>

            {/* Password */}

            <div className="portal-input-group full-width">

              <label>

                <FaLock />

                Password

              </label>

              <input
                type="password"
                name="password"
                value={profileData.password}
                onChange={handleChange}
              />

            </div>

          </div>

          {/* Save Button */}

          <button
            className="portal-save-profile-btn"
            onClick={handleSave}
          >

            <FaSave />

            Save Changes

          </button>

        </div>

      </div>

    </div>

  );
};

export default Profile;