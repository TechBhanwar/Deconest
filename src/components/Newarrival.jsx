import React from "react";
import Slider from "react-slick";


const Newarrival = () => {

  const slides = [
    {
      id: 1,
      img: "/images/newarrival1.png",
      title: "Hanging Light",
      description: "Get Up To 60% Off",
      
      buttonText: "Shop Now",
    },
    {
      id: 2,
      title: "Side Table",
      description: "Get Up To 60% Off",
      img: "/images/newarrival2.png",
      buttonText: "Shop Now",
    },
    {
      id: 3,
      title: "Modern Chair",
      description: "Get Up To 50% Off",
      img: "/images/newarrival3.png",
      buttonText: "Shop Now",
    },
    {
      id: 4,
      title: "Chain Lamp",
      description: "Get Up To 50% Off",
      img: "/images/newarrival4.png",
      buttonText: "Shop Now",
    },
  ];

  // Slider settings
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    arrows: true,

    responsive: [             
      {
        breakpoint: 1024, 
        settings: {
          slidesToShow: 1,
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

      <div className="container  py-10 lg:py-16 overflow-hidden">

   
        <div className="flex flex-col lg:items-start  items-center justify-center lg:justify-start">
          <h2 className="text-[30px] font-bold text-black">New Arrival</h2>
          <p className="text-[16px] font-normal text-gray-500 lg:mb-6 mb-5">
            Your next obsession awaits
          </p>
        </div>

        <Slider {...settings}>
          {slides.map((slide) => (
            <div className="flex lg:flex-row lg:justify-between gap-10 lg:h-full ">
            <div
              
              className="flex flex-row  group justify-between rounded-lg overflow-hidden bg-[#f5f5f5] w-full lg:w-[98%] lg:h-[450px] h-[300px]"
            >

              <div className="flex overflow-hidden order-2  w-[50%] lg:h-full h-[300px]  ">
                <img
                  src={slide.img}
                  alt={slide.title}
                  className="transform  scale-100 group-hover:scale-110 transition-transform duration-500 ease-in-out"
                />
              </div>
              <div className="flex px-5 flex-col order-1 w-[50%] justify-center items-center space-y-2 lg:space-y-4">
                <h1 className="lg:text-4xl text-2xl  text-black font-semibold">
                  {slide.title}
                </h1>
                <p className="lg:text-2xl  text-gray-400 font-medium">
                  {slide.description}
                </p>
                <button className="lg:px-5 lg:py-3 px-4 py-2  bg-transparent border-black border font-medium hover:bg-black hover:text-white transition duration-300 rounded-full">
                  {slide.buttonText}
                </button>
              </div>

            </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Newarrival;
