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
            <h4>Style Unlocked</h4>
            <h2>Discover Style, Unleash Confidence</h2>
          </div>
        </div>
        <div className="banner-item banner-item-02">
          <div className="text-content">
            <h4>Flash Deals</h4>
            <h2>Get your best products</h2>
          </div>
        </div>
        <div className="banner-item banner-item-03">
          <div className="text-content">
            <h4>Fashion Forward</h4>
            <h2>Step Into Style with Our Latest Collection</h2>
          </div>
        </div>
      </Slider>
    </div>
  );
}

export default Banner;
