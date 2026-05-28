import React from "react";

import { Outlet } from "react-router-dom";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import "../../styles/website/WebsiteLayout.css";

const WebsiteLayout = () => {

  return (

    <div className="website-layout">

      {/* Navbar */}

      <Navbar />

      {/* Main Content */}

      <main className="website-main">

        <Outlet />

      </main>

      {/* Footer */}

      <Footer />

    </div>

  );
};

export default WebsiteLayout;