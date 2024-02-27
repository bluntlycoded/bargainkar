// ProductPage.jsx

import React from 'react';
import './ProductPage.css'; // Import your stylesheet

const ProductPage = () => {
  const productData = {
    id: 1,
    name: 'Product Name',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam scelerisque quam vitae tristique facilisis.',
    images: [
      'https://via.placeholder.com/400x300',
      'https://via.placeholder.com/400x300',
      'https://via.placeholder.com/400x300',
    ],
    price: 49.99,
  };

  return (
    <div className="product-page-container">
      <div className="product-details">
        <h2 className="product-name">{productData.name}</h2>
        <p className="product-description">{productData.description}</p>

        <div className="product-images">
          {productData.images.map((image, index) => (
            <img key={index} src={image} alt={`Product ${index + 1}`} className="product-image" />
          ))}
        </div>
      </div>

      <div className="sticky-buttons">
        <button className="add-to-cart-button">Add to Cart</button>
        <button className="buy-now-button">Buy Now</button>
      </div>
    </div>
  );
};

export default ProductPage;
