import React from 'react';
import Home from './pages/Home';
import Shop from './pages/Shop';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Product from './pages/Product';
import Profile from './auth/Profile';
import Singup from './auth/Singup';
import Login from './auth/Login';
import Wishlist from './pages/Wishlist';
import Productcart from './pages/Productcart';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/product" element={<Product />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/sing_up" element={<Singup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/wishlist" element={<Wishlist />} />
        <Route path="/productcart" element={<Productcart />} />

      </Routes>
    </BrowserRouter>
  );
};

export default App;
