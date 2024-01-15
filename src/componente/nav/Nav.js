import React, { useState } from "react";
import "./nav.css";
import "../../assets/css/fontawesome.css";
import { Link, NavLink} from "react-router-dom";
import img1 from '../../assets/logo-removebg-preview.png'
export default function Nav() {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const handleToggleClick = () => {
    setIsNavOpen(!isNavOpen);
  };
  return (
    <header className="">
      <nav className={`navbar navbar-expand-lg ${isNavOpen ? "active" : ""}`}>
        <div className="container">
        
        <Link className="navbar-brand" to="/">
            <div className="brand-logo">
              <img src={img1} alt="Logo" className="logo-image" />
            </div>
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            onClick={handleToggleClick}
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className={`collapse navbar-collapse ${isNavOpen ? "show" : ""}`} id="navbarResponsive">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <NavLink exact to="/" className="nav-link">
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/products" className="nav-link">
                  Our Products
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to='/about' className="nav-link">
                  About Us
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to='/contact' className="nav-link">
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