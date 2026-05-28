import React, { useState } from "react";

import {
  FaSolarPanel,
  FaMapMarkerAlt,
  FaBolt,
  FaEye,
  FaTools,
  FaTimes
} from "react-icons/fa";

import "../../styles/portal/MyProjects.css";

const MyProjects = () => {

  /* Dummy Data */

  const [projects] = useState([
    {
      id: 1,
      name: "Home Rooftop Solar",
      location: "Indore",
      capacity: "5 KW",
      generation: "125 Units",
      status: "Running",
      installationDate: "12 Jan 2026",
      inverter: "Growatt 5KW",
      panels: "Adani Mono PERC"
    },
    {
      id: 2,
      name: "Factory Solar Plant",
      location: "Bhopal",
      capacity: "15 KW",
      generation: "480 Units",
      status: "Maintenance",
      installationDate: "08 Feb 2026",
      inverter: "Sungrow 15KW",
      panels: "Waaree Solar"
    },
    {
      id: 3,
      name: "Commercial Solar Plant",
      location: "Jaipur",
      capacity: "25 KW",
      generation: "820 Units",
      status: "Running",
      installationDate: "22 Mar 2026",
      inverter: "Huawei 25KW",
      panels: "Vikram Solar"
    }
  ]);

  /* Modal */

  const [selectedProject, setSelectedProject] = useState(null);

  const openViewModal = (project) => {
    setSelectedProject(project);
  };

  const closeViewModal = () => {
    setSelectedProject(null);
  };

  return (

    <div className="myprojects-page">

      {/* Header */}

      <div className="myprojects-header">

        <div>

          <h2>
            My Projects
          </h2>

          <p>
            View and monitor your installed solar projects
          </p>

        </div>

      </div>

      {/* Grid */}

      <div className="myprojects-grid">

        {
          projects.map((project)=>(

            <div
              className="myproject-card"
              key={project.id}
            >

              {/* Top */}

              <div className="myproject-top">

                <div className="myproject-icon">

                  <FaSolarPanel />

                </div>

                <span
                  className={`myproject-status ${project.status.toLowerCase()}`}
                >

                  {project.status}

                </span>

              </div>

              {/* Name */}

              <h3>
                {project.name}
              </h3>

              {/* Info */}

              <div className="myproject-info">

                <p>

                  <FaMapMarkerAlt />

                  {project.location}

                </p>

                <p>

                  <FaBolt />

                  Capacity :
                  <strong>
                    {project.capacity}
                  </strong>

                </p>

                <p>

                  <FaTools />

                  Generation :
                  <strong>
                    {project.generation}
                  </strong>

                </p>

              </div>

              {/* Footer */}

              <div className="myproject-footer">

                <button
                  onClick={() => openViewModal(project)}
                >

                  <FaEye />

                  View Details

                </button>

              </div>

            </div>

          ))
        }

      </div>

      {/* View Modal */}

      {
        selectedProject && (

          <div className="myproject-modal-overlay">

            <div className="myproject-modal">

              {/* Top */}

              <div className="myproject-modal-header">

                <h3>
                  Project Details
                </h3>

                <button
                  onClick={closeViewModal}
                >

                  <FaTimes />

                </button>

              </div>

              {/* Body */}

              <div className="myproject-modal-body">

                <div className="myproject-detail-item">

                  <span>
                    Project Name
                  </span>

                  <strong>
                    {selectedProject.name}
                  </strong>

                </div>

                <div className="myproject-detail-item">

                  <span>
                    Location
                  </span>

                  <strong>
                    {selectedProject.location}
                  </strong>

                </div>

                <div className="myproject-detail-item">

                  <span>
                    Capacity
                  </span>

                  <strong>
                    {selectedProject.capacity}
                  </strong>

                </div>

                <div className="myproject-detail-item">

                  <span>
                    Generation
                  </span>

                  <strong>
                    {selectedProject.generation}
                  </strong>

                </div>

                <div className="myproject-detail-item">

                  <span>
                    Installation Date
                  </span>

                  <strong>
                    {selectedProject.installationDate}
                  </strong>

                </div>

                <div className="myproject-detail-item">

                  <span>
                    Inverter
                  </span>

                  <strong>
                    {selectedProject.inverter}
                  </strong>

                </div>

                <div className="myproject-detail-item">

                  <span>
                    Solar Panels
                  </span>

                  <strong>
                    {selectedProject.panels}
                  </strong>

                </div>

                <div className="myproject-detail-item">

                  <span>
                    Status
                  </span>

                  <strong>
                    {selectedProject.status}
                  </strong>

                </div>

              </div>

            </div>

          </div>

        )
      }

    </div>

  );
};

export default MyProjects;