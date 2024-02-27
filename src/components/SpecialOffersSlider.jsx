// SpecialOffersSlider.jsx

import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './SpecialOffersSlider.css'; // Import your stylesheet

const specialOffersData = [
  {
    id: 1,
    image: 'https://via.placeholder.com/800x400',
    title: 'Special Offer 1',
  },
  {
    id: 2,
    image: 'https://via.placeholder.com/800x400',
    title: 'Special Offer 2',
  },
  {
    id: 3,
    image: 'https://via.placeholder.com/800x400',
    title: 'Special Offer 3',
  },
  // Add more special offers as needed
];

const SpecialOffersSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,        // Enable automatic sliding
    autoplaySpeed: 3000, 
  };

  return (
    <div className="special-offers-slider-container">
      <Slider {...settings}>
        {specialOffersData.map((offer) => (
          <div key={offer.id} className="special-offer-slide">
            <img src={offer.image} alt={offer.title} className="special-offer-image" />
            <h3 className="special-offer-title">{offer.title}</h3>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default SpecialOffersSlider;
