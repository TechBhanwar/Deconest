import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Footernav from '../components/Footernav'
import { Link } from 'react-router-dom'

const About = () => {
  return (
    <div>
      <Navbar />

    <div className='container py-8 flex justify-center items-center space-y-4 flex-col'>
     <h1 className='lg:text-xl text-lg  text-gray-600 font-medium'>About-Us</h1>
     <h1 className='lg:text-4xl text-2xl mb-4 text-center text-black font-bold'>
     Discover Deconest – <br /> Where Innovation Meets Design
     </h1>

     <div className='lg:h-[32rem] w-full lg:w-[58rem] rounded-xl  overflow-hidden' >
      <img src="images/about.jpg" alt="" className='w-full h-full' />
     </div>


    </div>

    <div className='container py-8 flex justify-center mb-6 lg:mb-0 items-center space-y-4 flex-col' >
    <h1 className='text-2xl lg:text-3xl  text-center text-black font-bold'>
   The Deconest Journey Story
     </h1>
     <h1  className='lg:text-lg text-base text-center text-gray-600 font-medium' >
     A journey of craftsmanship and creativity, redefining furniture with elegance and innovation. Experience the fusion of timeless aesthetics and modern comfort, designed to transform every space into a masterpiece.
     </h1>


    </div> 

    <div className='container lg:gap-0 gap-4 flex flex-col'>
  
    <div className=' grid grid-cols-1  lg:grid-cols-2  '>
        <div className='overflow-hidden rounded-tl-full lg:order-1 order-2 rounded-bl-full w-full  lg:h-[30rem]   ' >
          <img src="images/about1.jpg" alt="" className='h-full w-full' />
        </div>
        <div className='flex lg:px-5 justify-center lg:order-2 lg:mb-0 mb-4 order-1 space-y-4 flex-col'>
          <h1 className='text-start flex text-3xl lg:text-4xl font-bold justify-start'>From Humble Beginnings</h1>
          <h1 className='text-start flex text-lg lg:text-xl font-medium text-gray-600 leading-8 justify-start'>Our journey started with a simple vision—to craft furniture that blends elegance with comfort. What began in a small workshop with a passion for design has evolved into a trusted brand known for quality craftsmanship and innovation.</h1>
          <div>
            <Link to="/contact">
          <button
    className="bg-white border-black transition-all duration-300 border hover:bg-black hover:text-white px-7 h-14 py-3 w-56 lg:w-64 text-black text-lg font-semibold rounded-lg" >
    Get In Touch
  </button>
  </Link>
          </div>
        
        </div>
    </div>
    <div className='grid grid-cols-1 lg:grid-cols-2 '>
        
    <div className='flex lg:px-5 justify-center lg:order-2 lg:mb-0 mb-4 order-1 space-y-4 flex-col'>
          <h1 className='text-start flex text-3xl lg:text-4xl font-bold justify-start'>Milestones and Achievements</h1>
          <h1 className='text-start flex text-lg lg:text-xl font-medium text-gray-600 leading-8 justify-start'>Over the years, we've reached several significant milestones. In 2012, we launched our first online store, making our products accessible to a wider audience. By 2015, we had expanded our product line to include not only classic furniture pieces but also contemporary designs that cater to modern tastes.</h1>
          <div>
          <Link to="/contact">
          <button
    className="bg-white border-black transition-all duration-300 border hover:bg-black hover:text-white px-7 h-14 py-3 w-56 lg:w-64 text-black text-lg font-semibold rounded-lg" >
    Get In Touch
  </button>
  </Link>
          </div>
        
        </div>
        <div className='overflow-hidden rounded-tr-full lg:order-2 order-1 rounded-br-full w-full   lg:h-[30rem] ' >
          <img src="images/about2.webp" alt="" className='h-full w-full' />
        </div>
    </div>

    <div className='grid grid-cols-1 lg:grid-cols-2  '>
        <div className='overflow-hidden rounded-tl-full lg:order-1 order-2 rounded-bl-full w-full  lg:h-[30rem]   ' >
          <img src="images/about3.jpg" alt="" className='h-full w-full' />
        </div>
        <div className='flex lg:px-5 justify-center lg:order-2 lg:mb-0 mb-4 order-1 space-y-4 flex-col'>
          <h1 className='text-start flex text-3xl lg:text-4xl font-bold justify-start'>Innovation and Growth</h1>
          <h1 className='text-start flex text-lg lg:text-xl font-medium text-gray-600 leading-8 justify-start'>    Innovation has always been at the heart of what we do. In 2018, we introduced our first line of eco-friendly furniture, crafted from sustainable materials. This commitment to the environment has not only won us accolades but also the trust and loyalty of our customers.</h1>
          <div>
          <Link to="/contact">
          <button
    className="bg-white border-black transition-all duration-300 border hover:bg-black hover:text-white px-7 h-14 py-3 w-56 lg:w-64 text-black text-lg font-semibold rounded-lg" >
    Get In Touch
  </button>
  </Link>
          </div>
        
        </div>
    </div>
    <div className='grid grid-cols-1 lg:grid-cols-2 '>
        
    <div className='flex lg:px-5 justify-center lg:order-2 lg:mb-0 mb-4 order-1 space-y-4 flex-col'>
          <h1 className='text-start flex text-3xl lg:text-4xl font-bold justify-start'>Our Global Reach</h1>
          <h1 className='text-start flex text-lg lg:text-xl font-medium text-gray-600 leading-8 justify-start'>    Today, FurniFlex serves customers around the world. With distribution centers in key locations, we ensure that our high-quality furniture reaches your home efficiently and safely. Our global presence is a testament to the love and support of our customers, who inspire us to continue our journey.</h1>
          <div>
          <Link to="/contact">
          <button
    className="bg-white border-black transition-all duration-300 border hover:bg-black hover:text-white px-7 h-14 py-3 w-56 lg:w-64 text-black text-lg font-semibold rounded-lg" >
    Get In Touch
  </button>
  </Link>
          </div>
        
        </div>
        <div className='overflow-hidden lg:order-2 order-1 rounded-tr-full rounded-br-full w-full  mb-6 lg:h-[30rem] ' >
          <img src="images/about7.webp" alt="" className='h-full w-full' />
        </div>
    </div>



    </div>

    <div className='container flex flex-col py-8 space-y-4 '>
      <div>
      <h1 className='text-2xl lg:text-4xl  text-center text-black font-bold'>Our Awesome Team</h1>

      </div>
     <div className='grid grid-cols-1 gap-5 lg:grid-cols-3'>
     <div className='flex space-y-4 flex-col'>
        <div className='rounded-lg  w-full h-full   overflow-hidden  shadow-[rgba(60,64,67,0.3)_0px_1px_2px_0px,rgba(60,64,67,0.15)_0px_2px_6px_2px] '> 
          <img src="images/aboutwomen.webp" alt="" className='w-full h-full' />
        </div>
        <div className='text-center' >
          <h1 className='lg:text-2xl  text-xl font-semibold text-slate-800'>CEO OF DECONEST</h1>
          <h1 className='lg:text-xl  text-lg font-semibold text-slate-600'>Nikita Shingh</h1>
        </div>
       </div>
     <div className='flex space-y-4 flex-col'>
        <div className='rounded-lg  w-full h-full  overflow-hidden shadow-[rgba(60,64,67,0.3)_0px_1px_2px_0px,rgba(60,64,67,0.15)_0px_2px_6px_2px] '> 
          <img src="images/aboutmen.jpg" alt="" className='w-full h-full' />
        </div>
        <div className='text-center' >
          <h1 className='lg:text-2xl  text-xl font-semibold text-slate-800'>CO-FOUNDER OF DECONEST</h1>
          <h1 className='lg:text-xl  text-lg font-semibold text-slate-600'>Harsh Kumar</h1>
        </div>
       </div>
     <div className='flex space-y-4 flex-col'>
        <div className='rounded-lg  w-full h-full  overflow-hidden shadow-[rgba(60,64,67,0.3)_0px_1px_2px_0px,rgba(60,64,67,0.15)_0px_2px_6px_2px] '> 
          <img src="images/aboutmen2 .jpg" alt="" className='w-full h-full' />
        </div>
        <div className='text-center' >
          <h1 className='lg:text-2xl  text-xl font-semibold text-slate-800'>FOUNDER OF DECONEST</h1>
          <h1 className='lg:text-xl  text-lg font-semibold text-slate-600'>Sash Greay</h1>
        </div>
       </div>
     </div>
    </div>

    <div className='container flex flex-col py-10 mb-6 space-y-6 '>

      <div className='justify-center flex' >
      <h1 className='text-2xl lg:text-4xl  text-center text-black font-bold'>Brand Values & Mission Statement</h1>
      </div>
      <div className='grid grid-cols-1 gap-5 lg:grid-cols-3' >

    <div className='flex flex-col py-4 border space-y-3 rounded-md shadow-[rgba(60,64,67,0.3)_0px_1px_2px_0px,rgba(60,64,67,0.15)_0px_2px_6px_2px] justify-center items-center'>
          <div className='lg:w-52 w-44 h-44 lg:h-52 shadow-[rgba(60,64,67,0.3)_0px_1px_2px_0px,rgba(60,64,67,0.15)_0px_2px_6px_2px]  rounded-full '>
           <img src="images\about10.webp" alt="" className='w-full h-full' />
          </div>
          <div className='flex flex-col text-center space-y-3'>
            <h1 className='lg:text-3xl text-2xl font-bold text-slate-800'>Sustainability</h1>
            <h1  className='lg:text-lg text-base font-semibold text-slate-600'>We are committed to eco-friendly practices, using sustainable materials and responsible sourcing to create furniture that is both stylish and environmentally conscious.</h1>
          </div>
    </div>
    <div className='flex flex-col py-4 border space-y-3 rounded-md shadow-[rgba(60,64,67,0.3)_0px_1px_2px_0px,rgba(60,64,67,0.15)_0px_2px_6px_2px] justify-center items-center'>
          <div className='lg:w-52 w-44 h-44 lg:h-52 shadow-[rgba(60,64,67,0.3)_0px_1px_2px_0px,rgba(60,64,67,0.15)_0px_2px_6px_2px]  rounded-full '>
           <img src="images\about13.webp" alt="" className='w-full h-full' />
          </div>
          <div className='flex flex-col text-center space-y-3'>
            <h1 className='lg:text-3xl text-2xl font-bold text-slate-800'>Craftmanship</h1>
            <h1  className='lg:text-lg text-base font-semibold text-slate-600'>Our furniture is a blend of tradition and innovation, handcrafted with precision and care to ensure exceptional quality and timeless design</h1>
          </div>
    </div>
    <div className='flex flex-col py-4 border space-y-3 rounded-md shadow-[rgba(60,64,67,0.3)_0px_1px_2px_0px,rgba(60,64,67,0.15)_0px_2px_6px_2px] justify-center items-center'>
          <div className='lg:w-52 w-44 items-center justify-center flex h-44 lg:h-52 shadow-[rgba(60,64,67,0.3)_0px_1px_2px_0px,rgba(60,64,67,0.15)_0px_2px_6px_2px] overflow-hidden  rounded-full '>
           <img src="images\about14.png" alt="" className='lg:w-36 w-28 h-28 lg:h-36' />
          </div>
          <div className='flex flex-col text-center space-y-3'>
            <h1 className='lg:text-3xl text-2xl font-bold text-slate-800'>Customer Commitment</h1>
            <h1  className='lg:text-lg text-base font-semibold text-slate-600'>Our customers are at the heart of everything we do. We strive to provide exceptional service, quality products, and a seamless shopping experience</h1>
          </div>
    </div>


      </div>


    </div>


<div>

</div>




      <Footer />
      <Footernav />      
       </div>
  )
}

export default About

