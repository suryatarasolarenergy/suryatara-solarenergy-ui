import React from "react";

import "./../../styles/global.css";

const Button = ({
  children,
  onClick,
  type = "button",
  variant = "primary",
  disabled = false
}) => {

  return (

    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`custom-btn ${variant}`}
    >

      {children}

    </button>

  );
};

export default Button;