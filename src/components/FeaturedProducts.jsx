// FeaturedProducts.jsx

import React from 'react';
import './FeaturedProducts.css'; // Import your stylesheet

const productsData = [
  {
    id: 1,
    name: 'Product 1',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    price: '$19.99',
    image: 'https://via.placeholder.com/150',
  },
  {
    id: 2,
    name: 'Product 2',
    description: 'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.',
    price: '$29.99',
    image: 'https://via.placeholder.com/150',
    
  },
  {
    id: 3,
    name: 'Product 3',
    description: 'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.',
    price: '$29.99',
    image: 'https://via.placeholder.com/150',
  },
  // Add more products as needed
];

const FeaturedProducts = () => {
  const handleSeeMore = (productId) => {
    // Handle the "See More" button click, e.g., redirect to a product details page
    console.log(`See more details for product ${productId}`);
  };

  const handleAddToCart = (productId) => {
    // Handle the "Add to Cart" button click, e.g., add the product to the cart state
    console.log(`Added product ${productId} to the cart`);
  };

  return (
    <div className="featured-products-container">
      {productsData.map((product) => (
        <div key={product.id} className="product-card">
          <img src={product.image} alt={`Product ${product.id}`} className="product-image" />
          <h3 className="product-name">{product.name}</h3>
          <p className="product-description">{product.description}</p>
          <p className="product-price">{product.price}</p>
          <div className="button-container">
            <button onClick={() => handleSeeMore(product.id)}>See More</button>
            <button onClick={() => handleAddToCart(product.id)}>Add to Cart</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FeaturedProducts;
