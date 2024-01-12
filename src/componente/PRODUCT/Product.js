import React from 'react'
import "./product.css"
import img4 from "../../assets/Image/product/evan-mcdougall-qnh1odlqOmk-unsplash.jpeg"
import img5 from "../../assets/Image/product/evan-mcdougall-qnh1odlqOmk-unsplash.jpeg"
import img6 from "../../assets/Image/product/jordan-nix-CkCUvwMXAac-unsplash.jpeg"

function Product() {
    return (
        <>
        <section className="featured-product section-padding">
 <div className="container">
   <div className="row">

     <div className="col-12 text-center">
       <h2 className="mb-5">Featured Products</h2>
     </div>
     <div className="col-lg-4 col-12 mb-3">
       <div className="product-thumb">
         <a href="product-detail.html">
           <img src={img4} className="img-fluid product-image" alt="" />
         </a>
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
           <small className="product-price text-muted ms-auto mt-auto mb-5">$25</small>
         </div>
       </div>
     </div>


     <div className="col-lg-4 col-12 mb-3">
       <div className="product-thumb">
         <a href="product-detail.html">
           <img src={img5} className="img-fluid product-image" alt="" />
         </a>
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
           <small className="product-price text-muted ms-auto mt-auto mb-5">$25</small>
         </div>
       </div>
     </div>
     <div className="col-lg-4 col-12 mb-3">
       <div className="product-thumb">
         <a href="product-detail.html">
           <img src={img6} className="img-fluid product-image" alt="" />
         </a>
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
           <small className="product-price text-muted ms-auto mt-auto mb-5">$25</small>
         </div>
       </div>
     </div>

     {/* Repeat similar structure for other products... */}
     <div className="col-12 text-center">
       <a href="products.html" className="view-all">View All Products</a>
     </div>
   </div>
 </div>
</section>
        </>
    )
}

export default Product
