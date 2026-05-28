import React from "react";

import {
  FaHome,
  FaProjectDiagram,
  FaChartLine,
  FaFileAlt,
  FaFolderOpen,
  FaMoneyBillWave,
  FaUserCircle,
  FaSignOutAlt
} from "react-icons/fa";

import { NavLink } from "react-router-dom";

import "../../styles/portal/PortalSidebar.css";

const PortalSidebar = ({ collapsed }) => {

  const menus = [
    {
      name: "Dashboard",
      path: "/portal",
      icon: <FaHome />
    },
    {
      name: "My Projects",
      path: "/portal/my-projects",
      icon: <FaProjectDiagram />
    },
    {
      name: "Monitoring",
      path: "/portal/monitoring",
      icon: <FaChartLine />
    },
    {
      name: "My Reports",
      path: "/portal/my-reports",
      icon: <FaFileAlt />
    },
    {
      name: "My Documents",
      path: "/portal/my-documents",
      icon: <FaFolderOpen />
    },
    {
      name: "Billing",
      path: "/portal/billing",
      icon: <FaMoneyBillWave />
    },
    {
      name: "Profile",
      path: "/portal/profile",
      icon: <FaUserCircle />
    }
  ];

  return (

    <div className={`portal-sidebar ${collapsed ? "collapsed" : ""}`}>

      {/* Logo */}

      <div className="portal-sidebar-logo">

        <div className="portal-logo-icon">
          ☀
        </div>

        {!collapsed && (

          <div className="portal-logo-text">

            <h3>
              SURYATARA
            </h3>

            <span>
              CUSTOMER PORTAL
            </span>

          </div>

        )}

      </div>

      {/* Menu */}

      <div className="portal-sidebar-menu">

        {
          menus.map((menu, index)=>(

            <NavLink
              key={index}
              to={menu.path}
              className={({ isActive }) =>
                isActive
                  ?
                  "portal-menu-item active"
                  :
                  "portal-menu-item"
              }
            >

              <span className="portal-menu-icon">
                {menu.icon}
              </span>

              {!collapsed && (

                <span className="portal-menu-title">
                  {menu.name}
                </span>

              )}

            </NavLink>

          ))
        }

      </div>

      {/* Footer */}

      <div className="portal-sidebar-footer">

        <div className="portal-user-avatar">
          R
        </div>

        {!collapsed && (

          <div className="portal-user-details">

            <div className="portal-user-name">
              राहुल शर्मा
            </div>

            <div className="portal-user-email">
              rahul@gmail.com
            </div>

          </div>

        )}

      </div>

      {/* Logout */}

      <div className="portal-logout-section">

        <button className="portal-logout-btn">

          <FaSignOutAlt />

          {!collapsed && (
            <span>
              Logout
            </span>
          )}

        </button>

      </div>

    </div>

  );
};

export default PortalSidebar;