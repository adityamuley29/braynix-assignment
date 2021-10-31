import React from "react";
import "./Services.css";
import ServicesEnd from "./ServicesEnd";
import ServicesMiddle from "./ServicesMiddle";
import ServicesTop from "./ServicesTop";

function Services() {
  return (
    <div className="Services-mainContainer">
      <div className="Services-backgroundCircle"></div>
      <div className="Services-Content">
        <ServicesTop />
        <ServicesMiddle/>
        <ServicesEnd/>
      </div>
    </div>
  );
}

export default Services;
