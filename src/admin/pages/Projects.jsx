import { version } from "react";
import React, { useState } from "react";

import {
  FaPlus,
  FaMapMarkerAlt,
  FaSolarPanel,
  FaTimes,
  FaEye,
  FaEdit
} from "react-icons/fa";

import "../../styles/admin/Projects.css";


const Projects = () => {

  /* Projects State */

  const [projects, setProjects] = useState([
    {
      id: 1,
      name: "Solar Plant Alpha",
      location: "Indore",
      capacity: "5 KW",
      status: "Completed"
    },
    {
      id: 2,
      name: "Green Energy Project",
      location: "Bhopal",
      capacity: "10 KW",
      status: "In Progress"
    },
    {
      id: 3,
      name: "Rooftop Solar",
      location: "Jaipur",
      capacity: "3 KW",
      status: "Pending"
    }
  ]);

  /* Add / Edit Modal */

  const [showModal, setShowModal] = useState(false);

  /* View Modal */

  const [showViewModal, setShowViewModal] = useState(false);

  /* Selected Project */

  const [selectedProject, setSelectedProject] = useState(null);

  /* Edit Project Id */

  const [editProjectId, setEditProjectId] = useState(null);

  /* Form Data */

  const [formData, setFormData] = useState({
    name: "",
    location: "",
    capacity: "",
    status: "Pending"
  });

  /* Handle Change */

  const handleChange = (e) => {

    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value
    });
  };

  /* Open Add Modal */

  const openAddModal = () => {

    setEditProjectId(null);

    setFormData({
      name: "",
      location: "",
      capacity: "",
      status: "Pending"
    });

    setShowModal(true);
  };

  /* Add / Update */

  const handleSaveProject = () => {

    if (
      !formData.name ||
      !formData.location ||
      !formData.capacity
    ) {
      alert("Please fill all fields");
      return;
    }

    /* Update */

    if (editProjectId) {

      const updatedProjects = projects.map((project) =>

        project.id === editProjectId
          ? {
            ...project,
            ...formData
          }
          : project
      );

      setProjects(updatedProjects);

      setEditProjectId(null);
    }

    /* Add */

    else {

      const newProject = {
        id: Date.now(),
        ...formData
      };

      setProjects([
        ...projects,
        newProject
      ]);
    }

    /* Reset */

    setFormData({
      name: "",
      location: "",
      capacity: "",
      status: "Pending"
    });

    setShowModal(false);
  };

  /* View */

  const handleView = (project) => {

    setSelectedProject(project);

    setShowViewModal(true);
  };

  /* Edit */

  const handleEdit = (project) => {

    setEditProjectId(project.id);

    setFormData({
      name: project.name,
      location: project.location,
      capacity: project.capacity,
      status: project.status
    });

    setShowModal(true);
  };

  return (

    <div className="projects-page">

      {/* Header */}

      <div className="projects-header">

        <div>

          <h2>
            Projects
          </h2>

          <p>
            Manage all solar projects
          </p>

        </div>

        <button
          className="add-project-btn"
          onClick={openAddModal}
        >

          <FaPlus />

          Add Project

        </button>

      </div>

      {/* Grid */}

      <div className="projects-grid">

        {
          projects.map((project) => (

            <div
              className="project-card"
              key={project.id}
            >

              {/* Top */}

              <div className="project-card-top">

                <div className="project-icon">

                  <FaSolarPanel />

                </div>

                <span
                  className={`project-status ${project.status.toLowerCase().replace(" ", "-")}`}
                >

                  {project.status}

                </span>

              </div>

              {/* Content */}

              <h4>
                {project.name}
              </h4>

              <div className="project-info">

                <p>

                  <FaMapMarkerAlt />

                  {project.location}

                </p>

                <p>

                  Capacity :
                  <strong>
                    {project.capacity}
                  </strong>

                </p>

              </div>

              {/* Footer */}

              <div className="project-footer">

                <button
                  className="view-btn"
                  onClick={() => handleView(project)}
                >

                  <FaEye />

                  View

                </button>

                <button
                  className="edit-btn"
                  onClick={() => handleEdit(project)}
                >

                  <FaEdit />

                  Edit

                </button>

              </div>

            </div>

          ))
        }

      </div>

      {/* Add / Edit Modal */}

      {
        showModal && (

          <div className="project-modal-overlay">

            <div className="project-modal">

              {/* Header */}

              <div className="project-modal-header">

                <h3>

                  {
                    editProjectId
                      ?
                      "Edit Project"
                      :
                      "Add New Project"
                  }

                </h3>

                <button
                  className="close-modal-btn"
                  onClick={() => setShowModal(false)}
                >

                  <FaTimes />

                </button>

              </div>

              {/* Form */}

              <div className="project-form">

                <div className="form-group">

                  <label>
                    Project Name
                  </label>

                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter project name"
                  />

                </div>

                <div className="form-group">

                  <label>
                    Location
                  </label>

                  <input
                    type="text"
                    name="location"
                    value={formData.location}
                    onChange={handleChange}
                    placeholder="Enter location"
                  />

                </div>

                <div className="form-group">

                  <label>
                    Capacity
                  </label>

                  <input
                    type="text"
                    name="capacity"
                    value={formData.capacity}
                    onChange={handleChange}
                    placeholder="Ex : 10 KW"
                  />

                </div>

                <div className="form-group">

                  <label>
                    Status
                  </label>

                  <select
                    name="status"
                    value={formData.status}
                    onChange={handleChange}
                  >

                    <option>
                      Pending
                    </option>

                    <option>
                      In Progress
                    </option>

                    <option>
                      Completed
                    </option>

                  </select>

                </div>

                {/* Buttons */}

                <div className="modal-buttons">

                  <button
                    className="cancel-btn"
                    onClick={() => setShowModal(false)}
                  >

                    Cancel

                  </button>

                  <button
                    className="save-btn"
                    onClick={handleSaveProject}
                  >

                    {
                      editProjectId
                        ?
                        "Update Project"
                        :
                        "Save Project"
                    }

                  </button>

                </div>

              </div>

            </div>

          </div>

        )
      }

      {/* View Modal */}

      {
        showViewModal && selectedProject && (

          <div className="project-modal-overlay">

            <div className="project-modal view-project-modal">

              {/* Header */}

              <div className="project-modal-header">

                <h3>
                  Project Details
                </h3>

                <button
                  className="close-modal-btn"
                  onClick={() => setShowViewModal(false)}
                >

                  <FaTimes />

                </button>

              </div>

              {/* Details */}

              <div className="view-project-content">

                <div className="view-item">

                  <span>
                    Project Name
                  </span>

                  <strong>
                    {selectedProject.name}
                  </strong>

                </div>

                <div className="view-item">

                  <span>
                    Location
                  </span>

                  <strong>
                    {selectedProject.location}
                  </strong>

                </div>

                <div className="view-item">

                  <span>
                    Capacity
                  </span>

                  <strong>
                    {selectedProject.capacity}
                  </strong>

                </div>

                <div className="view-item">

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

export default Projects;