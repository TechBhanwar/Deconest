import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Footernav from "../components/Footernav";

const Otp = () => {
  const [activeIndex, setActiveIndex] = useState(null); // Track active input index

  return (
    <div>
      <Navbar />

      <div className="flex flex-col px-5 py-5 mt-7 mb-7 container justify-center items-center">
        <div className="border  px-7 py-6 w-full lg:w-[35rem]  space-y-7 rounded-[1.375rem]">
    <div className=" hidden">
    <div className=" ">
       <h1 className="text-black lg:text-left text-center font-semibold text-2xl lg:text-3xl">Verification Code</h1>
          <h1 className="text-[#787878] lg:text-left text-center font-medium text-base lg:text-lg">
            We have sent the verification code to your email address
          </h1>
       </div>

          <div className="flex flex-row justify-center space-x-4">
            {[0, 1, 2, 3].map((index) => (
              <input
                key={index}
                type=""
                className={`w-9 h-9 lg:w-12 lg:h-12 rounded-md border outline-none transition-colors text-center duration-300 ${
                  activeIndex === index ? "border-black" : "border-gray-300"
                }`}
                onFocus={() => setActiveIndex(index)}
                onBlur={(e) => setActiveIndex(e.target.value.length > 0 ? index : null)}
              />
            ))}
          </div>

          
          <div className="flex justify-between items-center w-full">
               
               <span className="text-[#787878] underline cursor-pointer">
                 Resand OTP
               </span>
               <span className="text-[#787878] hover:underline cursor-pointer">
                 01:00
               </span>

             
             </div>
             <button type="button" className='bg-[#f2f4f3] w-full lg:py-4 py-2 px-5 rounded-3xl text-[#787878] text-lg lg:text-xl font-semibold' > 
                Confirm
              </button>
    </div>

    <div className="flex space-y-5 flex-col">
    <h1 className="text-black lg:text-left  text-center font-semibold text-2xl lg:text-3xl">Change Password</h1>

<div className="space-y-2">    
<label htmlFor="New Password">New Password</label>
<input type="text" className="py-4 px-3 w-full outline-none rounded-md border" placeholder="Enter your new password" />
</div>

<div className="space-y-2">
<label htmlFor="">Confirm password</label>
<input type="text" className="py-4 px-3 w-full rounded-md outline-none border" placeholder="Confirm password" />
</div>

<button type="button" className='bg-[#f2f4f3] w-full py-4 px-5 rounded-3xl text-[#787878] text-xl font-semibold' > 
                Save
              </button>

    </div>

        </div>
        
      </div>

      <Footer />
      <Footernav />
    </div>
  );
};

export default Otp;
