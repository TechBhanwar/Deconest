import React, { useRef } from 'react';
import Slider from 'react-slick';


const Testimonials = () => {
    const sliderRef = useRef(null);
    const settings = {
        dots: false,
        arrows: false, 
        infinite: true,
        speed: 1500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: false,
        autoplaySpeed: 4000,
        cssEase: 'ease-out',
        pauseOnHover: true,
        responsive: [
            {
                breakpoint: 1024, 
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };



    return (
        <div>
            <div className="container py-5 lg:py-10 overflow-hidden">
                <div className="grid grid-cols-1 lg:grid-cols-2">
                    <div className='py-2 lg:py-9'>
                        <div className=' py-5 text-[30px] font-bold text-center lg:text-start' >Testimonial</div>
                        <Slider ref={sliderRef} {...settings}>
                            <div>
                                <div className="w-full h-auto flex flex-row justify-start  space-x-3">
                                    <div><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="40px" width="40px" xmlns="http://www.w3.org/2000/svg"><path d="M4.58341 17.3211C3.55316 16.2274 3 15 3 13.0103C3 9.51086 5.45651 6.37366 9.03059 4.82318L9.92328 6.20079C6.58804 8.00539 5.93618 10.346 5.67564 11.822C6.21263 11.5443 6.91558 11.4466 7.60471 11.5105C9.40908 11.6778 10.8312 13.159 10.8312 15C10.8312 16.933 9.26416 18.5 7.33116 18.5C6.2581 18.5 5.23196 18.0095 4.58341 17.3211ZM14.5834 17.3211C13.5532 16.2274 13 15 13 13.0103C13 9.51086 15.4565 6.37366 19.0306 4.82318L19.9233 6.20079C16.588 8.00539 15.9362 10.346 15.6756 11.822C16.2126 11.5443 16.9156 11.4466 17.6047 11.5105C19.4091 11.6778 20.8312 13.159 20.8312 15C20.8312 16.933 19.2642 18.5 17.3312 18.5C16.2581 18.5 15.232 18.0095 14.5834 17.3211Z"></path></svg></div>
                                    <div className='flex flex-col '>
                                        <h1 className=' text-[17px] lg:text-[20px] font-semibold py-4 leading-8 lg:leading-10'>
                                            Exceptional experience at the furniture store! The <br />
                                            quality of the products exceeded my expectations, and<br />
                                            the personalized assistance from the knowledgeable <br />
                                            taff made the shopping process a delight

                                        </h1>
                                        <span className='font-semibold py-4'>LINDA - <span className='font-normal'>Designer</span></span>
                                    </div>
                                </div >

                            </div>
                            <div>
                                <div className="w-full h-auto flex flex-row justify-start  space-x-3">
                                    <div><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="40px" width="40px" xmlns="http://www.w3.org/2000/svg"><path d="M4.58341 17.3211C3.55316 16.2274 3 15 3 13.0103C3 9.51086 5.45651 6.37366 9.03059 4.82318L9.92328 6.20079C6.58804 8.00539 5.93618 10.346 5.67564 11.822C6.21263 11.5443 6.91558 11.4466 7.60471 11.5105C9.40908 11.6778 10.8312 13.159 10.8312 15C10.8312 16.933 9.26416 18.5 7.33116 18.5C6.2581 18.5 5.23196 18.0095 4.58341 17.3211ZM14.5834 17.3211C13.5532 16.2274 13 15 13 13.0103C13 9.51086 15.4565 6.37366 19.0306 4.82318L19.9233 6.20079C16.588 8.00539 15.9362 10.346 15.6756 11.822C16.2126 11.5443 16.9156 11.4466 17.6047 11.5105C19.4091 11.6778 20.8312 13.159 20.8312 15C20.8312 16.933 19.2642 18.5 17.3312 18.5C16.2581 18.5 15.232 18.0095 14.5834 17.3211Z"></path></svg></div>
                                    <div className='flex flex-col'>
                                        <h1 className=' text-[17px] lg:text-[20px] font-semibold py-4 leading-8 lg:leading-10'>
                                            Exceptional experience at the furniture store! The <br />
                                            quality of the products exceeded my expectations, and<br />
                                            the personalized assistance from the knowledgeable <br />
                                            taff made the shopping process a delight

                                        </h1>
                                        <span className='font-semibold py-4'>LINDA - <span className='font-normal'>Designer</span></span>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div className="w-full h-auto flex flex-row justify-start  space-x-3">
                                    <div><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="40px" width="40px" xmlns="http://www.w3.org/2000/svg"><path d="M4.58341 17.3211C3.55316 16.2274 3 15 3 13.0103C3 9.51086 5.45651 6.37366 9.03059 4.82318L9.92328 6.20079C6.58804 8.00539 5.93618 10.346 5.67564 11.822C6.21263 11.5443 6.91558 11.4466 7.60471 11.5105C9.40908 11.6778 10.8312 13.159 10.8312 15C10.8312 16.933 9.26416 18.5 7.33116 18.5C6.2581 18.5 5.23196 18.0095 4.58341 17.3211ZM14.5834 17.3211C13.5532 16.2274 13 15 13 13.0103C13 9.51086 15.4565 6.37366 19.0306 4.82318L19.9233 6.20079C16.588 8.00539 15.9362 10.346 15.6756 11.822C16.2126 11.5443 16.9156 11.4466 17.6047 11.5105C19.4091 11.6778 20.8312 13.159 20.8312 15C20.8312 16.933 19.2642 18.5 17.3312 18.5C16.2581 18.5 15.232 18.0095 14.5834 17.3211Z"></path></svg></div>
                                    <div className='flex flex-col'>
                                        <h1 className=' text-[17px] lg:text-[20px] font-semibold py-4 leading-8 lg:leading-10'>
                                            Exceptional experience at the furniture store! The <br />
                                            quality of the products exceeded my expectations, and<br />
                                            the personalized assistance from the knowledgeable <br />
                                            taff made the shopping process a delight

                                        </h1>
                                        <span className='font-semibold py-4'>LINDA - <span className='font-normal'>Designer</span></span>
                                    </div>
                                </div>
                            </div>

                        </Slider>
                        <div className="flex px-12 space-x-3 py-4 justify-center lg:justify-start">
                        <button onClick={() => sliderRef.current.slickPrev()}>

                                <svg
                                    className="text-[#00000033] hover:text-black transition-colors duration-300"
                                    stroke="currentColor"
                                    fill="none"
                                    stroke-width="1.5"
                                    viewBox="0 0 24 24"
                                    aria-hidden="true"
                                    height="35px"
                                    width="35px"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        d="M6.75 15.75 3 12m0 0 3.75-3.75M3 12h18"
                                    ></path>
                                </svg>
                            </button>
                            <button onClick={() => sliderRef.current.slickNext()}>
                                <svg
                                    className="text-[#00000033] hover:text-black transition-colors duration-300"
                                    stroke="currentColor"
                                    fill="none"
                                    stroke-width="1.5"
                                    viewBox="0 0 24 24"
                                    aria-hidden="true"
                                    height="35px"
                                    width="35px"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"
                                    ></path>
                                </svg>
                            </button>
                        </div>

                    </div>
                    <div className='flex px-1 lg:px-0 justify-start lg:justify-end'>
                        <img src="/images/testimonial1.jpg" alt="" className=' w-full lg:w-full rounded-lg ' />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Testimonials
