import React from 'react'
import "./product.css"
import img4 from "../../assets/Image/product/img1.png"
import img5 from "../../assets/Image/product/img2.png"
import img6 from "../../assets/Image/product/img3.png"
import img7 from "../../assets/Image/product/img4.png"
import img8 from "../../assets/Image/product/img5.png"

function Product() {
    return (
        <>
        <section className="featured-product section-padding">
 <div className="container">
   <div className="row">
   <div className="col-12 text-center">
   <h2 className="mb-5">WELCOME</h2>
      <p className="col-12 paragraph-style">
        ASBM is owned and established as a business firm by visionary young & dynamic Ethiopian entrepreneurs family in the year of 2006. Backed on the earlier rooted family business experience in various lines of operation and reviewing the recurrent Ethiopian business dynamism tailored with courageous business environment, the company has strategically affixed its platform and involved in the textile industry.
      </p>
     </div>
     <div className="col-12 text-center">
       <h2 className="mb-5">Our Products</h2>
     </div>
     <div className="col-lg-4 col-12 mb-3">
       <div className="product-thumb">
         <a href="product-detail.html">
           <img src={img4} className="img-fluid product-image1" alt="" />
           <img src={img8} className="img-fluid product-image1" alt="" />
         </a>
         <div className="product-top d-flex">
           <a href="#" className="bi-heart-fill product-icon"></a>
         </div>
         <div className="product-info d-flex">
           <div>
             <h5 className="product-title mb-0">
               <a href="product-detail.html" className="product-title-link">Female Dress</a>
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
           <img src={img7} className="img-fluid product-image1" alt="" />
         </a>
         <div className="product-top d-flex">
           <a href="#" className="bi-heart-fill product-icon"></a>
         </div>
         <div className="product-info d-flex">
           <div>
             <h5 className="product-title mb-0">
               <a href="product-detail.html" className="product-title-link">Female Dress</a>
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
               <a href="product-detail.html" className="product-title-link">Teshert</a>
             </h5>
             <p className="product-p">we have diffrent size and color</p>
           </div>
         </div>
       </div>
     </div>

     {/* Repeat similar structure for other products... */}
     <div className="col-12 text-center">
       <a href="products.html" className="view-all">View All Products</a>
     </div>
   </div>
   <div className="col-12 text-center">
   <h2 className="mb-5 mt-5">Future Expansion</h2>
      <p className="col-12 paragraph-style">
ASBM Industrials has legally registered and established as a business firm in the yer of 2000 E.C under Ethiopin commercial code, since then our company has grown exponentially and the demand has sky rocketed. In Order to fulfil the customer demand and creat dependable supply, the company strategically planned to establish spinning & cotton farming in near future.
      </p>
     </div>
 </div>
</section>

        </>
    )
}

export default Product
