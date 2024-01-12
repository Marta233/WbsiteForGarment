import React, { useState } from "react";
import "./nav.css";
import "../../assets/css/fontawesome.css";
export default function Nav() {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const handleToggleClick = () => {
    setIsNavOpen(!isNavOpen);
  };
  return (
    <header className="">
      <nav className={`navbar navbar-expand-lg ${isNavOpen ? "active" : ""}`}>
        <div className="container">
          <a className="navbar-brand" href="index.html">
            <h2>
              Sixteen <em>Clothing</em>
            </h2>
          </a>
          <button
            className="navbar-toggler"
            type="button"
            onClick={handleToggleClick}
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className={`collapse navbar-collapse ${isNavOpen ? "show" : ""}`}  id="navbarResponsive">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item active">
                <a className="nav-link" href="index.html">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="products.html">
                  Our Products
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="about.html">
                  About Us
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="contact.html">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}