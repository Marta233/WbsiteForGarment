import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import Nav from "./componente/nav/Nav";
import Banner from "./componente/Banner/Banner";
import Footer from "./componente/footer/Footer.js";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Product from "./componente/PRODUCT/Product.js";
import About from "./componente/About/About.js";
import ProductDetails from "./componente/PRODUCT/ProductDetails.js";
import ContactUs from "./componente/Contact/ContactUs.js";

function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Nav />
              <Banner />
              <Product />
              <Footer />
            </>
          }
        />
        <Route
          path="/About"
          element={
            <>
              <Nav />
              <About />
              <Footer />
            </>
          }
        />
        <Route
          path="/Contactus"
          element={
            <>
              <Nav />
              <ContactUs />
              <Footer />
            </>
          }
        />
        <Route
          path="/ProductDetails"
          element={
            <>
              <Nav />
              <ProductDetails />
              <Footer />
            </>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
