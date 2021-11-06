import React from "react";
import "./ServicesTop.css";
import test from "./test.jpg"

function ServicesTop() {
  return (
    <div className="ServicesTop-Container">
      <div className="Container" id="Container1">
        <img src={test} alt="Code templete here" />
        <div className="Content">
          <h1>Easy to implement</h1>
          <p>
            Our API comes with just a few lines of code. You'll be up and
            running in no time. We build our documentation page to integrate
            payments functionality with ease.
          </p>
        </div>
      </div>
      <div className="Container" id="Container2">
        <div className="Content">
          <h1>Simple UI & UX</h1>
          <p>
            Our pre-build form is easy to integrate in your app or website's checkout flow and designed to opetimize conversion.
          </p>
        </div>
        <img src={test} alt="Phone templete here" />
      </div>
    </div>
  );
}

export default ServicesTop;
