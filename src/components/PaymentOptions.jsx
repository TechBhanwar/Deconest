import { useState } from "react";

const PaymentOptions = () => {
  const [selected, setSelected] = useState("bank");

  return (
    <div className="py-8 space-y-4">
      {/* Direct Bank Transfer */}
      <div>
        <label className="flex items-center space-x-2 cursor-pointer" onClick={() => setSelected("bank")}>
          <span className={`w-5 h-5 border-2 border-[#D9D9D9] rounded-full flex items-center justify-center`}>
            {selected === "bank" && <span className="w-2.5 h-2.5 bg-black rounded-full"></span>}
          </span>
          <span className="text-black text-lg font-semibold">Direct Bank Transfer</span>
        </label>
        <div className={`overflow-hidden transition-all duration-500 ${selected === "bank" ? "h-full opacity-100 mt-3" : "h-0 opacity-0"}`}>
          <div className="p-3 flex flex-col gap-3">
          <input type="text" name="" id="" placeholder="Account number" className="placeholder:font-semibold border w-full  border-[#D9D9D9] focus:outline-none h-16 px-4" />
          <input type="text" name="" id="" placeholder="AccountHolder name" className="placeholder:font-semibold border w-full  border-[#D9D9D9] focus:outline-none h-16 px-4" />
          <input type="text" name="" id="" placeholder="Bank IFSC Code" className="placeholder:font-semibold border w-full  border-[#D9D9D9] focus:outline-none h-16 px-4" />
          <button className="bg-black text-white text-lg h-16 px-4 font-semibold">Procces to Pay</button>

          </div>
        </div>
      </div>

      {/* Check Payments */}
      <div>
        <label className="flex items-center space-x-2 cursor-pointer" onClick={() => setSelected("check")}>
          <span className={`w-5 h-5 border-2 border-[#D9D9D9] rounded-full flex items-center justify-center`}>
            {selected === "check" && <span className="w-2.5 h-2.5 bg-black rounded-full"></span>}
          </span>
          <span className="text-black text-lg font-semibold">Check Payments</span>
        </label>
        <div className={`overflow-hidden transition-all duration-500 ${selected === "check" ? "h-full opacity-100 mt-3" : "h-0 opacity-0"}`}>
          <div className=" py-1  text-base font-semibold  text-[#787878]  rounded">
          Please send a check to Store Name, Store Street, Store Town, Store State / County, Store Postcode.
          </div>
        </div>
      </div>

      {/* Cash on Delivery */}
      <div>
        <label className="flex items-center space-x-2 cursor-pointer" onClick={() => setSelected("cod")}>
          <span className={`w-5 h-5 border-2 border-[#D9D9D9] rounded-full flex items-center justify-center`}>
            {selected === "cod" && <span className="w-2.5 h-2.5 bg-black rounded-full"></span>}
          </span>
          <span className="text-black text-lg font-semibold">Cash on Delivery</span>
        </label>
        <div className={`overflow-hidden transition-all duration-500 ${selected === "cod" ? "h-full opacity-100 mt-3" : "h-0 opacity-0"}`}>
        <div className=" py-1  text-base  font-semibold  text-[#787878]  rounded">
        Pay with cash upon delivery.
                  </div>
        </div>
      </div>

      {/* PayPal */}
      <div>
        <label className="flex items-center space-x-2 cursor-pointer" onClick={() => setSelected("paypal")}>
          <span className={`w-5 h-5 border-2 border-[#D9D9D9] rounded-full flex items-center justify-center`}>
            {selected === "paypal" && <span className="w-2.5 h-2.5 bg-black rounded-full"></span>}
          </span>
          <span className="text-black text-lg font-semibold">PayPal</span>
        </label>
        <div className={`overflow-hidden transition-all duration-500 ${selected === "paypal" ? "h-full opacity-100 mt-3" : "h-0 opacity-0"}`}>
          <div className="py-1 flex flex-col gap-2">
           <span className="text-base  font-semibold  text-[#787878]">Pay via PayPal.</span>
           <button className="bg-[#ffc439] text-white text-lg h-16 px-4 font-semibold flex justify-center items-center rounded-md">
            <img src="\images\paypal.svg" alt="" />
           </button>
           <button className="bg-[#2C2E2F] text-white text-lg h-16 px-4 font-semibold flex justify-center gap-2 items-center rounded-md">
           <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" height="1.5rem" width="1.5rem" xmlns="http://www.w3.org/2000/svg"><path d="M435.2 80H76.8c-24.9 0-44.6 19.6-44.6 44L32 388c0 24.4 19.9 44 44.8 44h358.4c24.9 0 44.8-19.6 44.8-44V124c0-24.4-19.9-44-44.8-44zm0 308H76.8V256h358.4v132zm0-220H76.8v-44h358.4v44z"></path></svg>
         <span>Debit or Credit Card</span>
           </button>

           <span className="text-[#7b8388] text-sm flex  gap-2 justify-center">Powered by   <img src="\images\paypal.svg" alt="" className="w-14 h-14" /></span>

          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentOptions;
