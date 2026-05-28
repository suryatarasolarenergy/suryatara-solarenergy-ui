import React from "react";

import "./../../styles/global.css";

const Loader = ({
  text = "Loading..."
}) => {

  return (

    <div className="custom-loader-container">

      <div className="custom-loader-circle"></div>

      <p>
        {text}
      </p>

    </div>

  );
};

export default Loader;