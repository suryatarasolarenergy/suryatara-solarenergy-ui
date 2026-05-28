import React, { useState } from "react";

import {
  FaCalculator,
  FaSolarPanel,
  FaBolt,
  FaRupeeSign
} from "react-icons/fa";

import "./../../styles/website/EmiCalculator.css";

const EmiCalculator = () => {

  const [formData, setFormData] = useState({
    systemSize: "",
    plantCost: "",
    subsidy: "",
    interestRate: "",
    loanYears: ""
  });

  const [result, setResult] = useState(null);

  /* Handle Change */

  const handleChange = (e) => {

    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value
    });
  };

  /* EMI Calculation */

  const calculateEMI = (e) => {

    e.preventDefault();

    const plantCost = parseFloat(formData.plantCost || 0);

    const subsidy = parseFloat(formData.subsidy || 0);

    const interestRate =
      parseFloat(formData.interestRate || 0);

    const loanYears =
      parseFloat(formData.loanYears || 0);

    const finalAmount = plantCost - subsidy;

    const monthlyInterest =
      interestRate / 12 / 100;

    const months = loanYears * 12;

    const emi =
      (
        finalAmount *
        monthlyInterest *
        Math.pow(1 + monthlyInterest, months)
      ) /
      (
        Math.pow(1 + monthlyInterest, months) - 1
      );

    const totalPayment = emi * months;

    const totalInterest =
      totalPayment - finalAmount;

    setResult({
      emi: emi.toFixed(0),
      totalPayment: totalPayment.toFixed(0),
      totalInterest: totalInterest.toFixed(0),
      finalAmount: finalAmount.toFixed(0)
    });
  };

  return (

    <div className="emi-page">

      {/* Hero */}

      <div className="emi-hero">

        <div className="emi-overlay">

          <h1>
            Solar EMI Calculator
          </h1>

          <p>
            Calculate monthly EMI for your solar
            installation project instantly.
          </p>

        </div>

      </div>

      {/* Main */}

      <div className="emi-container">

        {/* Left */}

        <div className="emi-left">

          <span className="emi-tag">
            SURYATARA SOLAR ENERGY
          </span>

          <h2>
            Easy Solar Financing
          </h2>

          <p>
            Estimate your monthly EMI and plan your
            solar investment easily for residential,
            commercial, and industrial projects.
          </p>

          <div className="emi-feature-list">

            <div className="emi-feature-card">

              <FaSolarPanel className="emi-feature-icon" />

              <div>

                <h4>
                  Affordable Solar Installation
                </h4>

                <p>
                  Flexible financing plans available.
                </p>

              </div>

            </div>

            <div className="emi-feature-card">

              <FaBolt className="emi-feature-icon" />

              <div>

                <h4>
                  Lower Electricity Bills
                </h4>

                <p>
                  Save monthly electricity expenses.
                </p>

              </div>

            </div>

            <div className="emi-feature-card">

              <FaCalculator className="emi-feature-icon" />

              <div>

                <h4>
                  Instant EMI Calculation
                </h4>

                <p>
                  Quickly estimate your loan payment.
                </p>

              </div>

            </div>

          </div>

        </div>

        {/* Right */}

        <div className="emi-form-section">

          <h3>
            Calculate EMI
          </h3>

          <form onSubmit={calculateEMI}>

            {/* System Size */}

            <div className="emi-input-box">

              <label>
                Solar System Size
              </label>

              <input
                type="text"
                name="systemSize"
                placeholder="Example 5 KW"
                value={formData.systemSize}
                onChange={handleChange}
                required
              />

            </div>

            {/* Plant Cost */}

            <div className="emi-input-box">

              <label>
                Total Plant Cost (₹)
              </label>

              <input
                type="number"
                name="plantCost"
                placeholder="Example 300000"
                value={formData.plantCost}
                onChange={handleChange}
                required
              />

            </div>

            {/* Subsidy */}

            <div className="emi-input-box">

              <label>
                Government Subsidy (₹)
              </label>

              <input
                type="number"
                name="subsidy"
                placeholder="Example 78000"
                value={formData.subsidy}
                onChange={handleChange}
              />

            </div>

            {/* Interest */}

            <div className="emi-input-box">

              <label>
                Interest Rate (%)
              </label>

              <input
                type="number"
                step="0.1"
                name="interestRate"
                placeholder="Example 9"
                value={formData.interestRate}
                onChange={handleChange}
                required
              />

            </div>

            {/* Loan Years */}

            <div className="emi-input-box">

              <label>
                Loan Duration (Years)
              </label>

              <input
                type="number"
                name="loanYears"
                placeholder="Example 5"
                value={formData.loanYears}
                onChange={handleChange}
                required
              />

            </div>

            {/* Button */}

            <button
              type="submit"
              className="emi-btn"
            >
              Calculate EMI
            </button>

          </form>

          {/* Result */}

          {
            result &&
            <div className="emi-result">

              <h4>
                EMI Result
              </h4>

              <div className="emi-result-grid">

                <div className="emi-result-card">

                  <FaRupeeSign />

                  <span>Loan Amount</span>

                  <h3>
                    ₹ {result.finalAmount}
                  </h3>

                </div>

                <div className="emi-result-card">

                  <FaCalculator />

                  <span>Monthly EMI</span>

                  <h3>
                    ₹ {result.emi}
                  </h3>

                </div>

                <div className="emi-result-card">

                  <FaBolt />

                  <span>Total Interest</span>

                  <h3>
                    ₹ {result.totalInterest}
                  </h3>

                </div>

                <div className="emi-result-card">

                  <FaSolarPanel />

                  <span>Total Payment</span>

                  <h3>
                    ₹ {result.totalPayment}
                  </h3>

                </div>

              </div>

            </div>
          }

        </div>

      </div>

    </div>

  );
};

export default EmiCalculator;