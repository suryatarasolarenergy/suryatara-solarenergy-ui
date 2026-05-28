import React from "react";

import {
  FaSolarPanel,
  FaUsers,
  FaAward,
  FaLeaf,
  FaCheckCircle,
  FaBolt
} from "react-icons/fa";

import "../../styles/website/About.css";

const About = () => {

  /* Stats */

  const stats = [
    {
      id: 1,
      icon: <FaSolarPanel />,
      value: "500+",
      label: "Solar Installations"
    },
    {
      id: 2,
      icon: <FaUsers />,
      value: "1200+",
      label: "Happy Customers"
    },
    {
      id: 3,
      icon: <FaAward />,
      value: "8+",
      label: "Years Experience"
    },
    {
      id: 4,
      icon: <FaBolt />,
      value: "5 MW+",
      label: "Energy Generated"
    }
  ];

  /* Features */

  const features = [
    {
      id: 1,
      title: "Professional Installation"
    },
    {
      id: 2,
      title: "Government Subsidy Support"
    },
    {
      id: 3,
      title: "25 Years Panel Warranty"
    },
    {
      id: 4,
      title: "Monitoring & Maintenance"
    },
    {
      id: 5,
      title: "High Efficiency Systems"
    },
    {
      id: 6,
      title: "Affordable Solar Solutions"
    }
  ];

  /* Team */

  const team = [
    {
      id: 1,
      name: "Shailendra Singh",
      role: "Founder & Director",
      image:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1200&auto=format&fit=crop"
    },
    {
      id: 2,
      name: "Rahul Verma",
      role: "Project Manager",
      image:
        "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=1200&auto=format&fit=crop"
    },
    {
      id: 3,
      name: "Amit Sharma",
      role: "Solar Engineer",
      image:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1200&auto=format&fit=crop"
    }
  ];

  return (

    <div className="about-page">

      {/* Hero */}

      <section className="about-hero">

        <div className="about-overlay"></div>

        <div className="about-hero-content">

          <span>
            ABOUT SURYATARA SOLAR ENERGY
          </span>

          <h1>
            Building A Sustainable
            <br />
            Solar Future
          </h1>

          <p>
            We provide reliable rooftop and commercial solar
            installation services with advanced technology,
            expert support and long term energy solutions.
          </p>

        </div>

      </section>

      {/* Company Section */}

      <section className="company-section">

        <div className="company-image">

          <img
            src="https://images.unsplash.com/photo-1466611653911-95081537e5b7?q=80&w=1200&auto=format&fit=crop"
            alt="solar-company"
          />

        </div>

        <div className="company-content">

          <span>
            WHO WE ARE
          </span>

          <h2>
            Trusted Solar Installation Company In India
          </h2>

          <p>
            Suryatara Solar Energy helps homes,
            industries and businesses switch to clean,
            affordable and renewable solar energy.
          </p>

          <p>
            Our mission is to reduce electricity costs
            and create a greener future through smart
            solar solutions and advanced energy systems.
          </p>

          <div className="company-features">

            {
              features.map((item)=>(
                <div
                  className="company-feature-item"
                  key={item.id}
                >

                  <FaCheckCircle />

                  {item.title}

                </div>
              ))
            }

          </div>

        </div>

      </section>

      {/* Stats */}

      <section className="about-stats-section">

        <div className="about-stats-grid">

          {
            stats.map((item)=>(
              <div
                className="about-stat-card"
                key={item.id}
              >

                <div className="about-stat-icon">

                  {item.icon}

                </div>

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

      </section>

      {/* Vision */}

      <section className="vision-section">

        <div className="vision-left">

          <span>
            OUR VISION
          </span>

          <h2>
            Clean Energy For Every Home & Business
          </h2>

          <p>
            We aim to make solar energy accessible
            and affordable across India through
            innovative solar technology and expert services.
          </p>

          <div className="vision-points">

            <div className="vision-point">

              <FaLeaf />

              Eco Friendly Energy Solutions

            </div>

            <div className="vision-point">

              <FaBolt />

              Smart Power Saving Systems

            </div>

          </div>

        </div>

        <div className="vision-right">

          <img
            src="https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?q=80&w=1200&auto=format&fit=crop"
            alt="vision"
          />

        </div>

      </section>

      {/* Team */}

      <section className="team-section">

        <div className="section-title">

          <span>
            OUR TEAM
          </span>

          <h2>
            Meet Our Experts
          </h2>

        </div>

        <div className="team-grid">

          {
            team.map((member)=>(
              <div
                className="team-card"
                key={member.id}
              >

                <img
                  src={member.image}
                  alt={member.name}
                />

                <div className="team-info">

                  <h3>
                    {member.name}
                  </h3>

                  <p>
                    {member.role}
                  </p>

                </div>

              </div>
            ))
          }

        </div>

      </section>

    </div>

  );
};

export default About;