import React, { useState } from 'react';
import Navbar from '../components/Navbar'
import Footernav from '../components/Footernav'
import { Link } from "react-router-dom";

const Profile = () => {

  const [selected, setSelected] = useState('order');  // Default selected menu

  const handleMenuClick = (menu) => {
    setSelected(menu);  // Update the selected menu
  };

  const [selectedPayment, setSelectedPayment] = useState(null);

  const handlePaymentMethodChange = (method) => {
    if (selectedPayment === method) {
      setSelectedPayment(null);  // Toggle off the method if it's already selected
    } else {
      setSelectedPayment(method);  // Set the selected method
    }
  };




  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData); // Handle form submission
  };

  const [orderData] = useState({
    orderId: 'ORD123456',
    items: [
      { name: 'Sofa', quantity: 1, price: 450 },
      { name: 'Lamp', quantity: 2, price: 120 },
      { name: 'Coffee Table', quantity: 1, price: 150 }
    ],
    shippingAddress: '1234 Street, City, Country',
    totalAmount: 840,
    status: 'Shipped',
  });


  const [balance, setBalance] = useState(1000); // Initial balance in wallet
  const [transactions, setTransactions] = useState([
    { id: 1, description: 'Payment for Order #123', amount: -50, date: '2023-07-01' },
    { id: 2, description: 'Payment for Order #124', amount: -30, date: '2023-07-03' },
    { id: 3, description: 'Refund from Order #122', amount: 20, date: '2023-07-04' },
  ]);
  const [addFunds, setAddFunds] = useState(0);

  const handleAddFunds = () => {
    setBalance(balance + addFunds);
    setTransactions([...transactions, { id: transactions.length + 1, description: 'Funds Added', amount: addFunds, date: new Date().toLocaleDateString() }]);
    setAddFunds(0); // Reset add funds field
  };

  // my reward 
  const [rewards, setRewards] = useState(200); // Initial rewards points
  const [rewardHistory, setRewardHistory] = useState([
    { id: 1, description: 'Order #1234', points: 50, date: '2023-06-15' },
    { id: 2, description: 'Referral Bonus', points: 100, date: '2023-06-20' },
    { id: 3, description: 'Order #1245', points: 50, date: '2023-06-22' },
  ]);

  const handleRedeemPoints = () => {
    if (rewards >= 100) {
      setRewards(rewards - 100); // Deduct 100 points for redemption
      setRewardHistory([...rewardHistory, { id: rewardHistory.length + 1, description: 'Points Redeemed', points: -100, date: new Date().toLocaleDateString() }]);
    } else {
      alert('Insufficient rewards points!');
    }
  };


  // address
  const [address, setAddress] = useState({
    street: '',
    city: '',
    state: '',
    zipCode: '',
    country: ''
  });

  

 
  


  return (
    <div>
      <Navbar />

   <div className="container flex">
    <div className='w-1/4'>
    <div className='bg-[#f2f4f3]'>
   <div className='flex flex-col space-y-2 justify-center items-center py-5' >
    <div className='w-32 h-32 rounded-full bg-white' ></div>
    <h1 className='text-3xl font-semibold'>john smith</h1>
   </div>
   <div className='flex flex-col space-y-2  py-5' >
<ul className='px-2'>
  <li onClick={() => handleMenuClick('wallet')} className='px-2 py-3 font-semibold text-gray-500 flex space-x-2 items-center cursor-pointer' >
    <span><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><rect width="416" height="288" x="48" y="144" fill="none" stroke-linejoin="round" stroke-width="32" rx="48" ry="48"></rect><path fill="none" stroke-linejoin="round" stroke-width="32" d="M411.36 144v-30A50 50 0 0 0 352 64.9L88.64 109.85A50 50 0 0 0 48 159v49"></path><path d="M368 320a32 32 0 1 1 32-32 32 32 0 0 1-32 32z"></path></svg></span>
   <span>My wallet</span> 
    </li>
  <li onClick={() => handleMenuClick('myreward')} className='px-2 py-3 font-semibold text-gray-500 flex space-x-2 items-center cursor-pointer' >
    <span><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><g id="User"><g><path d="M17.438,21.937H6.562a2.5,2.5,0,0,1-2.5-2.5V18.61c0-3.969,3.561-7.2,7.938-7.2s7.938,3.229,7.938,7.2v.827A2.5,2.5,0,0,1,17.438,21.937ZM12,12.412c-3.826,0-6.938,2.78-6.938,6.2v.827a1.5,1.5,0,0,0,1.5,1.5H17.438a1.5,1.5,0,0,0,1.5-1.5V18.61C18.938,15.192,15.826,12.412,12,12.412Z"></path><path d="M12,9.911a3.924,3.924,0,1,1,3.923-3.924A3.927,3.927,0,0,1,12,9.911Zm0-6.847a2.924,2.924,0,1,0,2.923,2.923A2.926,2.926,0,0,0,12,3.064Z"></path></g></g></svg></span>
   <span>My rewards</span> 
    </li>
  <li onClick={() => handleMenuClick('order')} className='px-2 py-3 font-semibold text-gray-500 flex space-x-2 items-center cursor-pointer' >
    <span><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M396.6 69c-6.2-.15-13.3.95-21.5 3.47L54.52 171.3c-16.44 5.1-25.94 12.4-30.67 21.4-4.78 8.9-5.39 21-.36 37.4l5.9 19.2L439.7 122.9l-5.9-19.3c-5.1-16.42-12.4-26-21.4-30.67-4.5-2.41-9.7-3.79-15.8-3.93zm59.3 106.7L45.65 302.2l32.66 106.3c5.03 16.3 12.32 25.9 21.29 30.6 9 4.8 21 5.5 37.4.5l320.5-98.8c16.4-5.1 25.9-12.4 30.6-21.4 4.8-9 5.5-21 .5-37.4z"></path></svg></span>
    <span>my orders</span>
    </li>
    <li  onClick={() => handleMenuClick('personl')} 
          className={`px-2 py-3 font-semibold flex space-x-2 items-center cursor-pointer ${selected === 'personl' ? 'bg-white text-blue-600' : 'text-gray-500 hover:bg-gray-200'}`} >
              <span><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M235.4 172.2c0-11.4 9.3-19.9 20.5-19.9 11.4 0 20.7 8.5 20.7 19.9s-9.3 20-20.7 20c-11.2 0-20.5-8.6-20.5-20zm1.4 35.7H275V352h-38.2V207.9z"></path><path d="M256 76c48.1 0 93.3 18.7 127.3 52.7S436 207.9 436 256s-18.7 93.3-52.7 127.3S304.1 436 256 436c-48.1 0-93.3-18.7-127.3-52.7S76 304.1 76 256s18.7-93.3 52.7-127.3S207.9 76 256 76m0-28C141.1 48 48 141.1 48 256s93.1 208 208 208 208-93.1 208-208S370.9 48 256 48z"></path></svg></span>
    <span>personl information</span>
    </li>
  <li className='px-2 py-3 font-semibold text-gray-500 flex space-x-2 items-center cursor-pointer' >
    <span><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M424 134.5h-45.8c2.3-6.6 3.8-13.9 3.8-21.3 0-35.4-28.1-63.2-63-63.2-22.1 0-41.2 10.7-52.5 28L256 92.3l-10.5-14.5C234.2 60.7 215.1 48 193 48c-34.9 0-63 29.8-63 65.2 0 7.5 1.5 14.7 3.8 21.3H88c-23.3 0-41.8 19-41.8 42.7L46 421.8c0 23.7 17.4 42.2 40.7 42.2h336.7c23.3 0 42.7-18.5 42.7-42.2V177.2c-.1-23.7-18.8-42.7-42.1-42.7zM320 91c11.6 0 21 9.5 21 21 0 11.6-9.4 21-21 21s-21-9.5-21-21 9.4-21 21-21zm-128 0c11.6 0 21 9.5 21 21 0 11.6-9.4 21-21 21s-21-9.5-21-21 9.4-21 21-21zM88 177.2h106.7L151 237.5l34 25 50-69.1.2-.2-.2 228.6H88V177.2zm336 244.6H277V193.4l50 69.1 34-25-43.7-60.4H424v244.7z"></path></svg></span>
    <span>Rewards</span>
    </li>
  <li onClick={() => handleMenuClick('address')} className='px-2 py-3 font-semibold text-gray-500 flex space-x-2 items-center cursor-pointer' >
    <span><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 384 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M172.268 501.67C26.97 291.031 0 269.413 0 192 0 85.961 85.961 0 192 0s192 85.961 192 192c0 77.413-26.97 99.031-172.268 309.67-9.535 13.774-29.93 13.773-39.464 0zM192 272c44.183 0 80-35.817 80-80s-35.817-80-80-80-80 35.817-80 80 35.817 80 80 80z"></path></svg></span>
   <span> Address</span>
    </li>
  <li onClick={() => handleMenuClick('payment')}  className='px-2 py-3 font-semibold text-gray-500 flex space-x-2 items-center cursor-pointer' >
    <span><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 384 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M172.268 501.67C26.97 291.031 0 269.413 0 192 0 85.961 85.961 0 192 0s192 85.961 192 192c0 77.413-26.97 99.031-172.268 309.67-9.535 13.774-29.93 13.773-39.464 0zM192 272c44.183 0 80-35.817 80-80s-35.817-80-80-80-80 35.817-80 80 35.817 80 80 80z"></path></svg></span>
   <span> Payments methods</span>
    </li>
  <li className='px-2 py-3 font-semibold text-gray-500 flex space-x-2 items-center cursor-pointer' >
    <span><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M239.208 343.937c-17.78 10.103-38.342 15.876-60.255 15.876-21.909 0-42.467-5.771-60.246-15.87C71.544 358.331 42.643 406 32 448h293.912c-10.639-42-39.537-89.683-86.704-104.063zM178.953 120.035c-58.479 0-105.886 47.394-105.886 105.858 0 58.464 47.407 105.857 105.886 105.857s105.886-47.394 105.886-105.857c0-58.464-47.408-105.858-105.886-105.858zm0 186.488c-33.671 0-62.445-22.513-73.997-50.523H252.95c-11.554 28.011-40.326 50.523-73.997 50.523z"></path><g><path d="M322.602 384H480c-10.638-42-39.537-81.691-86.703-96.072-17.781 10.104-38.343 15.873-60.256 15.873-14.823 0-29.024-2.654-42.168-7.49-7.445 12.47-16.927 25.592-27.974 34.906C289.245 341.354 309.146 364 322.602 384zM306.545 200h100.493c-11.554 28-40.327 50.293-73.997 50.293-8.875 0-17.404-1.692-25.375-4.51a128.411 128.411 0 0 1-6.52 25.118c10.066 3.174 20.779 4.862 31.895 4.862 58.479 0 105.886-47.41 105.886-105.872 0-58.465-47.407-105.866-105.886-105.866-37.49 0-70.427 19.703-89.243 49.09C275.607 131.383 298.961 163 306.545 200z"></path></g></svg></span>
    <span>contect prefrance</span>
    </li>
  <li className='px-2 py-3 font-semibold text-gray-500 flex space-x-2 items-center cursor-pointer' >
    <span><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M384 336a63.78 63.78 0 0 0-46.12 19.7l-148-83.27a63.85 63.85 0 0 0 0-32.86l148-83.27a63.8 63.8 0 1 0-15.73-27.87l-148 83.27a64 64 0 1 0 0 88.6l148 83.27A64 64 0 1 0 384 336z"></path></svg></span>
   <span> Social networks</span>
    </li>
  <li className='px-2 py-3 font-semibold text-gray-500 flex space-x-2 items-center cursor-pointer' ></li>
</ul>

   </div>
    </div>
    </div>
    <div className='w-3/4'>
    {selected === 'personl' &&
      <div className="w-full p-6 bg-white rounded-lg ">
      <h2 className="text-2xl font-semibold text-center mb-6">Personal Information</h2>
      <form onSubmit={handleSubmit}>
       <div className='grid grid-cols-2 gap-5'>
        <div className="mb-4">
          <label htmlFor="name" className="block text-sm font-medium text-gray-700">First Name</label>
          <input 
            type="text" 
            id="name" 
            name="name" 
            value={formData.name} 
            onChange={handleChange} 
            placeholder="First name"
            className="mt-2 p-3 w-full border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
            required 
          />
        </div>
        <div className="mb-4">
          <label htmlFor="name" className="block text-sm font-medium text-gray-700">Last Name</label>
          <input 
            type="text" 
            id="name" 
            name="name" 
            value={formData.name} 
            onChange={handleChange} 
            placeholder="Last name"
            className="mt-2 p-3 w-full border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
            required 
          />
        </div>
        <div className="mb-4">
          <label htmlFor="name" className="block text-sm font-medium text-gray-700">Full Name</label>
          <input 
            type="text" 
            id="name" 
            name="name" 
            value={formData.name} 
            onChange={handleChange} 
            placeholder="Fullname"
            className="mt-2 p-3 w-full border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
            required 
          />
        </div>

        {/* Email */}
        <div className="mb-4">
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
          <input 
            type="email" 
            id="email" 
            name="email" 
            value={formData.email} 
            onChange={handleChange} 
            placeholder="Enter your email"
            className="mt-2 p-3 w-full border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
            required 
          />
        </div>

        {/* Phone Number */}
        <div className="mb-4">
          <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Phone Number</label>
          <input 
            type="tel" 
            id="phone" 
            name="phone" 
            value={formData.phone} 
            onChange={handleChange} 
            placeholder="Enter your phone number"
            className="mt-2 p-3 w-full border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
            required 
          />
        </div>

        {/* Address */}
       
        </div>
        <div className="mb-4">
          <label htmlFor="address" className="block text-sm font-medium text-gray-700">Address</label>
          <textarea 
            id="address" 
            name="address" 
            value={formData.address} 
            onChange={handleChange} 
            placeholder="Enter your address"
            className="mt-2 p-3 w-full border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
            required 
          />
        </div>
        {/* Submit Button */}
        <button type="submit" className="w-full p-3 bg-black text-white font-medium rounded-md ">
          Save Information
        </button>
       
      </form>
    </div>
     }
    {selected === 'order' && 
      <div className="w-full p-6 bg-white rounded-lg ">
      <h2 className="text-3xl font-semibold text-center mb-6">Order Details</h2>

      <div className="mb-6">
        <p className="font-medium text-lg">Order ID: <span className="text-blue-600">{orderData.orderId}</span></p>
        <p className="font-medium text-lg">Status: <span className={`text-${orderData.status === 'Shipped' ? 'green' : 'red'}-500`}>{orderData.status}</span></p>
      </div>

      <div className="mb-6">
        <h3 className="text-xl font-medium mb-4">Items:</h3>
        <div className="space-y-4">
          {orderData.items.map((item, index) => (
            <div key={index} className="flex justify-between items-center border-b pb-4">
              <div>
                <p className="font-medium">{item.name}</p>
                <p className="text-sm text-gray-500">Quantity: {item.quantity}</p>
              </div>
              <p className="font-medium">${item.price * item.quantity}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="mb-6">
        <p className="font-medium text-lg">Shipping Address:</p>
        <p className="text-gray-600">{orderData.shippingAddress}</p>
      </div>

      <div className="flex justify-between font-medium text-lg">
        <p>Total Amount:</p>
        <p className="text-xl text-blue-600">${orderData.totalAmount}</p>
      </div>


      <button className="w-full mt-6 py-3 bg-black text-white font-medium rounded-md ">

   
        Track Order
      </button>
    </div>}
    {selected === 'payment' &&
       <div className="w-full mx-auto p-6 bg-white rounded-lg ">
       <h2 className="text-3xl font-semibold text-center mb-6">Payment Methods</h2>
 
       {/* Payment Option Button */}
       <ul>
         <li 
           className="px-2 py-3 font-semibold text-gray-500 flex space-x-2 items-center cursor-pointer" 
           onClick={() => handlePaymentMethodChange('creditCard')}
         >
           <span>
             <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 384 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
               <path d="M172.268 501.67C26.97 291.031 0 269.413 0 192 0 85.961 85.961 0 192 0s192 85.961 192 192c0 77.413-26.97 99.031-172.268 309.67-9.535 13.774-29.93 13.773-39.464 0zM192 272c44.183 0 80-35.817 80-80s-35.817-80-80-80-80 35.817-80 80 35.817 80 80 80z"></path>
             </svg>
           </span>
           <span>Credit Card</span>
         </li>
 
         <li 
           className="px-2 py-3 font-semibold text-gray-500 flex space-x-2 items-center cursor-pointer" 
           onClick={() => handlePaymentMethodChange('paypal')}
         >
           <span>
             <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 384 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
               <path d="M172.268 501.67C26.97 291.031 0 269.413 0 192 0 85.961 85.961 0 192 0s192 85.961 192 192c0 77.413-26.97 99.031-172.268 309.67-9.535 13.774-29.93 13.773-39.464 0zM192 272c44.183 0 80-35.817 80-80s-35.817-80-80-80-80 35.817-80 80 35.817 80 80 80z"></path>
             </svg>
           </span>
           <span>PayPal</span>
         </li>
 
         <li 
           className="px-2 py-3 font-semibold text-gray-500 flex space-x-2 items-center cursor-pointer" 
           onClick={() => handlePaymentMethodChange('bankTransfer')}
         >
           <span>
             <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 384 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
               <path d="M172.268 501.67C26.97 291.031 0 269.413 0 192 0 85.961 85.961 0 192 0s192 85.961 192 192c0 77.413-26.97 99.031-172.268 309.67-9.535 13.774-29.93 13.773-39.464 0zM192 272c44.183 0 80-35.817 80-80s-35.817-80-80-80-80 35.817-80 80 35.817 80 80 80z"></path>
             </svg>
           </span>
           <span>Bank Transfer</span>
         </li>
       </ul>
 
       {/* Conditional Rendering Based on Selected Payment Method */}
       <div className="mt-6">
         {selectedPayment === 'creditCard' && (
           <div>
             <h3 className="text-xl font-semibold mb-4">Enter Credit Card Details</h3>
             <form className="space-y-4">
               <div>
                 <label htmlFor="cardNumber" className="block text-sm font-medium text-gray-700">Card Number</label>
                 <input 
                   type="text" 
                   id="cardNumber" 
                   className="mt-2 p-3 w-full border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                   placeholder="Enter card number"
                 />
               </div>
 
               <div>
                 <label htmlFor="expiryDate" className="block text-sm font-medium text-gray-700">Expiry Date</label>
                 <input 
                   type="text" 
                   id="expiryDate" 
                   className="mt-2 p-3 w-full border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                   placeholder="MM/YY"
                 />
               </div>
 
               <div>
                 <label htmlFor="cvv" className="block text-sm font-medium text-gray-700">CVV</label>
                 <input 
                   type="text" 
                   id="cvv" 
                   className="mt-2 p-3 w-full border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                   placeholder="Enter CVV"
                 />
               </div>
             </form>
           </div>
         )}
 
         {selectedPayment === 'paypal' && (
           <div>
             <h3 className="text-xl font-semibold mb-4">Login to PayPal</h3>
             <p className="text-sm text-gray-600">Please login to your PayPal account to complete the payment.</p>
             <button className="mt-4 w-full py-3 bg-black text-white font-medium rounded-md ">
               Login with PayPal
             </button>
           </div>
         )}
 
         {selectedPayment === 'bankTransfer' && (
           <div>
             <h3 className="text-xl font-semibold mb-4">Bank Transfer Details</h3>
             <p className="text-sm text-gray-600">Please transfer the payment to the following bank account:</p>
             <p className="mt-2 font-medium">Bank: XYZ Bank</p>
             <p>Account Number: 1234567890</p>
             <p>IFSC: XYZ1234</p>
           </div>
         )}
       </div>
 
       {/* Submit Button */}
       <div className="mt-6">
         <button className="w-full py-3 bg-green-500 text-white font-medium rounded-md hover:bg-green-600">
           Proceed to Payment
         </button>
       </div>
     </div>
    }
    {selected === 'wallet' &&
           <div className="w-full mx-auto p-6 bg-white rounded-lg ">
           <h2 className="text-3xl font-semibold text-center mb-6">My Wallet</h2>
     
           {/* Wallet Balance */}
           <div className="mb-6 text-center">
             <h3 className="text-xl font-semibold">Wallet Balance</h3>
             <p className="text-2xl font-bold text-green-500">${balance}</p>
           </div>
     
           {/* Add Funds Section */}
           <div className="mb-6">
             <h3 className="text-xl font-semibold mb-4">Add Funds</h3>
             <div className="flex space-x-4">
               <input
                 type="number"
                 value={addFunds}
                 onChange={(e) => setAddFunds(Number(e.target.value))}
                 placeholder="Enter amount"
                 className="p-3 w-full border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
               />
               <button
                 onClick={handleAddFunds}
                 className="py-3 px-4 bg-black text-white font-semibold rounded-md "

               >
                 Add Funds
               </button>
             </div>
           </div>
     
           {/* Transaction History */}
           <div>
             <h3 className="text-xl font-semibold mb-4">Transaction History</h3>
             <div className="space-y-4">
               {transactions.map((transaction) => (
                 <div key={transaction.id} className="flex justify-between items-center p-4 border-b">
                   <div>
                     <p className="font-medium">{transaction.description}</p>
                     <p className="text-sm text-gray-500">{transaction.date}</p>
                   </div>
                   <p className={`font-semibold ${transaction.amount < 0 ? 'text-red-500' : 'text-green-500'}`}>
                     ${transaction.amount}
                   </p>
                 </div>
               ))}
             </div>
           </div>
         </div>
    }
    {selected === 'myreward' &&
           <div className="w-full mx-auto p-6 bg-white rounded-lg ">
           <h2 className="text-3xl font-semibold text-center mb-6">My Rewards</h2>
     
           {/* Rewards Balance */}
           <div className="mb-6 text-center">
             <h3 className="text-xl font-semibold">Your Rewards Points</h3>
             <p className="text-2xl font-bold text-green-500">{rewards} Points</p>
           </div>
     
           {/* Redeem Points Button */}
           <div className="text-center mb-6">
             <button
               onClick={handleRedeemPoints}
               className="py-3 px-6  text-white font-semibold rounded-md bg-black"
             >
               Redeem 100 Points
             </button>
           </div>
     
           {/* Rewards History */}
           <div>
             <h3 className="text-xl font-semibold mb-4">Rewards History</h3>
             <div className="space-y-4">
               {rewardHistory.map((reward) => (
                 <div key={reward.id} className="flex justify-between items-center p-4 border-b">
                   <div>
                     <p className="font-medium">{reward.description}</p>
                     <p className="text-sm text-gray-500">{reward.date}</p>
                   </div>
                   <p className={`font-semibold ${reward.points < 0 ? 'text-red-500' : 'text-green-500'}`}>
                     {reward.points > 0 ? `+${reward.points}` : reward.points}
                   </p>
                 </div>
               ))}
             </div>
           </div>
         </div>
    }
    {selected === 'address' &&
           <div className="w-full mx-auto p-6 bg-white rounded-lg shadow-md">
           <h2 className="text-3xl font-semibold text-center mb-6">Address Form</h2>
           <form onSubmit={handleSubmit}>
             {/* Street Address */}
             <div className="mb-4">
               <label htmlFor="street" className="block text-sm font-medium text-gray-700">Street Address</label>
               <input
                 type="text"
                 id="street"
                 name="street"
                 value={address.street}
                 onChange={handleChange}
                 placeholder="Enter your street address"
                 className="mt-2 p-3 w-full border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                 required
               />
             </div>
     
             {/* City */}
             <div className="mb-4">
               <label htmlFor="city" className="block text-sm font-medium text-gray-700">City</label>
               <input
                 type="text"
                 id="city"
                 name="city"
                 value={address.city}
                 onChange={handleChange}
                 placeholder="Enter your city"
                 className="mt-2 p-3 w-full border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                 required
               />
             </div>
     
             {/* State */}
             <div className="mb-4">
               <label htmlFor="state" className="block text-sm font-medium text-gray-700">State</label>
               <input
                 type="text"
                 id="state"
                 name="state"
                 value={address.state}
                 onChange={handleChange}
                 placeholder="Enter your state"
                 className="mt-2 p-3 w-full border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                 required
               />
             </div>
     
             {/* Zip Code */}
             <div className="mb-4">
               <label htmlFor="zipCode" className="block text-sm font-medium text-gray-700">Zip Code</label>
               <input
                 type="text"
                 id="zipCode"
                 name="zipCode"
                 value={address.zipCode}
                 onChange={handleChange}
                 placeholder="Enter your zip code"
                 className="mt-2 p-3 w-full border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                 required
               />
             </div>
     
             {/* Country */}
             <div className="mb-4">
               <label htmlFor="country" className="block text-sm font-medium text-gray-700">Country</label>
               <input
                 type="text"
                 id="country"
                 name="country"
                 value={address.country}
                 onChange={handleChange}
                 placeholder="Enter your country"
                 className="mt-2 p-3 w-full border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                 required
               />
             </div>
     
             {/* Submit Button */}
             <div className="text-center">
               <button
                 type="submit"
                 className="w-full py-3  text-white font-medium rounded-md bg-black"
               >
                 Submit Address
               </button>
             </div>
           </form>
         </div>
    }


  
    </div>
   </div>
      <Footernav />
    </div>
  )
}

export default Profile

