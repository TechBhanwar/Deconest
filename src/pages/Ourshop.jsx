import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Footernav from '../components/Footernav'
import { Link } from 'react-router-dom'

const Ourshop = () => {
  return (
    <div>
        <Navbar />
      <div className='flex   w-full h-[40rem]  bg-cover bg-center  relative' style={{ backgroundImage: "url('/images/ourshop1.jpg')" }}>
       <div className='container py-12'>
       <div className='flex space-y-5 lg:w-[46rem] w-full h-full  px-4 flex-col'>
        <h1 className='flex gap-3 lg:text-xl text-lg font-semibold text-black '>MARCH-2025 <span>#Deconest</span></h1>

        <h1 className='lg:text-4xl text-3xl font-bold text-black'>Furniture Store</h1>
        <h1 className='lg:text-xl text-lg font-semibold text-gray-700 lg:leading-9  '   >Revive every area in your house for less with furnishings that's on-trend and also economical, also. Find ideal pieces for huge residences, little spaces, houses, workshops. Locate both comfort and also innovative style amongst our choice of furniture. Visit your regional store to browse even more and also purchase. What do you think of the Furniture Store Template?</h1>
       
       
         
    <Link to="/product">
    <button
    className="bg-transparent border-black transition-all duration-300 border hover:bg-black hover:text-white px-7 h-14 py-3 w-56 lg:w-64 text-black text-lg font-semibold rounded-lg" >
    Shop Now
  </button>
  </Link>

   <div className='flex flex-row space-x-6'>

    <div className='flex flex-col space-y-3 ' >
      <h1 className='text-xl font-semibold text-black' >Maharashtra, India</h1>
      <h1 className='text-lg font-medium text-gray-700'>Mumbai, Jhubich</h1>
    </div>
    <div className='flex flex-col space-y-3 ' >
      <h1 className='text-xl font-semibold text-black'>Rajasthan, India</h1>
      <h1 className='text-lg font-medium text-gray-700'>Jaipur,Gandhinagr</h1>
    </div>
   </div>
 
       </div>
       </div>
      
      </div>

   <div className='container py-8 overflow-hidden'>
   <div className='flex flex-col px-4 lg:px-0  mt-5 h-[30rem] mb-6 justify-center items-center  bg-orange-100'>
     

     <div className='flex flex-col py-6 space-y-5 lg:w-[40rem] w-full justify-center text-center '>
     <h1 className='text-lg text-slate-800 font-medium' >OUR SHOP FEATURES</h1>
     <h1 className='lg:text-4xl text-2xl text-black font-bold'>Core advantage & reason to shop with us.</h1>
     <h1 className='text-lg lg:text-xl text-slate-600 font-medium'>In our store, you would find all the necessary styles and pieces of furniture, which would perfectly suit your needs. Furniture Store Template contains all you need for the successful site creation.</h1>     
     
     <div className='flex justify-center gap-4 flex-row'>
      <div className='flex flex-col border-r px-4 border-gray-400 justify-center items-center'>
        <span className='text-black'><svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" height="2.5em" width="2.5em" xmlns="http://www.w3.org/2000/svg"><circle cx="9" cy="21" r="1"></circle><circle cx="20" cy="21" r="1"></circle><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path></svg></span>
      <h1 className='lg:text-xl text-lg text-gray-800 font-medium'>Wide Selection</h1>
      </div>
      <div className='flex flex-col border-r px-4 border-gray-400 justify-center items-center'>
        <span className='text-black'><svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" height="2.5em" width="2.5em" xmlns="http://www.w3.org/2000/svg"><path d="M7 17m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"></path><path d="M17 17m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"></path><path d="M5 17h-2v-4m-1 -8h11v12m-4 0h6m4 0h2v-6h-8m0 -5h5l3 5"></path><path d="M3 9l4 0"></path></svg></span>
      <h1 className='lg:text-xl text-lg text-gray-800 font-medium'>Fast Delivery</h1>
      </div>
      <div className='flex flex-col  px-4 border-gray-400 justify-center items-center'>
        <span className='text-black'><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 640 512" height="2.5em" width="2.5em" xmlns="http://www.w3.org/2000/svg"><path d="M192 256c61.9 0 112-50.1 112-112S253.9 32 192 32 80 82.1 80 144s50.1 112 112 112zm76.8 32h-8.3c-20.8 10-43.9 16-68.5 16s-47.6-6-68.5-16h-8.3C51.6 288 0 339.6 0 403.2V432c0 26.5 21.5 48 48 48h288c26.5 0 48-21.5 48-48v-28.8c0-63.6-51.6-115.2-115.2-115.2zM480 256c53 0 96-43 96-96s-43-96-96-96-96 43-96 96 43 96 96 96zm48 32h-3.8c-13.9 4.8-28.6 8-44.2 8s-30.3-3.2-44.2-8H432c-20.4 0-39.2 5.9-55.7 15.4 24.4 26.3 39.7 61.2 39.7 99.8v38.4c0 2.2-.5 4.3-.6 6.4H592c26.5 0 48-21.5 48-48 0-61.9-50.1-112-112-112z"></path></svg></span>
      <h1 className='lg:text-xl text-lg text-gray-800 font-medium'>Friendly Staff</h1>
      </div>
     </div>
     </div>


      </div>
   </div>
   
   <div className='grid lg:grid-cols-2 gap-5 py-7 w-full h-full container grid-cols-1' >
     <div className='flex flex-col py-10 space-y-5 w-full h-full  px-10 bg-red-100'>
      <h1 className='text-xl text-gray-700 font-semibold'>ITNERIOR DESIGN COLLECTION </h1>
      <h1 className='text-2xl lg:text-4xl text-black font-bold'>Creat Your Unique Style</h1>
      <h1 className='text-lg font-medium text-gray-600'>Our designers would help you to create an awesome style, properly combining different elements of your decor.</h1>
      
      
    <Link to="/product">
    <button
    className="bg-transparent border-black transition-all duration-300 border hover:bg-black hover:text-white px-7 h-14 py-3 w-56 lg:w-64 text-black text-lg font-semibold rounded-lg" >
    Shop Now
  </button>
  </Link>

     </div>


     <div className='grid grid-cols-1 gap-5  lg:grid-cols-2'>
      <div className='flex w-full h-full flex-col'>
      <div className='h-[17rem]'>
        <img src="/images/ourshop3.webp" alt="" className='h-full w-full' />
      </div>
      <div className='bg-red-100 space-y-2 py-3 px-4 flex flex-col'>
        <h1 className='text-xl font-semibold text-black'>Designer Chair</h1>
        <h1 className='text-lg font-medium text-gray-500'>Interior Design</h1>
        <h1 className='text-xl font-semibold text-black'>From ₹2000</h1>
      </div>
      </div>
      <div className='flex w-full h-full flex-col'>
      <div className='h-[17rem]'>
        <img src="/images/ourshop2.jpg" alt="" className='h-full w-full' />
      </div>
      <div className='bg-red-100 space-y-2 py-3 px-4 flex flex-col'>
        <h1 className='text-xl font-semibold text-black'>Bedside Table</h1>
        <h1 className='text-lg font-medium text-gray-500'>Interior Design</h1>
        <h1 className='text-xl font-semibold text-black'>From ₹1500</h1>
      </div>
      </div>
     </div>
   </div>
   
    <div className='grid grid-cols-1 py-10 gap-5 container lg:grid-cols-2 '>
      <div className='relative bg-cover bg-center h-[40rem] ' style={{ backgroundImage: "url('/images/ourshop4.jpg')" }} >
      <div className='absolute space-y-5 w-full lg:w-[28rem] py-10 px-10'>

    <h1 className='text-xl font-semibold text-white'>DECORATIVE  FURNITURE ELEMENTS</h1>
    <h1 className='lg:text-5xl text-3xl font-bold text-white'>Wide Range Of Product</h1>
    <h1 className='text-lg font-medium text-white ' style={{lineHeight:'38px'}}>Beauty is typically something that exceeds assumptions. In the context of insides, help to uncover that elegance goes to the core of our solutions. Don't hesitate to check out Furniture Store Template.</h1>

    <Link to="/product">
    <button
    className="bg-transparent border-white transition-all duration-300 border hover:bg-white hover:text-black px-7 h-14 py-3 w-56 lg:w-64 text-white text-lg font-semibold rounded-lg" >
    Shop Now
  </button>
  </Link>

      </div>
      
      
      </div>
      <div className='relative bg-cover bg-center h-[40rem] ' style={{ backgroundImage: "url('/images/ourshop5.jpg')" }} >
      <div className='absolute space-y-5 lg:w-[28rem] w-full py-10 px-10'>

    <h1 className='text-xl font-semibold  text-black'>DECORATIVE  INTERIOR COLLECTION</h1>
    <h1 className='lg:text-5xl text-3xl font-bold text-black'>Creat Your Own Unique Style </h1>
    <h1 className='text-lg font-medium text-black ' style={{lineHeight:'38px'}}>Our group has years of experience in interior design, as can style and give interior decoration services for you at different degrees of complexity. Which block of Furniture Store Template is your favorite?</h1>
    
    <Link to="/product">
    <button
    className="bg-transparent border-black transition-all duration-300 border hover:bg-black hover:text-white px-7 h-14 py-3 w-56 lg:w-64 text-black text-lg font-semibold rounded-lg" >
    Shop Now
  </button>
  </Link>

      </div>
      
      
      </div>
    </div>


      <Footer />
      <Footernav />
    </div>
  )
}

export default Ourshop
