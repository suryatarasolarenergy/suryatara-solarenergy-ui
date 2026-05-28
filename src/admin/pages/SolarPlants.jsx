import React, { useState } from "react";

import {
  FaSolarPanel,
  FaMapMarkerAlt,
  FaBolt,
  FaPlus,
  FaTools,
  FaTimes,
  FaEye,
  FaEdit
} from "react-icons/fa";

import "../../styles/admin/SolarPlants.css";


const SolarPlants = () => {

  /* Plants State */

  const [solarPlants, setSolarPlants] = useState([
    {
      id: 1,
      name: "Indore Solar Plant",
      location: "Indore",
      capacity: "25 KW",
      generation: "120 Units",
      status: "Active"
    },
    {
      id: 2,
      name: "Bhopal Solar Station",
      location: "Bhopal",
      capacity: "15 KW",
      generation: "85 Units",
      status: "Maintenance"
    },
    {
      id: 3,
      name: "Jaipur Green Energy",
      location: "Jaipur",
      capacity: "40 KW",
      generation: "210 Units",
      status: "Offline"
    }
  ]);

  /* Modal States */

  const [showModal, setShowModal] = useState(false);

  const [showViewModal, setShowViewModal] = useState(false);

  /* Selected Plant */

  const [selectedPlant, setSelectedPlant] = useState(null);

  /* Edit Id */

  const [editPlantId, setEditPlantId] = useState(null);

  /* Form Data */

  const [formData, setFormData] = useState({
    name: "",
    location: "",
    capacity: "",
    generation: "",
    status: "Active"
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

    setEditPlantId(null);

    setFormData({
      name: "",
      location: "",
      capacity: "",
      generation: "",
      status: "Active"
    });

    setShowModal(true);
  };

  /* Save Plant */

  const handleSavePlant = () => {

    if (
      !formData.name ||
      !formData.location ||
      !formData.capacity ||
      !formData.generation
    ) {
      alert("Please fill all fields");
      return;
    }

    /* Update */

    if (editPlantId) {

      const updatedPlants = solarPlants.map((plant) =>

        plant.id === editPlantId
          ? {
            ...plant,
            ...formData
          }
          : plant
      );

      setSolarPlants(updatedPlants);

      setEditPlantId(null);
    }

    /* Add */

    else {

      const newPlant = {
        id: Date.now(),
        ...formData
      };

      setSolarPlants([
        ...solarPlants,
        newPlant
      ]);
    }

    /* Reset */

    setFormData({
      name: "",
      location: "",
      capacity: "",
      generation: "",
      status: "Active"
    });

    setShowModal(false);
  };

  /* View */

  const handleView = (plant) => {

    setSelectedPlant(plant);

    setShowViewModal(true);
  };

  /* Edit */

  const handleEdit = (plant) => {

    setEditPlantId(plant.id);

    setFormData({
      name: plant.name,
      location: plant.location,
      capacity: plant.capacity,
      generation: plant.generation,
      status: plant.status
    });

    setShowModal(true);
  };

  return (

    <div className="solarplants-page">

      {/* Header */}

      <div className="solarplants-header">

        <div>

          <h2>
            Solar Plants
          </h2>

          <p>
            Monitor and manage all solar plants
          </p>

        </div>

        <button
          className="add-plant-btn"
          onClick={openAddModal}
        >

          <FaPlus />

          Add Plant

        </button>

      </div>

      {/* Grid */}

      <div className="solarplants-grid">

        {
          solarPlants.map((plant) => (

            <div
              className="solarplant-card"
              key={plant.id}
            >

              {/* Top */}

              <div className="solarplant-top">

                <div className="solarplant-icon">

                  <FaSolarPanel />

                </div>

                <span className={`plant-status ${plant.status.toLowerCase()}`}>

                  {plant.status}

                </span>

              </div>

              {/* Name */}

              <h3>
                {plant.name}
              </h3>

              {/* Info */}

              <div className="solarplant-info">

                <p>

                  <FaMapMarkerAlt />

                  {plant.location}

                </p>

                <p>

                  <FaBolt />

                  Capacity :
                  <strong>
                    {plant.capacity}
                  </strong>

                </p>

                <p>

                  <FaTools />

                  Generation :
                  <strong>
                    {plant.generation}
                  </strong>

                </p>

              </div>

              {/* Footer */}

              <div className="solarplant-footer">

                <button
                  className="view-btn"
                  onClick={() => handleView(plant)}
                >

                  <FaEye />

                  View

                </button>

                <button
                  className="edit-btn"
                  onClick={() => handleEdit(plant)}
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

          <div className="plant-modal-overlay">

            <div className="plant-modal">

              {/* Header */}

              <div className="plant-modal-header">

                <h3>

                  {
                    editPlantId
                      ?
                      "Edit Solar Plant"
                      :
                      "Add Solar Plant"
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

              <div className="plant-form">

                <div className="form-group">

                  <label>
                    Plant Name
                  </label>

                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter plant name"
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
                    placeholder="Ex : 25 KW"
                  />

                </div>

                <div className="form-group">

                  <label>
                    Generation
                  </label>

                  <input
                    type="text"
                    name="generation"
                    value={formData.generation}
                    onChange={handleChange}
                    placeholder="Ex : 120 Units"
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
                      Active
                    </option>

                    <option>
                      Maintenance
                    </option>

                    <option>
                      Offline
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
                    onClick={handleSavePlant}
                  >

                    {
                      editPlantId
                        ?
                        "Update Plant"
                        :
                        "Save Plant"
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
        showViewModal && selectedPlant && (

          <div className="plant-modal-overlay">

            <div className="plant-modal view-plant-modal">

              {/* Header */}

              <div className="plant-modal-header">

                <h3>
                  Plant Details
                </h3>

                <button
                  className="close-modal-btn"
                  onClick={() => setShowViewModal(false)}
                >

                  <FaTimes />

                </button>

              </div>

              {/* Content */}

              <div className="view-plant-content">

                <div className="view-item">

                  <span>
                    Plant Name
                  </span>

                  <strong>
                    {selectedPlant.name}
                  </strong>

                </div>

                <div className="view-item">

                  <span>
                    Location
                  </span>

                  <strong>
                    {selectedPlant.location}
                  </strong>

                </div>

                <div className="view-item">

                  <span>
                    Capacity
                  </span>

                  <strong>
                    {selectedPlant.capacity}
                  </strong>

                </div>

                <div className="view-item">

                  <span>
                    Generation
                  </span>

                  <strong>
                    {selectedPlant.generation}
                  </strong>

                </div>

                <div className="view-item">

                  <span>
                    Status
                  </span>

                  <strong>
                    {selectedPlant.status}
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

export default SolarPlants;