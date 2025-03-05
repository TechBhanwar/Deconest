import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import Home from './pages/Home';
import Shop from './pages/Shop';
import Profile from './auth/Profile';
import Singup from './auth/Singup';
import Login from './auth/Login';
import Wishlist from './pages/Wishlist';
import Productcart from './pages/Productcart';
import Product from './pages/Product';
import Blog from './pages/Blog';
import Blogopen from './pages/Blogopen';
import CheckoutPage from './pages/CheckoutPage';
import Payment from './pages/Payment';

const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/sing_up" element={<Singup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/wishlist" element={<Wishlist />} />
          <Route path="/productcart" element={<Productcart />} />
          <Route path="/product" element={<Product />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:id" element={<Blogopen />} />
          <Route path="/shop/:id" element={<Shop />} />
          <Route path="/checkin" element={<CheckoutPage />} />
          <Route path="/payment" element={<Payment />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
};

export default App;
