import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Footernav from '../components/Footernav';

const Payment = () => {
  const [selectedPayment, setSelectedPayment] = useState(null);

  const togglePayment = (method) => {
    setSelectedPayment(selectedPayment === method ? null : method);
  };

  const handleOrder = () => {
    alert("Your order has been successfully placed!");
  };

  return (
    <div>
      <Navbar />
      <div className='container py-8'>
        <div className='bg-pink-50 shadow-sm flex m-auto px-4 py-8 mt-5 w-full lg:w-2/4 space-y-2 justify-start rounded-md flex-col'>
          <h1 className='text-2xl py-4 font-semibold'>Payment Methods</h1>
          <div className='flex w-full space-y-4 flex-col'>

            {/* Online Payment Methods */}
            <div 
              className="flex border rounded-md hover:border-black transition-all duration-300 px-2 py-4 space-x-2 flex-row cursor-pointer" 
              onClick={() => togglePayment("online")}
            >
              <input type="radio" name="paymentOption" checked={selectedPayment === "online"} readOnly />
              <label className="text-lg font-semibold">Online Payment Methods</label>
            </div>
            <div className={`grid gap-5 grid-cols-1 lg:grid-cols-2 transition-all duration-300 overflow-hidden ${selectedPayment === "online" ? "max-h-80 opacity-100" : "max-h-0 opacity-0"}`}>
              {["Google Pay", "Phone Pay", "Paytm", "BHIM UPI"].map((method) => (
                <div key={method} className="flex px-2 py-3 space-x-2 border hover:border-black transition-all duration-300 rounded-md flex-row">
                  <input type="radio" name="upiMethod" />
                  <label>{method}</label>
                </div>
              ))}
            </div>

            {/* Cash On Delivery (COD) */}
            <div className="flex border rounded-md hover:border-black transition-all duration-300 px-2 py-4 space-x-2 flex-row cursor-pointer" onClick={() => togglePayment("cod")}>
              <input type="radio" name="paymentOption" checked={selectedPayment === "cod"} readOnly />
              <label className="text-lg font-semibold">Cash On Delivery (COD)</label>
            </div>
            <div className={`ml-5 pl-4 mt-3 transition-all duration-300 overflow-hidden ${selectedPayment === "cod" ? "max-h-40 opacity-100" : "max-h-0 opacity-0"}`}>
              <p className="text-sm text-gray-600">Note: Additional charges may apply for COD orders.</p>
              <ul className="mt-2 space-y-2">
                <li>
                  <input type="checkbox" id="codServiceCharge" />
                  <label htmlFor="codServiceCharge" className="ml-2 text-base font-medium">
                    I agree to pay the extra service charge for COD.
                  </label>
                </li>
                <li>
                  <input type="checkbox" id="codLimit" />
                  <label htmlFor="codLimit" className="ml-2 text-base font-medium">
                    My order value is within the COD limit.
                  </label>
                </li>
              </ul>
            </div>

            {/* EMI Payment Option */}
            <div className="flex border rounded-md hover:border-black transition-all duration-300 px-2 py-4 space-x-2 flex-row cursor-pointer" onClick={() => togglePayment("emi")}>
              <input type="radio" name="paymentOption" checked={selectedPayment === "emi"} readOnly />
              <label className="text-lg font-semibold">EMI (Equated Monthly Installment)</label>
            </div>
            <div className={`ml-5 pl-4 mt-3 transition-all duration-300 overflow-hidden ${selectedPayment === "emi" ? "max-h-40 opacity-100" : "max-h-0 opacity-0"}`}>
              <p className="text-sm text-gray-600">Choose your EMI plan:</p>
              <ul className="mt-2 space-y-2">
                {["3 Months EMI", "6 Months EMI", "12 Months EMI"].map((plan, index) => (
                  <li key={index}>
                    <input type="radio" name="emiPlan" id={`emi${index}`} />
                    <label htmlFor={`emi${index}`} className="ml-2">{plan}</label>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className='flex space-x-2 py-2 flex-row'>
            <input type="checkbox" className='' />
            <label htmlFor="" className=' lg:text-base font-normal text-sm'>Keep me informed on offers or promotions</label>
          </div>

       
            <button      onClick={handleOrder}  className='px-2 py-4 border hover:border-black transition-all duration-300 outline-none text-lg font-semibold rounded-md '>Order Now</button>
         
        </div>
      </div>
      <Footer />
      <Footernav />
    </div>
  );
};

export default Payment;
