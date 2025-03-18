import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import Home from './pages/Home';
import Shop from './pages/Shop';
// import Profile from './auth/Profile';
import Singup from './auth/Singup';
import Login from './auth/Login';
import Wishlist from './pages/Wishlist';
import Productcart from './pages/Productcart';
import Product from './pages/Product';
import Blog from './pages/Blog';
import Blogopen from './pages/Blogopen';
import Termscondition from './pages/Termscondition';
import Faqs from './pages/Faqs';
import Contact from './pages/Contact';
import About from './pages/About';

// import CheckoutPage from './pages/CheckoutPage';
import Aboutus from './components/Aboutus';
import ScrollToTop from './components/ScrollToTop';
import UserProfile from './auth/UserProfile';
import Checkout from './pages/Checkout';



const App = () => {



  return (
    <Provider store={store}>
      <Router >
      <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/userprofile" element={<UserProfile />} />
          <Route path="/sing_up" element={<Singup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/wishlist" element={<Wishlist />} />
          <Route path="/productcart" element={<Productcart />} />
          <Route path="/product" element={<Product />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:id" element={<Blogopen />} />
          <Route path="/shop/:id" element={<Shop />} />
          <Route path="/checkin" element={<Checkout />} />
          <Route path="/aboutus" element={<Aboutus />} />
          <Route path="/termcondition" element={<Termscondition />} />
         <Route path="/faqs" element={<Faqs />} />
         <Route path="/contact" element={<Contact />} />
         <Route path="/about" element={<About />} />
        
        </Routes>
      </Router>
    </Provider>
  );
};

export default App;
