import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Footernav from '../components/Footernav'

const Track = () => {
  return (
    <div>
      <Navbar />


<div className='flex flex-col gap-3 py-7 container lg:flex-row'>

 <div className='flex flex-col w-2/3 '>
 <div className=' flex space-y-4  flex-col'>

  <h1 className='text-3xl text-black font-bold'>Order Number: <br /> 1029348756</h1>
   
<div className='flex flex-row py-6 justify-between'>
   <div className='flex flex-col'>
    <h1 className='text-xl text-black font-semibold'>Order Date</h1>
    <h1 className='text-base text-gray-600 font-semibold'>Tue, 10/3/2025</h1>
   </div>
   <div className='flex flex-col'>
    <h1 className='text-xl text-black font-semibold'>Payment Method</h1>
    <h1 className='text-base text-gray-600 font-semibold'>Credit/Debit Card....8997</h1>
   </div>

</div>


<div className='flex flex-col   space-y-3'>

<div className='w-full border rounded-md flex flex-col lg:flex-row gap-5  p-4 shadow-sm'>
              <div className='w-[62%] lg:w-[19%] '>
                <div className='bg-pink-100 h-full flex justify-center rounded-lg items-center'>
                  <img src="\images\productItems1.webp" alt="" className='w-[72%] ' />
                  </div>  
              </div>
              <div className='w-3/4 flex flex-col gap-1'>
              <h2 className="text-black lg:text-xl text-lg font-medium break-words">
              Elegant Vase with Golden Ornaments
                  </h2>
                  <p class="text-gray-500 text-xs lg:text-base ">A beautifully crafted vase adorned with intricate golden ornaments, perfect for adding a touch of luxury to any space.</p>
                  <h4 className="text-gray-500"><span className='text-black font-semibold'>Price :</span> 1499/-</h4>
                 
                  <h4 className="text-gray-500"><span className='text-black font-semibold'>Color :</span> M</h4>
                  <p className="text-black flex gap-3"><span className='text-black font-semibold'>Stocks :</span> <span  className='flex items-center gap-2 text-green-500'>
                              <span>
                              <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
                              </span>
                             <span> In Stock</span>
                            </span></p>
                          

              </div>
            </div>


            <div className='grid grid-cols-1 py-4 gap-3 lg:grid-cols-3'>
                <div className=''>
                    <h1 className='text-2xl text-black font-semibold'>Total</h1>

                </div>
                <div className='flex space-y-3 flex-col'>
                <h1 className='text-gray-600 text-base font-medium'>Subtotal:</h1>
                <h1 className='text-gray-600 text-base font-medium'>Delivery:</h1>
                <h1 className='text-black text-base font-semibold'>Total:</h1>
                <h1 className='text-gray-600 text-base font-medium'>(Included tax)</h1>
                </div>
                <div className='flex space-y-3 flex-col'>
                <h1 className='text-gray-600 text-base font-medium'> 1499/-</h1>
                <h1 className='text-gray-600 text-base font-medium'>100/-</h1>
                <h1 className='text-black text-base font-semibold'>1599/-</h1>
               
                </div>
            </div>
            

  
</div>

 </div>
 
 
 </div>
 <div className='flex flex-col w-1/3 '>
 
 
 
 </div>

</div>


      <Footer />
      <Footernav />
    </div>
  )
}

export default Track
