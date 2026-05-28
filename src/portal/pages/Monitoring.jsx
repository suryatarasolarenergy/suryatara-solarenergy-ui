import React, { useState } from "react";

import {
  FaSolarPanel,
  FaBolt,
  FaTemperatureHigh,
  FaBatteryHalf,
  FaSyncAlt
} from "react-icons/fa";

import "./../../styles/portal/Monitoring.css";

const Monitoring = () => {

  /* Dummy Live Data */

  const [plants] = useState([
    {
      id: 1,
      name: "Indore Solar Plant",
      power: "12.5 KW",
      todayGeneration: "85 Units",
      battery: "78%",
      temperature: "34°C",
      status: "Online"
    },
    {
      id: 2,
      name: "Bhopal Rooftop Plant",
      power: "8.2 KW",
      todayGeneration: "54 Units",
      battery: "65%",
      temperature: "31°C",
      status: "Online"
    },
    {
      id: 3,
      name: "Jaipur Solar Station",
      power: "0 KW",
      todayGeneration: "0 Units",
      battery: "12%",
      temperature: "40°C",
      status: "Offline"
    }
  ]);

  /* Refresh */

  const handleRefresh = () => {
    alert("Live monitoring data refreshed.");
  };

  return (

    <div className="portal-monitoring-page">

      {/* Header */}

      <div className="portal-monitoring-header">

        <div>

          <h2>
            Plant Monitoring
          </h2>

          <p>
            Monitor live solar plant performance
          </p>

        </div>

        <button
          className="refresh-btn"
          onClick={handleRefresh}
        >

          <FaSyncAlt />

          Refresh

        </button>

      </div>

      {/* Summary Cards */}

      <div className="monitoring-summary-grid">

        <div className="monitoring-summary-card">

          <div className="summary-icon yellow">

            <FaSolarPanel />

          </div>

          <div>

            <h4>
              Total Plants
            </h4>

            <h2>
              03
            </h2>

          </div>

        </div>

        <div className="monitoring-summary-card">

          <div className="summary-icon green">

            <FaBolt />

          </div>

          <div>

            <h4>
              Live Generation
            </h4>

            <h2>
              20.7 KW
            </h2>

          </div>

        </div>

        <div className="monitoring-summary-card">

          <div className="summary-icon blue">

            <FaBatteryHalf />

          </div>

          <div>

            <h4>
              Avg Battery
            </h4>

            <h2>
              51%
            </h2>

          </div>

        </div>

      </div>

      {/* Monitoring Cards */}

      <div className="monitoring-plants-grid">

        {
          plants.map((plant)=>(
            <div
              className="monitoring-plant-card"
              key={plant.id}
            >

              {/* Top */}

              <div className="monitoring-card-top">

                <div className="plant-monitor-icon">

                  <FaSolarPanel />

                </div>

                <span
                  className={`monitoring-status ${plant.status.toLowerCase()}`}
                >
                  {plant.status}
                </span>

              </div>

              {/* Name */}

              <h3>
                {plant.name}
              </h3>

              {/* Details */}

              <div className="monitoring-details">

                <div className="monitoring-detail-item">

                  <FaBolt />

                  <span>
                    Power :
                    <strong>
                      {plant.power}
                    </strong>
                  </span>

                </div>

                <div className="monitoring-detail-item">

                  <FaSolarPanel />

                  <span>
                    Generation :
                    <strong>
                      {plant.todayGeneration}
                    </strong>
                  </span>

                </div>

                <div className="monitoring-detail-item">

                  <FaBatteryHalf />

                  <span>
                    Battery :
                    <strong>
                      {plant.battery}
                    </strong>
                  </span>

                </div>

                <div className="monitoring-detail-item">

                  <FaTemperatureHigh />

                  <span>
                    Temperature :
                    <strong>
                      {plant.temperature}
                    </strong>
                  </span>

                </div>

              </div>

              {/* Progress */}

              <div className="generation-progress-wrapper">

                <div className="generation-progress-label">

                  <span>
                    Efficiency
                  </span>

                  <span>
                    78%
                  </span>

                </div>

                <div className="generation-progress-bar">

                  <div className="generation-progress-fill">

                  </div>

                </div>

              </div>

            </div>
          ))
        }

      </div>

    </div>

  );
};

export default Monitoring;