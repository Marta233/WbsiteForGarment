import React from 'react';
import "./ProductDetails.css";
import img1 from '../../assets/Image/product/evan-mcdougall-qnh1odlqOmk-unsplash.jpeg';
import { Link } from 'react-router-dom';
function ProductDetails() {
    return (
        <>
    <div className="page-heading product-heading header-text">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="text-content">
              <h4>Our Product</h4>
              <h2>let’s Introduce Our Product</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
    <section className="products section-padding">
                <div className="container">
                    <div className="row">      
                        <div className="col-12">
                            <h2 className="mb-5">New Arrivals</h2>
                        </div>
                        <div className="col-lg-4 col-12 mb-3">
                            <div className="product-thumb">
                                <Link href="product-detail.html">
                                    <img src={img1} className="img-fluid product-image" alt="" />
                                </Link>
                                <div className="product-top d-flex">
                                    <span className="product-alert me-auto">New Arrival</span>

                                    <a href="#" className="bi-heart-fill product-icon"></a>
                                </div>

                                <div className="product-info d-flex">
                                    <div>
                                        <h5 className="product-title mb-0">
                                            <a href="product-detail.html" className="product-title-link">Tree pot</a>
                                        </h5>

                                        <p className="product-p">Original package design from house</p>
                                    </div>

                                    <small className="product-price text-muted ms-auto">$25</small>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-12 mb-3">
                            <div className="product-thumb">
                            <Link href="product-detail.html">
                                    <img src={img1} className="img-fluid product-image" alt="" />
                                </Link>

                                <div className="product-top d-flex">
                                    <span className="product-alert">Discounted Price</span>

                                    <a href="#" className="bi-heart-fill product-icon ms-auto"></a>
                                </div>

                                <div className="product-info d-flex">
                                    <div>
                                        <h5 className="product-title mb-0">
                                            <a href="product-detail.html" className="product-title-link">Fashion set</a>
                                        </h5>

                                        <p className="product-p">Costume package</p>
                                    </div>

                                    <small className="product-price text-muted ms-auto">$35</small>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-12">
                            <div className="product-thumb">
                            <Link href="product-detail.html">
                                    <img src={img1} className="img-fluid product-image" alt="" />
                                </Link>

                                <div className="product-top d-flex">
                                    <a href="#" className="bi-heart-fill product-icon ms-auto"></a>
                                </div>

                                <div className="product-info d-flex">
                                    <div>
                                        <h5 className="product-title mb-0">
                                            <a href="product-detail.html" className="product-title-link">Juice Drinks</a>
                                        </h5>

                                        <p className="product-p">Nature made another world</p>
                                    </div>

                                    <small className="product-price text-muted ms-auto">$45</small>
                                </div>
                            </div>
                        </div>

                        <div className="col-12">
                            <h2 className="mb-5">Popular</h2>
                        </div>

                        <div className="col-lg-4 col-12 mb-3">
                            <div className="product-thumb">
                            <Link href="product-detail.html">
                                    <img src={img1} className="img-fluid product-image" alt="" />
                                </Link>

                                <div className="product-top d-flex">
                                    <span className="product-alert">Trending</span>

                                    <a href="#" className="bi-heart-fill product-icon ms-auto"></a>
                                </div>

                                <div className="product-info d-flex">
                                    <div>
                                        <h5 className="product-title mb-0">
                                            <a href="product-detail.html" className="product-title-link">Package</a>
                                        </h5>

                                        <p className="product-p">Original package design from house</p>
                                    </div>

                                    <small className="product-price text-muted ms-auto">$50</small>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-12 mb-3">
                            <div className="product-thumb">
                            <Link href="product-detail.html">
                                    <img src={img1} className="img-fluid product-image" alt="" />
                                </Link>

                                <div className="product-top d-flex">
                                    <a href="#" className="bi-heart-fill product-icon ms-auto"></a>
                                </div>

                                <div className="product-info d-flex">
                                    <div>
                                        <h5 className="product-title mb-0">
                                            <a href="product-detail.html" className="product-title-link">Bottle</a>
                                        </h5>

                                        <p className="product-p">Package design</p>
                                    </div>

                                    <small className="product-price text-muted ms-auto">$100</small>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-12 mb-3">
                            <div className="product-thumb">
                            <Link href="product-detail.html">
                                    <img src={img1} className="img-fluid product-image" alt="" />
                                </Link>

                                <div className="product-top d-flex">
                                    <a href="#" className="bi-heart-fill product-icon ms-auto"></a>
                                </div>

                                <div className="product-info d-flex">
                                    <div>
                                        <h5 className="product-title mb-0">
                                            <a href="product-detail.html" className="product-title-link">Medicine</a>
                                        </h5>

                                        <p className="product-p">Original design from house</p>
                                    </div>

                                    <small className="product-price text-muted ms-auto">$200</small>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
        </>
    )
}

export default ProductDetails
