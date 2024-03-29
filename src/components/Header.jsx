// Header.jsx

import React from 'react';
import { Link } from 'react-router-dom';
// Import your logo component
import './Header.css';
const Header = () => {
  return (
    <header>
      <div className="logo-container">
        <Link to="/" className='logos'>
        Bargainkar
        </Link>
      </div>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/products">Products</Link></li>
          <li><Link to="/cart">Cart</Link></li>
          <li><Link to="/login">Login</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
