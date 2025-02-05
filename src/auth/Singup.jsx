import React from 'react'
import Navbar from '../components/Navbar'
import Footernav from '../components/Footernav'
import Footer from '../components/Footer'
import { Link } from 'react-router-dom'

const Singup = () => {
  return (
    <div>
      <Navbar />

      <div className="container">

        <div className='flex justify-center items-center py-12'>
          <div className='bg-white border w-full lg:w-[80%] h-full lg:h-[700px]  flex flex-col lg:flex-row rounded-xl overflow-hidden'>
          <div className='lg:w-[45%] lg:order-1 order-2 w-full lg:px-16 px-4 py-5 lg:py-20 flex justify-center flex-col space-y-4'>
              <div className='flex items-center text-3xl justify-center space-x-3 font-semibold'><h1>Sign Up</h1> </div>
              <div className='bg-[#f2f4f3] py-4 px-5 rounded-3xl flex space-x-2 items-center'>
                <span><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 448 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M224 256c70.7 0 128-57.3 128-128S294.7 0 224 0 96 57.3 96 128s57.3 128 128 128zm89.6 32h-16.7c-22.2 10.2-46.9 16-72.9 16s-50.6-5.8-72.9-16h-16.7C60.2 288 0 348.2 0 422.4V464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48v-41.6c0-74.2-60.2-134.4-134.4-134.4z"></path></svg></span>
                <input type="text" name="" id="" className='bg-transparent text-black focus:border-none focus: outline-none ' placeholder='Username...' />
              </div>
            
              <div className='bg-[#f2f4f3] py-4 px-5 rounded-3xl flex space-x-2 items-center'>
                <span>
                  <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><circle cx="432" cy="128" r="64"></circle><path d="M382.9 203.4L256 288 80 170.7V128l176 117.3 101.1-67.4c-9.5-14.3-15.1-31.5-15.1-49.9 0-17.6 5.1-34.1 13.9-48H74.7C51.2 80 32 99.2 32 122.7v266.7c0 23.5 19.2 42.7 42.7 42.7h362.7c23.5 0 42.7-19.2 42.7-42.7V204.1c-13.9 8.8-30.4 13.9-48 13.9-18.2 0-35.1-5.4-49.2-14.6z"></path></svg>
                </span>
                <input type="text" name="" id="" className='bg-transparent text-black focus:border-none focus: outline-none ' placeholder='Email...' />
              </div>
              <div className='bg-[#f2f4f3] py-4 px-5 rounded-3xl flex space-x-2 items-center'>
                <span>
                  <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M18 8H20C20.5523 8 21 8.44772 21 9V21C21 21.5523 20.5523 22 20 22H4C3.44772 22 3 21.5523 3 21V9C3 8.44772 3.44772 8 4 8H6V7C6 3.68629 8.68629 1 12 1C15.3137 1 18 3.68629 18 7V8ZM16 8V7C16 4.79086 14.2091 3 12 3C9.79086 3 8 4.79086 8 7V8H16ZM11 14V16H13V14H11ZM7 14V16H9V14H7ZM15 14V16H17V14H15Z"></path></svg>
                </span>
                <input type="text" name="" id="" className='bg-transparent text-black focus:border-none focus: outline-none ' placeholder='Password...' />
              </div>
              <div className='bg-[#f2f4f3] py-4 px-5 rounded-3xl flex space-x-2 items-center'>
                <span>
                  <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M18 8H20C20.5523 8 21 8.44772 21 9V21C21 21.5523 20.5523 22 20 22H4C3.44772 22 3 21.5523 3 21V9C3 8.44772 3.44772 8 4 8H6V7C6 3.68629 8.68629 1 12 1C15.3137 1 18 3.68629 18 7V8ZM16 8V7C16 4.79086 14.2091 3 12 3C9.79086 3 8 4.79086 8 7V8H16ZM11 14V16H13V14H11ZM7 14V16H9V14H7ZM15 14V16H17V14H15Z"></path></svg>
                </span>
                <input type="text" name="" id="" className='bg-transparent text-black focus:border-none focus: outline-none ' placeholder='Confirm Password...' />
              </div>
              <div className="flex justify-between items-center w-full">
                <div className="flex items-center gap-2 px-2">
                  <input type="checkbox" id="remember" className="cursor-pointer" />
                  <label htmlFor="remember" className="text-gray-600 cursor-pointer">
                    Remember Me
                  </label>
                </div>
              
              </div>
              <button className='bg-[#f2f4f3] py-4 px-5 rounded-3xl text-xl font-semibold' >
                Sign Up
              </button>
              <div className="flex items-center justify-center w-full">
                <hr className="w-1/4 border-gray-300" />
                <span className="px-3 text-gray-500 font-semibold">Or</span>
                <hr className="w-1/4 border-gray-300" />
              </div>

              <button className="flex items-center justify-center gap-2 border border-gray-300 font-semibold  py-4 px-5 rounded-3xl w-full  hover:bg-[#f2f4f3] transition duration-300">
                <img src="/images/google.png" alt="" className="w-5 h-5" />
                <span>Continue with Google</span>
              </button>
              <span className='px-2'>have an account?
              <Link to="/login">    <span className="text-blue-600 hover:underline cursor-pointer">Login</span></Link>

                </span>
            </div>


            <div className='lg:w-[55%] lg:order-2 order-1 w-full h-full flex relative'>
              <img src="/images/signupimg.jpg" alt="" className=' w-full h-full' />
              <div className='absolute  flex flex-col  text-right h-full space-y-3 px-8 py-4 w-full'>
                <h1 className='text-4xl text-white  font-semibold'>Make Over Your Room</h1>
                <h1 className='text-4xl text-white font-semibold'>Gain More Comfort</h1>
                <h2 className='text-white text-xl'>"Everyone deserves to be happy" </h2>
              </div>
            </div>
          </div>

        </div>
      </div>


      <Footernav />
      <Footer />
    </div>
  )
}

export default Singup
