import React from "react";

import {
  FaSolarPanel,
  FaBolt,
  FaFileInvoiceDollar,
  FaTools,
  FaArrowUp,
  FaMapMarkerAlt,
  FaDownload
} from "react-icons/fa";

import "../../styles/portal/CustomerDashboard.css";

const CustomerDashboard = () => {

  /* Dummy Data */

  const myProjects = [
    {
      id: 1,
      name: "Home Rooftop Solar",
      location: "Indore",
      capacity: "5 KW",
      status: "Running"
    },
    {
      id: 2,
      name: "Factory Solar Plant",
      location: "Bhopal",
      capacity: "15 KW",
      status: "Maintenance"
    }
  ];

  const reports = [
    {
      id: 1,
      name: "Monthly Generation Report"
    },
    {
      id: 2,
      name: "Electricity Savings Report"
    }
  ];

  return (

    <div className="customer-dashboard-page">

      {/* Welcome */}

      <div className="customer-dashboard-banner">

        <div>

          <h2>
            Welcome Back, Rahul 👋
          </h2>

          <p>
            Monitor your solar projects, reports and generation performance.
          </p>

        </div>

        <button>

          <FaDownload />

          Download Report

        </button>

      </div>

      {/* Top Cards */}

      <div className="customer-dashboard-cards">

        <div className="customer-dashboard-card">

          <div className="dashboard-card-icon yellow">

            <FaSolarPanel />

          </div>

          <div>

            <h4>
              Total Plants
            </h4>

            <h2>
              02
            </h2>

          </div>

        </div>

        <div className="customer-dashboard-card">

          <div className="dashboard-card-icon blue">

            <FaBolt />

          </div>

          <div>

            <h4>
              Today's Generation
            </h4>

            <h2>
              124 kWh
            </h2>

          </div>

        </div>

        <div className="customer-dashboard-card">

          <div className="dashboard-card-icon green">

            <FaArrowUp />

          </div>

          <div>

            <h4>
              Total Savings
            </h4>

            <h2>
              ₹18,500
            </h2>

          </div>

        </div>

        <div className="customer-dashboard-card">

          <div className="dashboard-card-icon red">

            <FaTools />

          </div>

          <div>

            <h4>
              Service Status
            </h4>

            <h2>
              Active
            </h2>

          </div>

        </div>

      </div>

      {/* Main Grid */}

      <div className="customer-dashboard-grid">

        {/* Projects */}

        <div className="dashboard-section">

          <div className="dashboard-section-header">

            <h3>
              My Projects
            </h3>

          </div>

          <div className="dashboard-projects-list">

            {
              myProjects.map((project)=>(

                <div
                  className="dashboard-project-card"
                  key={project.id}
                >

                  <div className="dashboard-project-icon">

                    <FaSolarPanel />

                  </div>

                  <div className="dashboard-project-content">

                    <h4>
                      {project.name}
                    </h4>

                    <p>

                      <FaMapMarkerAlt />

                      {project.location}

                    </p>

                    <span>
                      Capacity : {project.capacity}
                    </span>

                  </div>

                  <div
                    className={`dashboard-project-status ${project.status.toLowerCase()}`}
                  >

                    {project.status}

                  </div>

                </div>

              ))
            }

          </div>

        </div>

        {/* Reports */}

        <div className="dashboard-section">

          <div className="dashboard-section-header">

            <h3>
              Recent Reports
            </h3>

          </div>

          <div className="dashboard-reports-list">

            {
              reports.map((report)=>(

                <div
                  className="dashboard-report-card"
                  key={report.id}
                >

                  <div className="dashboard-report-left">

                    <div className="dashboard-report-icon">

                      <FaFileInvoiceDollar />

                    </div>

                    <div>

                      <h4>
                        {report.name}
                      </h4>

                      <span>
                        PDF Report
                      </span>

                    </div>

                  </div>

                  <button>

                    <FaDownload />

                  </button>

                </div>

              ))
            }

          </div>

        </div>

      </div>

    </div>

  );
};

export default CustomerDashboard;