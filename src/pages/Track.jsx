import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Footernav from '../components/Footernav'
import OrderTracking from '../components/OrderTracking'

const Track = () => {
  return (
    <div>
      <Navbar />


      <div className='flex flex-col gap-3 py-7 container'>
<div className='flex flex-col lg:flex-row gap-4'>
        <div className='flex flex-col w-full lg:w-2/3 '>
          <ul className='flex gap-2 items-center mb-3 font-medium'>
            <li>Home</li>
            <li><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 320 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M278.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L210.7 256 73.4 118.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l160 160z"></path></svg></li>
            <li>Orders</li>
            <li><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 320 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M278.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L210.7 256 73.4 118.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l160 160z"></path></svg></li>
            <li> Order ID: 1029348756</li>
          </ul>
          <div className=' flex gap-2  flex-col'>

            <h1 className='text-2xl text-black font-bold'>Order Number: <br /> 1029348756</h1>

            <div className='flex flex-row py-6 justify-between'>
              <div className='flex flex-col'>
                <h1 className='text-xl text-black font-semibold'>Order Date</h1>
                <h1 className='text-sm text-gray-600 font-semibold'>Tue, 10/3/2025</h1>
              </div>
              <div className='flex flex-col'>
                <h1 className='text-xl text-black font-semibold'>Payment Method</h1>
                <h1 className='text-sm text-gray-600 font-semibold'>Credit/Debit Card....8997</h1>
              </div>

            </div>


           


          </div>
        </div>
        <div className='flex flex-col w-1/3 '>



        </div>
        </div>
        <OrderTracking />

        <div className='flex flex-col lg:flex-row gap-4'>
          <div className='w-full lg:w-2/3 '>
          <div className='flex flex-col   space-y-3'>

<div className='w-full border rounded-md flex flex-col lg:flex-row gap-5  p-4 shadow-sm'>
  <div className='w-[62%] lg:w-[19%] '>
    <div className='bg-pink-100 h-full flex justify-center rounded-lg items-center'>
      <img src="images\productItems1.webp" alt="" className='w-[72%] ' />
    </div>
  </div>
  <div className='w-3/4 flex flex-col gap-1'>
    <h2 className="text-black lg:text-xl text-lg font-medium break-words">
      Elegant Vase with Golden Ornaments
    </h2>
    <p class="text-gray-500 text-xs lg:text-base ">A beautifully crafted vase adorned with intricate golden ornaments, perfect for adding a touch of luxury to any space.</p>
    <h4 className="text-gray-500"><span className='text-black font-semibold'>Price :</span> 1499/-</h4>

    <h4 className="text-gray-500"><span className='text-black font-semibold'>Color :</span> M</h4>
    <p className="text-black flex gap-3"><span className='text-black font-semibold'>Stocks :</span> <span className='flex items-center gap-2 text-green-500'>
      <span>
        <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
      </span>
      <span> In Stock</span>
    </span></p>


  </div>
</div>


{/* <div className='flex flex-row py-5'>
  <div className='w-2/3 flex'>
    <div className='px-2'>
      <h1 className='text-3xl text-black font-semibold'>Total</h1>

    </div>
  </div>
  <div className='w-1/3 flex justify-between'>
    <div className='flex space-y-3 flex-col'>
      <h1 className='text-gray-600 text-base font-medium'>Subtotal:</h1>
      <h1 className='text-gray-600 text-base font-medium'>Delivery:</h1>
      <h1 className='text-black text-base font-semibold'>Total:</h1>
      <h1 className='text-gray-600 text-base font-medium'>(Included tax)</h1>
    </div>
    <div className='flex space-y-3 flex-col items-end'>
      <h1 className='text-gray-600 text-base font-medium'> 1499/-</h1>
      <h1 className='text-gray-600 text-base font-medium'>100/-</h1>
      <h1 className='text-black text-base font-semibold'>1599/-</h1>

    </div>
  </div>
</div> */}

<div>
<div className="flex flex-col lg:flex-row lg:space-x-6 mb-6 border shadow-sm rounded-md">
<div className="flex-1 p-6 bg-white rounded-lg">
<h4 className="text-2xl font-semibold mb-3 text-gray-800">Delivery Address</h4>

<div className="space-y-2">
<p className="text-gray-700"><strong>Street Address:</strong> 123 Main Street</p>
<p className="text-gray-700"><strong>City:</strong> Springfield</p>
<p className="text-gray-700"><strong>State:</strong> Illinois</p>
<p className="text-gray-700"><strong>Postal Code:</strong> 62701</p>
<p className="text-gray-700"><strong>Country:</strong> United States</p>
</div>
</div>

<div className="flex-1 p-6 bg-white rounded-lg">
<h4 className="text-2xl font-semibold mb-3 text-gray-800">Billing Address</h4>


<div className="space-y-2">
<p className="text-gray-700"><strong>Street Address:</strong> 456 Another St</p>
<p className="text-gray-700"><strong>City:</strong> Chicago</p>
<p className="text-gray-700"><strong>State:</strong> Illinois</p>
<p className="text-gray-700"><strong>Postal Code:</strong> 60601</p>
<p className="text-gray-700"><strong>Country:</strong> United States</p>
</div>
</div>
</div>


</div>



</div>
          </div>
          <div className='w-full lg:w-1/3'>
          <div className="p-6 bg-white rounded-lg shadow-sm border border-gray-300">
  <h3 className="text-xl font-semibold mb-4">Order Summary</h3>
  <div className="space-y-4">
    
    {/* Product Name */}
    <div className="flex justify-between">
      <span className="font-semibold">Elegant Vase with Golden Ornaments</span>
      <span className="text-gray-500">x1</span> {/* Quantity */}
    </div>

    {/* Subtotal */}
    <div className="flex justify-between">
      <span>Subtotal:</span>
      <span>₹11,999/-</span>
    </div>

    {/* Delivery */}
    <div className="flex justify-between">
      <span>Delivery:</span>
      <span>₹999/-</span>
    </div>

    {/* Discount */}
    <div className="flex justify-between">
      <span>Discount (10% off):</span>
      <span>- ₹1,199/-</span>
    </div>

    {/* Taxes */}
    <div className="flex justify-between">
      <span>Taxes:</span>
      <span>₹600/-</span>
    </div>

    {/* Total */}
    <div className="flex justify-between font-semibold">
      <span>Total:</span>
      <span>₹12,399/-</span>
    </div>

    {/* Estimated Delivery Date */}
    <div className="flex justify-between text-sm text-gray-600">
      <span>Estimated Delivery Date:</span>
      <span>March 25, 2025</span>
    </div>

    {/* Payment Method */}
    <div className="flex justify-between mt-4">
      <span className="font-semibold">Payment Method:</span>
      <span>Credit Card (Visa)</span> {/* Example of selected payment method */}
    </div>

    {/* Billing Address */}
    <div className="mt-4">
      <h4 className="text-lg font-semibold">Billing Address</h4>
      <p className="text-gray-700">123 Main Street, Springfield, Illinois, 62701, USA</p>
    </div>

  </div>
</div>




          </div>

        </div>

      </div>


      <Footer />
      <Footernav />
    </div>
  )
}

export default Track
