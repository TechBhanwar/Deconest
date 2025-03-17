
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {  removeFromCart, clearCart } from '../redux/cartSlice';
import Footer from '../components/Footer';
import { useState } from 'react';
import Navbar from '../components/Navbar';
import {  useNavigate } from 'react-router-dom';
import Footernav from '../components/Footernav';
import { updateQuantity} from "../redux/cartSlice";


const Productcart = () => {
 
  const [showPopup, setShowPopup] = useState(false);
  const cartItems = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleGoToShopping = () => {
    navigate('/product');
  };
  
  
 
  const handleRemoveFromCart = (product) => {
    dispatch(removeFromCart(product));
    setShowPopup(true);
    
    setTimeout(() => {
      setShowPopup(false);
    }, 3000);
  };

  const handleClearCart = () => {
    dispatch(clearCart());
  };



  const handleQuantityChange = (id, newQuantity) => {
    if (newQuantity < 1) return; 
    dispatch(updateQuantity({ id, quantity: newQuantity }));
  };

 
    const [isStateOpen, setIsStateOpen] = useState(false);
    const [selectedState, setSelectedState] = useState({
      name: "Select a State",
    });
  
    const states = [
      "Andhra Pradesh",
      "Arunachal Pradesh",
      "Assam",
      "Bihar",
      "Chhattisgarh",
      "Goa",
      "Gujarat",
      "Haryana",
      "Himachal Pradesh",
      "Jharkhand",
      "Karnataka",
      "Kerala",
      "Madhya Pradesh",
      "Maharashtra",
      "Manipur",
      "Meghalaya",
      "Mizoram",
      "Nagaland",
      "Odisha",
      "Punjab",
      "Rajasthan",
      "Sikkim",
      "Tamil Nadu",
      "Telangana",
      "Tripura",
      "Uttar Pradesh",
      "Uttarakhand",
      "West Bengal",
    ];


   
    const totalPrice = cartItems.reduce((total, item) => {
      return total + (item.realPrice * (item.quantity || 1)); // Ensure quantity is at least 1
    }, 0);// 🔥 Redux se Price Fetch
    const freeShippingThreshold = 17999;
    const remainingAmount = freeShippingThreshold - totalPrice;
    console.log("🛒 Cart Total Price:", totalPrice);
  

    const [isChecked, setIsChecked] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    const handleClick = (e) => {
      if (!isChecked) {
        e.preventDefault();
        return;
      }
  
      setIsLoading(true); // Loader show kare
      setTimeout(() => {
        setIsLoading(false);
        navigate("/checkin"); // 2 sec baad redirect kare
      }, 2000);
    };


  return (
    <div>
     <Navbar />


      <div className="container space-y-3 py-10">
        <div className="flex justify-center py-5 mb-5 items-center">
          <h1 className="text-black text-3xl font-semibold">Shopping Cart</h1>
        </div>

        <div className="flex lg:flex-row flex-col space-y-3  lg:space-x-7">
          <div className="lg:w-2/3 w-full py-2 flex space-y-5 flex-col">


 {cartItems.length > 0 ? (
        cartItems.map((item) => (

            <div className=" grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-0  py-3 border px-3">

              <div className="flex flex-row space-x-4 ">


              <div class="lg:w-1/3 bg-pink-100  flex justify-center items-center  rounded-md ">
               <img src={item.image} alt={item.title} className="w-28" />
              </div>

                <div className="flex flex-col space-y-3 w-2/3 py-2 lg:py-2">
                 <div className="flex flex-col ">
                 <h2 className="text-black lg:text-xl text-lg font-medium break-words line-clamp-2">
                 {item.title}
                  </h2>
                  <div className="flex flex-col space-y-1 ">
                    <div className='flex items-center space-x-2'>
                    <h3 className="text-gray-500">Color:</h3> 
                     <div className='flex justify-center space-x-1'>
                      {item.colors.map((color, index) => (
                        <div
                          key={index}
                          className={`w-4 h-4 lg:w-6 lg:h-6 rounded-full border`}
                          style={{ backgroundColor: color }}
                        ></div>
                      ))}
                      <div className='bg-white border w-4 h-4 lg:w-6 lg:h-6 text-center text-[10px] lg:text-sm rounded-full'>+1</div>
                    </div>
                    </div>
                    
                   
                 

                    <h4 className="text-gray-500">Size: M</h4>
                    <p className="text-black flex gap-3"><span className='text-black font-semibold'>Stocks :</span> <span  className='flex items-center gap-2 text-green-500'>
                              <span>
                              <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
                              </span>
                             <span> In Stock</span>
                            </span></p>
                  </div>
                 </div>


                 <div class="flex flex-row space-x-3 items-center  text-sm">
                 <button  className='px-4  py-2 border rounded-xl shadow-sm font-semibold hover:bg-black hover:text-white duration-300 ease-in-out flex items-center gap-1 '><span>Edit</span>
                 <span class="px-1 py-1"><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path fill="none" d="M0 0h24v24H0V0z"></path><path d="m14.06 9.02.92.92L5.92 19H5v-.92l9.06-9.06M17.66 3c-.25 0-.51.1-.7.29l-1.83 1.83 3.75 3.75 1.83-1.83a.996.996 0 0 0 0-1.41l-2.34-2.34c-.2-.2-.45-.29-.71-.29zm-3.6 3.19L3 17.25V21h3.75L17.81 9.94l-3.75-3.75z"></path></svg></span>
                 </button>
                  <div class=" flex flex-row  items-center ">
                  <button onClick={() => handleRemoveFromCart(item)} className='px-3  py-2 border rounded-xl shadow-sm font-semibold hover:bg-black hover:text-white duration-300 ease-in-out flex items-center gap-1 '><span>Remove</span><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="1rem" width="1rem" xmlns="http://www.w3.org/2000/svg"><path d="M17 6H22V8H20V21C20 21.5523 19.5523 22 19 22H5C4.44772 22 4 21.5523 4 21V8H2V6H7V3C7 2.44772 7.44772 2 8 2H16C16.5523 2 17 2.44772 17 3V6ZM18 8H6V20H18V8ZM9 11H11V17H9V11ZM13 11H15V17H13V11ZM9 4V6H15V4H9Z"></path></svg>
                  </button>
                  {showPopup && (
        <div
          className=" right-5 top-20 fixed  text-center px-8 py-4 text-sm text-black bg-white shadow-lg rounded-md opacity-100 transition-opacity duration-200"
        >
          Item remove to cart!
        </div>
      )}
                   </div>
                    </div>
                </div>
              </div>

              <div className="grid  grid-cols-3    space-x-3 py-0 lg:py-2 ">


                <div className="flex flex-col items-center lg:space-y-4 space-y-3">
                  <h2 className="text-black lg:text-xl text-lg font-semibold">Price</h2>
                  <h3 className="text-black lg:text-lg font-medium ">{item.realPrice} ₹/</h3>
                </div>

                <div className="flex flex-col items-center lg:space-y-4  space-y-2">
                  <h1 className="lg:text-xl text-lg font-semibold">Quantity</h1>
                  <div className="w-[100px] lg:w-[111px] flex items-center justify-between border border-gray-300 rounded-full px-3 py-1  bg-white">
              <button
                onClick={() => handleQuantityChange(item.id, item.quantity - 1)}
                className="lg:text-lg text-base font-bold text-gray-600 hover:text-black transition-all hover:scale-110"
              >
                −
              </button>
              <span className="lg:text-xl text-base font-semibold text-gray-800">
              {item.quantity}
              </span>
              <button
                onClick={() => handleQuantityChange(item.id, item.quantity + 1)}
                className="lg:text-lg text-base font-bold text-gray-600 hover:text-black transition-all hover:scale-110"
              >
                +
              </button>
            </div>

                </div>

                <div className=" lg:space-y-4 space-y-3 flex flex-col text-center ">
                  <h2 className="text-black lg:text-xl text-lg font-semibold ">Total</h2>
                  <h3 className="text-black lg:text-lg text-base  font-medium">
                  {item.realPrice * item.quantity}  ₹/

                  </h3>
                </div>
               
              </div>
            </div>

 ))
) : (
  <div className='flex flex-col justify-center lg:flex-row lg:justify-between space-y-2 lg:space-y-0 items-center'>
    <p className='text-2xl text-black font-semibold'>Your cart is empty!</p>
    <button className='rounded-3xl bg-black text-white px-4 py-2 text-sm ' onClick={handleGoToShopping} >Go to Shop Now </button>
  </div>
)}

<div className='flex justify-between items-center'>
<div className=" flex flex-row py-5 space-x-3">

<span className="flex flex-row py-2">
  <svg stroke="currentColor" fill="black" stroke-width="0" viewBox="0 0 24 24" height="1.5em" width="1.5em" xmlns="http://www.w3.org/2000/svg"><path d="M3.75 3.75A3.75 3.75 0 0 1 7.5 0c1.455 0 3.436.901 4.5 3.11C13.064.901 15.044 0 16.5 0a3.75 3.75 0 0 1 3 6h1.75c.966 0 1.75.784 1.75 1.75v2.5c0 .698-.409 1.301-1 1.582v8.418A1.75 1.75 0 0 1 20.25 22H3.75A1.75 1.75 0 0 1 2 20.25v-8.418c-.591-.282-1-.884-1-1.582v-2.5C1 6.784 1.784 6 2.75 6H4.5a3.733 3.733 0 0 1-.75-2.25ZM20.5 12h-7.75v8.5h7.5a.25.25 0 0 0 .25-.25Zm-9.25 8.5V12H3.5v8.25c0 .138.112.25.25.25Zm10-10a.25.25 0 0 0 .25-.25v-2.5a.25.25 0 0 0-.25-.25h-8.5v3Zm-18.5 0h8.5v-3h-8.5a.25.25 0 0 0-.25.25v2.5c0 .138.112.25.25.25Zm16-6.75A2.25 2.25 0 0 0 16.5 1.5c-1.15 0-3.433 1.007-3.72 4.5h3.72a2.25 2.25 0 0 0 2.25-2.25ZM11.22 6c-.287-3.493-2.57-4.5-3.72-4.5a2.25 2.25 0 1 0 0 4.5Z"></path></svg>
  <h3 className="text-black text-xs py-1 px-2 font-normal">Add Gift wrap only</h3>
</span>
<button className=" px-6 py-3 rounded-full border text-xs  hover:bg-black hover:text-white transition transform duration-300 border-black bg-transparent"> Add A Gift Wrap</button>
</div>

  <button onClick={handleClearCart} className='rounded-3xl bg-black text-white px-4 py-2 text-sm '>Clear cart</button>
</div>

           

            <div className="flex space-y-4 flex-col">
              <label htmlFor="" className=" text-black text-sm font-medium">Special instructions for seller</label>
              <textarea name="" id="" placeholder=" How Can We Help You" className=" focus:outline-none active:outline-none active:border-none border px-2 py-2 rounded-md border-slate-300 " rows={5}></textarea>
            </div>

          </div>

          <div className=" lg:w-1/3   flex flex-col space-y-4">
          <div className="bg-pink-100 px-5 space-y-3 py-10 flex-col rounded-md">
  <span className="flex flex-row">
    <svg
      stroke="currentColor"
      fill="currentColor"
      strokeWidth="0"
      version="1.2"
      baseProfile="tiny"
      viewBox="0 0 24 24"
      height="1em"
      width="1em"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M14.5 4h.005m-.005 0l-2.5 6 5 2.898-7.5 7.102 2.5-6-5-2.9 7.5-7.1m0-2c-.562.012-1.029.219-1.379.551l-7.497 7.095c-.458.435-.685 1.059-.61 1.686.072.626.437 1.182.982 1.498l3.482 2.021-1.826 4.381c-.362.871-.066 1.879.712 2.416.344.236.739.354 1.135.354.498 0 .993-.186 1.375-.548l7.5-7.103c.458-.434.685-1.058.61-1.685-.073-.627-.438-1.183-.982-1.498l-3.482-2.018 1.789-4.293c.123-.26.192-.551.192-.857 0-1.102-.89-1.996-2.001-2z"></path>
    </svg>
    <h1 className="mt-[-5px]">Free shipping on orders ₹{freeShippingThreshold}+</h1>
  </span>

  {/* 🛒 Free Shipping Message */}
  <h1 className="text-base font-semibold text-gray-800">
  {totalPrice >= freeShippingThreshold ? (
    "🎉 Woohoo! Free shipping unlocked!"
  ) : (
    <>
      Spend <span className="text-lg font-bold text-black ml-1">₹{remainingAmount}</span> more and get free shipping!
    </>
  )}
</h1>


  {/* ✅ Progress Bar */}
  <div className="w-full rounded-md border bg-white h-2">
    <div
      className="bg-slate-600 h-full transition-all duration-500"
      style={{
        width: `${Math.min((totalPrice / freeShippingThreshold) * 100, 100)}%`,
      }}
    ></div>
  </div>
</div>


            <div className="bg-pink-100 px-5 flex flex-col space-y-4 py-6">
              <h2 className="text-black text-base font-semibold">
                Get shipping estimates
              </h2>

              <div className="relative w-full text-left">
    
      <button
        className="px-4 py-2 w-full rounded-md text-black flex items-center justify-between bg-white"
        onClick={() => setIsStateOpen(!isStateOpen)}
      >
        {selectedState.name}
        <svg
          className={`w-4 h-4 transition-transform ${isStateOpen ? "rotate-180" : "rotate-0"}`}
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2}
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {/* Dropdown List */}
      {isStateOpen && (
        <ul className="absolute z-10 mt-2 w-full bg-white border  rounded-md shadow-lg max-h-60 overflow-y-auto">
          {states.map((state, index) => (
            <li
              key={index}
              className="px-4 py-2 cursor-pointer hover:bg-gray-100"
              onClick={() => {
                setSelectedState({ name: state });
                setIsStateOpen(false);
              }}
            >
              {state}
            </li>
          ))}
        </ul>
      )}
    </div>

              <input type="address" placeholder="Zip Code" className="py-2 px-2 border-none rounded-lg outline-none" />
              <button type="button" className="bg-black text-white flex items-center justify-center rounded-full px-2 py-2">ESTIMATE</button>


              <div className=" flex flex-col space-y-3 py-3">
                <h2 className="text-black text-sm font-medium">Coupon</h2>
                <label htmlFor="" className="text-gray-500 text-base font-normal">* Discount will be calculated and applied at checkout</label>
                <input type="text" placeholder="Coupon code" className="py-2 px-2 border-none rounded-lg outline-none" />

              </div>

              <div className=" flex flex-col space-y-3 py-3">
                <h2 className="text-black text-sm font-medium">
                  Subtotal:
               <span className='ml-3 text-base'>  {totalPrice}₹/-</span>
                </h2>
                <label htmlFor="" className="text-gray-500 text-base font-normal">Taxes and shipping calculated at checkout</label>
                <span className="flex flex-row space-x-2 text-gray-500">
        <input 
          type="checkbox" 
          className="mr-2 cursor-pointer" 
          checked={isChecked}
          onChange={() => setIsChecked(!isChecked)} 
        />
       <span>  I agree with the </span> <h1 className="text-black underline font-medium">Terms And Conditions</h1>
      </span>

      {/* Proceed to Checkout Button */}
      <button
        type="button"
        onClick={handleClick}
        className={`w-full text-white text-sm font-medium flex items-center justify-center rounded-full px-2 py-3 transition-all ${
          isChecked ? "bg-black cursor-pointer" : "bg-gray-400 cursor-not-allowed"
        }`}
        disabled={!isChecked}
      >
        Proceed to checkout
      </button>
      {isLoading && (
        <div className="flex justify-center items-center top-0 left-0 w-full h-full fixed bg-white opacity-60 cursor-wait">
          <img src="/images/Deconest-loader.gif" alt="Loading..." className="w-20 h-20" />
        </div>
      )}
              </div>
            </div>
          </div>
        </div>
        
      </div>



     <Footer />
     <Footernav />

    </div>
  );
};


export default Productcart;

