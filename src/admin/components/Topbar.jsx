import React from "react";

import {
  FaBars,
  FaBell,
  FaSearch,
  FaUserCircle
} from "react-icons/fa";

import "../../styles/admin/Topbar.css";


const Topbar = ({ toggleSidebar }) => {

  return (

    <div className="topbar">

      {/* Left Section */}

      <div className="topbar-left">

        <button
          className="menu-toggle-btn"
          onClick={toggleSidebar}
        >
          <FaBars />
        </button>

        <h3 className="topbar-title">
          Suryatara Solar Energy
        </h3>

      </div>

      {/* Right Section */}

      <div className="topbar-right">

        {/* Search */}

        <div className="search-box">

          <FaSearch className="search-icon" />

          <input
            type="text"
            placeholder="Search..."
          />

        </div>

        {/* Notification */}

        <div className="notification-box">

          <FaBell />

          <span className="notification-count">
            3
          </span>

        </div>

        {/* User */}

        <div className="profile-box">

          <FaUserCircle className="profile-icon" />

          <div className="profile-info">

            <span className="profile-name">
              Admin
            </span>

            <span className="profile-role">
              Administrator
            </span>

          </div>

        </div>

      </div>

    </div>

  );
};

export default Topbar;