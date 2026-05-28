import React, { useRef, useState } from "react";

import {
  FaFilePdf,
  FaFileImage,
  FaFileExcel,
  FaFolderOpen,
  FaUpload,
  FaDownload,
  FaTrash
} from "react-icons/fa";

import "./../../styles/portal/MyDocuments.css";

const MyDocuments = () => {

  const fileInputRef = useRef(null);

  /* Dummy Data */

  const [documents, setDocuments] = useState([
    {
      id: 1,
      name: "Plant_Report.pdf",
      type: "PDF",
      size: "2.4 MB",
      uploadedDate: "12 July 2026"
    },
    {
      id: 2,
      name: "Solar_Image.png",
      type: "Image",
      size: "1.2 MB",
      uploadedDate: "18 July 2026"
    },
    {
      id: 3,
      name: "Energy_Data.xlsx",
      type: "Excel",
      size: "3.1 MB",
      uploadedDate: "22 July 2026"
    }
  ]);

  /* Upload */

  const handleUploadClick = () => {
    fileInputRef.current.click();
  };

  const handleFileUpload = (e) => {

    const file = e.target.files[0];

    if(!file) return;

    const fileExtension =
      file.name.split(".").pop().toLowerCase();

    let fileType = "File";

    if(fileExtension === "pdf"){
      fileType = "PDF";
    }
    else if(
      fileExtension === "png" ||
      fileExtension === "jpg" ||
      fileExtension === "jpeg"
    ){
      fileType = "Image";
    }
    else if(
      fileExtension === "xlsx" ||
      fileExtension === "xls"
    ){
      fileType = "Excel";
    }

    const newDocument = {
      id: Date.now(),
      name: file.name,
      type: fileType,
      size: `${(file.size / (1024 * 1024)).toFixed(2)} MB`,
      uploadedDate: new Date().toLocaleDateString()
    };

    setDocuments([newDocument, ...documents]);

    alert("Document uploaded successfully.");
  };

  /* Download */

  const handleDownload = (doc) => {

    const link = document.createElement("a");

    link.href =
      "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf";

    link.download = doc.name;

    link.click();
  };

  /* Delete */

  const handleDelete = (id) => {

    const confirmDelete =
      window.confirm(
        "Are you sure you want to delete this document?"
      );

    if(confirmDelete){

      setDocuments(
        documents.filter((doc)=>doc.id !== id)
      );
    }
  };

  /* File Icon */

  const getFileIcon = (type) => {

    switch(type){

      case "PDF":
        return (
          <FaFilePdf className="portal-pdf-icon" />
        );

      case "Image":
        return (
          <FaFileImage className="portal-image-icon" />
        );

      case "Excel":
        return (
          <FaFileExcel className="portal-excel-icon" />
        );

      default:
        return <FaFolderOpen />;
    }
  };

  return (

    <div className="mydocuments-page">

      {/* Header */}

      <div className="mydocuments-header">

        <div>

          <h2>
            My Documents
          </h2>

          <p>
            Access and manage your project documents
          </p>

        </div>

        <button
          className="portal-upload-btn"
          onClick={handleUploadClick}
        >

          <FaUpload />

          Upload Document

        </button>

        <input
          type="file"
          ref={fileInputRef}
          style={{display:"none"}}
          onChange={handleFileUpload}
        />

      </div>

      {/* Grid */}

      <div className="mydocuments-grid">

        {
          documents.map((doc)=>(
            <div
              className="mydocument-card"
              key={doc.id}
            >

              {/* Icon */}

              <div className="mydocument-icon">

                {getFileIcon(doc.type)}

              </div>

              {/* Title */}

              <h3>
                {doc.name}
              </h3>

              {/* Info */}

              <div className="mydocument-info">

                <p>

                  <span>Type :</span>

                  {doc.type}

                </p>

                <p>

                  <span>Size :</span>

                  {doc.size}

                </p>

                <p>

                  <span>Date :</span>

                  {doc.uploadedDate}

                </p>

              </div>

              {/* Actions */}

              <div className="mydocument-actions">

                <button
                  className="portal-download-btn"
                  onClick={() =>
                    handleDownload(doc)
                  }
                >

                  <FaDownload />

                  Download

                </button>

                <button
                  className="portal-delete-btn"
                  onClick={() =>
                    handleDelete(doc.id)
                  }
                >

                  <FaTrash />

                  Delete

                </button>

              </div>

            </div>
          ))
        }

      </div>

    </div>

  );
};

export default MyDocuments;