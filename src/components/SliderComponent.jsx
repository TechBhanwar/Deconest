import React from 'react';
import Slider from 'react-slick';

const SliderComponent = () => {
    const settings = {
      dots: true,             
infinite: true,         
speed: 2500,         
slidesToShow: 1,         
slidesToScroll: 1,       
autoplay: true,         
autoplaySpeed: 6000,
cssEase: 'ease-in-out',
pauseOnHover: false,    
 
    };

    return (
        <div>
        <div className="slider-container overflow-hidden ">
            <Slider {...settings} className="w-full h-[470px] lg:h-[100vh] ipad-pro:h-[600px]">
                <div className="relative h-[500px] lg:h-full ">
                    <img src="/images/slider1.webp" alt="slide 1" loading="lazy" className='h-[250px] lg:h-full w-full' />
                    <div className="absolute  h-1/2 ipad-pro:h-[600px] lg:h-[100vh] lg:top-0  left-0 right-0 bottom-11 flex flex-col space-y-4 justify-center items-center bg-transparent lg:bg-black lg:bg-opacity-20 text-black lg:text-white">
                  <h1 className='text-xl font-bold text-black lg:hidden'>Seeting statement</h1>
                  <p className='text-sm lg:text-[20px] '>Create the Perfect Home with Our Interior Designs</p>
                   <h2 className=' font-bold text-sm lg:text-4xl'>
                   Elevate Your Home Interiors with Our Exclusive Furniture
                   </h2>
                   <button className='px-3 py-1  lg:px-5 lg:py-2 border border-black lg:border-white rounded-3xl   hover:bg-black hover:text-white duration-300 hover:border-black' >Shop Now</button>
                    </div>
                </div>
                <div className="relative h-[500px] lg:h-full">
                    <img src="/images/slider2.webp" alt="slide 2" loading="lazy" className='h-[250px] lg:h-full w-full' />
                    <div className="absolute h-1/2 ipad-pro:h-[600px] lg:top-0 left-0 right-0 bottom-11 flex flex-col space-y-4 items-center justify-center  bg-transparent lg:bg-black  lg:bg-opacity-20 lg:h-[100vh] text-black lg:text-white">
                    <h1 className='text-xl font-bold text-black lg:hidden'>Elevate your space</h1>
                  <p className='text-sm lg:text-[20px] '>Create the Perfect Home with Our Interior Designs</p>
                   <h2 className=' font-bold text-sm lg:text-4xl'>
                   Transform Your Living Room with Elegant Sofas
                   </h2>
                  
                   <button className='px-3 py-1  lg:px-5 lg:py-2 border border-black lg:border-white rounded-3xl   hover:bg-black hover:text-white duration-300 hover:border-black' >Shop Now</button>
                    </div>
                </div>
                <div className="relative h-[500px] lg:h-full">
                    <img src="/images/slider3.webp" alt="slide 3" loading="lazy" className='h-[250px] lg:h-full w-full' />
                    <div className="absolute h-1/2 ipad-pro:h-[600px] lg:top-0   left-0 right-0 bottom-11 flex flex-col space-y-4 items-center justify-center bg-transparent lg:bg-black lg:bg-opacity-20 lg:h-[100vh] text-black lg:text-white">
                    <h1 className='text-xl font-bold text-black lg:hidden'>Elevate your space</h1>
                  <p className='text-sm lg:text-[20px] '>Create the Perfect Home with Our Interior Designs</p>
                   <h2 className=' font-bold text-sm lg:text-4xl'>
                   Elevate Your Home Interiors with Our Exclusive Furniture
                   </h2>
                   <button className='px-3 py-1  lg:px-5 lg:py-2 border border-black lg:border-white rounded-3xl   hover:bg-black hover:text-white duration-300 hover:border-black' >Shop Now</button>
                    </div>
                </div>
            </Slider>
            
        </div>
        <div class="py-[28px] overflow-hidden  border-b border-black border-opacity-10">
        <ul className="flex w-[100000000000px] space-x-5 text-[14px] text-black font-medium">
    {[...Array(50)].map((_, index) => (
      <li key={index} className="animate-marquee" >
        <div className=" flex flex-row space-x-5">
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
