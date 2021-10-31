import React from "react";
import "./Footer.css";
function Footer() {
  return (
    <div className="Footer-Container">
      <div className="FooterContext">
        <div className="leftContext">
          <h3>
            pay<span>api</span>
          </h3>
          <a className="footerLink" href="/">
            Pricing
          </a>
          <a className="footerLink" href="/">
            About
          </a>
          <a className="footerLink" href="/">
            Contact
          </a>
        </div>
        <div className="rightContext">
          <img src="https://img.icons8.com/ios-filled/24/ffffff/facebook--v1.png" alt="Socialmedia Icon" />
          <img src="https://img.icons8.com/ios-filled/24/ffffff/twitter--v1.png" alt="Socialmedia Icon" />
          <img src="https://img.icons8.com/ios-filled/24/ffffff/linkedin--v1.png" alt="Socialmedia Icon" />
        </div>
      </div>
    </div>
  );
}

export default Footer;
