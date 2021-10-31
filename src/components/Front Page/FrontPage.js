import React from "react";
import "./FrontPage.css";
import NavBar from "../NavBar/NavBar";
import Phone from "./phone-ui.png"

function FrontPage() {
  return (
    <div className="main-FrontPage">
      <NavBar />
      <div className="FrontPage-backgroundCircle"></div>
      <div className="main-FrontPage-Contenent">
        <div className="left-content">
          <div className="FrontPage-slogen">
            <h1>
              Start building
              <br />
              with our APIs for absolutely free.
            </h1>
          </div>
          <div className="FrontPage-Enquiry">
            <div className="Enquiry-emailBtn">
              <input type="email" placeholder="Enter email address" />
              <button className="Demo-btn">Schedule a Demo</button>
            </div>
            <span>
              Have any questions? <a href="/">Contact Us</a>{" "}
            </span>
          </div>
        </div>
        <div className="right-content">
          <img src={Phone} alt="phone img here" />
        </div>
      </div>
    </div>
  );
}

export default FrontPage;
