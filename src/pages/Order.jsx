import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Footernav from '../components/Footernav'

const Order = () => {
  return (
    <div>
      <Navbar />

      <div className='container justify-center py-8 flex flex-col space-y-3 items-center '>
      <h1 className='font-bold text-2xl lg:text-4xl text-black'>Track Your Order</h1>
      <h1 className='font-semibold text-lg lg:text-xl text-gray-600'>Find out where your order is in just a few clicks</h1>

      
      </div>

     <div className='container grid lg:grid-cols-2 gap-5 grid-cols-1'>

     <div className='flex justify-center flex-col py-6 w-full px-8  space-y-5'>

<label htmlFor="">Order ID *</label>
<input type="text" placeholder='Enter Your Order ID' className='rounded-md py-4 shadow-[rgba(60,64,67,0.3)_0px_1px_2px_0px,rgba(60,64,67,0.15)_0px_2px_6px_2px] px-3 w-full outline-none  border' />
<label htmlFor="">Billing Email *</label>
<input type="email" placeholder='Enter Email Address' className='rounded-md py-4 shadow-[rgba(60,64,67,0.3)_0px_1px_2px_0px,rgba(60,64,67,0.15)_0px_2px_6px_2px] px-3 w-full outline-none  border' />
   
<button
className="bg-transparent border-black transition-all duration-300 border hover:bg-black  hover:text-white  px-7 h-11 lg:h-14 lg:py-3 w-44 lg:w-56 text-black text-lg font-semibold rounded-lg" >
Track Order
</button>


{/* <div className='grid grid-cols-1 gap-5  pt-14 pb-7 lg:grid-cols-3'>
<div className='flex space-x-3 flex-row'>
<div>
  <span className='text-4xl lg:text-5xl'><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 32 32" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M 0 6 L 0 8 L 19 8 L 19 23 L 12.84375 23 C 12.398438 21.28125 10.851563 20 9 20 C 7.148438 20 5.601563 21.28125 5.15625 23 L 4 23 L 4 18 L 2 18 L 2 25 L 5.15625 25 C 5.601563 26.71875 7.148438 28 9 28 C 10.851563 28 12.398438 26.71875 12.84375 25 L 21.15625 25 C 21.601563 26.71875 23.148438 28 25 28 C 26.851563 28 28.398438 26.71875 28.84375 25 L 32 25 L 32 16.84375 L 31.9375 16.6875 L 29.9375 10.6875 L 29.71875 10 L 21 10 L 21 6 Z M 1 10 L 1 12 L 10 12 L 10 10 Z M 21 12 L 28.28125 12 L 30 17.125 L 30 23 L 28.84375 23 C 28.398438 21.28125 26.851563 20 25 20 C 23.148438 20 21.601563 21.28125 21.15625 23 L 21 23 Z M 2 14 L 2 16 L 8 16 L 8 14 Z M 9 22 C 10.117188 22 11 22.882813 11 24 C 11 25.117188 10.117188 26 9 26 C 7.882813 26 7 25.117188 7 24 C 7 22.882813 7.882813 22 9 22 Z M 25 22 C 26.117188 22 27 22.882813 27 24 C 27 25.117188 26.117188 26 25 26 C 23.882813 26 23 25.117188 23 24 C 23 22.882813 23.882813 22 25 22 Z"></path></svg></span>
</div>
<div className='flex flex-col'>
  <h1 className='text-lg lg:text-xl font-semibold text-black'>Free Shipping</h1>
  <h1 className='text-sm lg:text-base font-medium text-gray-600'>Free shipping for order above ₹3000</h1>
</div>
</div>
<div className='flex space-x-3 flex-row'>
<div>
  <span className='text-4xl lg:text-5x'><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path fill="none" d="M0 0h24v24H0z"></path><path d="M19 14V6c0-1.1-.9-2-2-2H3c-1.1 0-2 .9-2 2v8c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2zm-9-1c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3zm13-6v11c0 1.1-.9 2-2 2H4v-2h17V7h2z"></path></svg></span>
</div>
<div className='flex flex-col'>
  <h1 className='text-lg lg:text-xl font-semibold text-black'>Flexible Payment</h1>
  <h1 className='text-sm lg:text-base font-medium text-gray-600'>Multiple secure payment options</h1>
</div>
</div>
<div className='flex space-x-3 flex-row'>
<div>
  <span className='text-4xl lg:text-5x'><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M12 2C6.486 2 2 6.486 2 12v4.143C2 17.167 2.897 18 4 18h1a1 1 0 0 0 1-1v-5.143a1 1 0 0 0-1-1h-.908C4.648 6.987 7.978 4 12 4s7.352 2.987 7.908 6.857H19a1 1 0 0 0-1 1V18c0 1.103-.897 2-2 2h-2v-1h-4v3h6c2.206 0 4-1.794 4-4 1.103 0 2-.833 2-1.857V12c0-5.514-4.486-10-10-10z"></path></svg></span>
</div>
<div className='flex flex-col'>
  <h1 className='text-lg lg:text-xl font-semibold text-black'>24x7 Support</h1>
  <h1 className='text-sm lg:text-base font-medium text-gray-600'>We support online all days</h1>
</div>
</div>
</div> */}
</div>
<div className='w-full '>
  <div className='flex justify-end overflow-hidden -top-8'>
  <img src="images/order1.jpg" alt="" className='' />
  </div>
</div>



     </div>

      

<Footer />
<Footernav />
    </div>
  )
}

export default Order
