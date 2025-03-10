import React, { useState , useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footernav from '../components/Footernav';
import Slider from 'react-slick';
import { productItems } from '../data/data';
import Footer from '../components/Footer'
import { useDispatch } from 'react-redux';
import { addToCart } from '../redux/cartSlice';
import { useNavigate } from "react-router-dom";


const categories = [
  { name: "All", image: "/images/Prodcut_cataegory1.webp" },
  { name: "Home Decor", image: "/images/Prodcut_cataegory5.webp" },
  { name: "Table", image: "/images/Prodcut_cataegory3.webp" },
  { name: "Furniture", image: "/images/Prodcut_cataegory4.webp" },
  { name: "Lighting", image: "/images/Prodcut_cataegory2.webp" },
];

const Product = (product) => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 1500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: false,
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
    ],
  };

  const [sortOption, setSortOption] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const handleSortChange = (event) => {
    setSortOption(event.target.value);
  };

  const handleCategoryChange = (categoryName) => {
    setSelectedCategory(categoryName);
  };

  const filteredProducts = productItems.filter((item) => {
    return selectedCategory === 'All' || item.category === selectedCategory;
  });

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    console.log("Sorting based on:", sortOption); 

    if (sortOption === 'alphabetical') {
      return (a.title || '').localeCompare(b.title || '');
    }

    else if (sortOption === 'bestseller') {
      return (b.sold || 0) - (a.sold || 0);
    }

    else if (sortOption === 'low-to-high') {
      return (a.realPrice || 0) - (b.realPrice || 0); // Sorting by real price
    }

    else if (sortOption === 'high-to-low') {
      return (b.realPrice || 0) - (a.realPrice || 0); // Sorting by real price
    }

    else if (sortOption === 'old-to-new') {
      return new Date(a.date || 0) - new Date(b.date || 0);
    }

    else if (sortOption === 'new-to-old') {
      return new Date(b.date || 0) - new Date(a.date || 0);
    }

    return 0;
  });


  const handleModalToggle = (item) => {
    setSelectedProduct(item);
    setIsModalOpen(!isModalOpen);
  };

  const [active, setActive] = useState('Show'); // Default active state
  const handleToggle = (option) => {
    setActive(option); // Set the active label
  }


  const [currentPage, setCurrentPage] = useState(1); 
  const productsPerPage = 14; 

  

  const totalPages = Math.ceil(sortedProducts.length / productsPerPage); 
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = sortedProducts.slice(indexOfFirstProduct, indexOfLastProduct);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  
    window.scrollTo({
      top: 0,
      behavior: "smooth", // Smooth scrolling effect
    });
  };

  useEffect(() => {
   
    setCurrentPage(1); 
  }, [sortOption, selectedCategory, ]);
  


  const dispatch = useDispatch();
  const [showPopup, setShowPopup] = useState(false);
