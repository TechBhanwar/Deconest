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

import ScrollToTop from './components/ScrollToTop';
import Lodingscreen from './pages/Lodingscreen';
import UserProfile from './auth/UserProfile';
import Termscondition from './pages/Termscondition';
import Faqs from './pages/Faqs';
import Contact from './pages/Contact';
import About from './pages/About';


const App = () => {



  return (
    <Provider store={store}>
      <BrowserRouter>
      <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/userprofile" element={<UserProfile />} />
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
          
          <Route path="/loding" element={<Lodingscreen />} />
          <Route path="/termcondition" element={<Termscondition />} />
         <Route path="/faqs" element={<Faqs />} />
         <Route path="/contact" element={<Contact />} />
         <Route path="/about" element={<About />} />
        
        </Routes>
      </BrowserRouter>
    </Provider>
  );
};

export default App;
