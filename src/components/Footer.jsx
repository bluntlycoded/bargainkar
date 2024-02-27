// Footer.jsx

import React from 'react';
import './Footer.css';
const Footer = () => {
  return (
    <footer>
      <div className="footer-content">
        <div className="footer-section">
          <h3>About Us</h3>
          <p>Your company description goes here.</p>
        </div>
        <div className="footer-section">
          <h3>Contact Us</h3>
          <p>Email: info@example.com</p>
          <p>Phone: +123 456 789</p>
        </div>
        <div className="footer-section">
          <h3>Follow Us</h3>
          <p>Connect on social media platforms.</p>
          {/* Add social media icons or links here */}
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2024 Your Ecommerce Website. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
