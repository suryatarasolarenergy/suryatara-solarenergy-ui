import React, { useState } from "react";

import {
  FaBars,
  FaTimes
} from "react-icons/fa";

import { NavLink } from "react-router-dom";
import Topbar from "./Topbar";

import "../../styles/website/Navbar.css";

const Navbar = () => {

  const [mobileMenu,setMobileMenu] = useState(false);

  const navItems = [
    {
      name: "Home",
      path: "/"
    },
    {
      name: "About",
      path: "/about"
    },
    {
      name: "Services",
      path: "/services"
    },
    {
      name: "Projects",
      path: "/projects-gallery"
    },
    {
      name: "Reviews",
      path: "/reviews"
    },
    {
      name: "Contact",
      path: "/contact"
    }
  ];

  return (
    <>
    
    <Topbar />

    <header className="website-navbar">

      {/* Logo */}

      <div className="website-logo">

        <div className="website-logo-icon">
          ☀
        </div>

        <div className="website-logo-text">

          <h2>
            SURYATARA
          </h2>

          <span>
            SOLAR ENERGY
          </span>

        </div>

      </div>

      {/* Desktop Menu */}

      <nav className={`website-nav ${mobileMenu ? "active" : ""}`}>

        {
          navItems.map((item,index)=>(
            <NavLink
              key={index}
              to={item.path}
              className="website-nav-link"
              onClick={()=>setMobileMenu(false)}
            >
              {item.name}
            </NavLink>
          ))
        }

        {/* <NavLink
          to="/get-quote"
          className="quote-btn"
        >
          Get Quote
        </NavLink> */}

        <div className="website-nav-buttons">

  <NavLink
    to="/get-quote"
    className="quote-btn"
  >
    Get Quote
  </NavLink>

  <NavLink
    to="/login"
    className="login-nav-btn"
  >
    Login
  </NavLink>

</div>

      </nav>

      {/* Mobile Button */}

      <button
        className="mobile-menu-btn"
        onClick={()=>setMobileMenu(!mobileMenu)}
      >

        {
          mobileMenu
          ?
          <FaTimes />
          :
          <FaBars />
        }

      </button>

    </header>
</>
  );
};

export default Navbar;