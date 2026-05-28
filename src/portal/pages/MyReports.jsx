import React, { useState } from "react";

import {
  FaFilePdf,
  FaFileExcel,
  FaDownload,
  FaCalendarAlt,
  FaSearch
} from "react-icons/fa";

import "./../../styles/portal/MyReports.css";

const MyReports = () => {

  const [search, setSearch] = useState("");

  /* Dummy Reports Data */

  const [reports] = useState([
    {
      id: 1,
      name: "Monthly Generation Report",
      type: "PDF",
      date: "12 July 2026",
      status: "Ready",
      fileUrl: "/reports/monthly-report.pdf"
    },
    {
      id: 2,
      name: "Plant Performance Report",
      type: "Excel",
      date: "18 July 2026",
      status: "Ready",
      fileUrl: "/reports/performance.xlsx"
    },
    {
      id: 3,
      name: "Energy Monitoring Report",
      type: "PDF",
      date: "22 July 2026",
      status: "Pending",
      fileUrl: ""
    }
  ]);

  /* Filter */

  const filteredReports = reports.filter((report) =>
    report.name.toLowerCase().includes(search.toLowerCase())
  );

  /* Download */

  const handleDownload = (report) => {

    if(report.status === "Pending"){
      alert("Report is not ready yet.");
      return;
    }

    const link = document.createElement("a");

    link.href =
      "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf";

    link.download = report.name;

    link.click();
  };

  /* Icon */

  const getReportIcon = (type) => {

    switch(type){

      case "PDF":
        return <FaFilePdf className="report-pdf-icon" />;

      case "Excel":
        return <FaFileExcel className="report-excel-icon" />;

      default:
        return <FaFilePdf />;
    }
  };

  return (

    <div className="myreports-page">

      {/* Header */}

      <div className="myreports-header">

        <div>

          <h2>
            My Reports
          </h2>

          <p>
            Download your solar plant reports
          </p>

        </div>

      </div>

      {/* Top Cards */}

      <div className="myreports-cards">

        <div className="myreports-card">

          <h4>
            Total Reports
          </h4>

          <h2>
            {reports.length}
          </h2>

        </div>

        <div className="myreports-card">

          <h4>
            Ready Reports
          </h4>

          <h2>
            {
              reports.filter(
                r => r.status === "Ready"
              ).length
            }
          </h2>

        </div>

        <div className="myreports-card">

          <h4>
            Pending Reports
          </h4>

          <h2>
            {
              reports.filter(
                r => r.status === "Pending"
              ).length
            }
          </h2>

        </div>

      </div>

      {/* Search */}

      <div className="myreports-search-box">

        <FaSearch className="search-icon" />

        <input
          type="text"
          placeholder="Search reports..."
          value={search}
          onChange={(e)=>
            setSearch(e.target.value)
          }
        />

      </div>

      {/* Reports Table */}

      <div className="myreports-table-wrapper">

        <table className="myreports-table">

          <thead>

            <tr>

              <th>Report</th>
              <th>Type</th>
              <th>Date</th>
              <th>Status</th>
              <th>Action</th>

            </tr>

          </thead>

          <tbody>

            {
              filteredReports.map((report)=>(
                <tr key={report.id}>

                  <td>

                    <div className="report-name-box">

                      {getReportIcon(report.type)}

                      <span>
                        {report.name}
                      </span>

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

                    <span
                      className={`report-status ${report.status.toLowerCase()}`}
                    >
                      {report.status}
                    </span>

                  </td>

                  <td>

                    <button
                      className="report-download-btn"
                      onClick={() =>
                        handleDownload(report)
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

export default MyReports;