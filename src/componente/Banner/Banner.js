import React, { useState } from "react";
import "./banner.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Banner() {
  const [activeDot, setActiveDot] = useState(0);

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    responsive: [
      {
        breakpoint: 768, // Adjust this breakpoint as needed
        settings: {
          arrows: false, // Hide arrows on smaller screens if necessary
          dots: true,
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
    customPaging: function (i) {
      return (
        <button
          className={`custom-dot dot-${i + 1} ${
            activeDot === i ? "active" : ""
          }`}
        ></button>
      );
    },
    beforeChange: (current, next) => {
      setActiveDot(next);
    },
  };

  return (
    <div className="banner">
      <Slider {...sliderSettings}>
        <div className="banner-item banner-item-01">
          <div className="text-content">
            <h2>Flash Deals</h2>
            <h4>Get your best products</h4>
          </div>
        </div>
        <div className="banner-item banner-item-02">
          <div className="text-content">
            <h2>Flash Deals</h2>
            <h4>Get your best products</h4>
          </div>
        </div>
        <div className="banner-item banner-item-03">
          <div className="text-content">
            <h2>Flash Deals</h2>
            <h4>Get your best products</h4>
          </div>
        </div>
      </Slider>
    </div>
  );
}

export default Banner;
