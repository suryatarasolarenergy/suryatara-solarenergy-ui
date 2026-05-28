import React from "react";

import {
  FaSolarPanel,
  FaIndustry,
  FaWarehouse,
  FaTools,
  FaBolt,
  FaMapMarkedAlt,
  FaArrowRight
} from "react-icons/fa";

import "./../../styles/website/Services.css";

const Services = () => {

  /* Dummy Services Data */

  const servicesData = [
    {
      id: 1,
      icon: <FaSolarPanel />,
      title: "Residential Rooftop Solar",
      description:
        "High efficiency rooftop solar systems for homes with subsidy support and complete installation.",
      features: [
        "Net Metering",
        "Subsidy Support",
        "Installation & Maintenance"
      ]
    },
    {
      id: 2,
      icon: <FaIndustry />,
      title: "Industrial Solar Solutions",
      description:
        "Large scale industrial solar systems designed to reduce electricity costs and improve energy efficiency.",
      features: [
        "Factory Installation",
        "Energy Saving",
        "Custom Plant Design"
      ]
    },
    {
      id: 3,
      icon: <FaWarehouse />,
      title: "Commercial Solar Systems",
      description:
        "Solar solutions for offices, malls, schools and commercial buildings with monitoring support.",
      features: [
        "Commercial Projects",
        "Online Monitoring",
        "AMC Services"
      ]
    },
    {
      id: 4,
      icon: <FaBolt />,
      title: "Solar EPC Services",
      description:
        "Complete engineering, procurement and construction services for solar projects.",
      features: [
        "Site Survey",
        "Project Planning",
        "Execution"
      ]
    },
    {
      id: 5,
      icon: <FaMapMarkedAlt />,
      title: "GIS & Monitoring",
      description:
        "Advanced GIS mapping and real time monitoring solutions for solar plants and installations.",
      features: [
        "GIS Mapping",
        "GeoServer",
        "Live Monitoring"
      ]
    },
    {
      id: 6,
      icon: <FaTools />,
      title: "Maintenance & Support",
      description:
        "Complete maintenance support including cleaning, servicing and performance optimization.",
      features: [
        "Plant Maintenance",
        "Performance Check",
        "Technical Support"
      ]
    }
  ];

  return (

    <div className="services-page">

      {/* Hero Section */}

      <section className="services-hero-section">

        <div className="services-hero-overlay">

          <div className="services-hero-content">

            <h1>
              Our Solar Services
            </h1>

            <p>
              Complete solar energy solutions for residential,
              commercial and industrial projects.
            </p>

          </div>

        </div>

      </section>

      {/* Services Section */}

      <section className="services-section">

        <div className="services-header">

          <span>
            WHAT WE OFFER
          </span>

          <h2>
            Smart Solar Energy Services
          </h2>

          <p>
            We provide complete solar installation,
            monitoring and maintenance solutions.
          </p>

        </div>

        <div className="services-grid">

          {
            servicesData.map((service)=>(
              <div
                className="service-card"
                key={service.id}
              >

                <div className="service-icon">

                  {service.icon}

                </div>

                <h3>
                  {service.title}
                </h3>

                <p>
                  {service.description}
                </p>

                <ul>

                  {
                    service.features.map((feature,index)=>(
                      <li key={index}>
                        {feature}
                      </li>
                    ))
                  }

                </ul>

                <button>

                  Learn More

                  <FaArrowRight />

                </button>

              </div>
            ))
          }

        </div>

      </section>

      {/* Process Section */}

      <section className="services-process-section">

        <div className="services-header">

          <span>
            WORK PROCESS
          </span>

          <h2>
            How We Work
          </h2>

        </div>

        <div className="process-grid">

          <div className="process-card">

            <div className="process-number">
              01
            </div>

            <h3>
              Site Survey
            </h3>

            <p>
              Our team visits the location and analyzes
              energy requirements and roof conditions.
            </p>

          </div>

          <div className="process-card">

            <div className="process-number">
              02
            </div>

            <h3>
              Design & Planning
            </h3>

            <p>
              We create customized solar system designs
              based on your requirement and budget.
            </p>

          </div>

          <div className="process-card">

            <div className="process-number">
              03
            </div>

            <h3>
              Installation
            </h3>

            <p>
              Professional installation with complete
              safety and quality standards.
            </p>

          </div>

          <div className="process-card">

            <div className="process-number">
              04
            </div>

            <h3>
              Monitoring & Support
            </h3>

            <p>
              Real time monitoring and maintenance support
              for maximum efficiency.
            </p>

          </div>

        </div>

      </section>

      {/* CTA Section */}

      <section className="services-cta-section">

        <div className="services-cta-content">

          <h2>
            Ready To Switch To Solar Energy?
          </h2>

          <p>
            Contact Suryatara Solar Energy today
            and get your custom solar solution.
          </p>

          <button>
            Get Free Consultation
          </button>

        </div>

      </section>

    </div>

  );
};

export default Services;