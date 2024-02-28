// App.jsx

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Login from './components/Login/Login';
import Signup from './components/Signup/Signup';
import Home from './components/Home';
import Products from './components/Products';
import CartPage from './components/CartPage';
import ProductPage from './components/ProductPage';

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/login" element={<Login/>} /> 
        <Route path="/register" element={<Signup/>} /> 
        <Route path="/productx" element={<ProductPage/>} /> 
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
