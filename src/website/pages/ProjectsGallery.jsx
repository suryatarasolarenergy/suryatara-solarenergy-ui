import React from "react";

import {
  FaMapMarkerAlt,
  FaSolarPanel,
  FaBolt,
  FaArrowRight
} from "react-icons/fa";

import "./../../styles/website/ProjectsGallery.css";

const ProjectsGallery = () => {

  /* Dummy Projects Data */

  const projectsData = [
    {
      id: 1,
      image:
        "https://images.unsplash.com/photo-1509391366360-2e959784a276?q=80&w=1200&auto=format&fit=crop",
      title: "Residential Rooftop Solar",
      location: "Indore, Madhya Pradesh",
      capacity: "5 KW",
      description:
        "Residential rooftop solar installation with subsidy support and net metering."
    },
    {
      id: 2,
      image:
        "https://images.unsplash.com/photo-1497440001374-f26997328c1b?q=80&w=1200&auto=format&fit=crop",
      title: "Industrial Solar Plant",
      location: "Jaipur, Rajasthan",
      capacity: "250 KW",
      description:
        "Industrial solar power plant designed for high electricity savings."
    },
    {
      id: 3,
      image:
        "https://images.unsplash.com/photo-1466611653911-95081537e5b7?q=80&w=1200&auto=format&fit=crop",
      title: "Commercial Solar Project",
      location: "Delhi NCR",
      capacity: "50 KW",
      description:
        "Commercial office solar system with smart monitoring dashboard."
    },
    {
      id: 4,
      image:
        "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?q=80&w=1200&auto=format&fit=crop",
      title: "School Solar Installation",
      location: "Lucknow, Uttar Pradesh",
      capacity: "20 KW",
      description:
        "Solar energy system for educational campus with battery backup."
    },
    {
      id: 5,
      image:
        "https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?q=80&w=1200&auto=format&fit=crop",
      title: "Farm Solar Pump Project",
      location: "Haryana",
      capacity: "10 KW",
      description:
        "Solar powered irrigation and water pumping system for agriculture."
    },
    {
      id: 6,
      image:
        "https://images.unsplash.com/photo-1489515217757-5fd1be406fef?q=80&w=1200&auto=format&fit=crop",
      title: "Utility Scale Solar Plant",
      location: "Gujarat",
      capacity: "1 MW",
      description:
        "Large utility scale solar project with real time GIS monitoring."
    }
  ];

  return (

    <div className="projects-gallery-page">

      {/* Hero Section */}

      <section className="projects-gallery-hero">

        <div className="projects-gallery-overlay">

          <div className="projects-gallery-content">

            <h1>
              Our Solar Projects
            </h1>

            <p>
              Explore our completed solar installations,
              industrial projects and smart energy solutions.
            </p>

          </div>

        </div>

      </section>

      {/* Projects Section */}

      <section className="projects-gallery-section">

        <div className="projects-gallery-header">

          <span>
            PROJECT SHOWCASE
          </span>

          <h2>
            Successfully Delivered Projects
          </h2>

          <p>
            We provide residential, commercial and industrial
            solar installation services across India.
          </p>

        </div>

        <div className="projects-gallery-grid">

          {
            projectsData.map((project)=>(
              <div
                className="gallery-card"
                key={project.id}
              >

                {/* Image */}

                <div className="gallery-image-wrapper">

                  <img
                    src={project.image}
                    alt={project.title}
                  />

                  <div className="gallery-overlay-btn">

                    <button>
                      View Project
                    </button>

                  </div>

                </div>

                {/* Content */}

                <div className="gallery-content">

                  <div className="gallery-top-info">

                    <span>

                      <FaMapMarkerAlt />

                      {project.location}

                    </span>

                    <span>

                      <FaBolt />

                      {project.capacity}

                    </span>

                  </div>

                  <h3>
                    {project.title}
                  </h3>

                  <p>
                    {project.description}
                  </p>

                  <button className="gallery-details-btn">

                    Project Details

                    <FaArrowRight />

                  </button>

                </div>

              </div>
            ))
          }

        </div>

      </section>

      {/* Stats Section */}

      <section className="projects-stats-section">

        <div className="projects-stats-grid">

          <div className="projects-stat-card">

            <div className="projects-stat-icon">

              <FaSolarPanel />

            </div>

            <h2>
              250+
            </h2>

            <p>
              Solar Installations
            </p>

          </div>

          <div className="projects-stat-card">

            <div className="projects-stat-icon">

              <FaBolt />

            </div>

            <h2>
              5 MW+
            </h2>

            <p>
              Power Generated
            </p>

          </div>

          <div className="projects-stat-card">

            <div className="projects-stat-icon">

              <FaMapMarkerAlt />

            </div>

            <h2>
              15+
            </h2>

            <p>
              Cities Covered
            </p>

          </div>

        </div>

      </section>

    </div>

  );
};

export default ProjectsGallery;