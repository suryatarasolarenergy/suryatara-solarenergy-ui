import React from "react";

import {
  FaSolarPanel,
  FaBolt,
  FaBatteryHalf,
  FaExclamationTriangle,
  FaMapMarkerAlt
} from "react-icons/fa";

import "../../styles/admin/Monitoring.css";


const Monitoring = () => {

  /* Dummy Data */

  const monitoringCards = [
    {
      title: "Total Generation",
      value: "1250 kWh",
      icon: <FaBolt />,
      className: "generation-card"
    },
    {
      title: "Active Plants",
      value: "08",
      icon: <FaSolarPanel />,
      className: "active-card"
    },
    {
      title: "Battery Status",
      value: "92%",
      icon: <FaBatteryHalf />,
      className: "battery-card"
    },
    {
      title: "Alerts",
      value: "03",
      icon: <FaExclamationTriangle />,
      className: "alert-card"
    }
  ];

  const plantStatus = [
    {
      id: 1,
      plant: "Indore Solar Plant",
      location: "Indore",
      generation: "210 kWh",
      status: "Running"
    },
    {
      id: 2,
      plant: "Bhopal Solar Site",
      location: "Bhopal",
      generation: "140 kWh",
      status: "Maintenance"
    },
    {
      id: 3,
      plant: "Jaipur Green Energy",
      location: "Jaipur",
      generation: "0 kWh",
      status: "Offline"
    }
  ];

  return (

    <div className="monitoring-page">

      {/* Header */}

      <div className="monitoring-header">

        <div>

          <h2>
            Monitoring
          </h2>

          <p>
            Live monitoring of solar plants
          </p>

        </div>

      </div>

      {/* Cards */}

      <div className="monitoring-cards">

        {
          monitoringCards.map((card,index)=>(
            <div
              className={`monitoring-card ${card.className}`}
              key={index}
            >

              <div className="monitoring-icon">

                {card.icon}

              </div>

              <div>

                <h5>
                  {card.title}
                </h5>

                <h2>
                  {card.value}
                </h2>

              </div>

            </div>
          ))
        }

      </div>

      {/* Table Section */}

      <div className="monitoring-table-section">

        <div className="table-header">

          <h4>
            Plant Monitoring Status
          </h4>

        </div>

        <div className="table-responsive">

          <table className="monitoring-table">

            <thead>

              <tr>

                <th>Plant</th>
                <th>Location</th>
                <th>Generation</th>
                <th>Status</th>

              </tr>

            </thead>

            <tbody>

              {
                plantStatus.map((plant)=>(
                  <tr key={plant.id}>

                    <td>

                      <div className="plant-name">

                        <FaSolarPanel />

                        {plant.plant}

                      </div>

                    </td>

                    <td>

                      <div className="location-text">

                        <FaMapMarkerAlt />

                        {plant.location}

                      </div>

                    </td>

                    <td>

                      {plant.generation}

                    </td>

                    <td>

                      <span className={`monitoring-status ${plant.status.toLowerCase()}`}>

                        {plant.status}

                      </span>

                    </td>

                  </tr>
                ))
              }

            </tbody>

          </table>

        </div>

      </div>

    </div>

  );
};

export default Monitoring;