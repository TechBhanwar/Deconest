import React from "react";
import Navbar from "../components/Navbar";
import Footernav from "../components/Footernav";
import Footer from "../components/Footer";
import { Link } from 'react-router-dom';
const CheckoutPage = () => {
  // const [step, setStep] = useState(1); // Track which step is active
  // const [formData, setFormData] = useState({
  //   name: "",
  //   email: "",
  //   phone: "",
  //   address: "",
  //   city: "",
  //   state: "",
  //   zip: "",
  //   country: "",
  //   shippingMethod: "standard",
  // });

  // const handleChange = (e) => {
  //   setFormData({ ...formData, [e.target.name]: e.target.value });
  // };

  // const nextStep = () => {
  //   setStep(step + 1);
  // };

  // const prevStep = () => {
  //   setStep(step - 1);
  // };

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   alert("Order placed successfully!");
  // };

  return (
    <div>
    <Navbar />
     
     <div className="container py-4">
       
       <div className="flex py-5 flex-col lg:flex-row border rounded-lg" >

         <div className="flex flex-col w-full lg:order-1 order-2 lg:w-2/3 space-y-4 lg:px-8 py-4" >
              <div className=" flex">
              <h1 className="text-2xl font-semibold">Shipping Detailes</h1>
              </div>

            <div className="grid grid-cols-1 lg:grid-cols-2">
               <label htmlFor="" className="lg:text-lg text-sm py-2 ">First Name</label>
               <input type="text" name="" id="" className="border bg-[#f2f4f3] outline-none px-2 py-2 rounded-md" />
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2">
               <label htmlFor="" className="lg:text-lg text-sm py-2 ">Last Name</label>
               <input type="text" name="" id="" className="border bg-[#f2f4f3]  outline-none px-2 py-2 rounded-md" />
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2">
               <label htmlFor="" className="lg:text-lg text-sm py-2 ">Pin Code</label>
               <input type="Number" name="" id="" className="border  bg-[#f2f4f3] outline-none px-2 py-2 rounded-md" />
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2">
               <label htmlFor="" className="lg:text-lg text-sm py-2 ">Address Line 1</label>
               <input type="text" name="" id="" className="border  bg-[#f2f4f3] outline-none px-2 py-2 rounded-md" />
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2">
               <label htmlFor="" className="lg:text-lg text-sm py-2 ">Address Line 2</label>
               <input type="text" name="" id="" className="border  bg-[#f2f4f3] outline-none px-2 py-2 rounded-md" />
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2">
               <label htmlFor="" className="lg:text-lg text-sm py-2 ">Muncipality</label>
               <input type="text" name="" id="" className="border  bg-[#f2f4f3] outline-none px-2 py-2 rounded-md" />
            </div>
            <div className="grid grid-cols-1 ">
               <h1  className="lg:text-lg text-sm font-medium py-2 ">Select Delevery Method</h1>
              <span className="flex space-x-2 flex-row">
              <input type="radio" name="" id=""  />
              <label htmlFor="">Standrd <span className="text-orange-500 font-medium">Free</span></label>
              </span>
              <span className="flex space-x-2 flex-row">
              <input type="radio" name="" id=""  />
              <label htmlFor="" className="text-base font-medium">Express <span className=" text-sm font-light">CAD 40.00</span></label>
              </span>
              
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2">
               <label htmlFor="" className="lg:text-lg text-sm py-2 ">Shipping Phone</label>
               <input type="text" name="" id="" className="border  bg-[#f2f4f3] outline-none px-2 py-2 rounded-md" />
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2">
               <label htmlFor="" className="lg:text-lg text-sm py-2 ">Email</label>
               <input type="text" name="" id="" className="border  bg-[#f2f4f3] outline-none px-2 py-2 rounded-md" />
            </div>

            <div className="flex  flex-row space-x-3">
               
               <input type="checkbox" name="" id=""  />
               <label htmlFor="">Save Your Delivery Details </label>
            </div>
            <div className="flex items-start  flex-row space-x-3 justify-start">
            <input type="checkbox" required className="mt-[5px]" /> 
              <label >
  
  I have read and consent to Deconest processing my information in accordance with the 
  <a href="/">Privacy Statement</a> and <a href="/">Cookie Policy</a>.
</label>
            </div>

             <div className="grid grid-cols-1 ">
              <div className="flex justify-between py-3">
              <Link to="/productcart" >   
             <button className="py-3 rounded-md text-base flex flex-row justify-center font-medium px-2 border outline-none bg-black text-white">
  
  Back to Cart 
  
</button>
</Link>

             <Link to="/payment" >         
  <button className="py-3 rounded-md text-base flex flex-row justify-center font-medium px-2 border outline-none bg-black text-white">
  
    Continue to Pay 
 
    <span className="py-1">
      <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
        <path fill="none" strokeLinejoin="round" strokeWidth="32" d="M160 336V48l32 16 32-16 31.94 16 32.37-16L320 64l31.79-16 31.93 16L416 48l32.01 16L480 48v224"></path>
        <path fill="none" strokeLinejoin="round" strokeWidth="32" d="M480 272v112a80 80 0 0 1-80 80 80 80 0 0 1-80-80v-48H48a15.86 15.86 0 0 0-16 16c0 64 6.74 112 80 112h288"></path>
        <path fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="32" d="M224 144h192m-128 80h128"></path>
      </svg>
    </span>
    
  </button>
  </Link> 
  </div>
             </div>
            
           
           
             
         </div>


         <div className="flex flex-col space-y-8 lg:order-2 order-1  lg:px-8  py-4 w-full lg:w-1/3 ">
         <div className=" flex">
              <h1 className="text-2xl font-semibold">Summary</h1>
              </div>
           <div className="flex justify-between flex-row">
            <div className="flex space-x-2 flex-row">
              <div className="border px-3 items-center flex rounded-md  w-20 h-24 bg-pink-50 py-2">
                <img src="/images/productItems1.webp" alt="" />
              </div>
              <div className="flex  justify-center flex-col">
                <h1 className="lg:text-lg text-xs lg:font-normal font-light ">Stylish White and Gold Lamp</h1>
                <h1 className="lg:text-sm text-xs font-normal "> White and Gold</h1>

              </div>
            </div>
              <div className="flex justify-center py-8">
                <h1 className="lg:text-lg text-sm">2999 ₹/-</h1>
              </div>
           </div>

        <div className="flex-row flex justify-start lg:space-x-0 space-x-10 lg:justify-between">
        <div className="flex flex-col  space-y-3">
        <h1 className="lg:text-base text-sm font-normal " >Subtotal</h1>
        <h1 className="lg:text-base text-sm font-normal " >Shipping</h1>
        <h1 className="lg:text-base text-sm font-normal " >Estimated taxes</h1>
        <h1 className="lg:text-lg text-base  font-semibold py-2 lg:py-3 " >Total</h1>
        </div>

        <div className="flex flex-col  space-y-3">
        <h1 className="lg:text-base text-sm font-normal " >2999 ₹/-</h1>
        <h1 className="lg:text-base text-sm font-normal " >Enter shipping address</h1>
        <h1 className="lg:text-base text-sm font-normal " >11 ₹/-</h1>
        <h1 className="lg:text-lg text-base  font-semibold py-2 lg:py-3 " >3010 ₹/-</h1>
        </div>

         </div>
           
         </div>
       </div>
        
     </div>
    
    <Footernav />
    <Footer />
    </div>
  );
};

export default CheckoutPage;