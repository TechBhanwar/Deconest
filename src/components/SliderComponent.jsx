import React, { useState } from 'react';
import Slider from 'react-slick';

const SliderComponent = () => {
    const [showPopup, setShowPopup] = useState(true); // Popup state

    const settings = {
        dots: true,             
        infinite: true,         
        speed: 1500,              
        slidesToShow: 1,         
        slidesToScroll: 1,       
        autoplay: false,         
        autoplaySpeed: 4000,      
        cssEase: 'ease-out',      
        pauseOnHover: false,     
    };

    return (
        <div>
            {/* Popup */}
            {showPopup && (
                <div className="fixed top-0 left-0 w-full px-8  lg:px-0  h-[100vh] bg-black bg-opacity-30 flex items-center justify-center z-50">
                    <div className="bg-white relative -top-4  shadow-lg lg:w-[37rem] lg:h-[24rem] h-[20rem] bg-cover bg-center  "   style={{ backgroundImage: "url('/images/pop.jpg')" }}>
                      
                      <div className='  m-auto lg:top-4 flex-col    items-center lg:w-[30rem] justify-center flex '>
                           <h1 className='lg:text-3xl mt-10 lg:mt-20  font-bold text-white '>GET 10% OFF</h1>
                           <h1 className='lg:text-xl py-4 font-medium text-center text-white ' >Discover premium furniture that blends comfort and elegance. Sign up now and enjoy an exclusive discount on your first purchase!</h1>
                           <div className='flex py-5  flex-row'>
                               <input type="email" className='border-none py-3 px-5 border border-black outline-none '  placeholder='Your email address'/>
                               <button className='bg-stone-800 text-white px-4'>Subscribel</button>
                            </div> 
                      </div>




                        <button 
                            className=" bg-black absolute  text-white right-2 top-3   duration-300 rounded hover:bg-white hover:text-black"
                            onClick={() => setShowPopup(false)}
                        >
                            <span className='text-white hover:text-black'><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="m289.94 256 95-95A24 24 0 0 0 351 127l-95 95-95-95a24 24 0 0 0-34 34l95 95-95 95a24 24 0 1 0 34 34l95-95 95 95a24 24 0 0 0 34-34z"></path></svg></span>
                        </button>
                    </div>
                </div>
            )}

            {/* Slider */}
            <div className="slider-container overflow-hidden">
                <Slider {...settings} className="w-full h-[470px] lg:h-[100vh] ipad-pro:h-[600px]">
                    <div className="relative h-[500px] lg:h-full">
                        <img src="/images/slider1.webp" alt="slide 1" loading="lazy" className='h-[250px] lg:h-full w-full' />
                        <div className="absolute h-1/2 ipad-pro:h-[600px] lg:h-[100vh] lg:top-0 left-0 right-0 bottom-11 flex flex-col space-y-4 justify-center items-center bg-transparent lg:bg-black lg:bg-opacity-20 text-black lg:text-white">
                            <h1 className='text-xl font-bold text-black lg:hidden'>Seeting statement</h1>
                            <p className='text-sm lg:text-[20px]'>Create the Perfect Home with Our Interior Designs</p>
                            <h2 className='font-bold text-sm lg:text-4xl'>
                                Elevate Your Home Interiors with Our Exclusive Furniture
                            </h2>
                            <button className='px-3 py-1 lg:px-5 lg:py-2 border border-black lg:border-white rounded-3xl hover:bg-black hover:text-white duration-300 hover:border-black'>
                                Shop Now
                            </button>
                        </div>
                    </div>

                    <div className="relative h-[500px] lg:h-full">
                        <img src="/images/slider2.webp" alt="slide 2" loading="lazy" className='h-[250px] lg:h-full w-full' />
                        <div className="absolute h-1/2 ipad-pro:h-[600px] lg:top-0 left-0 right-0 bottom-11 flex flex-col space-y-4 items-center justify-center bg-transparent lg:bg-black lg:bg-opacity-20 lg:h-[100vh] text-black lg:text-white">
                            <h1 className='text-xl font-bold text-black lg:hidden'>Elevate your space</h1>
                            <p className='text-sm lg:text-[20px]'>Create the Perfect Home with Our Interior Designs</p>
                            <h2 className='font-bold text-sm lg:text-4xl'>
                                Transform Your Living Room with Elegant Sofas
                            </h2>
                            <button className='px-3 py-1 lg:px-5 lg:py-2 border border-black lg:border-white rounded-3xl hover:bg-black hover:text-white duration-300 hover:border-black'>
                                Shop Now
                            </button>
                        </div>
                    </div>
                </Slider>
            </div>

            {/* Marquee text */}
            <div className="py-[28px] overflow-hidden border-b border-black border-opacity-10">
                <ul className="flex w-[100000000000px] space-x-5 text-[14px] text-black font-medium">
                    {[...Array(50)].map((_, index) => (
                        <li key={index} className="animate-marquee">
                            <div className="flex flex-row space-x-5">
                                <h5>20% OFF YOUR FIRST ORDER</h5> <span>*</span>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default SliderComponent;
