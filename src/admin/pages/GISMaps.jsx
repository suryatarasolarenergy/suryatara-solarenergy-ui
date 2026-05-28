import React from "react";

import {
  MapContainer,
  TileLayer,
  Marker,
  Popup
} from "react-leaflet";

import L from "leaflet";

import {
  FaMapMarkedAlt,
  FaLayerGroup,
  FaSatellite,
  FaDrawPolygon
} from "react-icons/fa";

import "../../styles/admin/GISMaps.css";


/* Fix Marker Icon */

import markerIcon2x from "leaflet/dist/images/marker-icon-2x.png";
import markerIcon from "leaflet/dist/images/marker-icon.png";
import markerShadow from "leaflet/dist/images/marker-shadow.png";

delete L.Icon.Default.prototype._getIconUrl;

L.Icon.Default.mergeOptions({
  iconRetinaUrl: markerIcon2x,
  iconUrl: markerIcon,
  shadowUrl: markerShadow
});

const GISMaps = () => {

  /* Dummy Site Data */

  const sites = [
    {
      id: 1,
      name: "Indore Solar Plant",
      lat: 22.7196,
      lng: 75.8577,
      status: "Active"
    },
    {
      id: 2,
      name: "Bhopal Solar Site",
      lat: 23.2599,
      lng: 77.4126,
      status: "Maintenance"
    },
    {
      id: 3,
      name: "Jaipur Green Energy",
      lat: 26.9124,
      lng: 75.7873,
      status: "Offline"
    }
  ];

  return (

    <div className="gismap-page">

      {/* Header */}

      <div className="gismap-header">

        <div>

          <h2>
            GIS Maps
          </h2>

          <p>
            OpenStreetMap integration for solar sites
          </p>

        </div>

      </div>

      {/* Top Cards */}

      <div className="gismap-cards">

        <div className="gismap-card">

          <div className="map-card-icon blue">

            <FaMapMarkedAlt />

          </div>

          <div>

            <h5>
              Total Sites
            </h5>

            <h3>
              12
            </h3>

          </div>

        </div>

        <div className="gismap-card">

          <div className="map-card-icon green">

            <FaLayerGroup />

          </div>

          <div>

            <h5>
              Active Layers
            </h5>

            <h3>
              5
            </h3>

          </div>

        </div>

        <div className="gismap-card">

          <div className="map-card-icon orange">

            <FaSatellite />

          </div>

          <div>

            <h5>
              Satellite View
            </h5>

            <h3>
              Enabled
            </h3>

          </div>

        </div>

        <div className="gismap-card">

          <div className="map-card-icon purple">

            <FaDrawPolygon />

          </div>

          <div>

            <h5>
              Draw Tools
            </h5>

            <h3>
              Ready
            </h3>

          </div>

        </div>

      </div>

      {/* Map Section */}

      <div className="map-section">

        {/* Left Panel */}

        <div className="map-sidebar">

          <h4>
            Solar Sites
          </h4>

          {
            sites.map((site)=>(
              <div
                className="site-item"
                key={site.id}
              >

                <div>

                  <h5>
                    {site.name}
                  </h5>

                  <p>
                    {site.status}
                  </p>

                </div>

                <span className={`site-status ${site.status.toLowerCase()}`}>

                  {site.status}

                </span>

              </div>
            ))
          }

        </div>

        {/* Map */}

        <div className="map-container-wrapper">

          <MapContainer
            center={[23.2599,77.4126]}
            zoom={5}
            scrollWheelZoom={true}
            className="leaflet-map"
          >

            {/* OpenStreetMap */}

            <TileLayer
              attribution='&copy; OpenStreetMap contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />

            {/* Markers */}

            {
              sites.map((site)=>(
                <Marker
                  position={[site.lat,site.lng]}
                  key={site.id}
                >

                  <Popup>

                    <div>

                      <strong>
                        {site.name}
                      </strong>

                      <br />

                      Status :
                      {site.status}

                    </div>

                  </Popup>

                </Marker>
              ))
            }

          </MapContainer>

        </div>

      </div>

    </div>

  );
};

export default GISMaps;