import { useState } from "react";

import { Outlet } from "react-router-dom";

import Sidebar from "../components/Sidebar";
import Topbar from "../components/Topbar";

const AdminLayout = () => {

  const [collapsed,setCollapsed] = useState(false);

  const toggleSidebar = () => {
    setCollapsed(!collapsed);
  };

  return (

    <div style={{display:"flex"}}>

      <Sidebar collapsed={collapsed} />

      <div
        style={{
          flex:1,
          background:"#f4f7fb",
          minHeight:"100vh"
        }}
      >

        <Topbar
          toggleSidebar={toggleSidebar}
        />

        <div style={{padding:"25px"}}>

          <Outlet />

        </div>

      </div>

    </div>

  );
};

export default AdminLayout;