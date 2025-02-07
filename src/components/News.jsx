import React from 'react';
import Slider from 'react-slick';
import { homeDecorNews } from '../data/data';

const News = () => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 1500,
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplay: false,
        autoplaySpeed: 4000,
        cssEase: 'ease-out',
        pauseOnHover: true,

        responsive: [
            {
                breakpoint: 1024, // Tablet
                settings: {
                    slidesToShow: 2,
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

    return (
        <div>
            <div className="container py-3 mb-8 overflow-hidden">
                <div className='flex flex-col justify-center lg:justify-start'>
                    <h2 className="text-[30px] font-bold text-black">News</h2>
                    <p className="text-[16px] font-normal text-gray-500 lg:mb-6 mb-5">
                        Brings high aesthetic value to the space!
                    </p>
                </div>
                <Slider {...settings} >
                    {homeDecorNews.map((item) => (
                        <div>
                            <div className='flex flex-col space-y-3 px-2 lg:px-3'>
                                <div className="w-full news_image h-[200px] lg:h-[420px] rounded-3xl overflow-hidden group  transition-transform cursor-pointer ">
                                    <img
                                        src={item.image}
                                        alt=""
                                        className="h-full w-full transform scale-100 group-hover:scale-125 transition-transform  ease-in-out"
                                    />
                                </div>
                                <time className='text-[18px]'>{item.date}</time>
                                <h2 className='text-[20px] lg:text-[25px] font-semibold'>{item.title}</h2>
                                <div>
                                    <button className='px-3  border rounded-3xl border-black hover:bg-black transition duration-300 group '>
                                        <svg
                                            className="text-black group-hover:text-white"
                                            stroke="currentColor"
                                            fill="none"
                                            stroke-width="1.5"
                                            viewBox="0 0 24 24"
                                            aria-hidden="true"
                                            height="30px"
                                            width="30px"
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
                        </div>
                    ))}




                </Slider>

            </div>
        </div>
    )
}

export default News
