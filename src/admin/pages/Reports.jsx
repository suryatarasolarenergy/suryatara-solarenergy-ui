import React, { useState } from "react";

import {
  FaFilePdf,
  FaFileExcel,
  FaChartBar,
  FaDownload,
  FaCalendarAlt,
  FaPlus
} from "react-icons/fa";

import "../../styles/admin/Reports.css";


const Reports = () => {

  /* Reports State */

  const [reports, setReports] = useState([
    {
      id: 1,
      reportName: "Monthly Generation Report",
      type: "PDF",
      date: "12 July 2026",
      status: "Generated"
    },
    {
      id: 2,
      reportName: "Project Performance Report",
      type: "Excel",
      date: "15 July 2026",
      status: "Pending"
    },
    {
      id: 3,
      reportName: "Site Monitoring Report",
      type: "PDF",
      date: "18 July 2026",
      status: "Generated"
    }
  ]);

  /* Form State */

  const [formData, setFormData] = useState({
    reportName: "",
    type: "PDF"
  });

  /* Handle Change */

  const handleChange = (e) => {

    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value
    });
  };

  /* Generate Report */

  const handleGenerateReport = () => {

    if (!formData.reportName) {

      alert("Please enter report name");

      return;
    }

    const today = new Date();

    const formattedDate =
      today.toLocaleDateString(
        "en-GB",
        {
          day: "2-digit",
          month: "long",
          year: "numeric"
        }
      );

    const newReport = {
      id: Date.now(),
      reportName: formData.reportName,
      type: formData.type,
      date: formattedDate,
      status: "Generated"
    };

    setReports([
      newReport,
      ...reports
    ]);

    setFormData({
      reportName: "",
      type: "PDF"
    });
  };

  /* Download Report */

  const handleDownload = (report) => {

    const content =
`
SURYATARA SOLAR ENERGY

Report Name : ${report.reportName}

Type : ${report.type}

Date : ${report.date}

Status : ${report.status}
`;

    const blob = new Blob(
      [content],
      {
        type: "text/plain"
      }
    );

    const url =
      window.URL.createObjectURL(blob);

    const link =
      document.createElement("a");

    link.href = url;

    link.download =
      `${report.reportName}.txt`;

    document.body.appendChild(link);

    link.click();

    document.body.removeChild(link);

    window.URL.revokeObjectURL(url);
  };

  return (

    <div className="reports-page">

      {/* Header */}

      <div className="reports-header">

        <div>

          <h2>
            Reports
          </h2>

          <p>
            Generate and manage all reports
          </p>

        </div>

      </div>

      {/* Top Cards */}

      <div className="reports-cards">

        <div className="reports-card">

          <div className="reports-card-icon blue">

            <FaChartBar />

          </div>

          <div>

            <h5>
              Total Reports
            </h5>

            <h3>
              {reports.length}
            </h3>

          </div>

        </div>

        <div className="reports-card">

          <div className="reports-card-icon red">

            <FaFilePdf />

          </div>

          <div>

            <h5>
              PDF Reports
            </h5>

            <h3>
              {
                reports.filter(
                  r => r.type === "PDF"
                ).length
              }
            </h3>

          </div>

        </div>

        <div className="reports-card">

          <div className="reports-card-icon green">

            <FaFileExcel />

          </div>

          <div>

            <h5>
              Excel Reports
            </h5>

            <h3>
              {
                reports.filter(
                  r => r.type === "Excel"
                ).length
              }
            </h3>

          </div>

        </div>

      </div>

      {/* Generate Report */}

      <div className="generate-report-box">

        <h3>
          Generate New Report
        </h3>

        <div className="generate-form">

          <input
            type="text"
            name="reportName"
            placeholder="Enter Report Name"
            value={formData.reportName}
            onChange={handleChange}
          />

          <select
            name="type"
            value={formData.type}
            onChange={handleChange}
          >

            <option>
              PDF
            </option>

            <option>
              Excel
            </option>

          </select>

          <button
            onClick={handleGenerateReport}
          >

            <FaPlus />

            Generate

          </button>

        </div>

      </div>

      {/* Table Section */}

      <div className="reports-table-section">

        <div className="table-header">

          <h4>
            Recent Reports
          </h4>

        </div>

        <div className="table-responsive">

          <table className="reports-table">

            <thead>

              <tr>

                <th>Report Name</th>
                <th>Type</th>
                <th>Date</th>
                <th>Status</th>
                <th>Action</th>

              </tr>

            </thead>

            <tbody>

              {
                reports.map((report)=>(

                  <tr key={report.id}>

                    <td>

                      <div className="report-name">

                        {
                          report.type === "PDF"
                          ?
                          <FaFilePdf className="pdf-icon" />
                          :
                          <FaFileExcel className="excel-icon" />
                        }

                        {report.reportName}

                      </div>

                    </td>

                    <td>

                      {report.type}

                    </td>

                    <td>

                      <div className="report-date">

                        <FaCalendarAlt />

                        {report.date}

                      </div>

                    </td>

                    <td>

                      <span className={`report-status ${report.status.toLowerCase()}`}>

                        {report.status}

                      </span>

                    </td>

                    <td>

                      <button
                        className="download-btn"
                        onClick={() => handleDownload(report)}
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

    </div>

  );
};

export default Reports;