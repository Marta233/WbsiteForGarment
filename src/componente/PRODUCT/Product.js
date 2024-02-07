import React from "react";
import "./product.css";
import img4 from "../../assets/Image/product/img1 (2).png";
import img5 from "../../assets/Image/product/img2 (2).png";
import img6 from "../../assets/Image/product/img3 (2).png";
import img7 from "../../assets/images/pro.jpg";
import img9 from "../../assets/images/unsplash/kir1.avif";
import { Link } from "react-router-dom";

function Product() {
  return (
    <>
      <section className="featured-product ">
        <div className="bordr">
          <div className="container firstContainer">
            <div className="row">
              <div className="col-lg-6  col-md-6   companyprofile">
                <div className="col-12 ">
                  <h6 className="company_name">
                    WELCOME TO
                    <span className="text-primary"> MELE</span> TEXTILE
                  </h6>
                  <h3>Who We Are?</h3>
                </div>
                <p className="paragraph-style ">
                  Mele Textile PLC, founded in 2022 by a visionary and dynamic
                  Ethiopian entrepreneurial family, stands at the forefront of
                  innovation and excellence in the textile industry. From its
                  modest origins with just 2 sewing machines and 3 employees,
                  the company has flourished into a powerhouse with......
                </p>

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
              <div className="col-lg-6 col-md-6   imagesprofile">
                <img src={img9} alt="Fashion Image" className=" " />
              </div>
            </div>
          </div>
        </div>

        <div className="bord">
          <div className="container prolist">
            <div className="row">
              <div className="col-12 Ourpro">
                <h4 className="text-center mb-4">
                  Our <span className="text-primary"> Products</span>
                </h4>
                <h6 className="text-center">CHOOSE YOUR DESIRED PRODUCT</h6>
              </div>
              <div className="col-md-3 col-sm-6">
                <div className="product-thumb text-center">
                  <img src={img4} className="img-fluid product-image1" alt="" />
                  <div className="product-top d-flex justify-content-end">
                    <a href="#" className="bi-heart-fill product-icon"></a>
                  </div>
                  <div className="product-info">
                    <h5 className="product-title mb-2">
                      <a
                        href="product-detail.html"
                        className="product-title-link"
                      >
                        Female Dress
                      </a>
                    </h5>
                    <p className="product-p">
                      Different sizes and colors available
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-3 col-sm-6">
                <div className="product-thumb text-center">
                  <img src={img7} className="img-fluid product-image1" alt="" />
                  <div className="product-top d-flex justify-content-end">
                    <a href="#" className="bi-heart-fill product-icon"></a>
                  </div>
                  <div className="product-info">
                    <h5 className="product-title mb-2">
                      <a
                        href="product-detail.html"
                        className="product-title-link"
                      >
                        Female Dress
                      </a>
                    </h5>
                    <p className="product-p">
                      Different sizes and colors available
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-3 col-sm-6">
                <div className="product-thumb text-center">
                  <img src={img5} className="img-fluid product-image1" alt="" />
                  <div className="product-top d-flex justify-content-end">
                    <a href="#" className="bi-heart-fill product-icon"></a>
                  </div>
                  <div className="product-info">
                    <h5 className="product-title mb-2">
                      <a
                        href="product-detail.html"
                        className="product-title-link"
                      >
                        Female Dress
                      </a>
                    </h5>
                    <p className="product-p">
                      Different sizes and colors available
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-3 col-sm-6">
                <div className="product-thumb text-center">
                  <img src={img6} className="img-fluid product-image1" alt="" />
                  <div className="product-top d-flex justify-content-end">
                    <a href="#" className="bi-heart-fill product-icon"></a>
                  </div>
                  <div className="product-info">
                    <h5 className="product-title mb-2">
                      <a
                        href="product-detail.html"
                        className="product-title-link"
                      >
                        T-shirts
                      </a>
                    </h5>
                    <p className="product-p">
                      Different sizes and colors available
                    </p>
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
        <div className="container futureexpan">
          <div className="row">
            <div className="col-12 text-center ">
              <h3 className="mb-4 mt-4 font-weight-bold text-uppercase futureexpan-heading">
                Future Expansion
              </h3>
              <p className="col-12 mx-auto paragraph-style">
                Mele Textile PLC's growth is a testament to its commitment to
                quality and excellence, and as it continues to expand, it
                remains dedicated to making a lasting impact on the textile
                sector while contributing to the economic growth of Ethiopia.
                our mission will be To drive financial growth......
              </p>

              <div className="aboutredirect1 mt-4">
                <Link className="aboutredirectLink linkess" to="/About">
                  Learn More
                  <i className="bi bi-arrow-right ms-2"></i>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
export default Product;
