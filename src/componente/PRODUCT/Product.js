import React from "react";
import "./product.css";
import img4 from "../../assets/Image/product/img1 (2).png";
import img5 from "../../assets/Image/product/img2 (2).png";
import img6 from "../../assets/Image/product/img3 (2).png";
import img9 from "../../assets/Image/slideshow/istockphoto-1279917988-612x612.jpg";
import { Link } from "react-router-dom";

function Product() {
  return (
    <>
      <section className="featured-product ">
        <div className="container firstContainer">
          <div className="row">
            <div className="col-lg-6 col-12 order-lg-1 order-2 imagesprofile">
              <img
                src={img9}
                className="img-fluid rounded shadow"
                alt="Fashion Image"
              />
            </div>
            <div className="col-lg-6 col-12 order-lg-2 order-1 companyprofile">
              <div className="col-12 text-center">
                <h2 className="company_name">
                  Get started with <span className="text-primary">Mele</span>{" "}
                  Textile
                </h2>
              </div>
              <p className="company_moto ">
                Crafting Threads of Style, Weaving Dreams of Fashion.
              </p>
              <ul className="productlists">
                <li>Garment Product</li>
                <li>Woven and Knitted Fabric</li>
                <li>Dresses</li>
              </ul>
              <div className="buttons">
                <div className="aboutredirect1">
                  <Link to="/About" className="aboutredirectLink">
                    Contact Us
                    <i className="bi bi-arrow-right ms-2"></i>
                  </Link>
                </div>
                <div className="secondbutoon">
                  <Link to="/About" className="">
                    Learn More
                    <i className="bi bi-arrow-right ms-2"></i>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="col-12 text-center">
          <h2 className="mb-5">Our Products</h2>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-12 mb-3">
              <div className="product-thumb">
                <img src={img4} className="img-fluid product-image1" alt="" />

                <div className="product-top d-flex">
                  <a href="#" className="bi-heart-fill product-icon"></a>
                </div>
                <div className="product-info d-flex">
                  <div>
                    <h5 className="product-title mb-0">
                      <a
                        href="product-detail.html"
                        className="product-title-link"
                      >
                        Female Dress
                      </a>
                    </h5>
                    <p className="product-p">we have diffrent size and color</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-12 mb-3">
              <div className="product-thumb">
                <a href="product-detail.html">
                  <img src={img5} className="img-fluid product-image1" alt="" />
                </a>
                <div className="product-top d-flex">
                  <a href="#" className="bi-heart-fill product-icon"></a>
                </div>
                <div className="product-info d-flex">
                  <div>
                    <h5 className="product-title mb-0">
                      <a
                        href="product-detail.html"
                        className="product-title-link"
                      >
                        Female Dress
                      </a>
                    </h5>
                    <p className="product-p">we have diffrent size and color</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-12 mb-3">
              <div className="product-thumb">
                <a href="product-detail.html">
                  <img src={img6} className="img-fluid product-image" alt="" />
                </a>
                <div className="product-top d-flex">
                  <a href="#" className="bi-heart-fill product-icon"></a>
                </div>
                <div className="product-info d-flex">
                  <div>
                    <h5 className="product-title mb-0">
                      <a
                        href="product-detail.html"
                        className="product-title-link"
                      >
                        Ti-shirts
                      </a>
                    </h5>
                    <p className="product-p">we have diffrent size and color</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Repeat similar structure for other products... */}
        <div className="col-12 text-center">
          <Link to="/ProductDetails" className="view-all">
            View All Products
          </Link>
        </div>
        <div className="col-12 text-center">
          <h2 className="mb-5 mt-5">Future Expansion</h2>
          <p className="col-12 paragraph-style">
            ASBM Industrials has legally registered and established as a
            business firm in the yer of 2000 E.C under Ethiopin commercial code,
            since then our company has grown exponentially and the demand has
            sky rocketed. In Order to fulfil the customer demand and creat
            dependable supply, the company strategically planned to establish
            spinning & cotton farming in near future.
          </p>

          <div className="aboutredirect">
            <Link className="aboutredirectLink" to="/About">
              Learn More
              <i className="bi bi-arrow-right ms-2"></i>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
export default Product;
