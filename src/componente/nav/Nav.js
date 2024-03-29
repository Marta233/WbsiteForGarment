import React, { useState } from "react";
import "./nav.css";
import "../../assets/css/fontawesome.css";
import { Link, NavLink } from "react-router-dom";
import img1 from "../../assets/logo-removebg-preview.png";
export default function Nav() {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const handleToggleClick = () => {
    setIsNavOpen(!isNavOpen);
  };
  return (
    <header className="">
      <nav className={`navbar navbar-expand-lg ${isNavOpen ? "active" : ""}`}>
        <div className="container">
          <div className="nav-brand">
            <Link className="navbar-brand" to="/">
              <div className="brand-logo">
                <img src={img1} alt="Logo" className="logo-image" />
              </div>
            </Link>
            <Link to="index.html" className="navbar-brand1">
              <ul className="flex-container">
                <li className="uppercase">Mele</li>
                <li className="lowercase">Textile</li>
              </ul>
            </Link>
          </div>
          <button
            className="navbar-toggler"
            type="button"
            onClick={handleToggleClick}
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className={`collapse navbar-collapse ${isNavOpen ? "show" : ""}`}
            id="navbarResponsive"
          >
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <NavLink exact to="/" className="nav-link">
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/ProductDetails" className="nav-link">
                  Our Products
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/about" className="nav-link">
                  About Us
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/Contactus" className="nav-link">
                  Contact Us
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}
