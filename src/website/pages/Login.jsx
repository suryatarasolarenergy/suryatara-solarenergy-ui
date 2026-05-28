import React, { useState } from "react";

import {
  FaUser,
  FaLock,
  FaSolarPanel
} from "react-icons/fa";

import { useNavigate } from "react-router-dom";

import "../../styles/website/Login.css";

const Login = () => {

  const navigate = useNavigate();

  const [loginData, setLoginData] = useState({
    username: "",
    password: ""
  });

  const [error, setError] = useState("");

  /* =========================
     STATIC USERS
  ========================= */

  const users = [
    {
      username: "admin",
      password: "admin123",
      role: "admin"
    },
    {
      username: "customer",
      password: "customer123",
      role: "portal"
    }
  ];

  /* =========================
     INPUT CHANGE
  ========================= */

  const handleChange = (e) => {

    setLoginData({
      ...loginData,
      [e.target.name]: e.target.value
    });

  };

  /* =========================
     LOGIN
  ========================= */

  const handleLogin = (e) => {

    e.preventDefault();

    const matchedUser = users.find(
      (user)=>
        user.username === loginData.username
        &&
        user.password === loginData.password
    );

    if(!matchedUser){

      setError("Invalid Username or Password");

      return;
    }

    /* =========================
       ROLE BASED LOGIN
    ========================= */

    if(matchedUser.role === "admin"){

      navigate("/admin");

    }
    else if(matchedUser.role === "portal"){

      navigate("/portal");

    }

  };

  return (

    <div className="login-page">

      <div className="login-container">

        {/* LEFT */}

        <div className="login-left">

          <div className="login-brand">

            <div className="login-logo">

              <FaSolarPanel />

            </div>

            <h1>
              SURYATARA
            </h1>

            <p>
              Solar Energy Management System
            </p>

          </div>

          <div className="login-info">

            <h2>
              Welcome Back
            </h2>

            <p>
              Login to manage solar projects,
              reports, monitoring and documents.
            </p>

          </div>

        </div>

        {/* RIGHT */}

        <div className="login-right">

          <form
            className="login-form"
            onSubmit={handleLogin}
          >

            <h2>
              Login Account
            </h2>

            <p>
              Enter your credentials
            </p>

            {/* ERROR */}

            {
              error &&
              <div className="login-error">
                {error}
              </div>
            }

            {/* USERNAME */}

            <div className="login-input-group">

              <label>
                Username
              </label>

              <div className="login-input-box">

                <FaUser />

                <input
                  type="text"
                  name="username"
                  placeholder="Enter username"
                  value={loginData.username}
                  onChange={handleChange}
                />

              </div>

            </div>

            {/* PASSWORD */}

            <div className="login-input-group">

              <label>
                Password
              </label>

              <div className="login-input-box">

                <FaLock />

                <input
                  type="password"
                  name="password"
                  placeholder="Enter password"
                  value={loginData.password}
                  onChange={handleChange}
                />

              </div>

            </div>

            {/* BUTTON */}

            <button
              type="submit"
              className="login-btn"
            >
              Login
            </button>

            {/* DEMO */}

            <div className="demo-credentials">

              <h4>
                Demo Credentials
              </h4>

              <p>
                Admin :
                <strong>
                  admin / admin123
                </strong>
              </p>

              <p>
                Customer :
                <strong>
                  customer / customer123
                </strong>
              </p>

            </div>

          </form>

        </div>

      </div>

    </div>

  );
};

export default Login;