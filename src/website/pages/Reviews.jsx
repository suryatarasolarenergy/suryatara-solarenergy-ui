import React, { useState } from "react";

import {
  FaStar,
  FaQuoteLeft,
  FaUserCircle,
  FaPaperPlane
} from "react-icons/fa";

import "./../../styles/website/Reviews.css";

const Reviews = () => {

  /* Dummy Reviews */

  const [reviews, setReviews] = useState([
    {
      id: 1,
      name: "Rahul Sharma",
      location: "Indore",
      rating: 5,
      review:
        "Excellent solar installation service. Very professional team and fast installation process."
    },
    {
      id: 2,
      name: "Amit Verma",
      location: "Bhopal",
      rating: 4,
      review:
        "Good experience with Suryatara Solar Energy. Electricity bill reduced significantly."
    },
    {
      id: 3,
      name: "Priya Singh",
      location: "Jaipur",
      rating: 5,
      review:
        "Highly recommended for rooftop solar projects. Great support and maintenance."
    }
  ]);

  /* Form State */

  const [formData, setFormData] = useState({
    name: "",
    location: "",
    rating: "5",
    review: ""
  });

  /* Handle Change */

  const handleChange = (e) => {

    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value
    });
  };

  /* Add Review */

  const handleSubmit = (e) => {

    e.preventDefault();

    const newReview = {
      id: Date.now(),
      name: formData.name,
      location: formData.location,
      rating: Number(formData.rating),
      review: formData.review
    };

    setReviews([newReview, ...reviews]);

    setFormData({
      name: "",
      location: "",
      rating: "5",
      review: ""
    });
  };

  /* Render Stars */

  const renderStars = (count) => {

    return [...Array(count)].map((_, index)=>(
      <FaStar key={index} />
    ));
  };

  return (

    <div className="reviews-page">

      {/* Hero */}

      <div className="reviews-hero">

        <div className="reviews-overlay">

          <h1>
            Customer Reviews
          </h1>

          <p>
            Trusted by homeowners, industries,
            and businesses across India.
          </p>

        </div>

      </div>

      {/* Main */}

      <div className="reviews-container">

        {/* Left */}

        <div className="reviews-left">

          <span className="reviews-tag">
            SURYATARA SOLAR ENERGY
          </span>

          <h2>
            What Our Customers Say
          </h2>

          <p>
            Real customer experiences from solar
            installations completed by our expert team.
          </p>

          {/* Review Cards */}

          <div className="reviews-grid">

            {
              reviews.map((item)=>(
                <div
                  className="review-card"
                  key={item.id}
                >

                  <FaQuoteLeft className="quote-icon" />

                  <div className="review-top">

                    <div className="review-avatar">

                      <FaUserCircle />

                    </div>

                    <div>

                      <h4>
                        {item.name}
                      </h4>

                      <span>
                        {item.location}
                      </span>

                    </div>

                  </div>

                  <div className="review-stars">

                    {renderStars(item.rating)}

                  </div>

                  <p className="review-text">

                    {item.review}

                  </p>

                </div>
              ))
            }

          </div>

        </div>

        {/* Right */}

        <div className="review-form-section">

          <h3>
            Share Your Experience
          </h3>

          <p>
            Submit your review about our solar
            installation service.
          </p>

          <form onSubmit={handleSubmit}>

            {/* Name */}

            <div className="review-input-box">

              <label>
                Full Name
              </label>

              <input
                type="text"
                name="name"
                placeholder="Enter full name"
                value={formData.name}
                onChange={handleChange}
                required
              />

            </div>

            {/* Location */}

            <div className="review-input-box">

              <label>
                City
              </label>

              <input
                type="text"
                name="location"
                placeholder="Enter city"
                value={formData.location}
                onChange={handleChange}
                required
              />

            </div>

            {/* Rating */}

            <div className="review-input-box">

              <label>
                Rating
              </label>

              <select
                name="rating"
                value={formData.rating}
                onChange={handleChange}
              >

                <option value="5">
                  5 Star
                </option>

                <option value="4">
                  4 Star
                </option>

                <option value="3">
                  3 Star
                </option>

                <option value="2">
                  2 Star
                </option>

                <option value="1">
                  1 Star
                </option>

              </select>

            </div>

            {/* Review */}

            <div className="review-input-box">

              <label>
                Review
              </label>

              <textarea
                rows="5"
                name="review"
                placeholder="Write your review..."
                value={formData.review}
                onChange={handleChange}
                required
              />

            </div>

            {/* Button */}

            <button
              type="submit"
              className="review-submit-btn"
            >

              <FaPaperPlane />

              Submit Review

            </button>

          </form>

        </div>

      </div>

    </div>

  );
};

export default Reviews;