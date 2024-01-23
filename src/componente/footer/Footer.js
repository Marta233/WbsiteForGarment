import React from "react";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./footer.css";
export default function MyFooter() {
  return (
    <footer className="site-footer">
      <div className="container footer_mergin">
        <div className="main_foot">
          <div className="lists">
            <h4 className="text-white mb-3">
              <a href="index.html">Mele</a> Textile
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
                <a href="about.html" className="footer-menu-link">
                  Story
                </a>
              </li>
              <li className="footer-menu-item">
                <a href="#" className="footer-menu-link">
                  Products
                </a>
              </li>
              <li className="footer-menu-item">
                <a href="#" className="footer-menu-link">
                  FAQs
                </a>
              </li>
              <li className="footer-menu-item">
                <a href="#" className="footer-menu-link">
                  Contact
                </a>
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
