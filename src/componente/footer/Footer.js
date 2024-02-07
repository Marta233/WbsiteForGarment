import React from "react";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./footer.css";
import { Link } from "react-router-dom";
export default function MyFooter() {
  return (
    <footer className="site-footer">
      <div className="container footer_mergin">
        <div className="main_foot">
          <div className="lists">
            <h4 className="text-white mb-3">
              <Link to="/">Mele Textile </Link>
            </h4>
            <p className="copyright-text text-muted mt-lg-5 mb-4 mb-lg-0">
              Copyright © 2022
            </p>
            <br />
          </div>
          <div className="lists">
            <h5 className="text-white mb-3">Sitemap</h5>
            <ul className="footer-menu ">
              <li className="footer-menu-item">
                <Link to="/" className="footer-menu-link">
                  Home
                </Link>
              </li>
              <li className="footer-menu-item">
                <Link to="/About" className="footer-menu-link">
                  About Us
                </Link>
              </li>
              <li className="footer-menu-item">
                <Link to="/ProductDetails" className="footer-menu-link">
                  Product List
                </Link>
              </li>
              <li className="footer-menu-item">
                <Link to="/Contactus" className="footer-menu-link">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
          <div className="lists">
            <h5 className="text-white mb-3">Social</h5>
            <ul className="social-icon">
              <li>
                <a href="#" className="social-icon-link bi-youtube"></a>
              </li>
              <li>
                <a href="#" className="social-icon-link bi-whatsapp"></a>
              </li>
              <li>
                <a href="#" className="social-icon-link bi-instagram"></a>
              </li>
              <li>
                <a href="#" className="social-icon-link bi-skype"></a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
