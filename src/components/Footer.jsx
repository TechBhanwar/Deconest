import React from 'react'
import { Link } from "react-router-dom";







const Footer = () => {
    return (
        <div>
            <div className='bg-black mb-16 lg:mb-0 w-full h-auto'>
                <div className='container  px-7  space-y-4'>
                    <div className='grid border-b border-[#FFFFFF26] space-y-5  grid-cols-1 lg:grid-cols-2 py-16 justify-center items-center'>
                        <div className='lg:text-3xl text-xl lg:leading-10 lg:text-start text-center items-center flex justify-center lg:font-semibold text-white'>
                            <h1>Sign Up For Our Newsletter To Receive 
                                Notifications & Other Promotions</h1>
                        </div>
                        <div>
                            <div className='bg-transparent border flex justify-between border-white rounded-full lg:px-4 px-3 py-2  lg:py-3'>
                                <input type="email" placeholder='Email Address...' className='border-none w-full outline-none text-white placeholder:text-white bg-transparent' />
                                <button className='outline-none border  rounded-full bg-white  lg:px-3 px-2 py-1 lg:py-2 font-medium text-black lg:text-lg  text-sm hover:bg-transparent hover:text-white transition transform duration-300'>Subscribe</button>

                            </div>
                        </div>
                    </div>

                    <div className=' grid space-y-5  border-b border-[#FFFFFF26] cursor-pointer lg:grid-cols-4 py-4'>
                        <div className='flex space-y-5 lg:mb-0 mb-8 flex-col'>
                           
                            <img src="images/logowhite1.webp" alt="" className='lg:w-full w-72' />
                            <h2 className='text-white text-sm font-medium  '>Royal Botanic Gardens, Kew, Richmond, London <br />
                            TW9 3AB, United Kingdom</h2>
                           
                           
                        </div>
                        <div className='flex flex-col  items-start lg:items-center lg:justify-center'>
                            <h1 className='text-white text-base font-semibold mb-3 lg:-ml-6 lg:mb-6'><Link to="/about">About-Us</Link></h1>
                            <ul className='text-white text-[13px] font-medium space-y-3'>
                                <li>Our Shops</li>
                                <li><Link to="/contact">Contact</Link></li>
                                <li>Store Locator</li>
                                <li>News and Blogs</li>

                            </ul>
                        </div>
                        <div className='flex flex-col  items-start lg:items-center lg:justify-center'>
                            <h1 className='text-white mr-9 text-base font-semibold mb-3 lg:mb-6'>Help</h1>
                            <ul className='text-white text-[13px] font-medium space-y-3'>
                                <li><Link to="/faqs">FAQs</Link></li>
                               
                                <li>Track</li>
                                <li>Your Order</li>
                                <li><Link to="/profile">My Account</Link></li>
                            </ul>
                        </div>
                        <div className='flex flex-col  items-start lg:items-center lg:justify-center'>
                            <h1 className='text-white text-base font-semibold mb-3 lg:mb-6'>Customer Services</h1>
                            <ul className='text-white text-[13px] font-medium space-y-3'>
                                <li><Link to="/termcondition">Terms and Conditions</Link></li>
                               
                                <li>Returns</li>
                                <li>Shipping Information</li>
                                <li>Wholesale</li>
                            </ul>
                        </div>
                    </div>

                    <div className='flex flex-col lg:flex-row lg:justify-between py-3  justify-center items-center '>
                        <p className='text-white mb-3 lg:mb-6  text-xs font-medium'>Copyright © 2025. All Right Reserved</p>
                        <div className='flex flex-row gap-5 mb-5'>
                                <img src="images/pinterest.webp" alt="" className='w-7 h-7' />
                                <img src="images/telegram.webp" alt="" className='w-7 h-7' />
                                <img src="images/instagram.webp" alt="" className='w-7 h-7' />
                                <img src="images/facebook.webp" alt="" className='w-7 h-7' />
                            </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Footer
