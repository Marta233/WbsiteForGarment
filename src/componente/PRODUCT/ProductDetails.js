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
                            <h2 className="mb-5">Products We Have</h2>
                        </div>
                        <div className="col-lg-4 col-12 mb-3">
                            <div className="product-thumb">
                                <Link href="product-detail.html">
                                    <img src={img1} className="img-fluid product-image" alt="" />
                                </Link>
                                <div className="product-top d-flex">
                                    <span className="product-alert me-auto">Products We Have</span>

                                    <a href="#" className="bi-heart-fill product-icon"></a>
                                </div>

                                <div className="product-info d-flex">
                                    <div>
                                        <h5 className="product-title mb-0">
                                            <a href="product-detail.html" className="product-title-link">Product Name</a>
                                        </h5>

                                        <p className="product-p">Describtion</p>
                                    </div>

                                    <small className="product-price text-muted ms-auto">Price</small>
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
                                            <a href="product-detail.html" className="product-title-link">Product Name</a>
                                        </h5>

                                        <p className="product-p">Describtion</p>
                                    </div>

                                    <small className="product-price text-muted ms-auto">Price</small>
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
                                            <a href="product-detail.html" className="product-title-link">Product Name</a>
                                        </h5>

                                        <p className="product-p">Describtion</p>
                                    </div>

                                    <small className="product-price text-muted ms-auto">Price</small>
                                </div>
                            </div>
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
                                            <a href="product-detail.html" className="product-title-link">Product Name</a>
                                        </h5>

                                        <p className="product-p">Describtion</p>
                                    </div>

                                    <small className="product-price text-muted ms-auto">Price</small>
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
                                            <a href="product-detail.html" className="product-title-link">Product Name</a>
                                        </h5>

                                        <p className="product-p">Describtion</p>
                                    </div>

                                    <small className="product-price text-muted ms-auto">Price</small>
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
                                            <a href="product-detail.html" className="product-title-link">Product Name</a>
                                        </h5>

                                        <p className="product-p">Describtion</p>
                                    </div>

                                    <small className="product-price text-muted ms-auto">Price</small>
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