const navigate = useNavigate();
  const handleAddToCart = (product) => {
    console.log('Adding product to cart:', product); // Log the product being added
    if (product && product.id) {
      dispatch(addToCart(product)); 
    } else {
      console.log('Product data is missing.');
    }
    setShowPopup(true);
    
    // Hide popup after 3 seconds
    setTimeout(() => {
      setShowPopup(false);
    }, 3000);
  };


  const [isOpen, setIsOpen] = useState(false);
  







  return (
    <div>
      <Navbar />
      <div className="container overflow-hidden">
        <div className='py-11 flex flex-col justify-center  items-center '>
          <h2 className='text-[32px] text-black font-semibold'>Products </h2>
          <div className='text-[15px] font-medium flex space-x-2'>
  <span>Home</span>
  <span>/</span>
  <span>Products</span>
  <span>/</span>
  <span>{selectedCategory}</span> {/* Dynamically render the category name */}
</div>
          <div className='w-full lg:w-[45%] h-40 py-5  '>

            <Slider {...settings} className="px-0 lg:px-8"> {/* Reduced padding */}
              {categories.map((category) => (
                <div key={category.name} className="group lg:px-2"> {/* Added padding for smaller screens */}
                  <div
                    className="w-32 h-32 rounded-full overflow-hidden mx-auto group-hover:border group-hover:border-[#e5e7eb] p-1 cursor-pointer"
                    onClick={() => handleCategoryChange(category.name)}
                  >
                    <img
                      src={category.image}
                      alt={category.name}
                      className="w-full h-full rounded-full"
                    />
                  </div>
                  <span className="pt-3 text-center text-[14px] font-semibold hidden group-hover:block">
                    {category.name}
                  </span>
                </div>
              ))}
            </Slider>

          </div>
        </div>
        <div className='py-7 flex'>
          <div className='w-1/4 p-2  flex-col space-y-6 hidden lg:flex'>
            <h4 className='text-lg font-semibold '>Collections</h4>
            <ul className='flex flex-col space-y-3 text-[14px] text-[#8a8a8a] cursor-pointer '>
  {categories.map((category) => {
    const productCount = category.name === "All"
      ? productItems.length 
      : productItems.filter(product => product.category === category.name).length;

    return (
      <li 
        key={category.name} 
        className={`flex justify-between px-4 py-2 rounded-md ${selectedCategory === category.name ? "bg-gray-200 text-black font-semibold" : ""}`}
        onClick={() => handleCategoryChange(category.name)}
      >
        {category.name} <span>{productCount}</span>
      </li>
    );
  })}
</ul>

            <div className='flex space-x-2 text-[14px] items-center'>
              <h1 className='text-lg font-semibold'>Out of stock</h1>
              <label className="p-1 px-2 bg-[#f3f3f3] rounded-3xl flex justify-between items-center space-x-3 cursor-pointer">
                {/* Show */}
                <span
                  className={`px-2 py-1 rounded-2xl ${active === 'Show' ? 'bg-white' : ''
                    }`}
                  onClick={() => handleToggle('Show')}
                >
                  Show
                </span>

                {/* Hide */}
                <span
                  className={`px-2 py-1 rounded-2xl ${active === 'Hide' ? 'bg-white' : ''
                    }`}
                  onClick={() => handleToggle('Hide')}
                >
                  Hide
                </span>
              </label>
            </div>
           
      <h4 className="text-lg font-semibold">Price Range</h4>
      
            <h4 className='text-lg font-semibold '>Colors</h4>
            <div>
              <div className='flex flex-row space-x-2 mb-2 '>
                <div className='flex flex-row justify-between px-2 py-1 space-x-2 text-[12px] text-[#8a8a8a] items-center border rounded-3xl hover:border-black cursor-pointer'>
                  <div className='bg-gray-800 rounded-full p-3'></div>
                  <span>Gray (3)</span>
                </div>
                <div className='flex flex-row justify-between px-2 py-1 space-x-2 text-[12px] text-[#8a8a8a] items-center border rounded-3xl hover:border-black cursor-pointer'>
                  <div className='bg-pink-900 rounded-full p-3'></div>
                  <span>Pink (5)</span>
                </div>
                <div className='flex flex-row justify-between px-2 py-1 space-x-2 text-[12px] text-[#8a8a8a] items-center border rounded-3xl hover:border-black cursor-pointer'>
                  <div className='bg-red-800 rounded-full p-3'></div>
                  <span>red  (3)</span>
                </div>


              </div>
              <div className='flex flex-row space-x-2 mb-2 '>
                <div className='flex flex-row justify-between px-2 py-1 space-x-2 text-[12px] text-[#8a8a8a] items-center border rounded-3xl hover:border-black cursor-pointer'>
                  <div className='bg-green-700 rounded-full p-3'></div>
                  <span>Green  (3)</span>
                </div>
                <div className='flex flex-row justify-between px-2 py-1 space-x-2 text-[12px] text-[#8a8a8a] items-center border rounded-3xl hover:border-black cursor-pointer'>
                  <div className='bg-black rounded-full p-3'></div>
                  <span>Black (5)</span>
                </div>
                <div className='flex flex-row justify-between px-2 py-1 space-x-2 text-[12px] text-[#8a8a8a] items-center border rounded-3xl hover:border-black cursor-pointer'>
                  <div className='bg-white border rounded-full p-3'></div>
                  <span>white (3)</span>
                </div>


              </div>
              <div className='flex flex-row space-x-2 mb-2 '>

                <div className='flex flex-row justify-between px-2 py-1 space-x-2 text-[12px] text-[#8a8a8a] items-center border rounded-3xl hover:border-black cursor-pointer'>
                  <div className='bg-yellow-400 rounded-full p-3'></div>
                  <span>Yellow (5)</span>
                </div>
                <div className='flex flex-row justify-between px-2 py-1 space-x-2 text-[12px] text-[#8a8a8a] items-center border rounded-3xl hover:border-black cursor-pointer'>
                  <div className='bg-blue-700 border rounded-full p-3'></div>
                  <span>Blue (3)</span>
                </div>


              </div>
            </div>
            <h4 className='text-lg font-semibold '>Size</h4>
            <div className='flex space-x-2 text-[14px]'>
              <div className='px-3 py-1 border hover:bg-black hover:text-white duration-300 cursor-pointer rounded-md'>S(1)</div>
              <div className='px-3 py-1 border  hover:bg-black hover:text-white duration-300 cursor-pointer rounded-md'>M(3)</div>
              <div className='px-3 py-1 border  hover:bg-black hover:text-white duration-300 cursor-pointer rounded-md'>L(5)</div>
            </div>
            <h4 className='text-lg font-semibold '>Feature Product</h4>
<div className='flex flex-col space-y-4'>
  {[...currentProducts] 
    .sort(() => Math.random() - 0.5) 
    .slice(0, 5) 
    .map((item) => (
      <div key={item.id} className="max-w-lg bg-white rounded-lg overflow-hidden"> 
        <div className="flex">
          <div className="w-1/3 bg-[#f0f0f0] flex justify-center items-center">
            <img src={item.image} alt={item.name} className="w-[60%] object-cover" />
          </div>
          <div className="w-2/3 p-4">
            <div className="flex str justify-start mb-1 gap-1 items-center">
              {[...Array(5)].map((_, i) => (
                <svg key={i} stroke="currentColor" fill="gray" strokeWidth="0" viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                  <path d="M496 203.3H312.36L256 32l-56.36 171.3H16l150.21 105.4-58.5 171.3L256 373.84 404.29 480l-58.61-171.3z"></path>
                </svg>
              ))}
            </div>
<h5 className="text-lg font-semibold line-clamp-2 overflow-hidden">
  {item.title}
</h5>
            <span className='text-[14px] font-semibold '>{item.realPrice}₹/-</span>
          </div>
        </div>
      </div>
  ))}
</div>



          </div>
          <div className='w-full lg:w-3/4 px-1 lg:px-5'>
            <div className='flex  justify-between items-center'>
            <span className="lg:hidden cursor-pointer" onClick={() => setIsOpen(!isOpen)}>
        <svg
          stroke="currentColor"
          fill="currentColor"
          strokeWidth="0"
          viewBox="0 0 24 24"
          height="2.25rem"
          width="2.25rem"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M4 11h12v2H4zm0-5h16v2H4zm0 12h7.235v-2H4z"></path>
        </svg>
      </span>


      <div
  className={`fixed top-20 left-0 h-full py-5 px-3 z-50 w-96 bg-white transition-transform duration-500 ${
    isOpen ? "translate-x-0" : "-translate-x-full"
  } overflow-y-auto max-h-screen`}
>
        <button
          className="absolute top-2 right-4 text-black text-2xl"
          onClick={() => setIsOpen(false)}
        >
          &times;
        </button>
        <div className='w-full p-2  flex-col space-y-6  lg:flex mb-36'>
            <h4 className='text-lg font-semibold '>Collections</h4>
            <ul className='flex flex-col space-y-3 text-[14px] text-[#8a8a8a] cursor-pointer '>
  {categories.map((category) => {
    const productCount = category.name === "All"
      ? productItems.length 
      : productItems.filter(product => product.category === category.name).length;

    return (
      <li 
        key={category.name} 
        className={`flex justify-between px-4 py-2 rounded-md ${selectedCategory === category.name ? "bg-gray-200 text-black font-semibold" : ""}`}
        onClick={() => handleCategoryChange(category.name)}
      >
        {category.name} <span>{productCount}</span>
      </li>
    );
  })}
</ul>

            <div className='flex space-x-2 text-[14px] items-center'>
              <h1 className='text-lg font-semibold'>Out of stock</h1>
              <label className="p-1 px-2 bg-[#f3f3f3] rounded-3xl flex justify-between items-center space-x-3 cursor-pointer">
                {/* Show */}
                <span
                  className={`px-2 py-1 rounded-2xl ${active === 'Show' ? 'bg-white' : ''
                    }`}
                  onClick={() => handleToggle('Show')}
                >
                  Show
                </span>

                {/* Hide */}
                <span
                  className={`px-2 py-1 rounded-2xl ${active === 'Hide' ? 'bg-white' : ''
                    }`}
                  onClick={() => handleToggle('Hide')}
                >
                  Hide
                </span>
              </label>
            </div>
           
      <h4 className="text-lg font-semibold">Price Range</h4>
      
            <h4 className='text-lg font-semibold '>Colors</h4>
            <div>
              <div className='flex flex-row space-x-2 mb-2 '>
                <div className='flex flex-row justify-between px-2 py-1 space-x-2 text-[12px] text-[#8a8a8a] items-center border rounded-3xl hover:border-black cursor-pointer'>
                  <div className='bg-gray-800 rounded-full p-3'></div>
                  <span>Gray (3)</span>
                </div>
                <div className='flex flex-row justify-between px-2 py-1 space-x-2 text-[12px] text-[#8a8a8a] items-center border rounded-3xl hover:border-black cursor-pointer'>
                  <div className='bg-pink-900 rounded-full p-3'></div>
                  <span>Pink (5)</span>
                </div>
                <div className='flex flex-row justify-between px-2 py-1 space-x-2 text-[12px] text-[#8a8a8a] items-center border rounded-3xl hover:border-black cursor-pointer'>
                  <div className='bg-red-800 rounded-full p-3'></div>
                  <span>red  (3)</span>
                </div>


              </div>
              <div className='flex flex-row space-x-2 mb-2 '>
                <div className='flex flex-row justify-between px-2 py-1 space-x-2 text-[12px] text-[#8a8a8a] items-center border rounded-3xl hover:border-black cursor-pointer'>
                  <div className='bg-green-700 rounded-full p-3'></div>
                  <span>Green  (3)</span>
                </div>
                <div className='flex flex-row justify-between px-2 py-1 space-x-2 text-[12px] text-[#8a8a8a] items-center border rounded-3xl hover:border-black cursor-pointer'>
                  <div className='bg-black rounded-full p-3'></div>
                  <span>Black (5)</span>
                </div>
                <div className='flex flex-row justify-between px-2 py-1 space-x-2 text-[12px] text-[#8a8a8a] items-center border rounded-3xl hover:border-black cursor-pointer'>
                  <div className='bg-white border rounded-full p-3'></div>
                  <span>white (3)</span>
                </div>


              </div>
              <div className='flex flex-row space-x-2 mb-2 '>

                <div className='flex flex-row justify-between px-2 py-1 space-x-2 text-[12px] text-[#8a8a8a] items-center border rounded-3xl hover:border-black cursor-pointer'>
                  <div className='bg-yellow-400 rounded-full p-3'></div>
                  <span>Yellow (5)</span>
                </div>
                <div className='flex flex-row justify-between px-2 py-1 space-x-2 text-[12px] text-[#8a8a8a] items-center border rounded-3xl hover:border-black cursor-pointer'>
                  <div className='bg-blue-700 border rounded-full p-3'></div>
                  <span>Blue (3)</span>
                </div>


              </div>
            </div>
            <h4 className='text-lg font-semibold '>Size</h4>
            <div className='flex space-x-2 text-[14px]'>
              <div className='px-3 py-1 border hover:bg-black hover:text-white duration-300 cursor-pointer rounded-md'>S(1)</div>
              <div className='px-3 py-1 border  hover:bg-black hover:text-white duration-300 cursor-pointer rounded-md'>M(3)</div>
              <div className='px-3 py-1 border  hover:bg-black hover:text-white duration-300 cursor-pointer rounded-md'>L(5)</div>
            </div>
            <h4 className='text-lg font-semibold '>Feature Product</h4>
<div className='flex flex-col space-y-4'>
  {[...currentProducts] 
    .sort(() => Math.random() - 0.5) 
    .slice(0, 5) 
    .map((item) => (
      <div key={item.id} className="max-w-lg bg-white rounded-lg overflow-hidden"> 
        <div className="flex">
          <div className="w-1/3 bg-[#f0f0f0] flex justify-center items-center">
            <img src={item.image} alt={item.name} className="w-[60%] object-cover" />
          </div>
          <div className="w-2/3 p-4">
            <div className="flex str justify-start mb-1 gap-1 items-center">
              {[...Array(5)].map((_, i) => (
                <svg key={i} stroke="currentColor" fill="gray" strokeWidth="0" viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                  <path d="M496 203.3H312.36L256 32l-56.36 171.3H16l150.21 105.4-58.5 171.3L256 373.84 404.29 480l-58.61-171.3z"></path>
                </svg>
              ))}
            </div>
<h5 className="text-lg font-semibold line-clamp-2 overflow-hidden">
  {item.title}
</h5>
            <span className='text-[14px] font-semibold '>{item.realPrice}₹/-</span>
          </div>
        </div>
      </div>
  ))}
</div>



          </div>
      
      </div>


              <div className="sort-options">
                <select
                  id="sort"
                  value={sortOption}
                  onChange={handleSortChange}
                  className="px-4 py-2 border border-black rounded-3xl shadow-sm focus:outline-none focus:ring-0 focus:ring-black focus:border-black text-sm cursor-pointer"
                >
                  <option value="alphabetical">Alphabetical (A-Z)</option>
                  <option value="bestseller">Best Seller</option>
                  <option value="low-to-high">Price: Low to High</option>
                  <option value="high-to-low">Price: High to Low</option>
                  <option value="old-to-new">Old to New</option>
                  <option value="new-to-old">New to Old</option>
                </select>
              </div>
            </div>
            <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 py-3">
              {currentProducts.map((item) => (
                <div key={item.id}     >
                  <div className='flex flex-col space-y-3 justify-center items-center lg:justify-center lg:items-center mb-3'>
                    <div  className='w-full bg-[#f6f6f6] h-[13em] lg:h-[26rem] rounded-2xl overflow-hidden flex justify-center items-center relative group duration-300 cursor-pointer' >
                      <img src={item.image} alt="" loading="lazy" className='w-28 lg:w-56' onClick={() => navigate(`/shop/${item.id}`)}  />
                      <button onClick={() => handleModalToggle(item)} className='w-full absolute bottom-0 bg-black text-white h-0 group-hover:h-12 duration-300 hidden lg:block '>Quick View</button>
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
                          <button onClick={() => handleAddToCart(item)} className='peer bg-white px-3 py-3 rounded-full   hover:bg-black hover:text-white opacity-0 translate-y-10 group-hover:opacity-100 group-hover:translate-y-0 duration-300 shadow-lg delay-300'>
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
                      <div className='bg-[#d81717] text-white px-2 py-1 text-[10px] rounded-2xl absolute top-2 left-2'> -{item.discount} % </div>
                  


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
                      <button className='bg-black text-white text-[10px]  px-3 py-2 flex items-center space-x-2 rounded-3xl  lg:hidden' onClick={() => handleAddToCart(item)}> <span>Add to Cart </span><span className='text-[15px]'><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M454.65 169.4A31.82 31.82 0 0 0 432 160h-64v-16a112 112 0 0 0-224 0v16H80a32 32 0 0 0-32 32v216c0 39 33 72 72 72h272a72.22 72.22 0 0 0 50.48-20.55 69.48 69.48 0 0 0 21.52-50.2V192a31.75 31.75 0 0 0-9.35-22.6zM176 144a80 80 0 0 1 160 0v16H176zm192 96a112 112 0 0 1-224 0v-16a16 16 0 0 1 32 0v16a80 80 0 0 0 160 0v-16a16 16 0 0 1 32 0z"></path></svg></span> </button>

                    </div>
                  </div>
                </div>
              ))}
            </div>
            {isModalOpen && selectedProduct && (
              <div className="modal fixed inset-0 bg-black bg-opacity-30 flex justify-center items-center">
                <div className="bg-white rounded-lg w-[53%] relative p-6 h-auto">
                  <div className="flex">
                    <div className="w-1/2 flex justify-center items-center">
                      <img src={selectedProduct.image} alt={selectedProduct.name} className="w-72" />
                    </div>
                    <div className="w-1/2 px-6 py-10 flex flex-col space-y-3">
                      <h1 className="text-[25px] font-semibold">{selectedProduct.title}</h1>
                      <span className="text-sm text-[#71797E]">By <span className="text-black"> {selectedProduct.brand}</span></span>
                      <h1 className="text-xl font-semibold">
                        <span className="line-through pr-2 text-sm text-[#535252]">{selectedProduct.cutPrice}₹/-</span>
                        {selectedProduct.realPrice}₹/-
                      </h1>
                      <hr />
                      <p className="text-[15px] text-[#71797E]">{selectedProduct.description}</p>

                      <div className=' flex space-x-1'> <h1 className='font-semibold w-[5.5rem]'>material:- </h1><span className=''>{selectedProduct.material}</span></div>
                      <div className='flex  items-center'>
                        <span className="text-black text-sm font-semibold  w-[5.5rem]">Colors: </span>
                        <div className="flex space-x-2">
                          {selectedProduct.colors.map((color, index) => (
                            <div
                              key={index}
                              className="w-6 h-6 rounded-full border "
                              style={{ backgroundColor: color }}
                            ></div>
                          ))}
                        </div>
                      </div>
                      <div className=' flex space-x-1'> <h1 className='font-semibold  w-[5.5rem]'>Brand:-</h1><span className=''>{selectedProduct.brand}</span></div>
                      <div className=' flex space-x-1'> <h1 className='font-semibold  w-[5.5rem]'>Warnty:-</h1><span className=''>{selectedProduct.warranty}</span></div>

                    </div>

                  </div>
                  <button
                    onClick={() => setIsModalOpen(false)} // Close the modal
                    className="absolute top-2 right-2 text-xl text-gray-600 hover:text-black"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>
              </div>
            )}
          </div>


        </div>
     
        <div className="flex justify-center items-center py-5 space-x-3">
        
          {currentPage > 1 && (
            <button
              className="rounded-full w-[45px] h-[45px] p-2 flex justify-center items-center border  border-[#8a8a8a]  text-[#8a8a8a] duration-300 hover:bg-black"
              onClick={() => setCurrentPage(currentPage - 1)}
            >
              <span>
                <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 320 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M41.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.3 256 246.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z"></path></svg>
              </span>

            </button>
          )}

          
          {[...Array(totalPages)].map((_, index) => (
            <button
              key={index}
              className={`rounded-full w-[45px] h-[45px] p-2 flex justify-center items-center duration-300 ${currentPage === index + 1
                ? 'bg-black text-white'
                : 'border border-[#8a8a8a] text-[#8a8a8a] hover:bg-black hover:text-white'
                }`}
              onClick={() => handlePageChange(index + 1)}
            >
              {index + 1}
            </button>
          ))}

       
          {currentPage < totalPages && (
            <button
              className="rounded-full w-[45px] h-[45px] p-2 flex justify-center items-center border border-[#8a8a8a]  text-[#8a8a8a] duration-300 hover:bg-black"
              onClick={() => setCurrentPage(currentPage + 1)}
            >

              <span>
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth="0"
                  viewBox="0 0 320 512"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M278.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L210.7 256 73.4 118.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l160 160z"></path>
                </svg>
              </span>
            </button>
          )}
        </div>
      </div>



      {showPopup && (
        <div
          className=" right-5 top-20 fixed  text-center px-8 py-4 text-sm text-black bg-white shadow-lg rounded-md opacity-100 transition-opacity duration-200"
        >
          Item added to cart!
        </div>
      )}
      <Footer />
      <Footernav />

    </div>
  )
}

export default Product
