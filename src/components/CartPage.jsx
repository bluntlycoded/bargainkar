// CartPage.jsx

import React, { useState, useEffect } from 'react';
import './CartPage.css'; // Import your stylesheet

const CartPage = () => {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    // Fetch or manage cart items from your state or context
    // This is just a sample data, replace it with your actual logic
    const storedCartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
    setCartItems(storedCartItems);
  }, []);

  const calculateTotal = () => {
    return cartItems.reduce((total, item) => total + item.price, 0).toFixed(2);
  };

  return (
    <div className="cart-page-container">
      <h2 className="cart-heading">Shopping Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          <div className="cart-items">
            {cartItems.map((item) => (
              <div key={item.id} className="cart-item">
                <img src={item.image} alt={item.name} className="cart-item-image" />
                <div className="cart-item-details">
                  <h3 className="cart-item-name">{item.name}</h3>
                  <p className="cart-item-price">${item.price.toFixed(2)}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="cart-total">
            <p>Total: ${calculateTotal()}</p>
          </div>
          <button className="checkout-button">Checkout</button>
        </>
      )}
    </div>
  );
};

export default CartPage;
