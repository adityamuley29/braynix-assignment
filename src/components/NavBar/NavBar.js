import React from "react";
import "./NavBar.css";

function NavBar() {
  return (
    <div className="NavbarContainer">
      <div className="Navbar-links">
        <h2 className="brand-name">
          pay<span>api</span>
        </h2>
        <a className="Navbar-link" href="/">
          Pricing
        </a>
        <a className="Navbar-link" href="/">
          About
        </a>
        <a className="Navbar-link" href="/">
          Contact
        </a>
      </div>
      <button className="Demo-btn">Schedule a Demo</button>
    </div>
  );
}

export default NavBar;
