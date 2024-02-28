// Products.jsx

import React from 'react';
import './Products.css'; // Import your stylesheet

const productsData = [
  {
    id: 1,
    name: 'Product 1',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    price: 'Rs.1999.99',
    image: 'https://via.placeholder.com/150',
  },
  {
    id: 2,
    name: 'Product 2',
    description: 'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.',
    price: 'Rs.2999.99',
    image: 'https://via.placeholder.com/150',
  },
  {
    id: 3,
    name: 'Product 3',
    description: 'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.',
    price: 'Rs.3999.99',
    image: 'https://via.placeholder.com/150',
  },
 
];

const Products = () => {
  return (
    <div className="products-container">
      <h2 className="products-heading">Products</h2>
      <div className="products-list">
        {productsData.map((product) => (
          <div key={product.id} className="product-card">
            <img src={product.image} alt={`Product ${product.id}`} className="product-image" />
            <h3 className="product-name">{product.name}</h3>
            <p className="product-description">{product.description}</p>
            <p className="product-price">{product.price}</p>
            <button className="add-to-cart-button">Add to Cart</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
