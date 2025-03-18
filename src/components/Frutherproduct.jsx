import React from 'react'
import Slider from 'react-slick';
import { useNavigate } from "react-router-dom";

const Frutherproduct = ({ products })  => {
     const navigate = useNavigate();
    const settings = {
        dots: false,
        infinite: true,
        speed: 1500,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 4000,
        cssEase: 'ease-out',
        pauseOnHover: true,
        
        responsive: [
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
              slidesToShow: 3,
              slidesToScroll: 1,
            },
          },
          {
            breakpoint: 480, // Mobile
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
            },
          },
        ],
      };

  return (
    <div>
        <div className="container py-10">
            <div>
                <h1 className='text-center py-5 text-3xl font-semibold'>You may also like</h1>

             
            <Slider {...settings} className="px-0 gap-5">

            {products.length > 0 ? (
        products.map((item) => (

            <div key={item.id} className='px-3' >
              <div className='flex flex-col space-y-3 justify-center items-center lg:justify-center lg:items-center mb-3'>
                <div  className='w-full bg-[#f6f6f6] h-[13em] lg:h-[26rem] rounded-2xl overflow-hidden flex justify-center items-center relative group duration-300 cursor-pointer'  onClick={() => navigate(`/shop/${item.id}`)}  >
                  <img src={`${item.image}`} alt="" loading="lazy" className='w-28 lg:w-56'  />
                  <button className='w-full absolute bottom-0 bg-black text-white h-0 group-hover:h-12 duration-300 hidden lg:block '>Quick View</button>
                  <div className=' hidden lg:flex lg:flex-row absolute bottom-16 space-x-2   '>
                    <div className="relative">
                      <button   className="peer bg-white px-3 py-3 rounded-full hover:bg-black hover:text-white opacity-0 translate-y-10 group-hover:opacity-100 group-hover:translate-y-0 duration-300 shadow-lg delay-100">
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
                        <span className="text-[14px] duration-300">
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
                        <span className='text-[14px]  duration-300   '>
                          <svg stroke="currentColor" fill="currentColor" stroke-width="0" version="1.1" id="search" x="0px" y="0px" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><g><path d="M20.031,20.79c0.46,0.46,1.17-0.25,0.71-0.7l-3.75-3.76c1.27-1.41,2.04-3.27,2.04-5.31
                                     c0-4.39-3.57-7.96-7.96-7.96s-7.96,3.57-7.96,7.96c0,4.39,3.57,7.96,7.96,7.96c1.98,0,3.81-0.73,5.21-1.94L20.031,20.79z
                                        M4.11,11.02c0-3.84,3.13-6.96,6.96-6.96c3.84,0,6.96,3.12,6.96,6.96c0,3.84-3.12,6.96-6.96,6.96C7.24,17.98,4.11,14.86,4.11,11.02
                                             z"></path></g></svg>
                        </span>
                      </button>
                    </div>
                  </div>
                  <div className='bg-[#d81717] text-white px-2 py-1 text-[10px] rounded-2xl absolute top-2 left-2'> -{item.discount}% </div>
              


                </div>
                <span className=' flex  space-x-1 text-[#cccccc]'>
                  <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M463 192H315.9L271.2 58.6C269 52.1 262.9 48 256 48s-13 4.1-15.2 10.6L196.1 192H48c-8.8 0-16 7.2-16 16 0 .9.1 1.9.3 2.7.2 3.5 1.8 7.4 6.7 11.3l120.9 85.2-46.4 134.9c-2.3 6.5 0 13.8 5.5 18 2.9 2.1 5.6 3.9 9 3.9 3.3 0 7.2-1.7 10-3.6l118-84.1 118 84.1c2.8 2 6.7 3.6 10 3.6 3.4 0 6.1-1.7 8.9-3.9 5.6-4.2 7.8-11.4 5.5-18L352 307.2l119.9-86 2.9-2.5c2.6-2.8 5.2-6.6 5.2-10.7 0-8.8-8.2-16-17-16z"></path></svg>
                  <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M463 192H315.9L271.2 58.6C269 52.1 262.9 48 256 48s-13 4.1-15.2 10.6L196.1 192H48c-8.8 0-16 7.2-16 16 0 .9.1 1.9.3 2.7.2 3.5 1.8 7.4 6.7 11.3l120.9 85.2-46.4 134.9c-2.3 6.5 0 13.8 5.5 18 2.9 2.1 5.6 3.9 9 3.9 3.3 0 7.2-1.7 10-3.6l118-84.1 118 84.1c2.8 2 6.7 3.6 10 3.6 3.4 0 6.1-1.7 8.9-3.9 5.6-4.2 7.8-11.4 5.5-18L352 307.2l119.9-86 2.9-2.5c2.6-2.8 5.2-6.6 5.2-10.7 0-8.8-8.2-16-17-16z"></path></svg>
                  <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M463 192H315.9L271.2 58.6C269 52.1 262.9 48 256 48s-13 4.1-15.2 10.6L196.1 192H48c-8.8 0-16 7.2-16 16 0 .9.1 1.9.3 2.7.2 3.5 1.8 7.4 6.7 11.3l120.9 85.2-46.4 134.9c-2.3 6.5 0 13.8 5.5 18 2.9 2.1 5.6 3.9 9 3.9 3.3 0 7.2-1.7 10-3.6l118-84.1 118 84.1c2.8 2 6.7 3.6 10 3.6 3.4 0 6.1-1.7 8.9-3.9 5.6-4.2 7.8-11.4 5.5-18L352 307.2l119.9-86 2.9-2.5c2.6-2.8 5.2-6.6 5.2-10.7 0-8.8-8.2-16-17-16z"></path></svg>
                  <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M463 192H315.9L271.2 58.6C269 52.1 262.9 48 256 48s-13 4.1-15.2 10.6L196.1 192H48c-8.8 0-16 7.2-16 16 0 .9.1 1.9.3 2.7.2 3.5 1.8 7.4 6.7 11.3l120.9 85.2-46.4 134.9c-2.3 6.5 0 13.8 5.5 18 2.9 2.1 5.6 3.9 9 3.9 3.3 0 7.2-1.7 10-3.6l118-84.1 118 84.1c2.8 2 6.7 3.6 10 3.6 3.4 0 6.1-1.7 8.9-3.9 5.6-4.2 7.8-11.4 5.5-18L352 307.2l119.9-86 2.9-2.5c2.6-2.8 5.2-6.6 5.2-10.7 0-8.8-8.2-16-17-16z"></path></svg>
                  <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M463 192H315.9L271.2 58.6C269 52.1 262.9 48 256 48s-13 4.1-15.2 10.6L196.1 192H48c-8.8 0-16 7.2-16 16 0 .9.1 1.9.3 2.7.2 3.5 1.8 7.4 6.7 11.3l120.9 85.2-46.4 134.9c-2.3 6.5 0 13.8 5.5 18 2.9 2.1 5.6 3.9 9 3.9 3.3 0 7.2-1.7 10-3.6l118-84.1 118 84.1c2.8 2 6.7 3.6 10 3.6 3.4 0 6.1-1.7 8.9-3.9 5.6-4.2 7.8-11.4 5.5-18L352 307.2l119.9-86 2.9-2.5c2.6-2.8 5.2-6.6 5.2-10.7 0-8.8-8.2-16-17-16z"></path></svg>
                </span>
                <h1 className='text-[15px] lg:text-[18px] font-semibold line-clamp-2 text-center'>{item.title}</h1>
                <h1 className="text-sm font-semibold"><span className='line-through pr-2 text-red-700'>{item.cutPrice}₹/-</span> {item.realPrice}₹/- <span className='text-red-700'></span></h1>


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

                <div>
                  <button className='bg-black text-white text-[10px]  px-3 py-2 flex items-center space-x-2 rounded-3xl  lg:hidden' > <span>Add to Cart </span><span className='text-[15px]'><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M454.65 169.4A31.82 31.82 0 0 0 432 160h-64v-16a112 112 0 0 0-224 0v16H80a32 32 0 0 0-32 32v216c0 39 33 72 72 72h272a72.22 72.22 0 0 0 50.48-20.55 69.48 69.48 0 0 0 21.52-50.2V192a31.75 31.75 0 0 0-9.35-22.6zM176 144a80 80 0 0 1 160 0v16H176zm192 96a112 112 0 0 1-224 0v-16a16 16 0 0 1 32 0v16a80 80 0 0 0 160 0v-16a16 16 0 0 1 32 0z"></path></svg></span> </button>

                </div>
              </div>
            </div>
         
        ))
      ) : (
        <p>No related products found.</p>
      )}
          
        </Slider>
       




            </div>
        </div>
      
    </div>
  )
}

export default Frutherproduct
