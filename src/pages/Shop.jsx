
import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footernav from '../components/Footernav';
import Footer from '../components/Footer';
import { useParams } from "react-router-dom";
import { productItems } from '../data/data';
import { useDispatch } from 'react-redux';
import { addToCart } from '../redux/cartSlice';


const images = [
  "/images/product5.png",
  "/images/product6.png",
  "/images/product3.png",
  "/images/product2.png"
];

const Shop = () => {


  const { id } = useParams(); // URL se product ID le raha hai
  const product = productItems.find((product) => product.id === parseInt(id));

  const [showReviewBox, setShowReviewBox] = useState(false);
  const [activeTab, setActiveTab] = useState("Description");
  const [isChecked, setIsChecked] = useState(false);
  const [quantity, setQuantity] = useState(1);
  const [currentImage, setCurrentImage] = useState(0);

  const [categoryProducts, setCategoryProducts] = useState([]);


  const handleWriteReviewClick = () => {
    setShowReviewBox(!showReviewBox);
    console.log("Product Image Path:", product.image);
  };


  const increment = () => {
    setQuantity(quantity + 1);
  };

  const decrement = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };



  const nextImage = () => {
    setCurrentImage((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const prevImage = () => {
    setCurrentImage((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const dispatch = useDispatch();
  const [showPopup, setShowPopup] = useState(false);

  const handleAddToCart = (product) => {
    console.log('Adding product to cart:', product); 
    if (product && product.id) {
      dispatch(addToCart(product));
    } else {
      console.log('Product data is missing.');
    }
    setShowPopup(true);

    setTimeout(() => {
      setShowPopup(false);
    }, 3000);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    if (!product) return; 

    const relatedProducts = productItems.filter(
      (item) => item.category === product.category && item.id !== product.id
    );
    setCategoryProducts(relatedProducts);
  }, [product]);

  if (!product) {
    return <div>
      <Navbar />
      <div className="container py-4">
        <h2 className='text-2xl' >Product Not Found</h2>
      </div>
      <Footer />
    </div>;
  }






  const tabs = ["Description", "Review", "Shipping", "Return"];


  return (
    <div>
      <Navbar />
      <div className='container py-9 overflow-x-hidden'>

        <div className='flex flex-row py-3 '>
          <ul className='text-black text-base flex space-x-3 cursor-pointer'>
            <li>Home<span className='text-gray-400 px-1'>/</span></li>
            <li>{product.category}<span className='text-gray-400 px-1'>/</span></li>
            <li>{product.title}</li>

          </ul>
        </div>


        <div className='flex lg:flex-row space-x-0 mb-10 space-y-3 lg:space-y-0 lg:space-x-20 flex-col'>
          <div className='flex flex-col space-y-7'>

            <div className='flex lg:flex-row flex-col  lg:space-y-3 space-y-0 space-x-0 lg:space-x-7 '>



              <div className='flex flex-row lg:flex-col lg:order-1 order-2 lg:space-y-4 space-y-3 space-x-5 lg:space-x-0 items-center'>
                {images.map((img, index) => (
                  <div key={index} className="hover:border border-black pt-1 rounded-md transition-transform duration-300">
                    <div
                      className="bg-pink-100 lg:px-6 px-7 flex justify-center hover:scale-75 items-center py-8 lg:py-7 rounded-md transition-transform duration-300"
                      onClick={() => setCurrentImage(index)} // Set the clicked thumbnail as the main image

                    >
                      <img src={img} alt="Product" className="w-9" />
                    </div>
                  </div>
                ))}
              </div>



              <div className='bg-pink-100 lg:order-2 order-1 relative rounded-lg lg:w-[720px] w-full py-10 h-96 lg:h-[900px] flex justify-center items-center overflow-hidden'>
                <img src={`/${product.image}`} alt="Product" className='w-auto h-96 lg:h-fit  object-contain' />
                <span className='bg-red-600 absolute top-3 px-2 py-1 rounded-full text-white text-sm font-medium right-3'>-{product.discount}%</span>



                <button onClick={prevImage} className='absolute left-4  text-3xl  bg-white hover:bg-black hover:text-white duration-300 transition transform  lg:px-3 px-1 py-1 lg:py-3 rounded-full shadow-lg'>
                  <span><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path fill="none" d="M0 0h24v24H0V0z"></path><path d="M15.41 7.41 14 6l-6 6 6 6 1.41-1.41L10.83 12l4.58-4.59z"></path></svg></span>
                </button>
                <button onClick={nextImage} className='absolute right-4 text-3xl bg-white hover:bg-black hover:text-white duration-300 transition transform lg:px-3 px-1 py-1 lg:py-3 rounded-full shadow-lg'>
                  <span>
                    <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M10.707 17.707 16.414 12l-5.707-5.707-1.414 1.414L13.586 12l-4.293 4.293z"></path></svg>
                  </span>
                </button>
              </div>
            </div>
          </div>

          <div className='flex flex-col px-3 lg:px-0  w-full lg:w-[550px] '>

            <div className='flex flex-col space-y-3 py-1  border-b items-start justify-start ' >
              <h1 className='text-black lg:text-3xl text-xl font-semibold'>{product.title}</h1>

              <span className='text-gray-400 space-x-1  flex flex-row '>
                <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 16 16" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M9.595 6.252L8 1 6.405 6.252H1l4.373 3.4L3.75 15 8 11.695 12.25 15l-1.623-5.348L15 6.252H9.595z"></path></svg>
                <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 16 16" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M9.595 6.252L8 1 6.405 6.252H1l4.373 3.4L3.75 15 8 11.695 12.25 15l-1.623-5.348L15 6.252H9.595z"></path></svg>
                <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 16 16" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M9.595 6.252L8 1 6.405 6.252H1l4.373 3.4L3.75 15 8 11.695 12.25 15l-1.623-5.348L15 6.252H9.595z"></path></svg>
                <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 16 16" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M9.595 6.252L8 1 6.405 6.252H1l4.373 3.4L3.75 15 8 11.695 12.25 15l-1.623-5.348L15 6.252H9.595z"></path></svg>
                <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 16 16" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M9.595 6.252L8 1 6.405 6.252H1l4.373 3.4L3.75 15 8 11.695 12.25 15l-1.623-5.348L15 6.252H9.595z"></path></svg>
              </span>

              <span className='flex flex-row space-x-3'>
                <h1 className='text-red-600 lg:text-xl text-lg font-semibold line-through'>{product.cutPrice}₹/</h1>
                <h1 className='text-black lg:text-xl text-lg font-semibold '>{product.realPrice} ₹/-</h1>
              </span>


            </div>

            <div className='flex flex-col space-y-3 py-5'>
              <span className='flex flex-row space-x-2' >
                <svg stroke="currentColor" fill="currentColor" stroke-width="0" className='lg:mt-1' viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><circle cx="256" cy="256" r="64"></circle><path d="M490.84 238.6c-26.46-40.92-60.79-75.68-99.27-100.53C349 110.55 302 96 255.66 96c-42.52 0-84.33 12.15-124.27 36.11-40.73 24.43-77.63 60.12-109.68 106.07a31.92 31.92 0 0 0-.64 35.54c26.41 41.33 60.4 76.14 98.28 100.65C162 402 207.9 416 255.66 416c46.71 0 93.81-14.43 136.2-41.72 38.46-24.77 72.72-59.66 99.08-100.92a32.2 32.2 0 0 0-.1-34.76zM256 352a96 96 0 1 1 96-96 96.11 96.11 0 0 1-96 96z"></path></svg>
                <h2 className='text-black text-sm lg:text-base font-medium'>36 people are viewing this right now</h2>
              </span>
              <span className='flex  flex-row space-x-2' >
                <svg stroke="currentColor" fill="red" stroke-width="0" viewBox="0 0 16 16" className='lg:mt-1' height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M8 16c3.314 0 6-2 6-5.5 0-1.5-.5-4-2.5-6 .25 1.5-1.25 2-1.25 2C11 4 9 .5 6 0c.357 2 .5 4-2 6-1.25 1-2 2.729-2 4.5C2 14 4.686 16 8 16m0-1c-1.657 0-3-1-3-2.75 0-.75.25-2 1.25-3C6.125 10 7 10.5 7 10.5c-.375-1.25.5-3.25 2-3.5-.179 1-.25 2 1 3 .625.5 1 1.364 1 2.25C11 14 9.657 15 8 15"></path></svg>
                <h2 className='text-red-600 text-sm lg:text-base font-medium'>37 sold in last 12 hours</h2>
              </span>

              <span className='text-green-700 flex space-x-1 flex-row'>
                <svg stroke="currentColor" fill="currentColor" stroke-width="0" className='mt-1' viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M362.6 192.9L345 174.8c-.7-.8-1.8-1.2-2.8-1.2-1.1 0-2.1.4-2.8 1.2l-122 122.9-44.4-44.4c-.8-.8-1.8-1.2-2.8-1.2-1 0-2 .4-2.8 1.2l-17.8 17.8c-1.6 1.6-1.6 4.1 0 5.7l56 56c3.6 3.6 8 5.7 11.7 5.7 5.3 0 9.9-3.9 11.6-5.5h.1l133.7-134.4c1.4-1.7 1.4-4.2-.1-5.7z"></path><path d="M256 76c48.1 0 93.3 18.7 127.3 52.7S436 207.9 436 256s-18.7 93.3-52.7 127.3S304.1 436 256 436c-48.1 0-93.3-18.7-127.3-52.7S76 304.1 76 256s18.7-93.3 52.7-127.3S207.9 76 256 76m0-28C141.1 48 48 141.1 48 256s93.1 208 208 208 208-93.1 208-208S370.9 48 256 48z"></path></svg>
                <h1 className='font-medium text'>In stock</h1>
              </span>

              <p className='text-gray-500 text-xs lg:text-lg '>
                {product.description}
              </p>

              <h3 className='text-black text-sm lg:text-lg'>
                Color: {product.colors?.join(", ")}
              </h3>
              <div className='flex flex-row space-x-2'>
                {product.colors?.map((color, index) => (
                  <div
                    key={index}
                    className="relative group cursor-pointer rounded-full px-3 py-3 border"
                    style={{ backgroundColor: color }}
                  >
                    <span className="absolute w-12 py-1 text-center bottom-full transform -translate-x-1/2 mb-2 text-xs text-white bg-black p-2 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                      {color}
                      <span className="absolute left-1/2 transform -translate-x-1/2 bottom-[-6px] w-0 h-0 border-l-8 border-r-8 border-t-8 border-t-black border-l-transparent border-r-transparent"></span>
                    </span>
                  </div>
                ))}
              </div>



              <div className='flex flex-row space-x-3 lg:space-x-3 py-3'>
                <div className="flex justify-between items-center lg:space-x-4 space-x-2 border lg:w-28 lg:h-14 h-10   w-20 py-0 lg:py-2 px-5 lg:px-3 rounded-full">
                  <button
                    onClick={decrement}
                    className="lg:text-2xl font-semibold text-gray-700 hover:text-black"
                  >
                    −
                  </button>
                  <span className="lg:text-xl font-medium">{quantity}</span>
                  <button
                    onClick={increment}
                    className="lg:text-2xl font-semibold text-gray-700 hover:text-black"
                  >
                    +
                  </button>
                </div>

                <button onClick={() => handleAddToCart(product)} className='bg-black py-1 lg:py-2 px-16 lg:h-14 h-10 lg:px-28 cursor-pointer text-white text-sm lg:text-base rounded-full font-semibold '>Add To Cart</button>
                {showPopup && (
                  <div
                    className=" right-5 top-20 fixed  text-center px-8 py-4 text-sm text-black bg-white shadow-lg rounded-md opacity-100 transition-opacity duration-200"
                  >
                    Item added to cart!
                  </div>
                )}


                <button className='lg:px-5 px-3 py-2 lg:py-4 hover:bg-black group  rounded-full border'>
                  <span className='text-gray-500 hover:text-white  '>

                    <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M458.4 64.3C400.6 15.7 311.3 23 256 79.3 200.7 23 111.4 15.6 53.6 64.3-21.6 127.6-10.6 230.8 43 285.5l175.4 178.7c10 10.2 23.4 15.9 37.6 15.9 14.3 0 27.6-5.6 37.6-15.8L469 285.6c53.5-54.7 64.7-157.9-10.6-221.3zm-23.6 187.5L259.4 430.5c-2.4 2.4-4.4 2.4-6.8 0L77.2 251.8c-36.5-37.2-43.9-107.6 7.3-150.7 38.9-32.7 98.9-27.8 136.5 10.5l35 35.7 35-35.7c37.8-38.5 97.8-43.2 136.5-10.6 51.1 43.1 43.5 113.9 7.3 150.8z"></path></svg>
                  </span>
                </button>
              </div>

              <div className="flex flex-col space-y-2">
                <div className="flex flex-row">
                  <input
                    type="checkbox"
                    onChange={(e) => setIsChecked(e.target.checked)}
                  />
                  <span className="text-gray-500 lg:text-lg text-sm px-2">I agree with the </span>
                  <span className="text-black lg:text-lg text-sm underline">terms and conditions</span>
                </div>

                <button
                  className={`px-0 lg:px-48 border py-3 rounded-full text-sm lg:text-lg  font-semibold flex justify-center items-center transition-all duration-300 ${isChecked ? "bg-black text-white" : "bg-white text-black"
                    }`}
                >
                  Buy It Now
                </button>
              </div>

              <div className='flex flex-row space-x-2 py-2'>

                <div className='hidden lg:flex flex-row'>
                  <button className='bg-pink-100 w-9 h-9 flex items-center justify-center rounded-full hover:bg-black hover:text-white transition-all duration-300'>
                    <span>
                      <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 448 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                        <path d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"></path>
                      </svg>
                    </span>
                  </button>
                  <p className='text-black text-sm lg:text-base mt-2 px-2'>Compare</p>
                </div>
                <div className='flex flex-row'>
                  <button className='bg-pink-100  w-9 h-9 flex items-center justify-center rounded-full hover:bg-black hover:text-white transition-all duration-300'>
                    <span>
                      <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M464 256A208 208 0 1 0 48 256a208 208 0 1 0 416 0zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zm169.8-90.7c7.9-22.3 29.1-37.3 52.8-37.3l58.3 0c34.9 0 63.1 28.3 63.1 63.1c0 22.6-12.1 43.5-31.7 54.8L280 264.4c-.2 13-10.9 23.6-24 23.6c-13.3 0-24-10.7-24-24l0-13.5c0-8.6 4.6-16.5 12.1-20.8l44.3-25.4c4.7-2.7 7.6-7.7 7.6-13.1c0-8.4-6.8-15.1-15.1-15.1l-58.3 0c-3.4 0-6.4 2.1-7.5 5.3l-.4 1.2c-4.4 12.5-18.2 19-30.6 14.6s-19-18.2-14.6-30.6l.4-1.2zM224 352a32 32 0 1 1 64 0 32 32 0 1 1 -64 0z"></path></svg>
                    </span>

                  </button>
                  <p className='text-black text-sm lg:text-base mt-2 px-2'>Question</p>
                </div>
                <div className='flex flex-row'>
                  <button className='bg-pink-100  w-9 h-9 flex items-center justify-center rounded-full hover:bg-black hover:text-white transition-all duration-300'>
                    <span>
                      <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 256 256" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M128,129.09V232a8,8,0,0,1-3.84-1l-88-48.18a8,8,0,0,1-4.16-7V80.18a8,8,0,0,1,.7-3.25Z" opacity="0.2"></path><path d="M223.68,66.15,135.68,18a15.88,15.88,0,0,0-15.36,0l-88,48.17a16,16,0,0,0-8.32,14v95.64a16,16,0,0,0,8.32,14l88,48.17a15.88,15.88,0,0,0,15.36,0l88-48.17a16,16,0,0,0,8.32-14V80.18A16,16,0,0,0,223.68,66.15ZM128,32l80.34,44-29.77,16.3-80.35-44ZM128,120,47.66,76l33.9-18.56,80.34,44ZM40,90l80,43.78v85.79L40,175.82Zm176,85.78h0l-80,43.79V133.82l32-17.51V152a8,8,0,0,0,16,0V107.55L216,90v85.77Z"></path></svg>
                    </span>

                  </button>
                  <p className='text-black text-sm lg:text-base mt-2 px-1'>Shipping info</p>
                </div>
                <div className='flex flex-row'>
                  <button className='bg-pink-100  w-9 h-9 flex items-center justify-center rounded-full hover:bg-black hover:text-white transition-all duration-300'>
                    <span>
                      <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><circle cx="18" cy="5" r="3"></circle><circle cx="6" cy="12" r="3"></circle><circle cx="18" cy="19" r="3"></circle><line x1="8.59" x2="15.42" y1="13.51" y2="17.49"></line><line x1="15.41" x2="8.59" y1="6.51" y2="10.49"></line></svg>
                    </span>

                  </button>
                  <p className='text-black text-sm lg:text-base mt-2 px-2'>Share</p>
                </div>
              </div>

              <div className='flex flex-row border-t border-b  py-3 lg:py-4'>

                <div className='border-r lg:px-3 py-1 lg:py-2'>
                  <span>
                    <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" height="2em" width="2em" xmlns="http://www.w3.org/2000/svg"><path d="M7 17m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"></path><path d="M17 17m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"></path><path d="M5 17h-2v-11a1 1 0 0 1 1 -1h9v12m-4 0h6m4 0h2v-6h-8m0 -5h5l3 5"></path></svg>
                  </span>
                </div>
                <div className='flex flex-col px-1'>
                  <p className='text-gray-400 lg:text-base text-xs'>Order in the next 14 hours 18 minutes to get it between</p>
                  <span className='flex flex-row'>
                    <h1 className=' text-black text-xs lg:text-base underline'>Tuesday, Feb 4</h1>
                    <p className='text-gray-400 lg:text-base text-xs px-1 '>and</p>
                    <h1 className='text-black text-xs lg:text-base underline'> Saturday, Feb 8</h1>
                  </span>
                </div>
              </div>

              <div className='flex flex-row border py-1 lg:py-2 rounded-xl'>
                <span className='mt-1 px-2' >
                  <svg stroke="currentColor" fill="green" stroke-width="0" viewBox="0 0 448 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"></path></svg>

                </span>
                <div className='flex flex-col'>
                  <p className='text-gray-400 text-xs lg:text-base flex-row'>Pickup available a <span className='text-black'>{product.seller} </span></p>

                  <h5 className='text-gray-400 lg:text-xs text-[10px] '>Usually ready in 24 hours</h5>
                  <h2 className='text-black lg:text-sm text-xs underline py-3'>View store information</h2>
                </div>

              </div>
              <div className='flex flex-col rounded-xl py-1 bg-pink-100'>
                <div className=' flex justify-center py-1 lg:py-2 items-center'>
                  <p className='text-black lg:text-lg text-sm'>Guaranteed Checkout</p>
                </div>
                <div className='flex flex-row space-x-4 lg:space-x-8 justify-center items-center px-5'>
                  <img src="/images/visa.png" alt="" className='lg:w-16 w-14' />
                  <img src="/images/pngegg.png" alt="" className='lg:w-16 w-14' />
                  <img src="/images/american-express.png" alt="" className='lg:w-16 w-14' />
                  <img src="/images/stripe.png" alt="" className='lg:w-16 w-14' />
                  <img src="/images/shopify.png" alt="" className='lg:w-16 w-14' />
                </div>

              </div>

            </div>


          </div>


        </div>

        <div className='flex flex-col py-10 px-6 rounded-lg  relative border'>

          <div className='flex px-3  bg-white absolute top-[-15px] lg:top-[-20px] lg:left-28'>
            <h1 className='text-black text-xl lg:text-3xl font-semibold'>Frequently Bought Together</h1>
          </div>
<div className='flex flex-col lg:flex-row lg:justify-between'>
          <div className=' flex-col  space-y-5  '>

            <div className='flex flex-row  lg:justify-start space-x-5 justify-between  '>
              {categoryProducts.slice(0, 3).map((item) => (
                <div key={item.id} className='flex bg-pink-50 justify-center lg:w-40 w-[900px] lg:h-44 space-x-3 items-center'>
                  <img src={`/${item.image}`} alt={item.title} className='lg:w-28 w-full' />
                </div>
              ))}

            </div>
            <div className='flex flex-col space-y-2 py-5'>
              {categoryProducts.slice(0, 3).map((item) => (
                <div key={item.id} className='flex flex-row space-x-1'>
                  <input type="checkbox" />
                  <span className='lg:text-sm text-xs mt-0 lg:mt-1'>{item.title}</span>
                  <h1 className='lg:text-base text-sm'>{item.realPrice} ₹/-</h1>
                </div>
              ))}

            </div>

            
           

          </div>
          <div className='flex flex-col lg:w-1/3'>

              <span className='flex flex-row text-black text-base lg:text-lg'>
                Total Price:
                <h1 className='text-black px-2 mt-0 text-xl font-medium'>
                  ₹{categoryProducts.slice(0, 3).reduce((total, item) => total + item.realPrice, 0).toFixed(2)}
                </h1>
              </span>

              <p className='lg:text-base text-sm mb-5 text-gray-400'>
                For {categoryProducts.slice(0, 3).length} item(s)
              </p>

              <button onClick={() => handleAddToCart(product)} className='cursor-pointer lg:text-base text-sm text-white font-semibold bg-black rounded-full lg:w-52 w-56 px-0 lg:px-4 py-3'>
                Add Selected Item(s)
              </button>
            </div>

            </div>

        </div>

        <div className='flex flex-col space-y-5 py-10'>
          <div className='flex flex-row space-x-4 lg:space-x-8 justify-center items-center'>
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`text-base lg:text-lg font-semibold transition-all duration-300 px-3 py-2 rounded-full ${activeTab === tab ? "bg-black text-white" : "text-gray-400 hover:text-black"
                  }`}
              >
                {tab}
              </button>
            ))}
          </div>

          <div className='mt-6 py-8'>
            {activeTab === "Description" && (
              <p className='text-gray-400 text-sm lg:text-base font-medium'>
                Get a fresh 'fit for spring with the Free People Love Letter Ivory Floral Jacquard Cropped Cami Top! Stretchy jacquard fabric, with a textured floral design throughout, shapes this cami top that has wide straps, a high square neckline, and a fitted bodice that ends at a cropped hem with lettuce-edge trim.
              </p>
            )}

            {activeTab === "Review" && (
              <div className='flex justify-center space-y-5 items-center flex-col'>
                <p className='text-black text-2xl font-semibold'>Customer Review</p>
                <div className='flex lg:flex-row space-y-3 flex-col space-x-3'>
                  <div className='flex flex-col justify-center items-center lg:justify-start px-8 lg:border-r'>
                    <span className='flex flex-row text-orange-500'>
                      {/* Stars Icons */}
                      {[...Array(5)].map((_, index) => (
                        <svg key={index} stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" height="1.5em" width="1.5em" xmlns="http://www.w3.org/2000/svg">
                          <path d="M11.9998 17L6.12197 20.5902L7.72007 13.8906L2.48926 9.40983L9.35479 8.85942L11.9998 2.5L14.6449 8.85942L21.5104 9.40983L16.2796 13.8906L17.8777 20.5902L11.9998 17ZM11.9998 14.6564L14.8165 16.3769L14.0507 13.1664L16.5574 11.0192L13.2673 10.7554L11.9998 7.70792L10.7323 10.7554L7.44228 11.0192L9.94893 13.1664L9.18311 16.3769L11.9998 14.6564Z"></path>
                        </svg>
                      ))}
                    </span>
                    <h2 className='text-gray-400 text-sm'>Be the first to write a review</h2>
                  </div>
                  <div className='px-8 flex justify-center items-center lg:justify-start'>
                    <button onClick={handleWriteReviewClick} className='bg-black lg:px-7 px-3 py-2 lg:py-3 text-white lg:text-base text-sm font-medium lg:font-semibold'>
                      Write A Review
                    </button>
                  </div>
                </div>
              </div>
            )}

            {activeTab === "Shipping" && <div className='flex flex-col space-y-4 justify-start'>
              <p className='text-gray-400 text-xs lg:text-base'>
                For orders placed before 7am AEDT, we endeavour to process the same business day. Orders placed after 11am AEDT will be processed the next business day.
              </p>
              <p className='text-gray-400 text-xs lg:text-base' >
                During sale events and new collection launches, there may be a slighly longer processing time.
              </p>
              <p className='text-gray-400 text-xs lg:text-base'>
                All Auguste orders are hand-picked and packed with love from Byron Bay, Australie.
              </p>
            </div>}
            {activeTab === "Return" && <div className='flex-col flex'>
              <p className='text-gray-400 text-base lg:text-lg py-4'>You can choose between a refund or a credit note on full priced items.</p>
              <ul className='space-y-1 text-gray-400 text-sm lg:text-base list-disc'>
                <li>Item(s) must be returned in their original condition and packaging: unworn, unwashed and with all tags attached.</li>
                <li>Sale items can not be refunded for change of mind.</li>
                <li>Return shipping methods and associated costs are the responsibility of the customer.</li>
                <li>Earrings cannot be returned due to health and safety reasons.</li>
              </ul>
            </div>}


            {showReviewBox && (
              <div className='reviewbox py-10 flex border-t mt-7 justify-center items-center space-y-3 flex-col'>
                <h1 className='text-gray-400 text-lg font-semibold'>Write a Review</h1>
                <p className='text-gray-400 text-sm font-normal'>Rating</p>
                <span className='flex flex-row text-orange-500'>
                  {[...Array(5)].map((_, index) => (
                    <svg key={index} stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" height="1.5em" width="1.5em" xmlns="http://www.w3.org/2000/svg">
                      <path d="M11.9998 17L6.12197 20.5902L7.72007 13.8906L2.48926 9.40983L9.35479 8.85942L11.9998 2.5L14.6449 8.85942L21.5104 9.40983L16.2796 13.8906L17.8777 20.5902L11.9998 17ZM11.9998 14.6564L14.8165 16.3769L14.0507 13.1664L16.5574 11.0192L13.2673 10.7554L11.9998 7.70792L10.7323 10.7554L7.44228 11.0192L9.94893 13.1664L9.18311 16.3769L11.9998 14.6564Z"></path>
                    </svg>
                  ))}
                </span>

                <p className='text-gray-400 text-base'>Review Title <span className='text-gray-400 text-sm'>(100)</span></p>
                <input type="text" className='border outline-none w-full lg:w-[50%] px-3 py-2 flex justify-start items-start placeholder:text-gray-400 text-base' placeholder='Give your review a title' />
                <p className='text-gray-400 text-xs'>Review</p>
                <textarea name="" id="" rows="5" className='border w-full lg:w-[50%] px-2 py-2 active:outline-none focus:outline-none active:border-none' placeholder='Write your comments here'></textarea>

                <label htmlFor="" className='text-gray-400'>Upload your image</label>
                <input type="file" name="media" className="lg:w-56 w-full h-24 lg:h-44 border appearance-none" multiple accept="image/gif,image/jpeg,image/jpg,image/png,image/webp" aria-label="" />

                <label htmlFor="" className='text-gray-400 text-sm lg:text-base '>Name displayed Publicly</label>
                <input type="text" className='border outline-none w-full lg:w-[50%] px-3 py-2 flex justify-start items-start placeholder:text-gray-400 text-sm lg:text-base' placeholder='Enter your name (public)' />

                <p className='text-gray-400  text-sm lg:text-base flex text-center'>Email</p>
                <input type="text" className='border outline-none w-full lg:w-[50%] px-3 py-2 flex justify-start items-start placeholder:text-gray-400 text-sm lg:text-base' placeholder='Enter your email (private)' />

                <div className=' w-full lg:w-[50%]  lg:py-4 text-gray-400  text-sm lg:text-lg  lg:h-14 flex justify-center items-center'>
                  How we use your data: We’ll only contact you about the review you left, and only if necessary. By submitting your review, you agree to Judge.me’s terms, privacy, and content policies.
                </div>

                <div className='flex flex-row space-x-3 py-3 justify-center items-center'>
                  <button className='border outline-none border-black bg-white  text-sm lg:text-lg font-medium lg:font-semibold text-black lg:px-8 px-4 py-2 lg:py-2'>Cancel Review</button>
                  <button className='border border-black bg-black text-sm lg:text-lg font-medium lg:font-semibold text-white lg:px-8 px-4 py-2 lg:py-2'>Submit Review</button>
                </div>
              </div>
            )}
          </div>
        </div>

      </div>



      <Footernav />
      <Footer />

           
        
    </div>
  );
};

export default Shop;