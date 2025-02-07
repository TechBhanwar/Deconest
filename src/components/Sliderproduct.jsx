import React from 'react';
import Slider from 'react-slick';
import { productItems } from '../data/data';
import { useNavigate } from "react-router-dom";


const Sliderproduct = () => {
  const settings = {
    dots: false,               // Navigation dots
    infinite: true,           // Infinite loop
    speed: 1500,              // Transition speed
    slidesToShow: 4,          // Show three items at a time
    slidesToScroll: 1,        // Scroll one item at a time
    autoplay: true,           // Enable autoplay
    autoplaySpeed: 4000,      // 4-second delay between auto slides
    cssEase: 'ease-out',      // Smooth transition effect
    pauseOnHover: true,       // Pause autoplay on hover
    responsive: [             // Responsiveness for different viewports
      {
        breakpoint: 1024, // Tablet

        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768, // Mobile
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  const navigate = useNavigate();

  const categoryMap = {}; // Track category count

  const filteredItems = productItems.filter((item) => {
    if (!categoryMap[item.category]) {
      categoryMap[item.category] = 0;
    }

    if (categoryMap[item.category] < 2) {
      categoryMap[item.category]++;
      return true; // Allow this item
    }

    return false; // Skip extra items
  });

  // const products = [
  //   {
  //     id: 1,
  //     image: '/images/product1.png',
  //     name: 'Egg Dining Table',

  //     cutprice:'$80.00',
  //     price: '$55.00',
  //     star:'str',
  //     outOfStock: true,
  //     tooltip: true,
  //   },
  //   // Add more product objects here
  //   {
  //     id: 2,
  //     image: '/images/product2.png',
  //     name: 'Blue Flower Vase',

  //     cutprice:'$90.00',

  //     price: '$75.00',
  //     tooltip: true,
  //   },
  //   {
  //     id: 3,
  //     image: '/images/product3.png',
  //     name: ' Modern desk Lamp',

  //     cutprice:'$180.00',

  //     price: '$150.00',

  //     tooltip: true,
  //   },
  //   {
  //     id: 4,
  //     image: '/images/product4 .png',
  //     name: 'Classy side Table',

  //     cutprice:'$130.00',

  //     price: '$120.00',
  //     outOfStock: true,
  //     tooltip: true,
  //   },
  //   {
  //     id: 5,
  //     image: '/images/product5.png',
  //     name: 'Pink Flower Vase',

  //     cutprice:'$140.00',

  //     price: '$120.00',


  //     tooltip: true,
  //   },
  //   {
  //     id: 6,
  //     image: '/images/product6.png',
  //     name: 'Floral Print Vase',

  //     cutprice:'$140.00',

  //     price: '$120.00',

  //     tooltip: true,
  //   },
  // ];

  return (


    <div className="container  px-4 py-4 overflow-hidden">
      <div className="flex lg:flex-row flex-col justify-center items-center lg:justify-between">
        <div className='flex flex-col justify-center items-center lg:items-start'>

  

          <h2 className="text-[30px] font-bold text-black">Bestseller</h2>
          <p className="text-[16px] font-normal text-gray-500 lg:mb-6 mb-5">
            Experience the best products at our store!
          </p>
        </div>
        <div className='lg:mt-9 mb-3'>
      <button 
        onClick={() => navigate('/product')} 
        className='px-5 py-2 bg-transparent border-black border font-medium hover:bg-black hover:text-white transition duration-300 rounded-full'
      >
        View All
      </button>
    </div>
      </div>
      <Slider {...settings}>
        {filteredItems.map((item) => (
          <div key={item.id} className="p-4 lg:w-[23%] ">
            <div className="bg-pink-50 h-[400px] w-full  mb-6 cursor-pointer group overflow-hidden relative flex justify-center items-center rounded-lg zoom">
              <img
              onClick={() => navigate(`/shop/${item.id}`)}
                src={item.image}
                alt={item.name}
                className="w-[60%] transition-transform duration-500 ease-in-out transform group-hover:scale-110"
              />
              {item.outOfStock && (
                <span className="px-2 py-1 absolute bg-black text-white text-[14px] font-medium rounded-full top-3 left-3">
                  Out of stock
                </span>
              )}


              <div className='flex flex-row absolute bottom-20 gap-1 opacity-0 group-hover:opacity-100 transition-all duration-300 ease-in-out justify-center items-center'>

                <div className="relative">
                  <button className="peer bg-white px-3 py-3 rounded-full hover:bg-black hover:text-white opacity-0 translate-y-10 group-hover:opacity-100 group-hover:translate-y-0 duration-300 shadow-lg delay-100">
                    <span className="text-[18px] duration-300">
                      <svg
                        stroke="currentColor"
                        fill="currentColor"
                        strokeWidth="0"
                        viewBox="0 0 512 512"
                        height="1em"
                        width="1em"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M458.4 64.3C400.6 15.7 311.3 23 256 79.3 200.7 23 111.4 15.6 53.6 64.3-21.6 127.6-10.6 230.8 43 285.5l175.4 178.7c10 10.2 23.4 15.9 37.6 15.9 14.3 0 27.6-5.6 37.6-15.8L469 285.6c53.5-54.7 64.7-157.9-10.6-221.3zm-23.6 187.5L259.4 430.5c-2.4 2.4-4.4 2.4-6.8 0L77.2 251.8c-36.5-37.2-43.9-107.6 7.3-150.7 38.9-32.7 98.9-27.8 136.5 10.5l35 35.7 35-35.7c37.8-38.5 97.8-43.2 136.5-10.6 51.1 43.1 43.5 113.9 7.3 150.8z"></path>
                      </svg>
                    </span>
                  </button>


                  <span className="absolute w-28 text-center bottom-full left-1/2 transform -translate-x-1/2 mb-2 text-xs text-white bg-black p-2 rounded opacity-0 peer-hover:opacity-100 transition-opacity duration-200">
                    Add to Wishlist

                    <span className="absolute left-1/2 transform -translate-x-1/2 bottom-[-6px] w-0 h-0 border-l-8 border-r-8 border-t-8 border-t-black border-l-transparent border-r-transparent"></span>
                  </span>
                </div>

                <div className="relative">
                  <button className=' peer bg-white px-3 py-3 rounded-full   hover:bg-black hover:text-white opacity-0 translate-y-10 group-hover:opacity-100 group-hover:translate-y-0 duration-300 shadow-lg delay-200'>
                    <span className='text-[18px]  duration-300   '><svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M20 11a8.1 8.1 0 0 0 -15.5 -2m-.5 -4v4h4"></path><path d="M4 13a8.1 8.1 0 0 0 15.5 2m.5 4v-4h-4"></path></svg></span>
                  </button>
                  <span className="absolute w-28 text-center bottom-full left-1/2 transform -translate-x-1/2 mb-2 text-xs text-white bg-black p-2 rounded opacity-0 peer-hover:opacity-100 transition-opacity duration-200">
                    Compair

                    <span className="absolute left-1/2 transform -translate-x-1/2 bottom-[-6px] w-0 h-0 border-l-8 border-r-8 border-t-8 border-t-black border-l-transparent border-r-transparent"></span>
                  </span>
                </div>
                <div className="relative">
                  <button className='peer bg-white px-3 py-3 rounded-full   hover:bg-black hover:text-white opacity-0 translate-y-10 group-hover:opacity-100 group-hover:translate-y-0 duration-300 shadow-lg delay-300'>
                    <span className='text-[18px]  duration-300   '><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M80 176a16 16 0 0 0-16 16v216c0 30.24 25.76 56 56 56h272c30.24 0 56-24.51 56-54.75V192a16 16 0 0 0-16-16zm80 0v-32a96 96 0 0 1 96-96h0a96 96 0 0 1 96 96v32"></path><path fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M160 224v16a96 96 0 0 0 96 96h0a96 96 0 0 0 96-96v-16"></path></svg></span>
                  </button>
                  <span className="absolute w-28 text-center bottom-full left-1/2 transform -translate-x-1/2 mb-2 text-xs text-white bg-black p-2 rounded opacity-0 peer-hover:opacity-100 transition-opacity duration-200">
                    Add to Cart

                    <span className="absolute left-1/2 transform -translate-x-1/2 bottom-[-6px] w-0 h-0 border-l-8 border-r-8 border-t-8 border-t-black border-l-transparent border-r-transparent"></span>
                  </span>
                </div>
              </div>


              <div>
                <div className='absolute right-1 top-1 flex flex-col space-y-2 lg:hidden '>
                  <button className="peer bg-white px-2 py-2 rounded-full hover:bg-black hover:text-white  duration-300 shadow-lg ">
                    <span className="text-[18px] duration-300">
                      <svg
                        stroke="currentColor"
                        fill="currentColor"
                        strokeWidth="0"
                        viewBox="0 0 512 512"
                        height="1em"
                        width="1em"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M458.4 64.3C400.6 15.7 311.3 23 256 79.3 200.7 23 111.4 15.6 53.6 64.3-21.6 127.6-10.6 230.8 43 285.5l175.4 178.7c10 10.2 23.4 15.9 37.6 15.9 14.3 0 27.6-5.6 37.6-15.8L469 285.6c53.5-54.7 64.7-157.9-10.6-221.3zm-23.6 187.5L259.4 430.5c-2.4 2.4-4.4 2.4-6.8 0L77.2 251.8c-36.5-37.2-43.9-107.6 7.3-150.7 38.9-32.7 98.9-27.8 136.5 10.5l35 35.7 35-35.7c37.8-38.5 97.8-43.2 136.5-10.6 51.1 43.1 43.5 113.9 7.3 150.8z"></path>
                      </svg>
                    </span>
                  </button>
                  <button className=' peer bg-white px-2 py-2 rounded-full   hover:bg-black hover:text-white  duration-300 shadow-lg delay-200'>
                    <span className='text-[18px]  duration-300   '>
                      <svg stroke="currentColor" fill="currentColor" stroke-width="0" version="1.1" id="search" x="0px" y="0px" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><g><path d="M20.031,20.79c0.46,0.46,1.17-0.25,0.71-0.7l-3.75-3.76c1.27-1.41,2.04-3.27,2.04-5.31
		                                 c0-4.39-3.57-7.96-7.96-7.96s-7.96,3.57-7.96,7.96c0,4.39,3.57,7.96,7.96,7.96c1.98,0,3.81-0.73,5.21-1.94L20.031,20.79z
		                                    M4.11,11.02c0-3.84,3.13-6.96,6.96-6.96c3.84,0,6.96,3.12,6.96,6.96c0,3.84-3.12,6.96-6.96,6.96C7.24,17.98,4.11,14.86,4.11,11.02
                                                 z"></path></g></svg>
                    </span>
                  </button>
                </div>
              </div>
              <div className="absolute w-full h-0 cursor-pointer bg-black bottom-0 flex justify-center items-center transition-all duration-300 ease-in-out group-hover:h-14">
                <h3 className="text-[14px] font-medium text-white">Quickview</h3>
              </div>
            </div>
            <div className='flex str justify-center mb-3 gap-2 items-center'>
              <svg stroke="currentColor" fill="gray" stroke-width="0" viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M496 203.3H312.36L256 32l-56.36 171.3H16l150.21 105.4-58.5 171.3L256 373.84 404.29 480l-58.61-171.3z"></path>
                {item.start}
              </svg>
              <svg stroke="currentColor" fill="gray" stroke-width="0" viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M496 203.3H312.36L256 32l-56.36 171.3H16l150.21 105.4-58.5 171.3L256 373.84 404.29 480l-58.61-171.3z"></path>
                {item.start}
              </svg>
              <svg stroke="currentColor" fill="gray" stroke-width="0" viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M496 203.3H312.36L256 32l-56.36 171.3H16l150.21 105.4-58.5 171.3L256 373.84 404.29 480l-58.61-171.3z"></path>
                {item.start}
              </svg>
              <svg stroke="currentColor" fill="gray" stroke-width="0" viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M496 203.3H312.36L256 32l-56.36 171.3H16l150.21 105.4-58.5 171.3L256 373.84 404.29 480l-58.61-171.3z"></path>
                {item.start}
              </svg>
              <svg stroke="currentColor" fill="gray" stroke-width="0" viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M496 203.3H312.36L256 32l-56.36 171.3H16l150.21 105.4-58.5 171.3L256 373.84 404.29 480l-58.61-171.3z"></path>
                {item.start}
              </svg>
            </div>
            <div className="flex flex-col justify-center items-center">
              <h2 className="text-[16px] text-black font-medium mb-1 text-center">
                {item.title}
              </h2>

              <h1 className="text-sm font-semibold"><span className='line-through pr-2 text-red-700'>{item.cutPrice} ₹/-</span>  {item.realPrice} ₹/-</h1>

            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Sliderproduct;
