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

import "../../styles/admin/Documents.css";


const Documents = () => {

  /* State */

  const [documents, setDocuments] = useState([
    {
      id: 1,
      name: "Project_Report.pdf",
      type: "PDF",
      size: "2.5 MB",
      uploadedBy: "Admin",
      fileUrl: ""
    },
    {
      id: 2,
      name: "Solar_Site_Image.png",
      type: "Image",
      size: "1.2 MB",
      uploadedBy: "Rahul",
      fileUrl: ""
    },
    {
      id: 3,
      name: "Generation_Data.xlsx",
      type: "Excel",
      size: "3.1 MB",
      uploadedBy: "Admin",
      fileUrl: ""
    }
  ]);

  /* File Input Ref */

  const fileInputRef = useRef(null);

  /* Upload Button */

  const handleUploadClick = () => {

    fileInputRef.current.click();
  };

  /* File Upload */

  const handleFileUpload = (event) => {

    const file = event.target.files[0];

    if (!file) return;

    /* File Type */

    let fileType = "File";

    if (file.type.includes("pdf")) {

      fileType = "PDF";
    }

    else if (
      file.type.includes("image")
    ) {

      fileType = "Image";
    }

    else if (
      file.name.includes(".xlsx") ||
      file.name.includes(".xls")
    ) {

      fileType = "Excel";
    }

    /* File Size */

    const fileSize = (
      file.size / (1024 * 1024)
    ).toFixed(2);

    /* File URL */

    const fileUrl = URL.createObjectURL(file);

    /* New Document */

    const newDocument = {
      id: Date.now(),
      name: file.name,
      type: fileType,
      size: `${fileSize} MB`,
      uploadedBy: "Admin",
      fileUrl: fileUrl
    };

    setDocuments([
      newDocument,
      ...documents
    ]);

    /* Reset Input */

    event.target.value = "";
  };

  /* Download */

  const handleDownload = (doc) => {

    if (!doc.fileUrl) {

      alert("Dummy file cannot be downloaded");

      return;
    }

    const link = document.createElement("a");

    link.href = doc.fileUrl;

    link.download = doc.name;

    document.body.appendChild(link);

    link.click();

    document.body.removeChild(link);
  };

  /* Delete */

  const handleDelete = (id) => {

    const confirmDelete = window.confirm(
      "Are you sure you want to delete this document?"
    );

    if (!confirmDelete) return;

    const updatedDocuments =
      documents.filter(
        (doc) => doc.id !== id
      );

    setDocuments(updatedDocuments);
  };

  /* Icon Function */

  const getFileIcon = (type) => {

    switch(type){

      case "PDF":
        return <FaFilePdf className="pdf-icon" />;

      case "Image":
        return <FaFileImage className="image-icon" />;

      case "Excel":
        return <FaFileExcel className="excel-icon" />;

      default:
        return <FaFolderOpen />;
    }
  };

  return (

    <div className="documents-page">

      {/* Header */}

      <div className="documents-header">

        <div>

          <h2>
            Documents
          </h2>

          <p>
            Manage uploaded project documents
          </p>

        </div>

        <button
          className="upload-btn"
          onClick={handleUploadClick}
        >

          <FaUpload />

          Upload Document

        </button>

        {/* Hidden Input */}

        <input
          type="file"
          ref={fileInputRef}
          style={{ display: "none" }}
          onChange={handleFileUpload}
        />

      </div>

      {/* Cards */}

      <div className="documents-grid">

        {
          documents.map((doc)=>(

            <div
              className="document-card"
              key={doc.id}
            >

              {/* Top */}

              <div className="document-top">

                <div className="document-icon">

                  {getFileIcon(doc.type)}

                </div>

              </div>

              {/* File Name */}

              <h4>
                {doc.name}
              </h4>

              {/* Info */}

              <div className="document-info">

                <p>

                  <span>
                    Type :
                  </span>

                  {doc.type}

                </p>

                <p>

                  <span>
                    Size :
                  </span>

                  {doc.size}

                </p>

                <p>

                  <span>
                    Uploaded By :
                  </span>

                  {doc.uploadedBy}

                </p>

              </div>

              {/* Footer */}

              <div className="document-footer">

                <button
                  className="download-btn"
                  onClick={() => handleDownload(doc)}
                >

                  <FaDownload />

                  Download

                </button>

                <button
                  className="delete-btn"
                  onClick={() => handleDelete(doc.id)}
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

export default Documents;