import React from 'react'

const Yourdream = () => {
  return (
    <div>
    <div className='py-10 lg:py-20 container '>
        
<div className='flex flex-col lg:space-x-4 lg:flex-row'>
    <div className='flex flex-col lg:space-x-5  w-full lg:w-[60%] lg:flex-row'>

<div className='lg:w-[35rem]  overflow-hidden h-[39rem]  lg:h-[40rem]'>
    <img src="images/dream2.jpg" alt=""  />
</div>

<div className='flex space-y-5 relative flex-col'>
<div className='lg:w-[23rem]  overflow-hidden lg:mt-[6.5rem] h-[17rem]'>
    <img src="images/dream1.png" alt="" className='h-full w-full' />
</div>

<div className=' lg:w-[33rem]  lg:h-[25rem] lg:top-[23.5rem]   lg:-left-40 lg:absolute overflow-hidden'>
    <img src="images/dream3.jpg" alt="" />

</div>

</div>


    </div>

    <div className='flex space-y-5   pt-5 lg:w-[40%] lg:pt-[5.875rem] w-full flex-col'>
       <h1 className='lg:text-5xl text-3xl text-[#787878]  font-bold '>Design your dream space with <span className='text-black'>Deconest</span> </h1>
           
           <h1 className=' text-base font-medium text-gray-500 lg:px-3'>
           Your home deserves furniture that’s more than just functional—it should tell a story. Our carefully crafted pieces blend elegance with comfort, ensuring every corner of your space reflects your personality. Whether you seek modern minimalism or timeless classics, we bring designs that transform houses into homes.
           </h1>

           <div className='flex space-y-4 flex-col lg:px-3'>
            <div className='flex space-y-1 flex-col'>
                <h1 className='text-2xl font-semibold hover:ml-5 cursor-pointer transition-all transform duration-300 text-black text-start '>Custom Creations </h1>
                <h1 className='text-base text-gray-500 font-medium text-start '>Custom-crafted furniture that seamlessly blends with your space and personality. </h1>
            </div>
            <div className='flex space-y-1  flex-col'>
                <h1 className='text-2xl font-semibold hover:ml-5 cursor-pointer transition-all transform  duration-300  text-black  '>Premium Quality </h1>
                <h1 className='text-base text-gray-500 font-medium '>Crafted from high-quality materials to ensure durability and timeless appeal. </h1>
            </div>
            <div className='flex space-y-1 flex-col'>
                
                <h1 className='text-2xl font-semibold hover:ml-5 cursor-pointer transition-all transform duration-300 text-black text-start '>Smart Space Solutions </h1>
                <h1 className='text-base text-gray-500 font-medium text-start '> Functional designs that maximize space without compromising on aesthetics. </h1>
            </div>

            <div className='flex space-y-1 flex-col'>
                <h1 className='text-2xl font-semibold hover:ml-5 cursor-pointer transition-all transform duration-300 text-black  '>Elegant Decor</h1>
                <h1 className='text-base text-gray-500 font-medium  '>A curated collection of decorative pieces to complement your interiors </h1>
            </div>
      
           
           </div>

    </div>
</div>


    </div>



    </div>
  )
}

export default Yourdream
