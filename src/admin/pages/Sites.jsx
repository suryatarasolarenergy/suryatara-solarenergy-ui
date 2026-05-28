import React, { useState } from "react";

import {
  FaMapMarkerAlt,
  FaSolarPanel,
  FaBroadcastTower,
  FaPlus,
  FaTimes,
  FaEye,
  FaEdit
} from "react-icons/fa";

import "../../styles/admin/Sites.css";


const Sites = () => {

  /* Sites State */

  const [sitesData, setSitesData] = useState([
    {
      id: 1,
      name: "Indore Solar Site",
      location: "Indore",
      type: "Ground Mounted",
      capacity: "10 KW",
      status: "Active"
    },
    {
      id: 2,
      name: "Bhopal Roof Site",
      location: "Bhopal",
      type: "Rooftop",
      capacity: "5 KW",
      status: "Maintenance"
    },
    {
      id: 3,
      name: "Jaipur Solar Field",
      location: "Jaipur",
      type: "Utility Scale",
      capacity: "20 KW",
      status: "Pending"
    }
  ]);

  /* Add / Edit Modal */

  const [showModal, setShowModal] = useState(false);

  /* View Modal */

  const [showViewModal, setShowViewModal] = useState(false);

  /* Selected Site */

  const [selectedSite, setSelectedSite] = useState(null);

  /* Edit Id */

  const [editSiteId, setEditSiteId] = useState(null);

  /* Form Data */

  const [formData, setFormData] = useState({
    name: "",
    location: "",
    type: "",
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

    setEditSiteId(null);

    setFormData({
      name: "",
      location: "",
      type: "",
      capacity: "",
      status: "Pending"
    });

    setShowModal(true);
  };

  /* Save Site */

  const handleSaveSite = () => {

    if (
      !formData.name ||
      !formData.location ||
      !formData.type ||
      !formData.capacity
    ) {
      alert("Please fill all fields");
      return;
    }

    /* Update */

    if (editSiteId) {

      const updatedSites = sitesData.map((site) =>

        site.id === editSiteId
          ? {
            ...site,
            ...formData
          }
          : site
      );

      setSitesData(updatedSites);

      setEditSiteId(null);
    }

    /* Add */

    else {

      const newSite = {
        id: Date.now(),
        ...formData
      };

      setSitesData([
        ...sitesData,
        newSite
      ]);
    }

    /* Reset */

    setFormData({
      name: "",
      location: "",
      type: "",
      capacity: "",
      status: "Pending"
    });

    setShowModal(false);
  };

  /* View */

  const handleView = (site) => {

    setSelectedSite(site);

    setShowViewModal(true);
  };

  /* Edit */

  const handleEdit = (site) => {

    setEditSiteId(site.id);

    setFormData({
      name: site.name,
      location: site.location,
      type: site.type,
      capacity: site.capacity,
      status: site.status
    });

    setShowModal(true);
  };

  return (

    <div className="sites-page">

      {/* Header */}

      <div className="sites-header">

        <div>

          <h2>
            Sites
          </h2>

          <p>
            Manage solar installation sites
          </p>

        </div>

        <button
          className="add-site-btn"
          onClick={openAddModal}
        >

          <FaPlus />

          Add Site

        </button>

      </div>

      {/* Grid */}

      <div className="sites-grid">

        {
          sitesData.map((site) => (

            <div
              className="site-card"
              key={site.id}
            >

              {/* Top */}

              <div className="site-card-top">

                <div className="site-icon">

                  <FaSolarPanel />

                </div>

                <span className={`site-status ${site.status.toLowerCase()}`}>

                  {site.status}

                </span>

              </div>

              {/* Name */}

              <h3>
                {site.name}
              </h3>

              {/* Info */}

              <div className="site-info">

                <p>

                  <FaMapMarkerAlt />

                  {site.location}

                </p>

                <p>

                  <FaBroadcastTower />

                  {site.type}

                </p>

                <p>

                  Capacity :
                  <strong>
                    {site.capacity}
                  </strong>

                </p>

              </div>

              {/* Footer */}

              <div className="site-footer">

                <button
                  className="view-btn"
                  onClick={() => handleView(site)}
                >

                  <FaEye />

                  View

                </button>

                <button
                  className="edit-btn"
                  onClick={() => handleEdit(site)}
                >

                  <FaEdit />

                  Edit

                </button>

              </div>

            </div>

          ))
        }

      </div>

      {/* Add/Edit Modal */}

      {
        showModal && (

          <div className="site-modal-overlay">

            <div className="site-modal">

              {/* Header */}

              <div className="site-modal-header">

                <h3>

                  {
                    editSiteId
                      ?
                      "Edit Site"
                      :
                      "Add New Site"
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

              <div className="site-form">

                <div className="form-group">

                  <label>
                    Site Name
                  </label>

                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter site name"
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
                    Site Type
                  </label>

                  <input
                    type="text"
                    name="type"
                    value={formData.type}
                    onChange={handleChange}
                    placeholder="Ex : Rooftop"
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
                      Active
                    </option>

                    <option>
                      Maintenance
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
                    onClick={handleSaveSite}
                  >

                    {
                      editSiteId
                        ?
                        "Update Site"
                        :
                        "Save Site"
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
        showViewModal && selectedSite && (

          <div className="site-modal-overlay">

            <div className="site-modal view-site-modal">

              {/* Header */}

              <div className="site-modal-header">

                <h3>
                  Site Details
                </h3>

                <button
                  className="close-modal-btn"
                  onClick={() => setShowViewModal(false)}
                >

                  <FaTimes />

                </button>

              </div>

              {/* Content */}

              <div className="view-site-content">

                <div className="view-item">

                  <span>
                    Site Name
                  </span>

                  <strong>
                    {selectedSite.name}
                  </strong>

                </div>

                <div className="view-item">

                  <span>
                    Location
                  </span>

                  <strong>
                    {selectedSite.location}
                  </strong>

                </div>

                <div className="view-item">

                  <span>
                    Site Type
                  </span>

                  <strong>
                    {selectedSite.type}
                  </strong>

                </div>

                <div className="view-item">

                  <span>
                    Capacity
                  </span>

                  <strong>
                    {selectedSite.capacity}
                  </strong>

                </div>

                <div className="view-item">

                  <span>
                    Status
                  </span>

                  <strong>
                    {selectedSite.status}
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

export default Sites;