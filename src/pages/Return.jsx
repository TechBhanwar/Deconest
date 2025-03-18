import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Footernav from '../components/Footernav';
import { Link } from 'react-router-dom';

const Return = () => {
  const [showFields, setShowFields] = useState(false);

  return (
    <div>
      <Navbar />

      <div className='flex flex-col py-8 mb-10 mt-5 rounded-lg container'>
        <div className='space-y-3 py-4'>
          <h1 className='text-3xl lg:text-4xl font-semibold text-slate-800'>Return Request</h1>
          <h1 className='text-lg lg:text-xl font-semibold text-slate-600'>
            Learn about our return policy. If you need any help, feel free to{' '}
            <span className='underline text-blue-600 '>
              <Link to="/contact">contact us</Link>
            </span>.
          </h1>
        </div>

        <div className='flex gap-5 flex-col lg:flex-row'>
          <div className='lg:w-2/3 px-3 lg:px-5 py-5 space-y-5 flex flex-col border'>

           
            <div className='flex flex-row justify-between'>
              <h1 className='text-lg font-medium text-black'>1 item selected</h1>
              <h1 className='text-lg font-medium text-blue-500'>Select all</h1>
            </div>

            <div className='flex space-x-5 flex-row'>
            <div className="flex items-center gap-2">
      <input type="checkbox" id="morning-1" className="hidden peer"/>
      <label for="morning-1" className="flex items-center rounded-md cursor-pointer transition-all border border-gray-300 shadow-sm peer-checked:bg-green-500">
        <div className="w-5 h-5 flex items-center justify-center rounded-md peer-checked:bg-green-500 transition-all">
          <svg className="w-3.5 h-3.5 text-white transition-all " viewBox="0 0 12 10" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="1.5 6 4.5 9 10.5 1"></polyline>
          </svg>
        </div>
      </label>
    </div>

              <div className='bg-pink-100 px-3 py-1 rounded-md h-20 w-20 '>
                <img src="/images/productItems14.webp" alt="" className='w-full h-full' />
              </div>

              <div className='flex space-y-2 flex-col'>
                <h1 className='text-base lg:text-lg text-gray-800 font-normal lg:font-medium'>
                  Sophisticated White and Gold Lamp for Luxury Interiors
                </h1>
                <h1 className='text-base text-gray-600 font-normal'>White and Golden Lamp</h1>
              </div>

              <h1 className='text-lg font-medium text-end'>2999 ₹/-</h1>
            </div>

            <div className='flex space-y-3 flex-col'>
              <div className='px-3 py-3 lg:py-4 lg:w-[30rem] flex rounded-md border justify-end items-end'>
                <select className='w-full border-none outline-none'>
                  <option value="Reason">Reason</option>
                  <option value="">Defective Product</option>
                  <option value="">Wrong Product</option>
                  <option value="">Color Issue</option>
                  <option value="">Other</option>
                </select>
              </div>
              <div className='px-3 py-3 lg:py-4 lg:w-[30rem] flex rounded-md border justify-end items-end'>
                <input type="text" placeholder='Note (Optional)' className='w-full border-none outline-none' />
              </div>
            </div>

        
            <div className='flex space-x-5 flex-row'>
              <div className="flex items-center gap-2">
                <input 
                  type="checkbox" 
                  id="toggleFields" 
                  className="hidden peer"
                  onChange={() => setShowFields(!showFields)}
                />
                <label htmlFor="toggleFields" className="flex items-center rounded-md cursor-pointer transition-all border border-gray-300 shadow-sm peer-checked:bg-green-500">
                  <div className="w-5 h-5 flex items-center justify-center rounded-md peer-checked:bg-green-500 transition-all">
                    <svg className="w-3.5 h-3.5 text-white transition-all" viewBox="0 0 12 10" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="1.5 6 4.5 9 10.5 1"></polyline>
                    </svg>
                  </div>
                </label>
              </div>

              <div className='bg-pink-100 px-3 py-1 rounded-md h-20 w-20 '>
                <img src="/images/productItems14.webp" alt="" className='w-full h-full' />
              </div>

              <div className='flex space-y-2 flex-col'>
                <h1 className='text-base lg:text-lg text-gray-800 font-normal lg:font-medium'>
                  Sophisticated White and Gold Lamp for Luxury Interiors
                </h1>
                <h1 className='text-base text-gray-600 font-normal'>White and Golden Lamp</h1>
              </div>

              <h1 className='text-lg font-medium text-end'>2999 ₹/-</h1>
            </div>

          
            {showFields && (
              <div className='flex space-y-3 flex-col'>
                <div className='px-3 py-3 lg:py-4 lg:w-[30rem] flex rounded-md border justify-end items-end'>
                  <select className='w-full border-none outline-none'>
                    <option value="Reason">Reason</option>
                    <option value="">Defective Product</option>
                    <option value="">Wrong Product</option>
                    <option value="">Color Issue</option>
                    <option value="">Other</option>
                  </select>
                </div>
                <div className='px-3 py-3 lg:py-4 lg:w-[30rem] flex rounded-md border justify-end items-end'>
                  <input type="text" placeholder='Note (Optional)' className='w-full border-none outline-none' />
                </div>
              </div>
            )}

          </div>

         
         
          <div className='lg:w-1/3 flex space-y-5 flex-col'>
            <div className='flex flex-col px-5 py-4 shadow-md'>
              <div className='justify-between flex py-3 border-b flex-row'>
                <h1 className='text-lg text-black font-medium'>Returning</h1>
                <h1 className='text-lg text-black font-medium'>1 item</h1>
              </div>
              <div className='flex py-3'>
                <h1 className='text-lg text-black font-medium'>
                  Return and refund eligibility will be based on our{' '}
                  <span className='text-blue-400'>refund policy</span>
                </h1>
              </div>
            </div>

            <button className="bg-black text-white px-7 h-12 lg:h-14 py-3 lg:w-full text-lg font-semibold rounded-lg">
              Request Return
            </button>

            <button className="border border-black px-7 h-12 lg:h-14 py-3 lg:w-full text-lg font-semibold rounded-lg">
              Cancel
            </button>
          </div>
        </div>
      </div>

      <Footer />
      <Footernav />
    </div>
  );
};

export default Return;
