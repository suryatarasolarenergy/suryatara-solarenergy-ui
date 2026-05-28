import React, { useState } from "react";

import {
  FaUserCircle,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaPlus,
  FaTimes,
  FaEye,
  FaEdit
} from "react-icons/fa";

import "../../styles/admin/Customers.css";


const Customers = () => {

  /* Customers State */

  const [customers, setCustomers] = useState([
    {
      id: 1,
      name: "Rajesh Sharma",
      email: "rajesh@gmail.com",
      phone: "+91 9876543210",
      city: "Indore",
      status: "Active"
    },
    {
      id: 2,
      name: "Amit Verma",
      email: "amit@gmail.com",
      phone: "+91 9876543211",
      city: "Bhopal",
      status: "Pending"
    },
    {
      id: 3,
      name: "Sanjay Singh",
      email: "sanjay@gmail.com",
      phone: "+91 9876543212",
      city: "Jaipur",
      status: "Inactive"
    }
  ]);

  /* Modal States */

  const [showModal, setShowModal] = useState(false);

  const [showViewModal, setShowViewModal] = useState(false);

  /* Selected Customer */

  const [selectedCustomer, setSelectedCustomer] = useState(null);

  /* Edit Customer */

  const [editCustomerId, setEditCustomerId] = useState(null);

  /* Form Data */

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    city: "",
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

    setEditCustomerId(null);

    setFormData({
      name: "",
      email: "",
      phone: "",
      city: "",
      status: "Pending"
    });

    setShowModal(true);
  };

  /* Save Customer */

  const handleSaveCustomer = () => {

    if (
      !formData.name ||
      !formData.email ||
      !formData.phone ||
      !formData.city
    ) {
      alert("Please fill all fields");
      return;
    }

    /* Update */

    if (editCustomerId) {

      const updatedCustomers = customers.map((customer) =>

        customer.id === editCustomerId
          ? {
            ...customer,
            ...formData
          }
          : customer
      );

      setCustomers(updatedCustomers);

      setEditCustomerId(null);
    }

    /* Add */

    else {

      const newCustomer = {
        id: Date.now(),
        ...formData
      };

      setCustomers([
        ...customers,
        newCustomer
      ]);
    }

    /* Reset */

    setFormData({
      name: "",
      email: "",
      phone: "",
      city: "",
      status: "Pending"
    });

    setShowModal(false);
  };

  /* View */

  const handleView = (customer) => {

    setSelectedCustomer(customer);

    setShowViewModal(true);
  };

  /* Edit */

  const handleEdit = (customer) => {

    setEditCustomerId(customer.id);

    setFormData({
      name: customer.name,
      email: customer.email,
      phone: customer.phone,
      city: customer.city,
      status: customer.status
    });

    setShowModal(true);
  };

  return (

    <div className="customers-page">

      {/* Header */}

      <div className="customers-header">

        <div>

          <h2>
            Customers
          </h2>

          <p>
            Manage all customer details
          </p>

        </div>

        <button
          className="add-customer-btn"
          onClick={openAddModal}
        >

          <FaPlus />

          Add Customer

        </button>

      </div>

      {/* Grid */}

      <div className="customers-grid">

        {
          customers.map((customer) => (

            <div
              className="customer-card"
              key={customer.id}
            >

              {/* Top */}

              <div className="customer-top">

                <div className="customer-avatar">

                  <FaUserCircle />

                </div>

                <span className={`customer-status ${customer.status.toLowerCase()}`}>

                  {customer.status}

                </span>

              </div>

              {/* Name */}

              <h3>
                {customer.name}
              </h3>

              {/* Info */}

              <div className="customer-info">

                <p>

                  <FaEnvelope />

                  {customer.email}

                </p>

                <p>

                  <FaPhoneAlt />

                  {customer.phone}

                </p>

                <p>

                  <FaMapMarkerAlt />

                  {customer.city}

                </p>

              </div>

              {/* Footer */}

              <div className="customer-footer">

                <button
                  className="view-btn"
                  onClick={() => handleView(customer)}
                >

                  <FaEye />

                  View

                </button>

                <button
                  className="edit-btn"
                  onClick={() => handleEdit(customer)}
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

          <div className="customer-modal-overlay">

            <div className="customer-modal">

              {/* Header */}

              <div className="customer-modal-header">

                <h3>

                  {
                    editCustomerId
                      ?
                      "Edit Customer"
                      :
                      "Add New Customer"
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

              <div className="customer-form">

                <div className="form-group">

                  <label>
                    Customer Name
                  </label>

                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter customer name"
                  />

                </div>

                <div className="form-group">

                  <label>
                    Email
                  </label>

                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Enter email"
                  />

                </div>

                <div className="form-group">

                  <label>
                    Phone
                  </label>

                  <input
                    type="text"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Enter phone number"
                  />

                </div>

                <div className="form-group">

                  <label>
                    City
                  </label>

                  <input
                    type="text"
                    name="city"
                    value={formData.city}
                    onChange={handleChange}
                    placeholder="Enter city"
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
                      Inactive
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
                    onClick={handleSaveCustomer}
                  >

                    {
                      editCustomerId
                        ?
                        "Update Customer"
                        :
                        "Save Customer"
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
        showViewModal && selectedCustomer && (

          <div className="customer-modal-overlay">

            <div className="customer-modal view-customer-modal">

              {/* Header */}

              <div className="customer-modal-header">

                <h3>
                  Customer Details
                </h3>

                <button
                  className="close-modal-btn"
                  onClick={() => setShowViewModal(false)}
                >

                  <FaTimes />

                </button>

              </div>

              {/* Details */}

              <div className="view-customer-content">

                <div className="view-item">

                  <span>
                    Customer Name
                  </span>

                  <strong>
                    {selectedCustomer.name}
                  </strong>

                </div>

                <div className="view-item">

                  <span>
                    Email
                  </span>

                  <strong>
                    {selectedCustomer.email}
                  </strong>

                </div>

                <div className="view-item">

                  <span>
                    Phone
                  </span>

                  <strong>
                    {selectedCustomer.phone}
                  </strong>

                </div>

                <div className="view-item">

                  <span>
                    City
                  </span>

                  <strong>
                    {selectedCustomer.city}
                  </strong>

                </div>

                <div className="view-item">

                  <span>
                    Status
                  </span>

                  <strong>
                    {selectedCustomer.status}
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

export default Customers;