import React from 'react';
import "./banner.css";
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

function Banner() {
  // Slider.js
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
  };

  return (
    <div className='banner'>
    <Slider {...sliderSettings}>
      <div className="banner-item banner-item-01">
        <div className="text-content">
          <h4>Best Offer</h4>
          <h2>New Arrivals On Sale</h2>
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
          <h4>Last Minute</h4>
          <h2>Grab last-minute deals</h2>
        </div>
      </div>
    </Slider>
    </div>
  );
}

export default Banner;