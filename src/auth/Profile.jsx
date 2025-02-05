import React from 'react'
import Navbar from '../components/Navbar'
import Footernav from '../components/Footernav'
import { Link } from "react-router-dom";

const Profile = () => {
  return (
    <div>
      <Navbar />
    <div className='container'>
    <div className='flex py-6 flex-row'>
       <div className='flex-col bg-white border py-3  space-y-4 flex w-[30%]'>
            <div className='flex px-3  flex-row'>
              <div className='bg-pink-50 border  rounded-full'>
                <span>
                <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" aria-hidden="true" height="8em" width="8em" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M7.5 6a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM3.751 20.105a8.25 8.25 0 0 1 16.498 0 .75.75 0 0 1-.437.695A18.683 18.683 0 0 1 12 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 0 1-.437-.695Z" clip-rule="evenodd"></path></svg>
                </span>
              </div>
              <h1 className='text-black text-2xl font-bold px-6 py-10 ' >Hello User</h1>
            </div>
   
           <div className='bg-transparent space-y-3 px-3 flex flex-col'>

            <h1 className='text-black text-2xl font-semibold'>Basic Information</h1>
           <input type="text" name="" id="" className='border-none bg-[#f2f4f3] outline-none px-3 py-3 rounded-md  ' placeholder='Name' />
           <input type="text" name="" id="" className='border-none bg-[#f2f4f3] outline-none px-3 py-3 rounded-md ' placeholder='Username' />
           <input type="text" name="" id="" className='border-none bg-[#f2f4f3] outline-none px-3 py-3 rounded-md ' placeholder='Email' />
           <input type="text" name="" id="" className='border-none bg-[#f2f4f3] outline-none px-3 py-3 rounded-md ' placeholder='Phone Number' />
           
           <h1 className='text-black text-2xl font-semibold'> Personal  Information</h1>
             <label htmlFor="Gender" className='text-black text-xl font-medium'>Gender</label> 
             <div className='flex space-x-3 flex-row'>
             <span className='flex flex-row  space-x-2'>
              <input type="checkbox" />
              <label htmlFor="male">Male</label>
             </span>
             <span className='flex flex-row  space-x-2'>
              <input type="checkbox" />
              <label htmlFor="male">Female</label>
             </span>
             </div>
             <input type="text" name="" id="" className='border-none bg-[#f2f4f3] outline-none px-3 py-3 rounded-md ' placeholder='Address' />
             
             <h1 className='text-black text-2xl font-semibold'> Payment Information </h1>
             <input type="text" name="" id="" className='border-none bg-[#f2f4f3] outline-none px-3 py-3 rounded-md ' placeholder='Bank and UPI details' />
             <input type="text" name="" id="" className='border-none bg-[#f2f4f3] outline-none px-3 py-3 rounded-md ' placeholder='Payment and Refund' />
            
             <button className='bg-[#f2f4f3] py-4 px-5 rounded-3xl text-xl font-semibold' >
                Log Out
              </button>

           </div>
       
       </div>

       <div className='flex flex-col space-y-3 px-5 w-[70%]'>
          <div className=' flex justify-center py-3'>
            <h1 className='text-black text-3xl font-semibold'> Your Order History</h1>
          </div>

          <div className='grid grid-cols-1 gap-5 lg:grid-cols-2'>
            <div className='flex  space-x-3 flex-row'>
              <div className='bg-pink-50 '>
                <img src="/images/product1.png" alt="" className='w-32' />
              </div>
              <div className='flex space-y-2 flex-col'>
                <h1 className='text-black text-lg font-medium'>Egg Dining Table</h1>
                <h1 className='text-black text-base font-medium'>Color:White</h1>
                <h1 className='text-black text-base font-medium'>Price:$55.00</h1>
                
                <h1 className='text-black text-base font-medium'>Delevered on 23 march 2023</h1>
                 
              </div>
            </div>

            <div className='flex  space-x-3 flex-row'>
              <div className='bg-pink-50 '>
                <img src="/images/product2.png" alt="" className='w-32' />
              </div>
              <div className='flex space-y-2 flex-col'>
                <h1 className='text-black text-lg font-medium'>Egg Dining Table</h1>
                <h1 className='text-black text-base font-medium'>Color:White</h1>
                <h1 className='text-black text-base font-medium'>Price:$55.00</h1>

                <h1 className='text-black text-base font-medium'>Delevered on 23 march 2023</h1>
                 
              </div>
            </div>

            <div className='flex  space-x-3 flex-row'>
              <div className='bg-pink-50 '>
                <img src="/images/product3.png" alt="" className='w-32' />
              </div>
              <div className='flex space-y-2 flex-col'>
                <h1 className='text-black text-lg font-medium'>Egg Dining Table</h1>
                <h1 className='text-black text-base font-medium'>Color:White</h1>
                <h1 className='text-black text-base font-medium'>Price:$55.00</h1>

                <h1 className='text-black text-base font-medium'>Delevered on 23 march 2023</h1>
                 
              </div>
            </div>

            <div className='flex   space-x-3 flex-row'>
              <div className='bg-pink-50 '>
                <img src="/images/product5.png" alt="" className='w-32' />
              </div>
              <div className='flex space-y-2 flex-col'>
                <h1 className='text-black text-lg font-medium'>Egg Dining Table</h1>
                <h1 className='text-black text-base font-medium'>Color:White</h1>
                <h1 className='text-black text-base font-medium'>Price:$55.00</h1>

                <h1 className='text-black text-base font-medium'>Delevered on 23 march 2023</h1>
                 
              </div>
            </div>


          </div>

          
       </div>
    </div>


    </div>
               
    
      <Footernav />
    </div>
  )
}

export default Profile