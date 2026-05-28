import React from "react";

import {
  FaSolarPanel,
  FaBolt,
  FaLeaf,
  FaTools,
  FaArrowRight,
  FaStar
} from "react-icons/fa";

import "../../styles/website/Home.css";

const Home = () => {

  /* Hero Stats */

  const heroStats = [
    {
      id: 1,
      value: "500+",
      label: "Projects Installed"
    },
    {
      id: 2,
      value: "1200+",
      label: "Happy Customers"
    },
    {
      id: 3,
      value: "5 MW+",
      label: "Power Generated"
    }
  ];

  /* Services */

  const services = [
    {
      id: 1,
      title: "Residential Solar",
      description:
        "Complete rooftop solar installation for homes with subsidy support.",
      icon: <FaSolarPanel />
    },
    {
      id: 2,
      title: "Commercial Solar",
      description:
        "Reduce electricity bills with high performance commercial solar plants.",
      icon: <FaBolt />
    },
    {
      id: 3,
      title: "Solar Maintenance",
      description:
        "Monitoring, cleaning and maintenance for long term efficiency.",
      icon: <FaTools />
    }
  ];

  /* Why Choose */

  const whyChoose = [
    {
      id: 1,
      title: "Premium Solar Panels"
    },
    {
      id: 2,
      title: "Govt Subsidy Support"
    },
    {
      id: 3,
      title: "25 Years Performance"
    },
    {
      id: 4,
      title: "Installation Experts"
    }
  ];

  /* Projects */

  const projects = [
    {
      id: 1,
      image:
        "https://images.unsplash.com/photo-1509391366360-2e959784a276?q=80&w=1200&auto=format&fit=crop",
      title: "Residential Rooftop Solar",
      location: "Indore"
    },
    {
      id: 2,
      image:
        "https://images.unsplash.com/photo-1497440001374-f26997328c1b?q=80&w=1200&auto=format&fit=crop",
      title: "Industrial Solar Plant",
      location: "Jaipur"
    },
    {
      id: 3,
      image:
        "https://images.unsplash.com/photo-1466611653911-95081537e5b7?q=80&w=1200&auto=format&fit=crop",
      title: "Commercial Solar Project",
      location: "Delhi"
    }
  ];

  /* Reviews */

  const reviews = [
    {
      id: 1,
      name: "Rahul Sharma",
      review:
        "Excellent solar installation service and great support team."
    },
    {
      id: 2,
      name: "Amit Verma",
      review:
        "Electricity bill reduced significantly after installation."
    }
  ];

  return (

    <div className="home-page">

      {/* Hero Section */}

      <section className="hero-section">

        <div className="hero-overlay"></div>

        <div className="hero-content">

          <span className="hero-tag">
            Sustainable Solar Energy Solutions
          </span>

          <h1>
            Power Your Future
            <br />

            With Solar Energy
          </h1>

          <p>
            Smart rooftop and commercial solar installation
            services for homes, industries and businesses.
          </p>

          <div className="hero-buttons">

            <button className="primary-btn">

              Get Free Quote

              <FaArrowRight />

            </button>

            <button className="secondary-btn">

              Explore Services

            </button>

          </div>

          {/* Stats */}

          <div className="hero-stats">

            {
              heroStats.map((item)=>(
                <div
                  className="hero-stat-card"
                  key={item.id}
                >

                  <h3>
                    {item.value}
                  </h3>

                  <p>
                    {item.label}
                  </p>

                </div>
              ))
            }

          </div>

        </div>

      </section>

      {/* Services */}

      <section className="services-section">

        <div className="section-header">

          <span>
            OUR SERVICES
          </span>

          <h2>
            Solar Solutions We Provide
          </h2>

        </div>

        <div className="services-grid">

          {
            services.map((service)=>(
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

                <button>

                  Learn More

                </button>

              </div>
            ))
          }

        </div>

      </section>

      {/* Why Choose */}

      <section className="why-section">

        <div className="why-image">

          <img
            src="https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?q=80&w=1200&auto=format&fit=crop"
            alt="solar"
          />

        </div>

        <div className="why-content">

          <span>
            WHY CHOOSE US
          </span>

          <h2>
            Trusted Solar Installation Company
          </h2>

          <p>
            We provide advanced solar systems with expert
            installation and long term maintenance support.
          </p>

          <div className="why-list">

            {
              whyChoose.map((item)=>(
                <div
                  className="why-item"
                  key={item.id}
                >

                  <FaLeaf />

                  {item.title}

                </div>
              ))
            }

          </div>

        </div>

      </section>

      {/* Projects */}

      <section className="projects-section">

        <div className="section-header">

          <span>
            OUR PROJECTS
          </span>

          <h2>
            Recent Solar Installations
          </h2>

        </div>

        <div className="projects-grid-home">

          {
            projects.map((project)=>(
              <div
                className="project-home-card"
                key={project.id}
              >

                <img
                  src={project.image}
                  alt={project.title}
                />

                <div className="project-overlay">

                  <h3>
                    {project.title}
                  </h3>

                  <p>
                    {project.location}
                  </p>

                </div>

              </div>
            ))
          }

        </div>

      </section>

      {/* Reviews */}

      <section className="reviews-section">

        <div className="section-header">

          <span>
            TESTIMONIALS
          </span>

          <h2>
            What Customers Say
          </h2>

        </div>

        <div className="reviews-grid">

          {
            reviews.map((review)=>(
              <div
                className="review-card"
                key={review.id}
              >

                <div className="review-stars">

                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />

                </div>

                <p>
                  "{review.review}"
                </p>

                <h4>
                  {review.name}
                </h4>

              </div>
            ))
          }

        </div>

      </section>

      {/* CTA */}

      <section className="cta-section">

        <h2>
          Start Saving With Solar Energy Today
        </h2>

        <p>
          Contact Suryatara Solar Energy for free consultation
          and installation support.
        </p>

        <button>

          Request Free Quote

        </button>

      </section>

    </div>

  );
};

export default Home;