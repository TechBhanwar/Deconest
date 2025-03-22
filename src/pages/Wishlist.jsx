import React, { useState } from 'react';
import Navbar from '../components/Navbar'
import Footernav from '../components/Footernav'
import Footer from '../components/Footer'
// import { useSelector } from 'react-redux';
import { useSelector, useDispatch } from "react-redux";
import { removeFromWishlist, clearWishlist } from "../redux/wishlistSlice";
import { addToCart } from "../redux/cartSlice";
import {  useNavigate } from 'react-router-dom';


const Wishlist = () => {
  // const wishlist = useSelector((state) => state.wishlist.wishlist);
  const wishlist = useSelector((state) => state.wishlist.wishlist);
  const dispatch = useDispatch();
  const [showPopup, setShowPopup] = useState(false);
  const [popupMessage, setPopupMessage] = useState("");

  const showPopupMessage = (message) => {
    setPopupMessage(message);
    setShowPopup(true);
    setTimeout(() => {
      setShowPopup(false);
    }, 2000); // Hide popup after 2 seconds
  };
  

  const navigate = useNavigate();

  const handleGoToShopping = () => {
    navigate('/product');
  };

  return (
    <div>
      <Navbar />
      
          {/* <div className='container'>

            <div className='flex flex-col space-y-8 py-8'>

              <div className='flex justify-center '>
                <h1 className=' text-4xl text-black font-bold'>My  Wishlist</h1>
              </div>
              {wishlist.length === 0 ? (
        <p>No items in wishlist.</p>
      ) :(

              <div className='grid grid-cols-1 lg:grid-cols-3 gap-16'>
{wishlist.map((item) => (
              <div className='flex w-full  space-y-2 flex-col'>
                <div className='bg-pink-50  items-center w-full justify-center flex h-96 relative'>
                  <img src=" images/product1.webp" alt="" className='w-60'  />

                  <button className='absolute border-none outline-none bg-white px-4 py-4 shadow-md right-1 top-1 rounded-full '>
                    <span>
                    <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M7 4V2H17V4H22V6H20V21C20 21.5523 19.5523 22 19 22H5C4.44772 22 4 21.5523 4 21V6H2V4H7ZM6 6V20H18V6H6ZM9 9H11V17H9V9ZM13 9H15V17H13V9Z"></path></svg>
                    </span>
                  </button>
                </div>
                <div className='flex space-y-3 flex-col'>

                  <h2 className='text-xl font-medium'>{item}</h2>

                  <h1 className='text-lg font-medium' >$55.00</h1>
                  <h3 className='text-base font-medium'>Color:White</h3>
                  <button className='bg-black px-3 flex justify-center items-center flex-row  py-2 text-white'> <span className='text-white px-2  '><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 256 256" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M233.21,56.31A12,12,0,0,0,224,52H66L60.53,21.85A12,12,0,0,0,48.73,12H24a12,12,0,0,0,0,24H38.71L63.62,173a28,28,0,0,0,4.07,10.21A32,32,0,1,0,123,196h34a32,32,0,1,0,31-24H91.17a4,4,0,0,1-3.93-3.28L84.92,156H196.1a28,28,0,0,0,27.55-23l12.16-66.86A12,12,0,0,0,233.21,56.31ZM100,204a8,8,0,1,1-8-8A8,8,0,0,1,100,204Zm88,8a8,8,0,1,1,8-8A8,8,0,0,1,188,212Zm12-83.28A4,4,0,0,1,196.1,132H80.56L70.38,76H209.62Z"></path></svg></span> Add to Cart </button>
                </div>
              </div>
               
              ))}
            

              </div>
               )}

            </div>

          </div> */}


          <div className="container py-9">
          <div className="flex justify-center py-5 mb-5 items-center">
          <h1 className="text-black text-3xl font-semibold">My Wishlist</h1>
        </div>

        <div className="w-full lg:w-2/3 flex flex-col gap-5 ">

      {wishlist.length === 0 ? (
        <div className='flex flex-col justify-center lg:flex-row lg:justify-between space-y-2 lg:space-y-0 items-center'>
        <p className='text-2xl text-black font-semibold'>Your Wishlist is empty!</p>
        <button className='rounded-3xl bg-black text-white px-4 py-2 text-sm ' onClick={handleGoToShopping} >Go to Shop Now </button>
      </div>
      ) : (
        <div>
          <div className='flex justify-end py-4'>
          <button onClick={() => dispatch(clearWishlist())} className="rounded-3xl bg-black text-white px-4 py-2 text-sm">
        Clear Wishlist
      </button>
          </div>
      
       <div className='flex flex-col-reverse gap-4'>
       { wishlist.map((item) => (
          <div key={item.id} className="w-full border rounded-md flex flex-col lg:flex-row gap-5 p-4 shadow-sm">
            <div className="w-[62%] lg:w-[19%]">
              <div className="bg-pink-100 h-full flex justify-center rounded-lg items-center">
                <img src={item.image} alt={item.title} className="w-[72%]" />
              </div>
            </div>

            <div className="w-3/4 flex flex-col gap-1">
              <h2 className="text-black lg:text-xl text-lg font-medium break-words">{item.title}</h2>
              <p className="text-gray-500 text-xs lg:text-base">{item.description}</p>
              <h4 className="text-gray-500">
                <span className="text-black font-semibold">Price :</span>{item.realPrice}₹/-
              </h4>

              <h4 className="text-gray-500 flex gap-2">
                <span className="text-black font-semibold">Color :</span> 
                <div className='flex space-x-1'>
                      {item.colors.map((color, index) => (
                        <div
                          key={index}
                          className={`w-4 h-4 lg:w-6 lg:h-6 rounded-full border`}
                          style={{ backgroundColor: color }}
                        ></div>
                      ))}
                      <div className='bg-white border w-4 h-4 lg:w-6 lg:h-6 text-center text-[10px] lg:text-sm rounded-full'>+1</div>
                    </div>
              </h4>

              <p className="text-black flex gap-3">
                <span className="text-black font-semibold">Stocks :</span>
                <span className="flex items-center gap-2 text-green-500">
                  <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                    <polyline points="22 4 12 14.01 9 11.01"></polyline>
                  </svg>
                  <span> In Stock</span>
                </span>
              </p>

              <div className="flex gap-2">
                <button
                  className="px-3 py-2 border rounded-xl shadow-sm font-semibold hover:bg-black hover:text-white duration-300 ease-in-out"
                  onClick={() => {
                    dispatch(addToCart(item));
                    showPopupMessage("Item added to cart!");
                  }} 
                >
                  Add to cart
                </button>

                <button
                  className="px-3 py-2 border rounded-xl shadow-sm font-semibold hover:bg-black hover:text-white duration-300 ease-in-out flex items-center gap-1"
                  onClick={() => {dispatch(removeFromWishlist(item)); showPopupMessage("item remove to wishlist")}}
                >
                  <span>Remove</span>
                  <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" height="1rem" width="1rem" xmlns="http://www.w3.org/2000/svg">
                    <path d="M17 6H22V8H20V21C20 21.5523 19.5523 22 19 22H5C4.44772 22 4 21.5523 4 21V8H2V6H7V3C7 2.44772 7.44772 2 8 2H16C16.5523 2 17 2.44772 17 3V6ZM18 8H6V20H18V8ZM9 11H11V17H9V11ZM13 11H15V17H13V11ZM9 4V6H15V4H9Z"></path>
                  </svg>
                </button>
              </div>
            </div>
          </div>
        ))}
        </div>
        </div>
      )}
    </div>
          </div>
          {showPopup && (
                  <div
                    className=" right-5 top-20 fixed  text-center px-8 py-4 text-sm text-black bg-white shadow-lg rounded-md opacity-100 transition-opacity duration-200"
                  >
                   {popupMessage}
                  </div>
                )}

      <Footernav />
      <Footer />
    </div>
  )
}

export default Wishlist

