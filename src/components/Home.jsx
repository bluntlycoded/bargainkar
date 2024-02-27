// Home.jsx

import React from 'react';
import './Home.css'; // Import your stylesheet
import FeaturedProducts from './FeaturedProducts'; // Assuming you have a FeaturedProducts component
import SpecialOffersSlider from './SpecialOffersSlider';
import LatestNews from './LatestNews';

const Home = () => {
  return (
    <div className="home-container">
      <SpecialOffersSlider/>
      <section className="featured-products-section">
        <h3 className="section-heading">Featured Products</h3>
        <FeaturedProducts />
        {/* You can create a FeaturedProducts component to display a list of featured products */}
      </section>

      <section className="special-offers-section">
        <h3 className="section-heading">Special Offers</h3>
       {/* <SpecialOffersSlider/> */}
      </section>

      <section className="latest-news-section">
        <h3 className="section-heading">Latest News</h3>
        <LatestNews/>
        {/* Add content for the latest news or updates */}
      </section>
    </div>
  );
};

export default Home;
