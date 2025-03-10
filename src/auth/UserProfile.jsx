import React, { useState } from 'react';
import Navbar from "../components/Navbar";
// import Footer from "../components/Footer";
// import Footernav from "../components/Footernav";

const UserProfile = () => {
  const [activeTab, setActiveTab] = useState("All orders");
  const [retunactiveTab, setreturnActiveTab] = useState("All Returns");
  const [selected, setSelected] = useState('Account');
  const tabs = ["All orders", "Drafts", "Pending", "Completed"];
  const returntabs = ["All Returns", "Drafts return", "Pending return", "Completed"];


  const handleMenuClick = (menu) => {
    setSelected(menu);
  };





  return (
    <div>
      <Navbar />
      <div className="container mb-14">
        <div className='flex space-x-5 py-8'>
          <div className=' w-1/4 bg-[#f6f6f6] rounded-md  shadow-sm px-1 '>
            <div className='flex flex-row items-center space-x-4 px-4 py-5'>
              <div className='w-20 h-20 rounded-full'>
                <img src="https://cdn.iconscout.com/icon/free/png-256/free-avatar-icon-download-in-svg-png-gif-file-formats--user-boy-avatars-flat-icons-pack-people-456322.png" alt="" />
              </div>
              <div>
                <p>Hello</p>
                <h1 className='text-xl'>Bhanwar prajapat</h1>
              </div>
            </div>
            <div className='mb-20'>
              <ul>
                <li
                  onClick={() => handleMenuClick("Account")}
                  className={`flex flex-row space-x-2 py-3 items-center cursor-pointer px-4 rounded-md  transition-all duration-500 ease-in-out ${selected === "Account" ? "bg-white shadow-sm" : ""
                    }`}
                >                                    <span>
                    <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><g id="User"><g><path d="M17.438,21.937H6.562a2.5,2.5,0,0,1-2.5-2.5V18.61c0-3.969,3.561-7.2,7.938-7.2s7.938,3.229,7.938,7.2v.827A2.5,2.5,0,0,1,17.438,21.937ZM12,12.412c-3.826,0-6.938,2.78-6.938,6.2v.827a1.5,1.5,0,0,0,1.5,1.5H17.438a1.5,1.5,0,0,0,1.5-1.5V18.61C18.938,15.192,15.826,12.412,12,12.412Z"></path><path d="M12,9.911a3.924,3.924,0,1,1,3.923-3.924A3.927,3.927,0,0,1,12,9.911Zm0-6.847a2.924,2.924,0,1,0,2.923,2.923A2.926,2.926,0,0,0,12,3.064Z"></path></g></g></svg>
                  </span>
                  <span>
                    My Account
                  </span>
                </li>

                <li
                  onClick={() => handleMenuClick("Orders")}
                  className={`flex flex-row space-x-2 py-3 items-center cursor-pointer px-4 rounded-md  transition-all duration-500 ease-in-out ${selected === "Orders" ? "bg-white shadow-sm" : ""
                    }`}
                >                                    <span>
                    <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 576 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M24 0C10.7 0 0 10.7 0 24S10.7 48 24 48l45.5 0c3.8 0 7.1 2.7 7.9 6.5l51.6 271c6.5 34 36.2 58.5 70.7 58.5L488 384c13.3 0 24-10.7 24-24s-10.7-24-24-24l-288.3 0c-11.5 0-21.4-8.2-23.6-19.5L170.7 288l288.5 0c32.6 0 61.1-21.8 69.5-53.3l41-152.3C576.6 57 557.4 32 531.1 32L360 32l0 102.1 23-23c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9l-64 64c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l23 23L312 32 120.1 32C111 12.8 91.6 0 69.5 0L24 0zM176 512a48 48 0 1 0 0-96 48 48 0 1 0 0 96zm336-48a48 48 0 1 0 -96 0 48 48 0 1 0 96 0z"></path></svg>
                  </span>
                  <span>
                    My Orders
                  </span>
                </li>
                <li
                  onClick={() => handleMenuClick("Returns")}
                  className={`flex flex-row space-x-2 py-3 items-center cursor-pointer px-4 rounded-md  transition-all duration-500 ease-in-out ${selected === "Returns" ? "bg-white shadow-sm" : ""
                    }`}
                >                                       <span>
                    <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><circle cx="256" cy="256" r="200" fill="none" stroke-miterlimit="10" stroke-width="48"></circle><path stroke-miterlimit="10" stroke-width="48" d="m114.58 114.58 282.84 282.84"></path></svg>
                  </span>
                  <span>
                    Returns and Cancle orders
                  </span>
                </li>
                <li
                  onClick={() => handleMenuClick("Rating")}
                  className={`flex flex-row space-x-2 py-3 items-center cursor-pointer px-4 rounded-md  transition-all duration-500 ease-in-out ${selected === "Rating" ? "bg-white shadow-sm" : ""
                    }`}
                >                                       <span>
                    <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 576 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M288 376.4l.1-.1 26.4 14.1 85.2 45.5-16.5-97.6-4.8-28.7 20.7-20.5 70.1-69.3-96.1-14.2-29.3-4.3-12.9-26.6L288.1 86.9l-.1 .3 0 289.2zm175.1 98.3c2 12-3 24.2-12.9 31.3s-23 8-33.8 2.3L288.1 439.8 159.8 508.3C149 514 135.9 513.1 126 506s-14.9-19.3-12.9-31.3L137.8 329 33.6 225.9c-8.6-8.5-11.7-21.2-7.9-32.7s13.7-19.9 25.7-21.7L195 150.3 259.4 18c5.4-11 16.5-18 28.8-18s23.4 7 28.8 18l64.3 132.3 143.6 21.2c12 1.8 22 10.2 25.7 21.7s.7 24.2-7.9 32.7L438.5 329l24.6 145.7z"></path></svg>
                  </span>
                  <span>
                    Rating and Rewies
                  </span>
                </li>
                <li
                  onClick={() => handleMenuClick("Wishlist")}
                  className={`flex flex-row space-x-2 py-3 items-center cursor-pointer px-4 rounded-md  transition-all duration-500 ease-in-out ${selected === "Wishlist" ? "bg-white shadow-sm" : ""
                    }`}
                >                                       <span>
                    <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><g id="Heart"><path d="M12,20.043a.977.977,0,0,1-.7-.288L4.63,13.08A5.343,5.343,0,0,1,6.053,4.513,5.266,5.266,0,0,1,12,5.371a5.272,5.272,0,0,1,5.947-.858A5.343,5.343,0,0,1,19.37,13.08l-6.676,6.675A.977.977,0,0,1,12,20.043ZM8.355,4.963A4.015,4.015,0,0,0,6.511,5.4,4.4,4.4,0,0,0,4.122,8.643a4.345,4.345,0,0,0,1.215,3.73l6.675,6.675,6.651-6.675a4.345,4.345,0,0,0,1.215-3.73A4.4,4.4,0,0,0,17.489,5.4a4.338,4.338,0,0,0-4.968.852h0a.744.744,0,0,1-1.042,0A4.474,4.474,0,0,0,8.355,4.963Z"></path></g></svg>
                  </span>
                  <span>
                    My Wishlist
                  </span>
                </li>
                <li
                  onClick={() => handleMenuClick("Wallat")}
                  className={`flex flex-row space-x-2 py-3 items-center cursor-pointer px-4 rounded-md  transition-all duration-500 ease-in-out ${selected === "Wallat" ? "bg-white shadow-sm" : ""
                    }`}
                >                                       <span>
                    <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><g id="Wallet"><g><path d="M19.435,4.065H4.565a2.5,2.5,0,0,0-2.5,2.5v10.87a2.5,2.5,0,0,0,2.5,2.5h14.87a2.5,2.5,0,0,0,2.5-2.5V6.565A2.5,2.5,0,0,0,19.435,4.065Zm1.5,9.93h-6.42a2,2,0,0,1,0-4h6.42Zm-6.42-5a3,3,0,0,0,0,6h6.42v2.44a1.5,1.5,0,0,1-1.5,1.5H4.565a1.5,1.5,0,0,1-1.5-1.5V6.565a1.5,1.5,0,0,1,1.5-1.5h14.87a1.5,1.5,0,0,1,1.5,1.5v2.43Z"></path><circle cx="14.519" cy="11.996" r="1"></circle></g></g></svg>
                  </span>
                  <span>
                    My Wallat
                  </span>
                </li>
                <li
                  onClick={() => handleMenuClick("Payment")}
                  className={`flex flex-row space-x-2 py-3 items-center cursor-pointer px-4 rounded-md  transition-all duration-500 ease-in-out ${selected === "Payment" ? "bg-white shadow-sm" : ""
                    }`}
                >                                       <span>
                    <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><g id="Wallet"><g><path d="M19.435,4.065H4.565a2.5,2.5,0,0,0-2.5,2.5v10.87a2.5,2.5,0,0,0,2.5,2.5h14.87a2.5,2.5,0,0,0,2.5-2.5V6.565A2.5,2.5,0,0,0,19.435,4.065Zm1.5,9.93h-6.42a2,2,0,0,1,0-4h6.42Zm-6.42-5a3,3,0,0,0,0,6h6.42v2.44a1.5,1.5,0,0,1-1.5,1.5H4.565a1.5,1.5,0,0,1-1.5-1.5V6.565a1.5,1.5,0,0,1,1.5-1.5h14.87a1.5,1.5,0,0,1,1.5,1.5v2.43Z"></path><circle cx="14.519" cy="11.996" r="1"></circle></g></g></svg>
                  </span>
                  <span>
                    Payment
                  </span>
                </li>
                <li
                  onClick={() => handleMenuClick("Password")}
                  className={`flex flex-row space-x-2 py-3 items-center cursor-pointer px-4 rounded-md  transition-all duration-500 ease-in-out ${selected === "Password" ? "bg-white shadow-sm" : ""
                    }`}
                >                                       <span>
                    <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path fill="none" stroke-linejoin="round" stroke-width="32" d="M218.1 167.17c0 13 0 25.6 4.1 37.4-43.1 50.6-156.9 184.3-167.5 194.5a20.17 20.17 0 0 0-6.7 15c0 8.5 5.2 16.7 9.6 21.3 6.6 6.9 34.8 33 40 28 15.4-15 18.5-19 24.8-25.2 9.5-9.3-1-28.3 2.3-36s6.8-9.2 12.5-10.4 15.8 2.9 23.7 3c8.3.1 12.8-3.4 19-9.2 5-4.6 8.6-8.9 8.7-15.6.2-9-12.8-20.9-3.1-30.4s23.7 6.2 34 5 22.8-15.5 24.1-21.6-11.7-21.8-9.7-30.7c.7-3 6.8-10 11.4-11s25 6.9 29.6 5.9c5.6-1.2 12.1-7.1 17.4-10.4 15.5 6.7 29.6 9.4 47.7 9.4 68.5 0 124-53.4 124-119.2S408.5 48 340 48s-121.9 53.37-121.9 119.17zM400 144a32 32 0 1 1-32-32 32 32 0 0 1 32 32z"></path></svg>
                  </span>
                  <span>
                    Change Password
                  </span>
                </li>
              </ul>
            </div>
          </div>







          <div className=' w-3/4 bg-[#f6f6f6] rounded-md text-black px-2'>


            {selected === 'Account' &&
              <div>
                <div className='px-6 py-6 text-2xl font-semibold border-b'>
                  <h1>Personal Information</h1>
                </div>
                <div className='flex flex-col space-y-4 px-6 py-3'>
                  <div className=' flex justify-between '>
                    <div className='w-20 h-20 rounded-full'>
                      <img src="https://cdn.iconscout.com/icon/free/png-256/free-avatar-icon-download-in-svg-png-gif-file-formats--user-boy-avatars-flat-icons-pack-people-456322.png" alt="" />
                    </div>

                    <div className='text-blue-500 flex items-center space-x-2'>
                      <span>
                        <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M16.7574 2.99678L14.7574 4.99678H5V18.9968H19V9.23943L21 7.23943V19.9968C21 20.5491 20.5523 20.9968 20 20.9968H4C3.44772 20.9968 3 20.5491 3 19.9968V3.99678C3 3.4445 3.44772 2.99678 4 2.99678H16.7574ZM20.4853 2.09729L21.8995 3.5115L12.7071 12.7039L11.2954 12.7064L11.2929 11.2897L20.4853 2.09729Z"></path></svg>
                      </span>
                      <h1>Change profile information</h1>
                    </div>

                  </div>
                  <div className="flex flex-col space-y-2  text-lg">
                    <label htmlFor="">Name</label>
                    <input
                      type="text"
                      className="w-96 border-none outline-none focus:ring-0 p-2 shadow-sm rounded-md"
                    />
                  </div>
                  <div className="flex flex-col space-y-2">
                    <label htmlFor="dob">Date of Birth</label>
                    <input
                      type="date"
                      id="dob"
                      className="w-96 border-none outline-none focus:ring-0 p-2 shadow-sm rounded-md"
                    />
                  </div>
                  <div className="flex flex-col space-y-2">
                    <label>Gender</label>
                    <div className="flex space-x-4">
                      <label className="flex justify-start items-center space-x-2 cursor-pointer">
                        <input type="radio" name="gender" value="male" className="hidden peer" />
                        <span className="w-5 h-5 border-2 border-gray-400 rounded-full flex items-center justify-center peer-checked:border-blue-500 peer-checked:bg-blue-500">
                          <span className="w-2.5 h-2.5 bg-white rounded-full"></span>
                        </span>
                        <span>Male</span>
                      </label>

                      <label className="flex items-center space-x-2 cursor-pointer">
                        <input type="radio" name="gender" value="female" className="hidden peer" />
                        <span className="w-5 h-5 border-2 border-gray-400 rounded-full flex items-center justify-center peer-checked:border-pink-500 peer-checked:bg-pink-500">
                          <span className="w-2.5 h-2.5 bg-white rounded-full"></span>
                        </span>
                        <span>Female</span>
                      </label>
                    </div>
                  </div>
                  <div className="flex flex-col space-y-2">
                    <label htmlFor="phone">Phone Number</label>
                    <input
                      type="tel"
                      id="phone"
                      className="w-96 border-none outline-none focus:ring-0 p-2 shadow-sm rounded-md"
                    />
                  </div>

                  {/* Email */}
                  <div className="flex flex-col space-y-2">
                    <label htmlFor="email">Email</label>
                    <input
                      type="email"
                      id="email"
                      className="w-96 border-none outline-none focus:ring-0 p-2 shadow-sm rounded-md"
                    />
                  </div>


                </div>
              </div>
            }

            {selected === 'Orders' &&
              <div className='py-2 flex flex-col space-y-3'>
                <div className='flex justify-center items-center bg-white shadow-sm py-2 rounded-lg'>
                  <div className="bg-[#f6f6f6] rounded-3xl py-1 px-1 flex space-x-2">
                    {tabs.map((tab) => (
                      <button
                        key={tab}
                        className={`px-4 py-2 rounded-3xl  ${activeTab === tab ? "bg-white shadow-md" : "bg-transparent"

                          }`}
                        onClick={() => setActiveTab(tab)}
                      >
                        {tab}
                      </button>
                    ))}
                  </div>
                </div >

                <div className=' bg-white shadow-sm py-2 rounded-lg px-2 flex justify-between'>
                  <div className='flex space-x-1'>
                    <div className='bg-[#f6f6f6] px-2 py-2 text-sm w-56 rounded-3xl flex items-center space-x-2 cursor-pointer'>
                      <span>
                        <svg stroke="currentColor" fill="currentColor" stroke-width="0" version="1.1" id="search" x="0px" y="0px" viewBox="0 0 24 24" height="1.25rem" width="1.25rem" xmlns="http://www.w3.org/2000/svg"><g><path d="M20.031,20.79c0.46,0.46,1.17-0.25,0.71-0.7l-3.75-3.76c1.27-1.41,2.04-3.27,2.04-5.31
c0-4.39-3.57-7.96-7.96-7.96s-7.96,3.57-7.96,7.96c0,4.39,3.57,7.96,7.96,7.96c1.98,0,3.81-0.73,5.21-1.94L20.031,20.79z
M4.11,11.02c0-3.84,3.13-6.96,6.96-6.96c3.84,0,6.96,3.12,6.96,6.96c0,3.84-3.12,6.96-6.96,6.96C7.24,17.98,4.11,14.86,4.11,11.02
z"></path></g></svg>
                      </span>
                      <input type="text" name="" id="" className='bg-transparent text-black focus:border-none focus: outline-none w-full ' placeholder='Search...'

                      />
                    </div>
                    <div className='bg-[#f6f6f6] px-3 py-2 text-sm text-[#8a8a8a] rounded-3xl flex items-center space-x-1 cursor-pointer'>
                      <span>
                        <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="1.25rem" width="1.25rem" xmlns="http://www.w3.org/2000/svg"><g id="Filter"><path d="M14.037,20.937a1.015,1.015,0,0,1-.518-.145l-3.334-2a2.551,2.551,0,0,1-1.233-2.176V12.091a1.526,1.526,0,0,0-.284-.891L4.013,4.658a1.01,1.01,0,0,1,.822-1.6h14.33a1.009,1.009,0,0,1,.822,1.6h0L15.332,11.2a1.527,1.527,0,0,0-.285.891v7.834a1.013,1.013,0,0,1-1.01,1.012ZM4.835,4.063,9.482,10.62a2.515,2.515,0,0,1,.47,1.471v4.524a1.543,1.543,0,0,0,.747,1.318l3.334,2,.014-7.843a2.516,2.516,0,0,1,.471-1.471l4.654-6.542,0,0Z"></path></g></svg>
                      </span>
                      <h1>Filter</h1>
                    </div>
                    <div className='bg-[#f6f6f6] px-3 py-2 text-sm text-[#8a8a8a] rounded-3xl flex items-center space-x-1 cursor-pointer'>
                      <span>
                        <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="1.25rem" width="1.25rem" xmlns="http://www.w3.org/2000/svg"><g id="Calendar_Date"><path d="M18.435,4.955h-1.94v-1.41c0-0.26-0.23-0.51-0.5-0.5c-0.27,0.01-0.5,0.22-0.5,0.5v1.41h-7v-1.41
  c0-0.26-0.23-0.51-0.5-0.5c-0.27,0.01-0.5,0.22-0.5,0.5v1.41h-1.93c-1.38,0-2.5,1.12-2.5,2.5v11c0,1.38,1.12,2.5,2.5,2.5h12.87
  c1.38,0,2.5-1.12,2.5-2.5v-11C20.935,6.075,19.815,4.955,18.435,4.955z M19.935,18.455c0,0.83-0.67,1.5-1.5,1.5H5.565
  c-0.83,0-1.5-0.67-1.5-1.5v-8.42h15.87V18.455z M19.935,9.035H4.065v-1.58c0-0.83,0.67-1.5,1.5-1.5h1.93v0.59
  c0,0.26,0.23,0.51,0.5,0.5c0.27-0.01,0.5-0.22,0.5-0.5v-0.59h7v0.59c0,0.26,0.23,0.51,0.5,0.5c0.27-0.01,0.5-0.22,0.5-0.5v-0.59
  h1.94c0.83,0,1.5,0.67,1.5,1.5V9.035z"></path><path d="M11.492,17.173v-3.46c0-0.059-0.064-0.095-0.114-0.064l-0.638,0.392
  c-0.1,0.061-0.228-0.01-0.228-0.128v-0.651c0-0.105,0.055-0.203,0.146-0.257l0.764-0.457c0.047-0.028,0.1-0.043,0.154-0.043h0.626
  c0.166,0,0.3,0.134,0.3,0.3v4.367c0,0.166-0.134,0.3-0.3,0.3h-0.409C11.626,17.473,11.492,17.339,11.492,17.173z"></path></g></svg>
                      </span>
                      <h1>16Dec - 15Jan</h1>
                    </div>

                  </div>
                  <div className='rounded-3xl bg-black px-3 py-2 text-sm text-white flex items-center space-x-1'>
                    <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 384 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M288 256H96v64h192v-64zm89-151L279.1 7c-4.5-4.5-10.6-7-17-7H256v128h128v-6.1c0-6.3-2.5-12.4-7-16.9zm-153 31V0H24C10.7 0 0 10.7 0 24v464c0 13.3 10.7 24 24 24h336c13.3 0 24-10.7 24-24V160H248c-13.2 0-24-10.8-24-24zM64 72c0-4.42 3.58-8 8-8h80c4.42 0 8 3.58 8 8v16c0 4.42-3.58 8-8 8H72c-4.42 0-8-3.58-8-8V72zm0 64c0-4.42 3.58-8 8-8h80c4.42 0 8 3.58 8 8v16c0 4.42-3.58 8-8 8H72c-4.42 0-8-3.58-8-8v-16zm256 304c0 4.42-3.58 8-8 8h-80c-4.42 0-8-3.58-8-8v-16c0-4.42 3.58-8 8-8h80c4.42 0 8 3.58 8 8v16zm0-200v96c0 8.84-7.16 16-16 16H80c-8.84 0-16-7.16-16-16v-96c0-8.84 7.16-16 16-16h224c8.84 0 16 7.16 16 16z"></path></svg>
                    <span> Download invoice</span>
                  </div>
                </div>

                {activeTab === "All orders" && (
                  <div className=' bg-white shadow-md py-2 rounded-lg px-2 transition-all duration-300 ease-in-out transform translate-y-[10px] opacity-0 animate-slideup '>
                    <table className='w-full '>
                      <thead className='w-full border-b'>
                        <tr>
                          <th className=' w-[8%] py-4'>
                            <label className="flex items-center space-x-2 cursor-pointer">
                              {/* Hidden Checkbox */}
                              <input type="checkbox" className="hidden peer" />

                              {/* Custom Checkbox */}
                              <div className="w-6 h-6 border-2 border-gray-400 rounded-full flex items-center justify-center peer-checked:bg-green-500 peer-checked:border-green-600">
                                {/* Check Icon (✔) */}
                                <svg
                                  className="w-4 h-4 text-white hidden peer-checked:block"
                                  fill="none"
                                  stroke="currentColor"
                                  strokeWidth="3"
                                  viewBox="0 0 24 24"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                                </svg>
                              </div>
                            </label>
                          </th>
                          <th className=' w-[15%]  '>
                            <div className='flex items-center space-x-1'>
                              <span>Orders</span>
                              <span className='text-[#8a8a8a]'><svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M7 3l0 18"></path><path d="M10 6l-3 -3l-3 3"></path><path d="M20 18l-3 3l-3 -3"></path><path d="M17 21l0 -18"></path></svg></span>
                            </div>
                          </th>
                          <th className=' w-[15%]  '>
                            <div className='flex items-center space-x-1'>
                              <span>Date</span>
                              <span className='text-[#8a8a8a]' ><svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M7 3l0 18"></path><path d="M10 6l-3 -3l-3 3"></path><path d="M20 18l-3 3l-3 -3"></path><path d="M17 21l0 -18"></path></svg></span>

                            </div>
                          </th>
                          <th className=' w-[15%]  '>
                            <div className='flex items-center space-x-1'>
                              <span>Coustumer</span>
                              <span className='text-[#8a8a8a]'><svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M7 3l0 18"></path><path d="M10 6l-3 -3l-3 3"></path><path d="M20 18l-3 3l-3 -3"></path><path d="M17 21l0 -18"></path></svg></span>
                            </div>
                          </th>
                          <th className=' w-[15%]  '>
                            <div className='flex items-center space-x-1'>
                              <span>Payments</span>
                              <span className='text-[#8a8a8a]' ><svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M7 3l0 18"></path><path d="M10 6l-3 -3l-3 3"></path><path d="M20 18l-3 3l-3 -3"></path><path d="M17 21l0 -18"></path></svg></span>
                            </div>
                          </th>
                          <th className=' w-[15%]  '>
                            <div className='flex items-center space-x-1'>
                              <span>Status</span>
                              <span className='text-[#8a8a8a]'><svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M7 3l0 18"></path><path d="M10 6l-3 -3l-3 3"></path><path d="M20 18l-3 3l-3 -3"></path><path d="M17 21l0 -18"></path></svg></span>
                            </div>
                          </th>
                          <th className=' w-[15%]  '>
                            <div className='flex items-center space-x-1'>
                              <span>Price</span>
                              <span className='text-[#8a8a8a]' ><svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M7 3l0 18"></path><path d="M10 6l-3 -3l-3 3"></path><path d="M20 18l-3 3l-3 -3"></path><path d="M17 21l0 -18"></path></svg></span>

                            </div>
                          </th>
                        </tr>



                      </thead>
                      <tbody>
                        <tr className='border-b '>
                          <td className=' w-[8%] py-6'>
                            <label className="flex items-center space-x-2 cursor-pointer">
                              {/* Hidden Checkbox */}
                              <input type="checkbox" className="hidden peer" />

                              {/* Custom Checkbox */}
                              <div className="w-6 h-6 border-2 border-gray-400 rounded-full flex items-center justify-center peer-checked:bg-green-500 peer-checked:border-green-600">
                                {/* Check Icon (✔) */}
                                <svg
                                  className="w-4 h-4 text-white hidden peer-checked:block"
                                  fill="none"
                                  stroke="currentColor"
                                  strokeWidth="3"
                                  viewBox="0 0 24 24"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                                </svg>
                              </div>
                            </label>
                          </td>
                          <td>
                            <span>Vest Hoodies</span>
                          </td>

                          <td>
                            <span>Apr 24,2024</span>
                          </td>
                          <td>
                            <span>john abrahm</span>
                          </td>
                          <td>
                            <span className='px-2 py-1 bg-[#e3e2e2] rounded-lg text-green-400'>Paid</span>
                          </td>
                          <td>
                            <span className='px-2 py-1 bg-[#e3e2e2] rounded-lg text-red-500'>unfulfiled</span>
                          </td>
                          <td>
                            <span className='font-semibold'>
                              ₹5999/-
                            </span>
                          </td>
                        </tr>
                        <tr className='border-b '>
                          <td className=' w-[8%] py-6'>
                            <label className="flex items-center space-x-2 cursor-pointer">
                              {/* Hidden Checkbox */}
                              <input type="checkbox" className="hidden peer" />

                              {/* Custom Checkbox */}
                              <div className="w-6 h-6 border-2 border-gray-400 rounded-full flex items-center justify-center peer-checked:bg-green-500 peer-checked:border-green-600">
                                {/* Check Icon (✔) */}
                                <svg
                                  className="w-4 h-4 text-white hidden peer-checked:block"
                                  fill="none"
                                  stroke="currentColor"
                                  strokeWidth="3"
                                  viewBox="0 0 24 24"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                                </svg>
                              </div>
                            </label>
                          </td>
                          <td>
                            <span>Vest Hoodies</span>
                          </td>

                          <td>
                            <span>Apr 24,2024</span>
                          </td>
                          <td>
                            <span>john abrahm</span>
                          </td>
                          <td>
                            <span className='px-2 py-1 bg-[#e3e2e2] rounded-lg text-green-400'>Paid</span>
                          </td>
                          <td>
                            <span className='px-2 py-1 bg-[#e3e2e2] rounded-lg text-red-500'>unfulfiled</span>
                          </td>
                          <td>
                            <span className='font-semibold'>
                              ₹5999/-
                            </span>
                          </td>
                        </tr>
                        <tr className='border-b '>
                          <td className=' w-[8%] py-6'>
                            <label className="flex items-center space-x-2 cursor-pointer">
                              {/* Hidden Checkbox */}
                              <input type="checkbox" className="hidden peer" />

                              {/* Custom Checkbox */}
                              <div className="w-6 h-6 border-2 border-gray-400 rounded-full flex items-center justify-center peer-checked:bg-green-500 peer-checked:border-green-600">
                                {/* Check Icon (✔) */}
                                <svg
                                  className="w-4 h-4 text-white hidden peer-checked:block"
                                  fill="none"
                                  stroke="currentColor"
                                  strokeWidth="3"
                                  viewBox="0 0 24 24"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                                </svg>
                              </div>
                            </label>
                          </td>
                          <td>
                            <span>Vest Hoodies</span>
                          </td>

                          <td>
                            <span>Apr 24,2024</span>
                          </td>
                          <td>
                            <span>john abrahm</span>
                          </td>
                          <td>
                            <span className='px-2 py-1 bg-[#e3e2e2] rounded-lg text-green-400'>Paid</span>
                          </td>
                          <td>
                            <span className='px-2 py-1 bg-[#e3e2e2] rounded-lg text-red-500'>unfulfiled</span>
                          </td>
                          <td>
                            <span className='font-semibold'>
                              ₹5999/-
                            </span>
                          </td>
                        </tr>
                        <tr className='border-b '>
                          <td className=' w-[8%] py-6'>
                            <label className="flex items-center space-x-2 cursor-pointer">
                              {/* Hidden Checkbox */}
                              <input type="checkbox" className="hidden peer" />

                              {/* Custom Checkbox */}
                              <div className="w-6 h-6 border-2 border-gray-400 rounded-full flex items-center justify-center peer-checked:bg-green-500 peer-checked:border-green-600">
                                {/* Check Icon (✔) */}
                                <svg
                                  className="w-4 h-4 text-white hidden peer-checked:block"
                                  fill="none"
                                  stroke="currentColor"
                                  strokeWidth="3"
                                  viewBox="0 0 24 24"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                                </svg>
                              </div>
                            </label>
                          </td>
                          <td>
                            <span>Vest Hoodies</span>
                          </td>

                          <td>
                            <span>Apr 24,2024</span>
                          </td>
                          <td>
                            <span>john abrahm</span>
                          </td>
                          <td>
                            <span className='px-2 py-1 bg-[#e3e2e2] rounded-lg text-green-400'>Paid</span>
                          </td>
                          <td>
                            <span className='px-2 py-1 bg-[#e3e2e2] rounded-lg text-red-500'>unfulfiled</span>
                          </td>
                          <td>
                            <span className='font-semibold'>
                              ₹5999/-
                            </span>
                          </td>
                        </tr>
                        <tr className='border-b '>
                          <td className=' w-[8%] py-6'>
                            <label className="flex items-center space-x-2 cursor-pointer">
                              {/* Hidden Checkbox */}
                              <input type="checkbox" className="hidden peer" />

                              {/* Custom Checkbox */}
                              <div className="w-6 h-6 border-2 border-gray-400 rounded-full flex items-center justify-center peer-checked:bg-green-500 peer-checked:border-green-600">
                                {/* Check Icon (✔) */}
                                <svg
                                  className="w-4 h-4 text-white hidden peer-checked:block"
                                  fill="none"
                                  stroke="currentColor"
                                  strokeWidth="3"
                                  viewBox="0 0 24 24"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                                </svg>
                              </div>
                            </label>
                          </td>
                          <td>
                            <span>Vest Hoodies</span>
                          </td>

                          <td>
                            <span>Apr 24,2024</span>
                          </td>
                          <td>
                            <span>john abrahm</span>
                          </td>
                          <td>
                            <span className='px-2 py-1 bg-[#e3e2e2] rounded-lg text-green-400'>Paid</span>
                          </td>
                          <td>
                            <span className='px-2 py-1 bg-[#e3e2e2] rounded-lg text-red-500'>unfulfiled</span>
                          </td>
                          <td>
                            <span className='font-semibold'>
                              ₹5999/-
                            </span>
                          </td>
                        </tr>
                        <tr className='border-b '>
                          <td className=' w-[8%] py-6'>
                            <label className="flex items-center space-x-2 cursor-pointer">
                              {/* Hidden Checkbox */}
                              <input type="checkbox" className="hidden peer" />

                              {/* Custom Checkbox */}
                              <div className="w-6 h-6 border-2 border-gray-400 rounded-full flex items-center justify-center peer-checked:bg-green-500 peer-checked:border-green-600">
                                {/* Check Icon (✔) */}
                                <svg
                                  className="w-4 h-4 text-white hidden peer-checked:block"
                                  fill="none"
                                  stroke="currentColor"
                                  strokeWidth="3"
                                  viewBox="0 0 24 24"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                                </svg>
                              </div>
                            </label>
                          </td>
                          <td>
                            <span>Vest Hoodies</span>
                          </td>

                          <td>
                            <span>Apr 24,2024</span>
                          </td>
                          <td>
                            <span>john abrahm</span>
                          </td>
                          <td>
                            <span className='px-2 py-1 bg-[#e3e2e2] rounded-lg text-green-400'>Paid</span>
                          </td>
                          <td>
                            <span className='px-2 py-1 bg-[#e3e2e2] rounded-lg text-red-500'>unfulfiled</span>
                          </td>
                          <td>
                            <span className='font-semibold'>
                              ₹5999/-
                            </span>
                          </td>
                        </tr>
                      </tbody>
                    </table>

                    <div className='flex justify-center space-x-1 py-7 text-sm text-[#8a8a8a]'>
                      <button className='w-[25px] h-[25px]    text-center rounded-lg flex justify-center items-center'><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 320 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M41.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.3 256 246.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z"></path></svg></button>
                      <button className='w-[25px] h-[25px] bg-[#e3e2e2]    text-black text-center rounded-lg'>1</button>
                      <button className='w-[25px] h-[25px]     text-center rounded-full'>2</button>
                      <button className='w-[25px] h-[25px]     text-center rounded-full'>3</button>
                      <button className='w-[25px] h-[25px]     text-center rounded-full'>4</button>
                      <button className='w-[25px] h-[25px]     text-center rounded-full'>5</button>

                    </div>



                  </div>
                )}

                {activeTab === "Drafts" && (
  <div className="mt-4 p-4 bg-white shadow-md rounded-lg transition-all duration-300 ease-in-out transform translate-y-[10px] opacity-0 animate-slideup">
                    <h2>Drafts Section</h2>
                    <p>Here are your saved drafts...</p>
                  </div>
                )}

                {activeTab === "Pending" && (
                  <div className="mt-4 p-4 bg-white shadow-md rounded-lg transition-all duration-300 ease-in-out transform translate-y-[10px] opacity-0 animate-slideup">
                    <h2>Pending Orders</h2>
                    <p>Here are all pending orders...</p>
                  </div>
                )}

                {activeTab === "Completed" && (
                  <div className="mt-4 p-4 bg-white shadow-md rounded-lg transition-all duration-300 ease-in-out transform translate-y-[10px] opacity-0 animate-slideup">
                    <h2>Completed Orders</h2>
                    <p>Here are all completed orders...</p>
                  </div>
                )}














              </div>
            }
            {selected === 'Returns' &&
              <div className='py-2 flex flex-col space-y-3'>
              <div className='flex justify-center items-center bg-white shadow-sm py-2 rounded-lg'>
                <div className="bg-[#f6f6f6] rounded-3xl py-1 px-1 flex space-x-2">
                  {returntabs.map((tab) => (
                    <button
                      key={tab}
                      className={`px-4 py-2 rounded-3xl  ${retunactiveTab === tab ? "bg-white shadow-md" : "bg-transparent"

                        }`}
                      onClick={() => setreturnActiveTab(tab)}
                    >
                      {tab}
                    </button>
                  ))}
                </div>
              </div >

              <div className=' bg-white shadow-sm py-2 rounded-lg px-2 flex justify-between'>
                <div className='flex space-x-1'>
                  <div className='bg-[#f6f6f6] px-2 py-2 text-sm w-56 rounded-3xl flex items-center space-x-2 cursor-pointer'>
                    <span>
                      <svg stroke="currentColor" fill="currentColor" stroke-width="0" version="1.1" id="search" x="0px" y="0px" viewBox="0 0 24 24" height="1.25rem" width="1.25rem" xmlns="http://www.w3.org/2000/svg"><g><path d="M20.031,20.79c0.46,0.46,1.17-0.25,0.71-0.7l-3.75-3.76c1.27-1.41,2.04-3.27,2.04-5.31
c0-4.39-3.57-7.96-7.96-7.96s-7.96,3.57-7.96,7.96c0,4.39,3.57,7.96,7.96,7.96c1.98,0,3.81-0.73,5.21-1.94L20.031,20.79z
M4.11,11.02c0-3.84,3.13-6.96,6.96-6.96c3.84,0,6.96,3.12,6.96,6.96c0,3.84-3.12,6.96-6.96,6.96C7.24,17.98,4.11,14.86,4.11,11.02
z"></path></g></svg>
                    </span>
                    <input type="text" name="" id="" className='bg-transparent text-black focus:border-none focus: outline-none w-full ' placeholder='Search...'

                    />
                  </div>
                  <div className='bg-[#f6f6f6] px-3 py-2 text-sm text-[#8a8a8a] rounded-3xl flex items-center space-x-1 cursor-pointer'>
                    <span>
                      <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="1.25rem" width="1.25rem" xmlns="http://www.w3.org/2000/svg"><g id="Filter"><path d="M14.037,20.937a1.015,1.015,0,0,1-.518-.145l-3.334-2a2.551,2.551,0,0,1-1.233-2.176V12.091a1.526,1.526,0,0,0-.284-.891L4.013,4.658a1.01,1.01,0,0,1,.822-1.6h14.33a1.009,1.009,0,0,1,.822,1.6h0L15.332,11.2a1.527,1.527,0,0,0-.285.891v7.834a1.013,1.013,0,0,1-1.01,1.012ZM4.835,4.063,9.482,10.62a2.515,2.515,0,0,1,.47,1.471v4.524a1.543,1.543,0,0,0,.747,1.318l3.334,2,.014-7.843a2.516,2.516,0,0,1,.471-1.471l4.654-6.542,0,0Z"></path></g></svg>
                    </span>
                    <h1>Filter</h1>
                  </div>
                  <div className='bg-[#f6f6f6] px-3 py-2 text-sm text-[#8a8a8a] rounded-3xl flex items-center space-x-1 cursor-pointer'>
                    <span>
                      <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="1.25rem" width="1.25rem" xmlns="http://www.w3.org/2000/svg"><g id="Calendar_Date"><path d="M18.435,4.955h-1.94v-1.41c0-0.26-0.23-0.51-0.5-0.5c-0.27,0.01-0.5,0.22-0.5,0.5v1.41h-7v-1.41
c0-0.26-0.23-0.51-0.5-0.5c-0.27,0.01-0.5,0.22-0.5,0.5v1.41h-1.93c-1.38,0-2.5,1.12-2.5,2.5v11c0,1.38,1.12,2.5,2.5,2.5h12.87
c1.38,0,2.5-1.12,2.5-2.5v-11C20.935,6.075,19.815,4.955,18.435,4.955z M19.935,18.455c0,0.83-0.67,1.5-1.5,1.5H5.565
c-0.83,0-1.5-0.67-1.5-1.5v-8.42h15.87V18.455z M19.935,9.035H4.065v-1.58c0-0.83,0.67-1.5,1.5-1.5h1.93v0.59
c0,0.26,0.23,0.51,0.5,0.5c0.27-0.01,0.5-0.22,0.5-0.5v-0.59h7v0.59c0,0.26,0.23,0.51,0.5,0.5c0.27-0.01,0.5-0.22,0.5-0.5v-0.59
h1.94c0.83,0,1.5,0.67,1.5,1.5V9.035z"></path><path d="M11.492,17.173v-3.46c0-0.059-0.064-0.095-0.114-0.064l-0.638,0.392
c-0.1,0.061-0.228-0.01-0.228-0.128v-0.651c0-0.105,0.055-0.203,0.146-0.257l0.764-0.457c0.047-0.028,0.1-0.043,0.154-0.043h0.626
c0.166,0,0.3,0.134,0.3,0.3v4.367c0,0.166-0.134,0.3-0.3,0.3h-0.409C11.626,17.473,11.492,17.339,11.492,17.173z"></path></g></svg>
                    </span>
                    <h1>16Dec - 15Jan</h1>
                  </div>

                </div>
                <div className='rounded-3xl bg-black px-3 py-2 text-sm text-white flex items-center space-x-1'>
                  <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 384 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M288 256H96v64h192v-64zm89-151L279.1 7c-4.5-4.5-10.6-7-17-7H256v128h128v-6.1c0-6.3-2.5-12.4-7-16.9zm-153 31V0H24C10.7 0 0 10.7 0 24v464c0 13.3 10.7 24 24 24h336c13.3 0 24-10.7 24-24V160H248c-13.2 0-24-10.8-24-24zM64 72c0-4.42 3.58-8 8-8h80c4.42 0 8 3.58 8 8v16c0 4.42-3.58 8-8 8H72c-4.42 0-8-3.58-8-8V72zm0 64c0-4.42 3.58-8 8-8h80c4.42 0 8 3.58 8 8v16c0 4.42-3.58 8-8 8H72c-4.42 0-8-3.58-8-8v-16zm256 304c0 4.42-3.58 8-8 8h-80c-4.42 0-8-3.58-8-8v-16c0-4.42 3.58-8 8-8h80c4.42 0 8 3.58 8 8v16zm0-200v96c0 8.84-7.16 16-16 16H80c-8.84 0-16-7.16-16-16v-96c0-8.84 7.16-16 16-16h224c8.84 0 16 7.16 16 16z"></path></svg>
                  <span> Download invoice</span>
                </div>
              </div>

              {retunactiveTab === "All orders" && (
                <div className=' bg-white shadow-md py-2 rounded-lg px-2 transition-all duration-300 ease-in-out transform translate-y-[10px] opacity-0 animate-slideup '>
                  <table className='w-full '>
                    <thead className='w-full border-b'>
                      <tr>
                        <th className=' w-[8%] py-4'>
                          <label className="flex items-center space-x-2 cursor-pointer">
                            {/* Hidden Checkbox */}
                            <input type="checkbox" className="hidden peer" />

                            {/* Custom Checkbox */}
                            <div className="w-6 h-6 border-2 border-gray-400 rounded-full flex items-center justify-center peer-checked:bg-green-500 peer-checked:border-green-600">
                              {/* Check Icon (✔) */}
                              <svg
                                className="w-4 h-4 text-white hidden peer-checked:block"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="3"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                              </svg>
                            </div>
                          </label>
                        </th>
                        <th className=' w-[15%]  '>
                          <div className='flex items-center space-x-1'>
                            <span>Orders</span>
                            <span className='text-[#8a8a8a]'><svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M7 3l0 18"></path><path d="M10 6l-3 -3l-3 3"></path><path d="M20 18l-3 3l-3 -3"></path><path d="M17 21l0 -18"></path></svg></span>
                          </div>
                        </th>
                        <th className=' w-[15%]  '>
                          <div className='flex items-center space-x-1'>
                            <span>Date</span>
                            <span className='text-[#8a8a8a]' ><svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M7 3l0 18"></path><path d="M10 6l-3 -3l-3 3"></path><path d="M20 18l-3 3l-3 -3"></path><path d="M17 21l0 -18"></path></svg></span>

                          </div>
                        </th>
                        <th className=' w-[15%]  '>
                          <div className='flex items-center space-x-1'>
                            <span>Coustumer</span>
                            <span className='text-[#8a8a8a]'><svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M7 3l0 18"></path><path d="M10 6l-3 -3l-3 3"></path><path d="M20 18l-3 3l-3 -3"></path><path d="M17 21l0 -18"></path></svg></span>
                          </div>
                        </th>
                        <th className=' w-[15%]  '>
                          <div className='flex items-center space-x-1'>
                            <span>Payments</span>
                            <span className='text-[#8a8a8a]' ><svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M7 3l0 18"></path><path d="M10 6l-3 -3l-3 3"></path><path d="M20 18l-3 3l-3 -3"></path><path d="M17 21l0 -18"></path></svg></span>
                          </div>
                        </th>
                        <th className=' w-[15%]  '>
                          <div className='flex items-center space-x-1'>
                            <span>Status</span>
                            <span className='text-[#8a8a8a]'><svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M7 3l0 18"></path><path d="M10 6l-3 -3l-3 3"></path><path d="M20 18l-3 3l-3 -3"></path><path d="M17 21l0 -18"></path></svg></span>
                          </div>
                        </th>
                        <th className=' w-[15%]  '>
                          <div className='flex items-center space-x-1'>
                            <span>Price</span>
                            <span className='text-[#8a8a8a]' ><svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M7 3l0 18"></path><path d="M10 6l-3 -3l-3 3"></path><path d="M20 18l-3 3l-3 -3"></path><path d="M17 21l0 -18"></path></svg></span>

                          </div>
                        </th>
                      </tr>



                    </thead>
                    <tbody>
                      <tr className='border-b '>
                        <td className=' w-[8%] py-6'>
                          <label className="flex items-center space-x-2 cursor-pointer">
                            {/* Hidden Checkbox */}
                            <input type="checkbox" className="hidden peer" />

                            {/* Custom Checkbox */}
                            <div className="w-6 h-6 border-2 border-gray-400 rounded-full flex items-center justify-center peer-checked:bg-green-500 peer-checked:border-green-600">
                              {/* Check Icon (✔) */}
                              <svg
                                className="w-4 h-4 text-white hidden peer-checked:block"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="3"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                              </svg>
                            </div>
                          </label>
                        </td>
                        <td>
                          <span>Vest Hoodies</span>
                        </td>

                        <td>
                          <span>Apr 24,2024</span>
                        </td>
                        <td>
                          <span>john abrahm</span>
                        </td>
                        <td>
                          <span className='px-2 py-1 bg-[#e3e2e2] rounded-lg text-green-400'>Paid</span>
                        </td>
                        <td>
                          <span className='px-2 py-1 bg-[#e3e2e2] rounded-lg text-red-500'>unfulfiled</span>
                        </td>
                        <td>
                          <span className='font-semibold'>
                            ₹5999/-
                          </span>
                        </td>
                      </tr>
                      <tr className='border-b '>
                        <td className=' w-[8%] py-6'>
                          <label className="flex items-center space-x-2 cursor-pointer">
                            {/* Hidden Checkbox */}
                            <input type="checkbox" className="hidden peer" />

                            {/* Custom Checkbox */}
                            <div className="w-6 h-6 border-2 border-gray-400 rounded-full flex items-center justify-center peer-checked:bg-green-500 peer-checked:border-green-600">
                              {/* Check Icon (✔) */}
                              <svg
                                className="w-4 h-4 text-white hidden peer-checked:block"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="3"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                              </svg>
                            </div>
                          </label>
                        </td>
                        <td>
                          <span>Vest Hoodies</span>
                        </td>

                        <td>
                          <span>Apr 24,2024</span>
                        </td>
                        <td>
                          <span>john abrahm</span>
                        </td>
                        <td>
                          <span className='px-2 py-1 bg-[#e3e2e2] rounded-lg text-green-400'>Paid</span>
                        </td>
                        <td>
                          <span className='px-2 py-1 bg-[#e3e2e2] rounded-lg text-red-500'>unfulfiled</span>
                        </td>
                        <td>
                          <span className='font-semibold'>
                            ₹5999/-
                          </span>
                        </td>
                      </tr>
                      <tr className='border-b '>
                        <td className=' w-[8%] py-6'>
                          <label className="flex items-center space-x-2 cursor-pointer">
                            {/* Hidden Checkbox */}
                            <input type="checkbox" className="hidden peer" />

                            {/* Custom Checkbox */}
                            <div className="w-6 h-6 border-2 border-gray-400 rounded-full flex items-center justify-center peer-checked:bg-green-500 peer-checked:border-green-600">
                              {/* Check Icon (✔) */}
                              <svg
                                className="w-4 h-4 text-white hidden peer-checked:block"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="3"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                              </svg>
                            </div>
                          </label>
                        </td>
                        <td>
                          <span>Vest Hoodies</span>
                        </td>

                        <td>
                          <span>Apr 24,2024</span>
                        </td>
                        <td>
                          <span>john abrahm</span>
                        </td>
                        <td>
                          <span className='px-2 py-1 bg-[#e3e2e2] rounded-lg text-green-400'>Paid</span>
                        </td>
                        <td>
                          <span className='px-2 py-1 bg-[#e3e2e2] rounded-lg text-red-500'>unfulfiled</span>
                        </td>
                        <td>
                          <span className='font-semibold'>
                            ₹5999/-
                          </span>
                        </td>
                      </tr>
                      <tr className='border-b '>
                        <td className=' w-[8%] py-6'>
                          <label className="flex items-center space-x-2 cursor-pointer">
                            {/* Hidden Checkbox */}
                            <input type="checkbox" className="hidden peer" />

                            {/* Custom Checkbox */}
                            <div className="w-6 h-6 border-2 border-gray-400 rounded-full flex items-center justify-center peer-checked:bg-green-500 peer-checked:border-green-600">
                              {/* Check Icon (✔) */}
                              <svg
                                className="w-4 h-4 text-white hidden peer-checked:block"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="3"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                              </svg>
                            </div>
                          </label>
                        </td>
                        <td>
                          <span>Vest Hoodies</span>
                        </td>

                        <td>
                          <span>Apr 24,2024</span>
                        </td>
                        <td>
                          <span>john abrahm</span>
                        </td>
                        <td>
                          <span className='px-2 py-1 bg-[#e3e2e2] rounded-lg text-green-400'>Paid</span>
                        </td>
                        <td>
                          <span className='px-2 py-1 bg-[#e3e2e2] rounded-lg text-red-500'>unfulfiled</span>
                        </td>
                        <td>
                          <span className='font-semibold'>
                            ₹5999/-
                          </span>
                        </td>
                      </tr>
                      <tr className='border-b '>
                        <td className=' w-[8%] py-6'>
                          <label className="flex items-center space-x-2 cursor-pointer">
                            {/* Hidden Checkbox */}
                            <input type="checkbox" className="hidden peer" />

                            {/* Custom Checkbox */}
                            <div className="w-6 h-6 border-2 border-gray-400 rounded-full flex items-center justify-center peer-checked:bg-green-500 peer-checked:border-green-600">
                              {/* Check Icon (✔) */}
                              <svg
                                className="w-4 h-4 text-white hidden peer-checked:block"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="3"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                              </svg>
                            </div>
                          </label>
                        </td>
                        <td>
                          <span>Vest Hoodies</span>
                        </td>

                        <td>
                          <span>Apr 24,2024</span>
                        </td>
                        <td>
                          <span>john abrahm</span>
                        </td>
                        <td>
                          <span className='px-2 py-1 bg-[#e3e2e2] rounded-lg text-green-400'>Paid</span>
                        </td>
                        <td>
                          <span className='px-2 py-1 bg-[#e3e2e2] rounded-lg text-red-500'>unfulfiled</span>
                        </td>
                        <td>
                          <span className='font-semibold'>
                            ₹5999/-
                          </span>
                        </td>
                      </tr>
                      <tr className='border-b '>
                        <td className=' w-[8%] py-6'>
                          <label className="flex items-center space-x-2 cursor-pointer">
                            {/* Hidden Checkbox */}
                            <input type="checkbox" className="hidden peer" />

                            {/* Custom Checkbox */}
                            <div className="w-6 h-6 border-2 border-gray-400 rounded-full flex items-center justify-center peer-checked:bg-green-500 peer-checked:border-green-600">
                              {/* Check Icon (✔) */}
                              <svg
                                className="w-4 h-4 text-white hidden peer-checked:block"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="3"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                              </svg>
                            </div>
                          </label>
                        </td>
                        <td>
                          <span>Vest Hoodies</span>
                        </td>

                        <td>
                          <span>Apr 24,2024</span>
                        </td>
                        <td>
                          <span>john abrahm</span>
                        </td>
                        <td>
                          <span className='px-2 py-1 bg-[#e3e2e2] rounded-lg text-green-400'>Paid</span>
                        </td>
                        <td>
                          <span className='px-2 py-1 bg-[#e3e2e2] rounded-lg text-red-500'>unfulfiled</span>
                        </td>
                        <td>
                          <span className='font-semibold'>
                            ₹5999/-
                          </span>
                        </td>
                      </tr>
                    </tbody>
                  </table>

                  <div className='flex justify-center space-x-1 py-7 text-sm text-[#8a8a8a]'>
                    <button className='w-[25px] h-[25px]    text-center rounded-lg flex justify-center items-center'><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 320 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M41.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.3 256 246.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z"></path></svg></button>
                    <button className='w-[25px] h-[25px] bg-[#e3e2e2]    text-black text-center rounded-lg'>1</button>
                    <button className='w-[25px] h-[25px]     text-center rounded-full'>2</button>
                    <button className='w-[25px] h-[25px]     text-center rounded-full'>3</button>
                    <button className='w-[25px] h-[25px]     text-center rounded-full'>4</button>
                    <button className='w-[25px] h-[25px]     text-center rounded-full'>5</button>

                  </div>



                </div>
              )}

              {retunactiveTab === "Drafts" && (
<div className="mt-4 p-4 bg-white shadow-md rounded-lg transition-all duration-300 ease-in-out transform translate-y-[10px] opacity-0 animate-slideup">
                  <h2>Drafts Section</h2>
                  <p>Here are your saved drafts...</p>
                </div>
              )}

              {retunactiveTab === "Pending" && (
                <div className="mt-4 p-4 bg-white shadow-md rounded-lg transition-all duration-300 ease-in-out transform translate-y-[10px] opacity-0 animate-slideup">
                  <h2>Pending Orders</h2>
                  <p>Here are all pending orders...</p>
                </div>
              )}

              {retunactiveTab === "Completed" && (
                <div className="mt-4 p-4 bg-white shadow-md rounded-lg transition-all duration-300 ease-in-out transform translate-y-[10px] opacity-0 animate-slideup">
                  <h2>Completed Orders</h2>
                  <p>Here are all completed orders...</p>
                </div>
              )}














            </div>
            }
            {selected === 'Rating' &&
              <div>
                <h1>rating</h1>
              </div>
            }
            {selected === 'Wishlist' &&
              <div>
                <h1>Wishlist</h1>
              </div>
            }
            {selected === 'wallet' &&
              <div>
                <h1>wallet</h1>
              </div>
            }
            {selected === 'Payment' &&
              <div>
                <h1>payment</h1>
              </div>
            }
            {selected === 'Password' &&
              <div>
                <h1>Password</h1>
              </div>
            }

          </div>
        </div>
      </div>



    </div>
  )
}

export default UserProfile
