import React, { useState } from "react";

import {
  FaFileInvoiceDollar,
  FaCalendarAlt,
  FaDownload,
  FaCheckCircle,
  FaClock
} from "react-icons/fa";

import "./../../styles/portal/Billing.css";

const Billing = () => {

  /* Dummy Billing Data */

  const [bills] = useState([
    {
      id: 1,
      invoiceNo: "INV-1001",
      date: "12 July 2026",
      amount: "₹ 25,000",
      status: "Paid"
    },
    {
      id: 2,
      invoiceNo: "INV-1002",
      date: "20 July 2026",
      amount: "₹ 18,500",
      status: "Pending"
    },
    {
      id: 3,
      invoiceNo: "INV-1003",
      date: "28 July 2026",
      amount: "₹ 12,000",
      status: "Paid"
    }
  ]);

  /* Download Invoice */

  const handleDownload = (bill) => {

    const link = document.createElement("a");

    link.href =
      "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf";

    link.download = `${bill.invoiceNo}.pdf`;

    link.click();
  };

  return (

    <div className="billing-page">

      {/* Header */}

      <div className="billing-header">

        <div>

          <h2>
            Billing & Invoices
          </h2>

          <p>
            View and download all billing invoices
          </p>

        </div>

      </div>

      {/* Summary Cards */}

      <div className="billing-summary-grid">

        <div className="billing-summary-card">

          <div className="billing-summary-icon blue">

            <FaFileInvoiceDollar />

          </div>

          <div>

            <h4>
              Total Invoices
            </h4>

            <h2>
              03
            </h2>

          </div>

        </div>

        <div className="billing-summary-card">

          <div className="billing-summary-icon green">

            <FaCheckCircle />

          </div>

          <div>

            <h4>
              Paid Bills
            </h4>

            <h2>
              02
            </h2>

          </div>

        </div>

        <div className="billing-summary-card">

          <div className="billing-summary-icon orange">

            <FaClock />

          </div>

          <div>

            <h4>
              Pending Bills
            </h4>

            <h2>
              01
            </h2>

          </div>

        </div>

      </div>

      {/* Table */}

      <div className="billing-table-wrapper">

        <table className="billing-table">

          <thead>

            <tr>

              <th>Invoice No</th>
              <th>Date</th>
              <th>Amount</th>
              <th>Status</th>
              <th>Action</th>

            </tr>

          </thead>

          <tbody>

            {
              bills.map((bill)=>(
                <tr key={bill.id}>

                  <td>

                    <div className="invoice-box">

                      <FaFileInvoiceDollar />

                      {bill.invoiceNo}

                    </div>

                  </td>

                  <td>

                    <div className="invoice-date">

                      <FaCalendarAlt />

                      {bill.date}

                    </div>

                  </td>

                  <td>

                    <strong>
                      {bill.amount}
                    </strong>

                  </td>

                  <td>

                    <span
                      className={`bill-status ${bill.status.toLowerCase()}`}
                    >
                      {bill.status}
                    </span>

                  </td>

                  <td>

                    <button
                      className="invoice-download-btn"
                      onClick={() =>
                        handleDownload(bill)
                      }
                    >

                      <FaDownload />

                      Download

                    </button>

                  </td>

                </tr>
              ))
            }

          </tbody>

        </table>

      </div>

    </div>

  );
};

export default Billing;