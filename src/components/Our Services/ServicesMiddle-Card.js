import React from "react";
import "./ServicesMiddle-Card.css"

function ServicesMiddleCard(props) {
  return (
    <div className="ServicesMiddle-Context">
      <div className="Context-imageDiv">
        <img
          src={props.imgURL}
          alt="logo"
        />
      </div>
      <h2>{props.title}</h2>
      <p>
        {props.desc}
      </p>
    </div>
  );
}

export default ServicesMiddleCard;
