import React from "react";

import {
  FaProjectDiagram,
  FaUsers,
  FaSolarPanel,
  FaMapMarkedAlt
} from "react-icons/fa";

import "../../styles/admin/Dashboard.css";


const Dashboard = () => {

  /* Dummy Data */

  const dashboardCards = [
    {
      title: "Projects",
      value: 12,
      icon: <FaProjectDiagram />,
      bg: "project-card"
    },
    {
      title: "Customers",
      value: 25,
      icon: <FaUsers />,
      bg: "customer-card"
    },
    {
      title: "Solar Plants",
      value: 8,
      icon: <FaSolarPanel />,
      bg: "solar-card"
    },
    {
      title: "Sites",
      value: 18,
      icon: <FaMapMarkedAlt />,
      bg: "site-card"
    }
  ];

  const recentProjects = [
    {
      project: "Solar Project Alpha",
      location: "Indore",
      capacity: "5 KW",
      status: "Completed"
    },
    {
      project: "Green Energy Site",
      location: "Bhopal",
      capacity: "10 KW",
      status: "In Progress"
    },
    {
      project: "Rooftop Solar",
      location: "Jaipur",
      capacity: "3 KW",
      status: "Pending"
    }
  ];

  return (

    <div className="dashboard-container">

      {/* Top Heading */}

      <div className="dashboard-header">

        <div>

          <h2>
            Dashboard
          </h2>

          <p>
            Welcome back, Admin 👋
          </p>

        </div>

      </div>

      {/* Cards */}

      <div className="dashboard-cards">

        {
          dashboardCards.map((item,index)=>(
            <div
              className={`dashboard-card ${item.bg}`}
              key={index}
            >

              <div className="card-icon">
                {item.icon}
              </div>

              <div>

                <h5>
                  {item.title}
                </h5>

                <h2>
                  {item.value}
                </h2>

              </div>

            </div>
          ))
        }

      </div>

      {/* Bottom Section */}

      <div className="dashboard-bottom">

        {/* Recent Projects */}

        <div className="recent-projects">

          <div className="section-header">

            <h4>
              Recent Projects
            </h4>

          </div>

          <table className="project-table">

            <thead>

              <tr>

                <th>Project</th>
                <th>Location</th>
                <th>Capacity</th>
                <th>Status</th>

              </tr>

            </thead>

            <tbody>

              {
                recentProjects.map((item,index)=>(
                  <tr key={index}>

                    <td>{item.project}</td>

                    <td>{item.location}</td>

                    <td>{item.capacity}</td>

                    <td>

                      <span className={`status ${item.status.toLowerCase().replace(" ","-")}`}>

                        {item.status}

                      </span>

                    </td>

                  </tr>
                ))
              }

            </tbody>

          </table>

        </div>

        {/* Right Side */}

        <div className="dashboard-side-box">

          <h4>
            Quick Info
          </h4>

          <div className="info-item">

            <span>Total Revenue</span>

            <strong>₹ 2,45,000</strong>

          </div>

          <div className="info-item">

            <span>Completed Projects</span>

            <strong>7</strong>

          </div>

          <div className="info-item">

            <span>Pending Projects</span>

            <strong>3</strong>

          </div>

          <div className="info-item">

            <span>Active Sites</span>

            <strong>5</strong>

          </div>

        </div>

      </div>

    </div>

  );
};

export default Dashboard;