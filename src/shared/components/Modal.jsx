import React from "react";

import {
  FaTimes
} from "react-icons/fa";

import "./../../styles/global.css";

const Modal = ({
  show,
  title,
  children,
  onClose
}) => {

  if(!show){
    return null;
  }

  return (

    <div className="custom-modal-overlay">

      <div className="custom-modal">

        {/* Header */}

        <div className="custom-modal-header">

          <h3>
            {title}
          </h3>

          <button
            onClick={onClose}
            className="custom-modal-close-btn"
          >
            <FaTimes />
          </button>

        </div>

        {/* Body */}

        <div className="custom-modal-body">

          {children}

        </div>

      </div>

    </div>

  );
};

export default Modal;