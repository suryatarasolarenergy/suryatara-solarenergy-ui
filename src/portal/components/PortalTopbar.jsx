import React from "react";

import {
  FaBars,
  FaBell,
  FaSearch,
  FaUserCircle,
  FaSun
} from "react-icons/fa";

import "../../styles/portal/PortalTopbar.css";

const PortalTopbar = ({ toggleSidebar }) => {

  return (

    <div className="portal-topbar">

      {/* Left */}

      <div className="portal-topbar-left">

        <button
          className="portal-toggle-btn"
          onClick={toggleSidebar}
        >

          <FaBars />

        </button>

        <div className="portal-page-title">

          <FaSun className="portal-sun-icon" />

          <div>

            <h3>
              Customer Portal
            </h3>

            <span>
              Welcome Back
            </span>

          </div>

        </div>

      </div>

      {/* Right */}

      <div className="portal-topbar-right">

        {/* Search */}

        <div className="portal-search-box">

          <FaSearch className="portal-search-icon" />

          <input
            type="text"
            placeholder="Search projects, reports..."
          />

        </div>

        {/* Notification */}

        <div className="portal-notification-box">

          <FaBell />

          <span className="portal-notification-count">
            4
          </span>

        </div>

        {/* Profile */}

        <div className="portal-profile-box">

          <FaUserCircle className="portal-profile-icon" />

          <div className="portal-profile-info">

            <span className="portal-profile-name">
              Rahul Sharma
            </span>

            <span className="portal-profile-role">
              Customer
            </span>

          </div>

        </div>

      </div>

    </div>

  );
};

export default PortalTopbar;