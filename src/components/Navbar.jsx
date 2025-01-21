import React, { useState } from "react";
import "./Style.css"; 

function Navbar() {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div className="navbar text-white bg-white flex flex-col shadow-sm">
      <div className="container mx-auto flex flex-col">
        <div className="flex lg:flex-row flex-col justify-center lg:justify-between py-4 lg:py-4 items-center border-b">
          <div className="text-black justify-center items-center flex text-center">
            <h1 className="lg:text-[13px] text-[17px] font-normal lg:font-medium">
              Quick sale: 20% off products purchased today
            </h1>
          </div>
          <div className="text-black flex space-x-2">
            <div className="border-r">
              <select className="bg-transparent border-none outline-none lg:px-4 lg:py-0">
                <option value="" disabled selected>USD</option>
                <option value="EUR">EUR</option>
                <option value="GBP">GBP</option>
              </select>
            </div>
            <div>
              <select className="bg-transparent border-none outline-none lg:px-4 lg:py-0">
                <option value="" disabled selected>English</option>
                <option value="EUR">English</option>
                <option value="GBP">Hindi</option>
              </select>
            </div>
          </div>
        </div>

        {/* Navbar Main Section */}
        <div className="flex lg:flex-row py-3 sticky justify-between">
          <div className="navbar-logo flex justify-center lg:px-0 px-32">
            <img className="w-40" src="./images/logo.png" alt="logo" />
          </div>

          {/* Menu items */}
         
          <ul className="hidden lg:flex lg:space-x-12 text-base px-4 lg:px-40 font-normal justify-center items-center text-black">
          <li className="hoverbefore relative">
          <a href="#home" className="flex items-center">Home
            <svg stroke="currentColor" fill="black" stroke-width="0" viewBox="0 0 24 24" height="1.5em" width="1.5em" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 15.0006L7.75732 10.758L9.17154 9.34375L12 12.1722L14.8284 9.34375L16.2426 10.758L12 15.0006Z"></path>
            </svg>
          </a>
        </li>
        <li className="hoverbefore relative">
          <a href="#shop" className="flex items-center">Shop
            <svg stroke="currentColor" fill="black" stroke-width="0" viewBox="0 0 24 24" height="1.5em" width="1.5em" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 15.0006L7.75732 10.758L9.17154 9.34375L12 12.1722L14.8284 9.34375L16.2426 10.758L12 15.0006Z"></path>
            </svg>
          </a>
        </li>
        <li className="hoverbefore relative">
          <a href="#product" className="flex items-center">Product
            <svg stroke="currentColor" fill="black" stroke-width="0" viewBox="0 0 24 24" height="1.5em" width="1.5em" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 15.0006L7.75732 10.758L9.17154 9.34375L12 12.1722L14.8284 9.34375L16.2426 10.758L12 15.0006Z"></path>
            </svg>
          </a>
        </li>
        <li className="hoverbefore relative">
          <a href="#blog" className="flex items-center">Blog
            <svg stroke="currentColor" fill="black" stroke-width="0" viewBox="0 0 24 24" height="1.5em" width="1.5em" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 15.0006L7.75732 10.758L9.17154 9.34375L12 12.1722L14.8284 9.34375L16.2426 10.758L12 15.0006Z"></path>
            </svg>
          </a>
        </li>
        <li className="hoverbefore relative">
          <a href="#featured" className="flex items-center">Featured
            <svg stroke="currentColor" fill="black" stroke-width="0" viewBox="0 0 24 24" height="1.5em" width="1.5em" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 15.0006L7.75732 10.758L9.17154 9.34375L12 12.1722L14.8284 9.34375L16.2426 10.758L12 15.0006Z"></path>
            </svg>
          </a>
        </li>
      </ul>

          {/* Mobile menu icon */}
          <div className="navbar-menu-icon lg:hidden" onClick={toggleMobileMenu}>
            <span className="menu-icon">&#9776;</span>
          </div>

          {/* Icons */}
          <div className="flex relative cursor-pointer justify-center items-center gap-5">
            {/* Search Icon */}
            <svg stroke="currentColor" fill="black" stroke-width="0" className="lg:inline-block hidden " version="1.1" id="search" x="0px" y="0px" viewBox="0 0 24 24" height="1.5em" width="1.5em" xmlns="http://www.w3.org/2000/svg">
          <path d="M20.031,20.79c0.46,0.46,1.17-0.25,0.71-0.7l-3.75-3.76c1.27-1.41,2.04-3.27,2.04-5.31 c0-4.39-3.57-7.96-7.96-7.96s-7.96,3.57-7.96,7.96c0,4.39,3.57,7.96,7.96,7.96c1.98,0,3.81-0.73,5.21-1.94L20.031,20.79z M4.11,11.02c0-3.84,3.13-6.96,6.96-6.96c3.84,0,6.96,3.12,6.96,6.96c0,3.84-3.12,6.96-6.96,6.96C7.24,17.98,4.11,14.86,4.11,11.02 z"></path>
        </svg>

        {/* User Icon */}
        <svg stroke="currentColor" fill="black" stroke-width="0"  className="lg:inline-block hidden " viewBox="0 0 24 24" height="1.5em" width="1.5em" xmlns="http://www.w3.org/2000/svg">
          <g id="User">
            <path d="M17.438,21.937H6.562a2.5,2.5,0,0,1-2.5-2.5V18.61c0-3.969,3.561-7.2,7.938-7.2s7.938,3.229,7.938,7.2v.827A2.5,2.5,0,0,1,17.438,21.937ZM12,12.412c-3.826,0-6.938,2.78-6.938,6.2v.827a1.5,1.5,0,0,0,1.5,1.5H17.438a1.5,1.5,0,0,0,1.5-1.5V18.61C18.938,15.192,15.826,12.412,12,12.412Z"></path>
            <path d="M12,9.911a3.924,3.924,0,1,1,3.923-3.924A3.927,3.927,0,0,1,12,9.911Zm0-6.847a2.924,2.924,0,1,0,2.923,2.923A2.926,2.926,0,0,0,12,3.064Z"></path>
          </g>
        </svg>



        <svg stroke="currentColor" fill="black" stroke-width="0" viewBox="0 0 24 24" height="1.5em" width="1.5em" xmlns="http://www.w3.org/2000/svg">
    <g id="Heart">
      <path d="M12,20.043a.977.977,0,0,1-.7-.288L4.63,13.08A5.343,5.343,0,0,1,6.053,4.513,5.266,5.266,0,0,1,12,5.371a5.272,5.272,0,0,1,5.947-.858A5.343,5.343,0,0,1,19.37,13.08l-6.676,6.675A.977.977,0,0,1,12,20.043ZM8.355,4.963A4.015,4.015,0,0,0,6.511,5.4,4.4,4.4,0,0,0,4.122,8.643a4.345,4.345,0,0,0,1.215,3.73l6.675,6.675,6.651-6.675a4.345,4.345,0,0,0,1.215-3.73A4.4,4.4,0,0,0,17.489,5.4a4.338,4.338,0,0,0-4.968.852h0a.744.744,0,0,1-1.042,0A4.474,4.474,0,0,0,8.355,4.963Z"></path>
    </g>
  </svg>
  <div class="absolute top-5 right-10 transform translate-x-1/3 -translate-y-1/3 bg-black text-white  font-bold w-[18px] h-[18px] text-[10px] rounded-full flex items-center justify-center">
    0
  </div>    
      <svg stroke="black" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" height="1.5em" width="1.5em" xmlns="http://www.w3.org/2000/svg"> <path fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M80 176a16 16 0 0 0-16 16v216c0 30.24 25.76 56 56 56h272c30.24 0 56-24.51 56-54.75V192a16 16 0 0 0-16-16zm80 0v-32a96 96 0 0 1 96-96h0a96 96 0 0 1 96 96v32"></path><path fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M160 224v16a96 96 0 0 0 96 96h0a96 96 0 0 0 96-96v-16"></path></svg>


  <div class="absolute top-5 right-0 transform translate-x-1/3 -translate-y-1/3 bg-black text-white text-xs font-bold w-[18px] h-[18px] text-[10px] rounded-full flex items-center justify-center">
    5
  </div>   
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
