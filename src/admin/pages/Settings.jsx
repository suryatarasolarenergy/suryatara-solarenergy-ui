import React, { useState } from "react";

import {
  FaUserCog,
  FaBell,
  FaLock,
  FaPalette,
  FaSave
} from "react-icons/fa";

import "../../styles/admin/Settings.css";


const Settings = () => {

  /* Dummy State */

  const [settings,setSettings] = useState({
    companyName : "Suryatara Solar Energy",
    email : "admin@suryatara.com",
    notifications : true,
    darkMode : false,
    password : "123456"
  });

  /* Handle Change */

  const handleChange = (e) => {

    const {name,value,type,checked} = e.target;

    setSettings({
      ...settings,
      [name]:
        type === "checkbox"
        ? checked
        : value
    });
  };

  return (

    <div className="settings-page">

      {/* Header */}

      <div className="settings-header">

        <div>

          <h2>
            Settings
          </h2>

          <p>
            Manage application settings
          </p>

        </div>

      </div>

      {/* Grid */}

      <div className="settings-grid">

        {/* Profile Settings */}

        <div className="settings-card">

          <div className="settings-card-header">

            <FaUserCog />

            <h4>
              Company Settings
            </h4>

          </div>

          <div className="settings-form-group">

            <label>
              Company Name
            </label>

            <input
              type="text"
              name="companyName"
              value={settings.companyName}
              onChange={handleChange}
            />

          </div>

          <div className="settings-form-group">

            <label>
              Email Address
            </label>

            <input
              type="email"
              name="email"
              value={settings.email}
              onChange={handleChange}
            />

          </div>

        </div>

        {/* Notification Settings */}

        <div className="settings-card">

          <div className="settings-card-header">

            <FaBell />

            <h4>
              Notifications
            </h4>

          </div>

          <div className="toggle-row">

            <span>
              Enable Notifications
            </span>

            <label className="switch">

              <input
                type="checkbox"
                name="notifications"
                checked={settings.notifications}
                onChange={handleChange}
              />

              <span className="slider"></span>

            </label>

          </div>

        </div>

        {/* Security */}

        <div className="settings-card">

          <div className="settings-card-header">

            <FaLock />

            <h4>
              Security
            </h4>

          </div>

          <div className="settings-form-group">

            <label>
              Password
            </label>

            <input
              type="password"
              name="password"
              value={settings.password}
              onChange={handleChange}
            />

          </div>

        </div>

        {/* Theme */}

        <div className="settings-card">

          <div className="settings-card-header">

            <FaPalette />

            <h4>
              Appearance
            </h4>

          </div>

          <div className="toggle-row">

            <span>
              Dark Mode
            </span>

            <label className="switch">

              <input
                type="checkbox"
                name="darkMode"
                checked={settings.darkMode}
                onChange={handleChange}
              />

              <span className="slider"></span>

            </label>

          </div>

        </div>

      </div>

      {/* Save Button */}

      <div className="save-settings-section">

        <button className="save-settings-btn">

          <FaSave />

          Save Settings

        </button>

      </div>

    </div>

  );
};

export default Settings;