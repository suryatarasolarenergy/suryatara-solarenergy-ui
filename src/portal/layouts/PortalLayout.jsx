import React, { useState } from "react";

import { Outlet } from "react-router-dom";

import PortalSidebar from "../components/PortalSidebar";
import PortalTopbar from "../components/PortalTopbar";

import "../../styles/portal/PortalLayout.css";

const PortalLayout = () => {

  const [collapsed, setCollapsed] = useState(false);

  const toggleSidebar = () => {
    setCollapsed(!collapsed);
  };

  return (

    <div className="portal-layout">

      {/* Sidebar */}

      <PortalSidebar collapsed={collapsed} />

      {/* Main Content */}

      <div className="portal-main">

        {/* Topbar */}

        <PortalTopbar
          toggleSidebar={toggleSidebar}
        />

        {/* Page Content */}

        <div className="portal-content">

          <Outlet />

        </div>

      </div>

    </div>

  );
};

export default PortalLayout;