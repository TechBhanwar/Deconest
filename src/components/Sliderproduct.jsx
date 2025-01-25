import React from 'react';
import Slider from 'react-slick';

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

  const products = [
    {
      id: 1,
      image: '/images/product1.png',
      name: 'Egg Dining Table',

      cutprice:'$80.00',

      price: '$55.00',
      star:'str',
      outOfStock: true,
      tooltip: true,
    },
    // Add more product objects here
    {
      id: 2,
      image: '/images/product2.png',
      name: 'Blue Flower Vase',

      cutprice:'$90.00',

      price: '$75.00',
      tooltip: true,
    },
    {
      id: 3,
      image: '/images/product3.png',
      name: ' Modern desk Lamp',

      cutprice:'$180.00',

      price: '$150.00',
    
      tooltip: true,
    },
    {
      id: 4,
      image: '/images/product4 .png',
      name: 'Classy side Table',

      cutprice:'$130.00',

      price: '$120.00',
      outOfStock: true,
      tooltip: true,
    },
    {
      id: 5,
      image: '/images/product5.png',
      name: 'Pink Flower Vase',

      cutprice:'$140.00',

      price: '$120.00',

      
      tooltip: true,
    },
    {
      id: 6,
      image: '/images/product6.png',
      name: 'Floral Print Vase',

      cutprice:'$140.00',

      price: '$120.00',
      
      tooltip: true,
    },
  ];

  return (

    <div className="container mx-auto px-4 py-4">
    <div className="flex lg:flex-row flex-col justify-center items-center lg:justify-between">
        <div className='flex flex-col justify-center items-center lg:items-start'> 

        <h2 className="text-[30px] font-bold text-black">Bestseller</h2>
        <p className="text-[16px] font-normal text-gray-500 lg:mb-6 mb-5">
          Experience the best products at our store!
        </p>
        </div>
        <div className='lg:mt-9 mb-3'>
          <span className='px-5 py-2 bg-transparent border-black border font-medium hover:bg-black hover:text-white transition duration-300 rounded-full '>
            View All
          </span>
        </div>
      </div>
      <Slider {...settings}>
        {products.map((product) => (
          <div key={product.id} className="p-4 lg:w-[23%] ">
            <div className="bg-pink-50 h-[400px] w-full  mb-6 cursor-pointer group overflow-hidden relative flex justify-center items-center rounded-lg zoom">
              <img
                src={product.image}
                alt={product.name}
                className="w-[50%] transition-transform duration-500 ease-in-out transform group-hover:scale-110"
              />
              {product.outOfStock && (
                <span className="px-2 py-1 absolute bg-black text-white text-[14px] font-medium rounded-full top-3 left-3">
                  Out of stock
                </span>
              )}

              {product.tooltip &&(
                    <div className='flex flex-row absolute bottom-20 gap-1 opacity-0 group-hover:opacity-100 transition-all duration-300 ease-in-out justify-center items-center'>

  <div className="icon-wrapper  relative transform transition-all duration-300 ease-out group-hover:translate-y-0 translate-y-8 group-hover:delay-100"style={{padding:"8px",}} >
  <span

                        className='px-3 py-1 bg-black text-white absolute flex items-center justify-center top-[-35px] left-[-13px]'
                        style={{
                          clipPath:
                            'polygon(0% 0%, 100% 0%, 100% 75%, 59% 76%, 48% 99%, 39% 75%, 0 75%)',
                        }}
                      >
                        <h4 className='text-[12px] text-white font-normal mb-2 '>Wishlist</h4>
                      </span>
              
                      <svg
                        className='icon'
                        stroke='currentColor'
                        fill='black'
                        stroke-width='0'
                        viewBox='0 0 24 24'

                        height='1.5em'
                        width='1.5em'

                        xmlns='http://www.w3.org/2000/svg'
                      >
                        <g id='Heart'>
                          <path d='M12,20.043a.977.977,0,0,1-.7-.288L4.63,13.08A5.343,5.343,0,0,1,6.053,4.513,5.266,5.266,0,0,1,12,5.371a5.272,5.272,0,0,1,5.947-.858A5.343,5.343,0,0,1,19.37,13.08l-6.676,6.675A.977.977,0,0,1,12,20.043ZM8.355,4.963A4.015,4.015,0,0,0,6.511,5.4,4.4,4.4,0,0,0,4.122,8.643a4.345,4.345,0,0,0,1.215,3.73l6.675,6.675,6.651-6.675a4.345,4.345,0,0,0,1.215-3.73A4.4,4.4,0,0,0,17.489,5.4a4.338,4.338,0,0,0-4.968.852h0a.744.744,0,0,1-1.042,0A4.474,4.474,0,0,0,8.355,4.963Z'></path>
                        </g>
                      </svg>
                    </div>

                    <div className="icon-wrapper relative transform transition-all duration-300 ease-out group-hover:translate-y-0 translate-y-8 group-hover:delay-200">
                    <span

                        className='px-3 py-1 bg-black text-white absolute flex items-center justify-center top-[-35px] left-[-18px]'
                        style={{
                          clipPath:
                            'polygon(0% 0%, 100% 0%, 100% 70%, 60% 71%, 49% 93%, 38% 71%, 0 72%)',
                        }}
                      >
                        <h4 className='text-[12px] text-white font-normal mb-2'>Compare</h4>
                      </span>
              
                      <svg
                        stroke='currentColor'
                        fill='currentColor'
                        stroke-width='0'
                        viewBox='0 0 512 512'
                        height='1em'
                        width='1em'
                        xmlns='http://www.w3.org/2000/svg'
                      >
                        <path d='M142.9 142.9c-17.5 17.5-30.1 38-37.8 59.8c-5.9 16.7-24.2 25.4-40.8 19.5s-25.4-24.2-19.5-40.8C55.6 150.7 73.2 122 97.6 97.6c87.2-87.2 228.3-87.5 315.8-1L455 55c6.9-6.9 17.2-8.9 26.2-5.2s14.8 12.5 14.8 22.2l0 128c0 13.3-10.7 24-24 24l-8.4 0c0 0 0 0 0 0L344 224c-9.7 0-18.5-5.8-22.2-14.8s-1.7-19.3 5.2-26.2l41.1-41.1c-62.6-61.5-163.1-61.2-225.3 1zM16 312c0-13.3 10.7-24 24-24l7.6 0 .7 0L168 288c9.7 0 18.5 5.8 22.2 14.8s1.7 19.3-5.2 26.2l-41.1 41.1c62.6 61.5 163.1 61.2 225.3-1c17.5-17.5 30.1-38 37.8-59.8c5.9-16.7 24.2-25.4 40.8-19.5s25.4 24.2 19.5 40.8c-10.8 30.6-28.4 59.3-52.9 83.8c-87.2 87.2-228.3 87.5-315.8 1L57 457c-6.9 6.9-17.2 8.9-26.2 5.2S16 449.7 16 440l0-119.6 0-.7 0-7.6z'></path>
                      </svg>
                    </div>

                    <div className="icon-wrapper relative transform transition-all duration-300 ease-out group-hover:translate-y-0 translate-y-8 group-hover:delay-300">
                    <span

                        className='w-[66px]  h-9 bg-black text-white absolute flex items-center justify-center top-[-38px] left-[-13px]'
                        style={{
                          clipPath:
                            'polygon(0% 0%, 100% 0%, 100% 70%, 60% 71%, 49% 93%, 38% 71%, 0 72%)',
                        }}
                      >
                        <h4 className='text-[12px] text-white font-normal mb-2'>Add to cart</h4>
                      </span>
              
                      <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 16 16" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .49.598l-1 5a.5.5 0 0 1-.465.401l-9.397.472L4.415 11H13a.5.5 0 0 1 0 1H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5M3.102 4l.84 4.479 9.144-.459L13.89 4zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4m7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4m-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2m7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2"></path></svg>                    
                    </div>
                  </div>
              )}
              <div className="absolute w-full h-0 cursor-pointer bg-black bottom-0 flex justify-center items-center transition-all duration-300 ease-in-out group-hover:h-14">
                <h3 className="text-[14px] font-medium text-white">Quickview</h3>
              </div>
            </div>
            <div className='flex str justify-center mb-3 gap-2 items-center'>
            <svg stroke="currentColor" fill="gray" stroke-width="0" viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M496 203.3H312.36L256 32l-56.36 171.3H16l150.21 105.4-58.5 171.3L256 373.84 404.29 480l-58.61-171.3z"></path>
            {product.start}
            </svg>
            <svg stroke="currentColor" fill="gray" stroke-width="0" viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M496 203.3H312.36L256 32l-56.36 171.3H16l150.21 105.4-58.5 171.3L256 373.84 404.29 480l-58.61-171.3z"></path>
            {product.start}
            </svg>
            <svg stroke="currentColor" fill="gray" stroke-width="0" viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M496 203.3H312.36L256 32l-56.36 171.3H16l150.21 105.4-58.5 171.3L256 373.84 404.29 480l-58.61-171.3z"></path>
            {product.start}
            </svg>
            <svg stroke="currentColor" fill="gray" stroke-width="0" viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M496 203.3H312.36L256 32l-56.36 171.3H16l150.21 105.4-58.5 171.3L256 373.84 404.29 480l-58.61-171.3z"></path>
            {product.start}
            </svg>
            <svg stroke="currentColor" fill="gray" stroke-width="0" viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M496 203.3H312.36L256 32l-56.36 171.3H16l150.21 105.4-58.5 171.3L256 373.84 404.29 480l-58.61-171.3z"></path>
            {product.start}
            </svg>
            </div>
            <div className="flex flex-col justify-center items-center">
              <h2 className="text-[15px] text-black font-medium mb-1">
                {product.name}
              </h2>

              <h1 className="text-sm font-semibold"><span className='line-through pr-2 text-red-700'>{product.cutprice} </span>  {product.price}</h1>

            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Sliderproduct;
