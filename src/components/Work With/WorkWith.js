import React from "react";
import "./WorkWith.css";

function WorkWith() {
  return (
    <div className="WorkWith-Container">
      <div className="WorkWith-backgroundCircle"></div>
      <div className="WorkWith-Content">
        <div className="left-container">
          <h1 className="left-heading">Who we Work with</h1>
          <p className="left-SubHeading">
            Today,millions of people around the world have successfully
            connected their accounts to app they love using our API. We provide
            developers with the tools they need to create easy and accessible
            experiences for their user.
          </p>
          <button className="left-aboutBtn">About Us</button>
        </div>
        <div className="right-container">
          <div className="logo-container">
            <h3>Tesla</h3>
          </div>
          <div className="logo-container">
            <h3>Microsoft</h3>
          </div>
          <div className="logo-container">
            <h3>Hp</h3>
          </div>
          <div className="logo-container">
            <h3>Oracle</h3>
          </div>
          <div className="logo-container">
            <h3>Google</h3>
          </div>
          <div className="logo-container">
          <h3>Nvdia</h3>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WorkWith;
