import React, { useState, useEffect } from 'react';
import "./Style.css";
import  { layout, filter, layout2 } from "../data/data";
import { products, furniture, decor, kitchenDining } from '../data/data';
import { Link } from "react-router-dom";
import { useSelector } from 'react-redux';
import { auth } from "../firebase/firebase";
import { useNavigate } from "react-router-dom";
import { logOut } from "../firebase/auth";


function Navbar() {

  const [user, setUser] = useState(null);
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((currentUser) => {
      setUser(currentUser); // Update user state
    });

    return () => unsubscribe(); // Cleanup function
  }, []);

 
  const handleClick = () => {
    console.log("User State:", user);
    
    if (!user) {
      console.log("Navigating to /login");
      setTimeout(() => navigate("/login"), 0); // ✅ Ensure navigation
    } else {
      setIsOpen(!isOpen);
    }
  };
  

  const handleLogout = async () => {
    await logOut(); 
    navigate("/login"); 
  };

  const handleProfileClick = () => {
    navigate("/userprofile");
  };

  const [isCurrencyOpen, setIsCurrencyOpen] = useState(false);
  const [selectedCurrency, setSelectedCurrency] = useState({
    code: "USD",
    name: " USD",
    flag: "https://flagcdn.com/us.svg",
  });



  
  const currencies = [
    { code: "USD", name: "Dollar", flag: "https://flagcdn.com/us.svg" },
    { code: "EUR", name: "Euro", flag: "https://flagcdn.com/eu.svg" },
    { code: "INR", name: "Indian Rupee", flag: "https://flagcdn.com/in.svg" },
    { code: "GBP", name: "British Pound", flag: "https://flagcdn.com/gb.svg" },
    { code: "JPY", name: "Japanese Yen", flag: "https://flagcdn.com/jp.svg" },
  ];

  const [isLanguageOpen, setIsLanguageOpen] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState({
    code: "EN",
    name: "English",
  });

  const languages = [
    { code: "EN", name: "English" },
    { code: "HI", name: "Hindi" },
    { code: "FR", name: "French" },
  ];



  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isClosing, setIsClosing] = useState(false); 

  const toggleSearch = () => {
    setIsSearchOpen(!isSearchOpen);
    if (!isSearchOpen) {
      setIsClosing(false); 
    }
  };

  const closeSearch = () => {
    setIsClosing(true);
    setTimeout(() => {
      setIsSearchOpen(false);
    }, 500);
  };

  const cartItems = useSelector((state) => state.cart.items);

  const cartItemCount = cartItems.length;


  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsSticky(true);  
      } else {
        setIsSticky(false); 
      }
    };

    window.addEventListener('scroll', handleScroll); 

    return () => {
      window.removeEventListener('scroll', handleScroll);  
    };
  }, []);



  // const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="">

      <div className=" navbar text-white bg-white flex flex-col shadow-sm">
        <div className="container mx-auto flex flex-col">

          <div className="flex lg:flex-row flex-col justify-center lg:justify-between py-4 lg:py-2 space-y-2 lg:space-y-0 items-center border-b">
            <div className="text-black justify-center items-center flex text-center">
              <h1 className="lg:text-[13px] text-[13px] font-normal lg:font-medium">
                Quick sale: 20% off products purchased today
              </h1>
            </div>
            <div className="text-black flex space-x-2">
              <div className="flex gap-2 text-[13px] justify-center items-center">
                {/* Currency Selector */}
                <div className="relative inline-block text-left border-r">
                  <button
                    className=" px-2  rounded-md text-black flex items-center gap-2"
                    onClick={() => setIsCurrencyOpen(!isCurrencyOpen)}
                  >
                    <img
                      src={selectedCurrency.flag}
                      alt={selectedCurrency.code}
                      className="w-5 h-5"
                    />
                    {selectedCurrency.name}
                    <svg
                      className={`w-4 h-4 transition-transform ${isCurrencyOpen ? "rotate-180" : "rotate-0"
                        }`}
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={2}
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  {isCurrencyOpen && (
                    <ul className="absolute z-10 mt-2 w-56 bg-white border border-gray-300 rounded-md shadow-lg">
                      {currencies.map((currency) => (
                        <li
                          key={currency.code}
                          className="px-4 py-2 cursor-pointer flex items-center gap-2 hover:bg-gray-100"
                          onClick={() => {
                            setSelectedCurrency(currency);
                            setIsCurrencyOpen(false);
                          }}
                        >
                          <img
                            src={currency.flag}
                            alt={currency.code}
                            className="w-5 h-5"
                          />
                          {currency.name}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>

                {/* Language Selector */}
                <div className="relative inline-block text-left">
                  <button
                    className="px-2 py-2 rounded-md text-black flex items-center gap-2"
                    onClick={() => setIsLanguageOpen(!isLanguageOpen)}
                  >
                    {selectedLanguage.name}
                    <svg
                      className={`w-4 h-4 transition-transform ${isLanguageOpen ? "rotate-180" : "rotate-0"
                        }`}
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={2}
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  {isLanguageOpen && (
                    <ul className="absolute z-10 mt-2 w-40 bg-white border border-gray-300 rounded-md shadow-lg">
                      {languages.map((language) => (
                        <li
                          key={language.code}
                          className="px-4 py-2 cursor-pointer hover:bg-gray-100"
                          onClick={() => {
                            setSelectedLanguage(language);
                            setIsLanguageOpen(false);
                          }}
                        >
                          {language.name}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>

            </div>
          </div>

          {/* Navbar Main Section */}

        </div>
      </div>
      <nav className={` transition-all duration-500 ease-in-out bg-white  ${isSticky ? 'fixed top-0 w-full shadow-md z-50' : ''}`}>
        <div className="container">
          <div className="flex lg:flex-row py-3 lg:py-1 px-1 lg:px-0 items-center justify-between">

            <div className="navbar-logo flex justify-center lg:px-0  order-2  lg:order-2">
              <Link to="/"   >  <img className="w-32 lg:w-40" src="images/logo.webp" alt="logo" />
              </Link>
            </div>

          

            <ul className="hidden lg:flex lg:flex-row flex-col lg:space-x-8 space-y-4 lg:space-y-0 text-base font-normal justify-start lg:justify-center items-start lg:items-center text-black  order-1 lg:order-2">


              <li className="flex items-center cursor-pointer group py-6">
                {/* Home text and SVG icon */}
                <Link to="/"   >
                <div className="relative before:content-[''] before:absolute before:w-full before:h-[1px] before:bg-black before:bottom-0 before:left-[-4px] flex items-center peer">
                Home
                    <svg
                      stroke="currentColor"
                      fill="currentColor"
                      strokeWidth="0"
                      viewBox="0 0 24 24"
                      height="1.5em"
                      width="1.5em"
                      xmlns="http://www.w3.org/2000/svg"
                      className="text-black"
                    >
                      <path d="M12 15.0006L7.75732 10.758L9.17154 9.34375L12 12.1722L14.8284 9.34375L16.2426 10.758L12 15.0006Z"></path>
                    </svg>
                  </div>
                </Link>

              </li>


              <li className=" flex items-center cursor-pointer group py-6">
                <Link to="/shop" >   <div className="relative after:content-[''] after:absolute after:w-0 after:h-[1px] after:bg-black after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:transition-all after:duration-300 after:ease-in-out group-hover:after:w-full group-hover:after:left-0 group-hover:after:translate-x-0 flex items-center peer ">
                  Shop
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    strokeWidth="0"
                    viewBox="0 0 24 24"
                    height="1.5em"
                    width="1.5em"
                    xmlns="http://www.w3.org/2000/svg"
                    className="text-black "
                  >
                    <path d="M12 15.0006L7.75732 10.758L9.17154 9.34375L12 12.1722L14.8284 9.34375L16.2426 10.758L12 15.0006Z"></path>
                  </svg>
                </div>
                </Link>


                <div
                  className={`w-[100%] absolute bg-white py-14 mt-2 left-0 opacity-0 invisible peer-hover:opacity-100 peer-hover:visible group-hover:opacity-100 group-hover:visible z-50 h-auto transition-all duration-300 ease-in-out ${isSticky ? 'top-[73px]' : 'top-[123px]'}`}
                  style={{ boxShadow: '0 6px 15px #0000001f' }}
                >                  <div className="container">
                    <div className="grid grid-cols-2">
                      <div className="grid grid-cols-2">
                        <img src="images/shop1.webp" alt="" className="w-[322px] h-[380px]" />
                        <img src="images/shop2.webp" alt="" className="w-[322px] h-[380px]" />
                      </div>
                      <div className="grid grid-cols-3 gap-8">
                        <div>

                          <ul className="list-none p-0 m-0 space-y-2 ">
                            <h2 className="m-0 border-b pb-2 font-semibold">Layout</h2>
                            {layout.map((item, index) => (
                              <li
                                key={index}
                                className="cursor-pointer text-[#8a8a8a] text-[14px] hover:text-black"
                              >
                                {item}
                              </li>
                            ))}

                          </ul>
                        </div>
                        <div>

                          <ul className="list-none p-0 m-0 space-y-2 ">
                            <h2 className="m-0 border-b pb-2 font-semibold">Filter</h2>
                            {filter.map((item, index) => (
                              <li
                                key={index}
                                className="cursor-pointer text-[#8a8a8a] text-[14px] hover:text-black"
                              >
                                {item}
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div>

                          <ul className="list-none p-0 m-0 space-y-2 ">
                            <h2 className="m-0 border-b pb-2 font-semibold">Categories</h2>
                            {layout2.map((item, index) => (
                              <li
                                key={index}
                                className="cursor-pointer text-[#8a8a8a] text-[14px] hover:text-black"
                              >
                                {item}
                              </li>
                            ))}
                          </ul>
                        </div>

                      </div>
                    </div>
                  </div>
                </div>
              </li>
              <li className=" flex items-center cursor-pointer group py-6">
                <Link to="/Product"   >
                  <div className=" after:content-[''] after:absolute after:w-0 after:h-[1px] after:bg-black after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:transition-all after:duration-300 after:ease-in-out group-hover:after:w-full group-hover:after:left-0 group-hover:after:translate-x-0 relative flex items-center peer ">
                    Product
                    <svg
                      stroke="currentColor"
                      fill="currentColor"
                      strokeWidth="0"
                      viewBox="0 0 24 24"
                      height="1.5em"
                      width="1.5em"
                      xmlns="http://www.w3.org/2000/svg"
                      className="text-black "
                    >
                      <path d="M12 15.0006L7.75732 10.758L9.17154 9.34375L12 12.1722L14.8284 9.34375L16.2426 10.758L12 15.0006Z"></path>
                    </svg>
                  </div>
                </Link>

                <div
                  className={`overflow-hidden w-[100%] absolute bg-white py-14 mt-2 left-0 opacity-0 invisible peer-hover:opacity-100 peer-hover:visible group-hover:opacity-100 group-hover:visible z-50 h-auto transition-all duration-300 ease-in-out ${isSticky ? 'top-[73px]' : 'top-[123px]'}`}
                  style={{ boxShadow: '0 6px 15px #0000001f' }}
                >                  <div className="container">
                    <div className="grid grid-cols-4 gap-16">
                      <ul className="list-none p-0 m-0 space-y-2 ">
                        <h2 className="m-0 border-b pb-2 font-semibold">Products</h2>
                        {products.map((item, index) => (
                          <li
                            key={index}
                            className="cursor-pointer text-[#8a8a8a] text-[14px] hover:text-black"
                          >
                            {item}
                          </li>
                        ))}
                      </ul>
                      <ul className="list-none p-0 m-0 space-y-2 ">
                        <h2 className="m-0 border-b pb-2 font-semibold">Furniture</h2>
                        {furniture.map((item, index) => (
                          <li
                            key={index}
                            className="cursor-pointer text-[#8a8a8a] text-[14px] hover:text-black"
                          >
                            {item}
                          </li>
                        ))}
                      </ul>
                      <ul className="list-none p-0 m-0 space-y-2 ">
                        <h2 className="m-0 border-b pb-2 font-semibold">Decor</h2>
                        {decor.map((item, index) => (
                          <li
                            key={index}
                            className="cursor-pointer text-[#8a8a8a] text-[14px] hover:text-black"
                          >
                            {item}
                          </li>
                        ))}
                      </ul>
                      <ul className="list-none p-0 m-0 space-y-2 ">
                        <h2 className="m-0 border-b pb-2 font-semibold">kitchenDining</h2>
                        {kitchenDining.map((item, index) => (
                          <li
                            key={index}
                            className="cursor-pointer text-[#8a8a8a] text-[14px] hover:text-black"
                          >
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </li>

              <li className="group relative flex items-center cursor-pointer ">
                <Link to="/blog"   >
                  <div className=" after:content-[''] after:absolute after:w-0 after:h-[1px] after:bg-black after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:transition-all after:duration-300 after:ease-in-out group-hover:after:w-full group-hover:after:left-0 group-hover:after:translate-x-0 relative flex items-center peer ">
                    Blog
                    <svg stroke="currentColor" fill="black" stroke-width="0" viewBox="0 0 24 24" height="1.5em" width="1.5em" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 15.0006L7.75732 10.758L9.17154 9.34375L12 12.1722L14.8284 9.34375L16.2426 10.758L12 15.0006Z"></path>
                    </svg>
                  </div></Link>
              </li>
              <Link to="/contact"   >      <li className="group relative flex items-center cursor-pointer">
                <div className=" after:content-[''] after:absolute after:w-0 after:h-[1px] after:bg-black after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:transition-all after:duration-300 after:ease-in-out group-hover:after:w-full group-hover:after:left-0 group-hover:after:translate-x-0 relative flex items-center peer ">
                  Contact-Us
                  <svg stroke="currentColor" fill="black" stroke-width="0" viewBox="0 0 24 24" height="1.5em" width="1.5em" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 15.0006L7.75732 10.758L9.17154 9.34375L12 12.1722L14.8284 9.34375L16.2426 10.758L12 15.0006Z"></path>
                  </svg>
                </div>
              </li>
              </Link>
            </ul>

            <div className="relative  lg:hidden flex justify-center">
              <div
                className="navbar-menu-icon lg:hidden flex flex-row justify-center items-center space-x-2 cursor-pointer"

              >
                <span className="menu-icon text-xl" onClick={toggleSidebar}>&#9776;</span>
                <svg
                  stroke="currentColor"
                  fill="black"
                  strokeWidth="0"
                  className="lg:inline-block"
                  version="1.1"
                  id="search"
                  x="0px"
                  y="0px"
                  viewBox="0 0 24 24"
                  height="1.25em"
                  width="1.25em"
                  xmlns="http://www.w3.org/2000/svg"
                  onClick={toggleSearch}
                >
                  <path d="M20.031,20.79c0.46,0.46,1.17-0.25,0.71-0.7l-3.75-3.76c1.27-1.41,2.04-3.27,2.04-5.31 c0-4.39-3.57-7.96-7.96-7.96s-7.96,3.57-7.96,7.96c0,4.39,3.57,7.96,7.96,7.96c1.98,0,3.81-0.73,5.21-1.94L20.031,20.79z M4.11,11.02c0-3.84,3.13-6.96,6.96-6.96c3.84,0,6.96,3.12,6.96,6.96c0,3.84-3.12,6.96-6.96,6.96C7.24,17.98,4.11,14.86,4.11,11.02 z"></path>
                </svg>
                {isSearchOpen && (
                  <div className={` fixed top-[20%] left-[48%] transform -translate-x-1/2 w-[95%] mr-4  max-h-[calc(100%-200px)] bg-white shadow-lg flex items-center justify-center mx-auto  px-[20px] py-[50px] ${isClosing ? 'animate-slideOut' : 'animate-slideInFromTop'} z-[9999]  `}>

                    <div className="search-input flex items-center w-full h-[50px] leading-[48px] relative border border-[#e7e7e7] rounded-[5px] pl-[10px] text-base outline-none transition-all duration-300 ease-in-out">
                      <svg
                        stroke="currentColor"
                        fill="black"
                        strokeWidth="0"
                        className="lg:inline-block cursor-pointer"
                        version="1.1"
                        id="search"
                        x="0px"
                        y="0px"
                        viewBox="0 0 24 24"
                        height="1.5em"
                        width="1.5em"
                        xmlns="http://www.w3.org/2000/svg"
                        onClick={toggleSearch}
                      >
                        <path d="M20.031,20.79c0.46,0.46,1.17-0.25,0.71-0.7l-3.75-3.76c1.27-1.41,2.04-3.27,2.04-5.31 c0-4.39-3.57-7.96-7.96-7.96s-7.96,3.57-7.96,7.96c0,4.39,3.57,7.96,7.96,7.96c1.98,0,3.81-0.73,5.21-1.94L20.031,20.79z M4.11,11.02c0-3.84,3.13-6.96,6.96-6.96c3.84,0,6.96,3.12,6.96,6.96c0,3.84-3.12,6.96-6.96,6.96C7.24,17.98,4.11,14.86,4.11,11.02 z"></path>
                      </svg>
                      <input
                        type="text"
                        placeholder="Search..."
                        className="w-full border-none outline-none"
                      />
                    </div>
                    <button className="absolute right-[15px] top-[5px] text-[1.5rem] text-[#333] bg-none border-none cursor-pointer transition-all duration-300 ease-in-out hover:text-black" onClick={closeSearch}>
                      &times;
                    </button>
                  </div>
                )}
              </div>

              <div
                className={`fixed top-0 left-0 h-screen w-80 z-50 bg-white text-black transform ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"
                  } transition-transform duration-300 ease-in-out`}
              >
                <div className="p-4 flex justify-end items-center ">


                  <button
                    className="text-black  text-2xl border border-[#e7e7e7] w-6 h-6 flex justify-center items-center"
                    onClick={toggleSidebar}
                  >
                    <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M278.6 256l68.2-68.2c6.2-6.2 6.2-16.4 0-22.6-6.2-6.2-16.4-6.2-22.6 0L256 233.4l-68.2-68.2c-6.2-6.2-16.4-6.2-22.6 0-3.1 3.1-4.7 7.2-4.7 11.3 0 4.1 1.6 8.2 4.7 11.3l68.2 68.2-68.2 68.2c-3.1 3.1-4.7 7.2-4.7 11.3 0 4.1 1.6 8.2 4.7 11.3 6.2 6.2 16.4 6.2 22.6 0l68.2-68.2 68.2 68.2c6.2 6.2 16.4 6.2 22.6 0 6.2-6.2 6.2-16.4 0-22.6L278.6 256z"></path></svg>
                  </button>

                </div>
                <div className="px-3 py-3">
                  <img className="w-44" src="images/logo.webp" alt="logo" />
                </div>
                <ul className="flex flex-col space-y-5 mt-4 px-3 text-[13px]">
                  <li className="px-4 py-4 bg-[#f0f0f0] cursor-pointer flex justify-between items-center rounded-lg border-b border-gray-300">
                    Home
                    <svg
                      className="ml-2"
                      stroke="currentColor"
                      fill="currentColor"
                      stroke-width="0"
                      viewBox="0 0 320 512"
                      height="1em"
                      width="1em"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M278.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L210.7 256 73.4 118.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l160 160z"></path>
                    </svg>
                  </li>
                  <Link to="/shop"   >  <li className="px-4 py-4 cursor-pointer flex justify-between items-center rounded-lg border-b border-gray-300 hover:bg-[#f0f0f0]">
                    Shop
                    <svg
                      className="ml-2"
                      stroke="currentColor"
                      fill="currentColor"
                      stroke-width="0"
                      viewBox="0 0 320 512"
                      height="1em"
                      width="1em"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M278.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L210.7 256 73.4 118.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l160 160z"></path>
                    </svg>
                  </li></Link>

                  <Link to="/Product"   >  <li className="px-4 py-4 cursor-pointer flex justify-between items-center rounded-lg border-b border-gray-300 hover:bg-[#f0f0f0]">
                    Product
                    <svg
                      className="ml-2"
                      stroke="currentColor"
                      fill="currentColor"
                      stroke-width="0"
                      viewBox="0 0 320 512"
                      height="1em"
                      width="1em"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M278.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L210.7 256 73.4 118.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l160 160z"></path>
                    </svg>
                  </li></Link>
                  <Link to="/blog"   >     <li className="px-4 py-4 cursor-pointer flex justify-between items-center rounded-lg border-b border-gray-300 hover:bg-[#f0f0f0]">
                    Blog


                    <svg
                      className="ml-2"
                      stroke="currentColor"
                      fill="currentColor"
                      stroke-width="0"
                      viewBox="0 0 320 512"
                      height="1em"
                      width="1em"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M278.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L210.7 256 73.4 118.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l160 160z"></path>
                    </svg>
                  </li>
                  </Link>


                  <Link to="/contact">
                      <li className="px-4 py-4 cursor-pointer flex justify-between items-center rounded-lg border-b border-gray-300 hover:bg-[#f0f0f0]">
                    Contact
                    <svg
                      className="ml-2"
                      stroke="currentColor"
                      fill="currentColor"
                      stroke-width="0"
                      viewBox="0 0 320 512"
                      height="1em"
                      width="1em"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M278.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L210.7 256 73.4 118.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l160 160z"></path>
                    </svg>
                  </li>
                  </Link>


                </ul>
              </div>



            </div>


            {/* Icons */}
            <div className="flex relative cursor-pointer justify-center items-center gap-4 order-3 lg:order-3">
              {/* Search Icon */}
              <div className="relative hidden lg:block">
                {/* Search Icon */}
                <svg
                  stroke="currentColor"
                  fill="black"
                  strokeWidth="0"
                  className="lg:inline-block cursor-pointer"
                  version="1.1"
                  id="search"
                  x="0px"
                  y="0px"
                  viewBox="0 0 24 24"
                  height="1.5em"
                  width="1.5em"
                  xmlns="http://www.w3.org/2000/svg"
                  onClick={toggleSearch}
                >
                  <path d="M20.031,20.79c0.46,0.46,1.17-0.25,0.71-0.7l-3.75-3.76c1.27-1.41,2.04-3.27,2.04-5.31 c0-4.39-3.57-7.96-7.96-7.96s-7.96,3.57-7.96,7.96c0,4.39,3.57,7.96,7.96,7.96c1.98,0,3.81-0.73,5.21-1.94L20.031,20.79z M4.11,11.02c0-3.84,3.13-6.96,6.96-6.96c3.84,0,6.96,3.12,6.96,6.96c0,3.84-3.12,6.96-6.96,6.96C7.24,17.98,4.11,14.86,4.11,11.02 z"></path>
                </svg>

              
                {isSearchOpen && (
                 <div
                 className={`fixed top-[25%] left-1/2 transform -translate-x-1/2 w-[800px] lg:w-full lg:max-w-[1200px] max-h-[calc(100%-200px)] bg-white shadow-lg flex items-center justify-between px-[90px] py-[70px] 
                   ${isClosing ? 'animate-slideOutDesktop' : 'animate-slideInFromTopDesktop'} 
                   z-[9999] transition-all duration-300 ease-out 
                   `}
               >
                    <div className="search-input flex items-center w-full h-[50px] leading-[48px] relative border border-[#e7e7e7] rounded-[5px] pl-[10px] text-base outline-none transition-all duration-300 ease-in-out">
                      <svg
                        stroke="currentColor"
                        fill="black"
                        strokeWidth="0"
                        className="lg:inline-block cursor-pointer"
                        version="1.1"
                        id="search"
                        x="0px"
                        y="0px"
                        viewBox="0 0 24 24"
                        height="1.5em"
                        width="1.5em"
                        xmlns="http://www.w3.org/2000/svg"
                        onClick={toggleSearch}
                      >
                        <path d="M20.031,20.79c0.46,0.46,1.17-0.25,0.71-0.7l-3.75-3.76c1.27-1.41,2.04-3.27,2.04-5.31 c0-4.39-3.57-7.96-7.96-7.96s-7.96,3.57-7.96,7.96c0,4.39,3.57,7.96,7.96,7.96c1.98,0,3.81-0.73,5.21-1.94L20.031,20.79z M4.11,11.02c0-3.84,3.13-6.96,6.96-6.96c3.84,0,6.96,3.12,6.96,6.96c0,3.84-3.12,6.96-6.96,6.96C7.24,17.98,4.11,14.86,4.11,11.02 z"></path>
                      </svg>
                      <input
                        type="text"
                        placeholder="Search..."
                        className="w-full border-none outline-none"
                      />
                    </div>

                    <button
  className="absolute right-[15px] top-[5px] text-[1.5rem] text-[#333] bg-none border-none cursor-pointer transition-all duration-300 ease-in-out hover:text-black"
  onClick={closeSearch}
>
  &times;
</button>

                  </div>

                )}
              </div>

           
              <Link   onClick={handleClick}  className=''   >      <svg stroke="currentColor" fill="black" stroke-width="0" className="lg:inline-block hidden " viewBox="0 0 24 24" height="1.5em" width="1.5em" xmlns="http://www.w3.org/2000/svg">
                <g id="User">
                  <path d="M17.438,21.937H6.562a2.5,2.5,0,0,1-2.5-2.5V18.61c0-3.969,3.561-7.2,7.938-7.2s7.938,3.229,7.938,7.2v.827A2.5,2.5,0,0,1,17.438,21.937ZM12,12.412c-3.826,0-6.938,2.78-6.938,6.2v.827a1.5,1.5,0,0,0,1.5,1.5H17.438a1.5,1.5,0,0,0,1.5-1.5V18.61C18.938,15.192,15.826,12.412,12,12.412Z"></path>
                  <path d="M12,9.911a3.924,3.924,0,1,1,3.923-3.924A3.927,3.927,0,0,1,12,9.911Zm0-6.847a2.924,2.924,0,1,0,2.923,2.923A2.926,2.926,0,0,0,12,3.064Z"></path>
                </g>
              </svg>
              </Link>



              <Link to="/wishlist" className='relative'  >
              <svg stroke="currentColor" fill="black" stroke-width="0" viewBox="0 0 24 24" height="1.5em" width="1.5em" xmlns="http://www.w3.org/2000/svg">
                <g id="Heart">
                  <path d="M12,20.043a.977.977,0,0,1-.7-.288L4.63,13.08A5.343,5.343,0,0,1,6.053,4.513,5.266,5.266,0,0,1,12,5.371a5.272,5.272,0,0,1,5.947-.858A5.343,5.343,0,0,1,19.37,13.08l-6.676,6.675A.977.977,0,0,1,12,20.043ZM8.355,4.963A4.015,4.015,0,0,0,6.511,5.4,4.4,4.4,0,0,0,4.122,8.643a4.345,4.345,0,0,0,1.215,3.73l6.675,6.675,6.651-6.675a4.345,4.345,0,0,0,1.215-3.73A4.4,4.4,0,0,0,17.489,5.4a4.338,4.338,0,0,0-4.968.852h0a.744.744,0,0,1-1.042,0A4.474,4.474,0,0,0,8.355,4.963Z"></path>
                </g>
              </svg>
              <div class="absolute top-0 right-[-5px] lg:top-0 lg:-right-1 transform translate-x-1/3 -translate-y-1/3 bg-black text-white  font-bold w-[18px] h-[18px] text-[10px] rounded-full flex items-center justify-center">
                0
              </div>
              </Link>
             
              <Link to="/productcart" className='relative'   >
                <svg stroke="black" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" height="1.5em" width="1.5em" xmlns="http://www.w3.org/2000/svg"> <path fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M80 176a16 16 0 0 0-16 16v216c0 30.24 25.76 56 56 56h272c30.24 0 56-24.51 56-54.75V192a16 16 0 0 0-16-16zm80 0v-32a96 96 0 0 1 96-96h0a96 96 0 0 1 96 96v32"></path><path fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M160 224v16a96 96 0 0 0 96 96h0a96 96 0 0 0 96-96v-16"></path>
                </svg>
                <div class="absolute top-0 lg:top-0 -right-1 transform translate-x-1/3 -translate-y-1/3 bg-black text-white text-xs font-bold w-[18px] h-[18px] text-[10px] rounded-full flex items-center justify-center">
                {cartItemCount}
              </div>
              </Link>
          

{user && isOpen && (
        <div className="absolute right-0 top-8 mt-2 w-48 bg-white border rounded-lg shadow-lg z-10">
          <ul className="py-2 text-sm text-gray-700">
            <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer" onClick={handleProfileClick} >
              Profile
            </li>
            <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
              Order History
            </li>
            <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer" onClick={handleLogout} >
              Logout
            </li>
          </ul>
        </div>
      )}

            </div>
          </div>
        </div>
      </nav>

      <a
  href="https://wa.me/8440982031" 
  target="_blank" 
  rel="noopener noreferrer"
  className="group w-12 h-12 rounded-full p-[10px] bg-white bottom-16 lg:bottom-7 right-5 shadow-lg fixed z-50 animate-bounceSmooth flex items-center justify-center cursor-pointer"
>
  <img src="images/chat.png" alt="Chat" />

  <span className="absolute w-40 flex items-center justify-center gap-2 text-center right-11 top-1/2 transform -translate-y-1/2 translate-x-4 bg-black text-white text-sm px-3 py-2 rounded-lg opacity-0 group-hover:opacity-100 group-hover:-translate-x-2 transition-all duration-300 before:absolute before:content-[''] before:w-3 before:h-3 before:bg-black before:top-[12px] before:right-[-6px] before:rotate-45">
    How Can I help you?
  </span>
</a>


{/* <div
      onClick={() => setIsExpanded(!isExpanded)}
      className={`bg-white bottom-16 lg:bottom-7 rounded-full right-5 shadow-xl fixed z-50
        w-12 ${isExpanded ? "h-96 " : "h-12 "} 
        p-2 overflow-hidden transition-all duration-500 ease-in-out
        hover:w-96 hover:rounded-xl flex items-center gap-2 cursor-pointer`}
    >


  <div className='flex w-full flex-row justify-between'>

  
  <div className="flex flex-row items-center space-x-2 w-full ">
    <img src="images/chat.png" alt="Chat" className="w-12  object-contain" />

    
    <span className="text-sm font-medium whitespace-nowrap ">
      How can we help you today?
    </span>

   
  </div>
  <div> 
    <span className=" rounded-full bg-[#f5f5f5] p-2 flex justify-center items-center mt-1 text-[#737373] ">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" 
        strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 18.75 7.5-7.5 7.5 7.5"></path>
        <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 7.5-7.5 7.5 7.5"></path>
      </svg>
    </span>
    </div>
</div>
</div> */}




{/* <span><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="m4.5 18.75 7.5-7.5 7.5 7.5"></path><path stroke-linecap="round" stroke-linejoin="round" d="m4.5 12.75 7.5-7.5 7.5 7.5"></path></svg></span>
<span><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="m4.5 5.25 7.5 7.5 7.5-7.5m-15 6 7.5 7.5 7.5-7.5"></path></svg></span>
<span><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183a8.25 8.25 0 0 0 13.803-3.7M4.031 9.865a8.25 8.25 0 0 1 13.803-3.7l3.181 3.182m0-4.991v4.99"></path></svg></span> */}

    </div>
  );
}

export default Navbar;