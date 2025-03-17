import { useState } from "react";
import Footernav from '../components/Footernav';
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import PaymentOptions from "../components/PaymentOptions";

const Checkout = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [selected, setSelected] = useState("local-pickup");
    const [showCoupon, setshowCoupon] = useState(false);
    const [isStateOpen, setIsStateOpen] = useState(false);
    const [selectedState, setSelectedState] = useState({
        name: "Select a State",
    });

    const states = [
        "Andhra Pradesh",
        "Arunachal Pradesh",
        "Assam",
        "Bihar",
        "Chhattisgarh",
        "Goa",
        "Gujarat",
        "Haryana",
        "Himachal Pradesh",
        "Jharkhand",
        "Karnataka",
        "Kerala",
        "Madhya Pradesh",
        "Maharashtra",
        "Manipur",
        "Meghalaya",
        "Mizoram",
        "Nagaland",
        "Odisha",
        "Punjab",
        "Rajasthan",
        "Sikkim",
        "Tamil Nadu",
        "Telangana",
        "Tripura",
        "Uttar Pradesh",
        "Uttarakhand",
        "West Bengal",
    ];

    const [isLoading, setIsLoading] = useState(false);

    const handleSelect = (option) => {
      setIsLoading(true); // Loader Show
      setSelected(option); // Selected Option Set
  
      setTimeout(() => {
        setIsLoading(false); // 2 sec baad Loader Hide
      }, 2000);
    };
  

// for form data 
const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    street: "",
    town: "",
    state: "",
    zip: "",
    phone: "",
    email: "",
  });
  const [isorderLoading, setIsOrderLoading] = useState(false);
  const [errors, setErrors] = useState([]);
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const validateForm = () => {
    setIsOrderLoading(true); 
  
    setTimeout(() => {
      let newErrors = [];
  
      Object.keys(formData).forEach((key) => {
        if (!formData[key]) {
          newErrors.push(`${key.replace(/([A-Z])/g, " $1")}`);
        }
      });
  
      setErrors(newErrors);
      setIsOrderLoading(false);
  
      if (newErrors.length === 0) {
        alert("Form Submitted Successfully!");
      }
    }, 2000); // 2 second ke baad validation chalega
  };
  


  

    return (
        <div>
            <Navbar />
            <div className="container py-10">
            {errors.length > 0 && (
  <div className="w-full bg-[#F9F9F9] px-2 py-4 lg:px-12 flex gap-1 items-start lg:py-6">
      <span className="text-red-700 text-xl font-semibold">
                <svg stroke="currentColor" fill="none" stroke-width="0" viewBox="0 0 15 15" height="1.5rem" width="1.5rem" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M12.8536 2.85355C13.0488 2.65829 13.0488 2.34171 12.8536 2.14645C12.6583 1.95118 12.3417 1.95118 12.1464 2.14645L7.5 6.79289L2.85355 2.14645C2.65829 1.95118 2.34171 1.95118 2.14645 2.14645C1.95118 2.34171 1.95118 2.65829 2.14645 2.85355L6.79289 7.5L2.14645 12.1464C1.95118 12.3417 1.95118 12.6583 2.14645 12.8536C2.34171 13.0488 2.65829 13.0488 2.85355 12.8536L7.5 8.20711L12.1464 12.8536C12.3417 13.0488 12.6583 13.0488 12.8536 12.8536C13.0488 12.6583 13.0488 12.3417 12.8536 12.1464L8.20711 7.5L12.8536 2.85355Z" fill="currentColor"></path></svg>
                </span>
    <ul className="space-y-1">
      {errors.map((error, index) => {
        const formattedError = error.replace(/([a-z])([A-Z])/g, "$1 $2");
        const capitalizedError = formattedError.charAt(0).toUpperCase() + formattedError.slice(1);
        
        return (
          <li key={index} className="font-semibold text-lg text-black">
            <strong>Billing {capitalizedError}</strong> is a required field.
          </li>
        );
      })}
    </ul>
  </div>
)}
  {isorderLoading && (
        <div className="flex justify-center items-center top-0 left-0 w-full h-full fixed bg-white opacity-60 cursor-wait">
          <img src="/images/Deconest-loader.gif" alt="Loading..." className="w-20 h-20" />
        </div>
      )}
           
            <div className=' py-10 flex flex-col lg:flex-row gap-5'>
            
                <div className='w-full  lg:w-2/3'>
                    <div className="flex flex-col gap-5">
                        <h1 className='text-4xl uppercase'>
                            Billing details
                        </h1>
                        <div className='flex flex-col gap-5'>
                            <div className='grid grid-cols-1 lg:grid-cols-2 gap-3'>
                                <div className='flex flex-col gap-2'>
                                    <label htmlFor="Firstname"  className='text-[#787878] text-lg font-semibold'>First name * </label>
                                    <input
                                        type="text"
                                        id="Firstname"
                                        name="firstName"
                                        className="border border-[#D9D9D9] focus:outline-none h-14 px-4"
                                        onChange={handleChange}
                                    />
                                </div>
                                <div className='flex flex-col gap-2'>
                                    <label htmlFor="Lastname" className='text-[#787878] text-lg font-semibold'>Last name * </label>
                                    <input
                                        type="text"
                                        id="Lastname"
                                         name="lastName"
                                        className="border border-[#D9D9D9] focus:outline-none h-14 px-4"
                                        onChange={handleChange}
                                    />
                                </div>

                            </div>
                            <div className='flex flex-col gap-2 '>
                                <label htmlFor="companyname" className='text-[#787878] text-lg font-semibold'>Company name (optional) *</label>
                                <input
                                    type="text"
                                    id="companyname"
                                    className="border border-[#D9D9D9] focus:outline-none h-14 px-4"
                                    onChange={handleChange}
                                />
                            </div>
                            <div className='flex flex-col gap-2 '>
                                <label htmlFor="Country" className='text-[#787878] text-lg font-semibold'>Country / Region *</label>
                                <input
                                    type="text"
                                    id="Country"
                                    className="border border-[#D9D9D9] focus:outline-none h-14 px-4"
                                    onChange={handleChange}
                                />
                            </div>
                            <div className='flex flex-col gap-2 '>
                                <label htmlFor="companyname" className='text-[#787878] text-lg font-semibold'>Street address * </label>
                                <input
                                    type="text"
                                    name="street"
                                    id="Street"
                                    className="border mb-3 border-[#D9D9D9] focus:outline-none h-14 px-4 font-semibold text-base text-[#787878] placeholder:text-[#787878]"
                                    placeholder='House number and street name'
                                />
                                <input
                                    type="text"
                                    
                                    id="Street"
                                    className="border border-[#D9D9D9] focus:outline-none h-14 px-4 font-semibold text-base text-[#787878] placeholder:text-[#787878]"
                                    placeholder='Apartment, suite, unit, etc. (optional)'
                                />
                            </div>
                            <div className='flex flex-col gap-2 '>
                                <label htmlFor="companyname" className='text-[#787878] text-lg font-semibold'>Town / City *</label>
                                <input
                                    type="text"
                                    name="town"
                                    id="Town"
                                    className="border border-[#D9D9D9] focus:outline-none h-14 px-4"
                                    onChange={handleChange}
                                />
                            </div>
                            <div className='flex flex-col gap-2 '>
                                <label htmlFor="companyname" className='text-[#787878] text-lg font-semibold'>State *</label>

                                <div className="relative w-full text-left">

                                    <button
                                        className="border border-[#D9D9D9] focus:outline-none h-14 px-4 w-full  text-[#787878] font-semibold text-base flex items-center justify-between bg-white"
                                        onClick={() => setIsStateOpen(!isStateOpen)}
                                    >
                                        {selectedState.name}
                                        <svg
                                            className={`w-4 h-4 transition-transform ${isStateOpen ? "rotate-180" : "rotate-0"}`}
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            strokeWidth={2}
                                            stroke="currentColor"
                                        >
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                                        </svg>
                                    </button>

                                    {/* Dropdown List */}
                                    {isStateOpen && (
                                        <ul className="absolute z-10 mt-2 w-full bg-white border  rounded-md shadow-lg max-h-60 overflow-y-auto">
                                            {states.map((state, index) => (
                                                <li
                                                    key={index}
                                                    className="px-4 py-2 cursor-pointer hover:bg-gray-100"
                                                    onClick={() => {
                                                        setSelectedState({ name: state });
                                                        setIsStateOpen(false);
                                                    }}
                                                >
                                                    {state}
                                                </li>
                                            ))}
                                        </ul>
                                    )}
                                </div>
                            </div>
                            <div className='flex flex-col gap-2 '>
                                <label htmlFor="companyname" className='text-[#787878] text-lg font-semibold'>Postcode / ZIP *</label>
                                <input
                                    type="text"
                                    name="zip"
                                    id="companyname"
                                    className="border border-[#D9D9D9] focus:outline-none h-14 px-4"
                                    onChange={handleChange}
                                />
                            </div>
                            <div className='flex flex-col gap-2 '>
                                <label htmlFor="Phone" className='text-[#787878] text-lg font-semibold'>Phone *</label>
                                <input
                                    type="text"
                                    name="phone"
                                    id="Phone"
                                    className="border border-[#D9D9D9] focus:outline-none h-14 px-4"
                                    onChange={handleChange}
                                />
                            </div>
                            <div className='flex flex-col gap-2 '>
                                <label htmlFor="Email" className='text-[#787878] text-lg font-semibold'>Email address *</label>
                                <input
                                    type="email"
                                     name="email"
                                    id="Email"
                                    className="border border-[#D9D9D9] focus:outline-none h-14 px-4"
                                    onChange={handleChange}
                                />
                            </div>
                        </div>

                        <div className='flex flex-col gap-2 '>
                            <label className="flex items-center space-x-2 cursor-pointer transition-all duration-500">
                                <input
                                    type="checkbox"
                                    className="w-5 h-5"
                                    onChange={() => setIsOpen(!isOpen)}
                                />
                                <span className="text-lg font-medium">Ship to a different address?</span>
                            </label>

                            <div
                                className={`overflow-hidden transition-all duration-500 ${isOpen ? "max-h-auto " : "max-h-0 "
                                    }`}
                            >
                                <div className='flex flex-col gap-5'>
                                    <div className='grid grid-cols-1 lg:grid-cols-2 gap-3'>
                                        <div className='flex flex-col gap-2'>
                                            <label htmlFor="Firstname" className='text-[#787878] text-lg font-semibold'>First name </label>
                                            <input
                                                type="text"
                                                id="Firstname"
                                                className="border border-[#D9D9D9] focus:outline-none h-14 px-4"
                                                onChange={handleChange}
                                            />
                                        </div>
                                        <div className='flex flex-col gap-2'>
                                            <label htmlFor="Lastname" className='text-[#787878] text-lg font-semibold'>Last name </label>
                                            <input
                                                type="text"
                                                id="Lastname"
                                                className="border border-[#D9D9D9] focus:outline-none h-14 px-4"
                                                onChange={handleChange}
                                            />
                                        </div>

                                    </div>
                                    <div className='flex flex-col gap-2 '>
                                        <label htmlFor="companyname" className='text-[#787878] text-lg font-semibold'>Company name (optional)</label>
                                        <input
                                            type="text"
                                            id="companyname"
                                            className="border border-[#D9D9D9] focus:outline-none h-14 px-4"
                                            onChange={handleChange}
                                        />
                                    </div>
                                    <div className='flex flex-col gap-2 '>
                                        <label htmlFor="Country" className='text-[#787878] text-lg font-semibold'>Country / Region *</label>
                                        <input
                                            type="text"
                                            id="Country"
                                            className="border border-[#D9D9D9] focus:outline-none h-14 px-4"
                                            onChange={handleChange}
                                        />
                                    </div>
                                    <div className='flex flex-col gap-2 '>
                                        <label htmlFor="companyname" className='text-[#787878] text-lg font-semibold'>Street address * </label>
                                        <input
                                            type="text"
                                            id="Street"
                                            className="border border-[#D9D9D9] focus:outline-none h-14 px-4 font-semibold text-base text-[#787878] placeholder:text-[#787878]"
                                            placeholder='House number and street name'
                                        />
                                        <input
                                            type="text"
                                            id="Street"
                                            className="border border-[#D9D9D9] focus:outline-none h-14 px-4 font-semibold text-base text-[#787878] placeholder:text-[#787878]"
                                            placeholder='Apartment, suite, unit, etc. (optional)'
                                        />
                                    </div>
                                    <div className='flex flex-col gap-2 '>
                                        <label htmlFor="companyname" className='text-[#787878] text-lg font-semibold'>Town / City *</label>
                                        <input
                                            type="text"
                                            id="Town"
                                            className="border border-[#D9D9D9] focus:outline-none h-14 px-4"
                                            onChange={handleChange}
                                        />
                                    </div>
                                    <div className='flex flex-col gap-2 '>
                                        <label htmlFor="companyname" className='text-[#787878] text-lg font-semibold'>State / County *</label>
                                        <input
                                            type="text"
                                            id="State"
                                            className="border border-[#D9D9D9] focus:outline-none h-14 px-4"
                                            onChange={handleChange}
                                        />
                                    </div>
                                    <div className='flex flex-col gap-2 '>
                                        <label htmlFor="companyname" className='text-[#787878] text-lg font-semibold'>Postcode / ZIP *</label>
                                        <input
                                            type="text"
                                            id="companyname"
                                            className="border border-[#D9D9D9] focus:outline-none h-14 px-4"
                                            onChange={handleChange}
                                        />
                                    </div>
                                    <div className='flex flex-col gap-2 '>
                                        <label htmlFor="companyname" className='text-[#787878] text-lg font-semibold'>Phone *</label>
                                        <input
                                            type="text"
                                            id="Phone"
                                            className="border border-[#D9D9D9] focus:outline-none h-14 px-4"
                                            onChange={handleChange}
                                        />
                                    </div>
                                    <div className='flex flex-col gap-2 '>
                                        <label htmlFor="companyname" className='text-[#787878] text-lg font-semibold'>Email address *</label>
                                        <input
                                            type="text"
                                            id="Email"
                                            className="border border-[#D9D9D9] focus:outline-none h-14 px-4"
                                            onChange={handleChange}
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='flex flex-col gap-2 '>
                            <label htmlFor="companyname" className='text-[#787878]  text-lg font-semibold'>Order notes (optional)</label>
                            <textarea
                                type="text"
                                id="companyname"
                                className="border border-[#D9D9D9] focus:outline-none h-44 px-4 py-3 placeholder:text-[#787878] font-semibold text-base"
                                placeholder="Notes about your order, e.g. special notes for delivery."
                            />
                        </div>



                    </div>
                </div>
                <div className='w-full lg:w-1/3 relative'>
                    <div className="flex flex-col gap-5 ">
                        <h1 className='text-4xl uppercase'>
                            Your order
                        </h1>

                        <div className="border border-[#D9D9D9] px-5 py-2">
                            <div className="flex justify-between items-center text-black text-lg font-semibold py-3 border-b">
                                <span>
                                    Product</span>
                                <span>Subtotal</span>
                            </div>
                            <div className="flex justify-between items-center text-[#787878] text-lg font-semibold py-4 border-b">
                                <span>
                                    White and Gold Lamp</span>
                                <span>7999₹/</span>
                            </div>

                            <div className="flex flex-col gap-2">
                                <div className="flex justify-between items-center text-black text-lg font-semibold py-4 ">
                                    <span>
                                        Sabtotal</span>
                                    <span>7999₹/</span>
                                </div>
                                <span className="text-black text-lg font-semibold">Shipping</span>


                                <label
        className="flex items-center space-x-2 cursor-pointer text-lg font-semibold"
        onClick={() => handleSelect("flat-rate")}
      >
        <span
          className={`w-5 h-5 border-2 border-[#D9D9D9] rounded-full flex items-center justify-center ${
            selected === "flat-rate" ? "" : "bg-white"
          }`}
        >
          {selected === "flat-rate" && (
            <span className="w-2.5 h-2.5 bg-black rounded-full"></span>
          )}
        </span>
        <span>Flat Rate: <span className="ml-2">₹2599/-</span></span>
      </label>

      <label
        className="flex items-center space-x-2 cursor-pointer text-lg font-semibold"
        onClick={() => handleSelect("local-pickup")}
      >
        <span
          className={`w-5 h-5 border-2 border-[#D9D9D9] rounded-full flex items-center justify-center ${
            selected === "local-pickup" ? "" : "bg-white"
          }`}
        >
          {selected === "local-pickup" && (
            <span className="w-2.5 h-2.5 bg-black rounded-full"></span>
          )}
        </span>
        <span>Local Pickup</span>
      </label>
                                <div className="flex justify-between items-center text-black text-lg font-semibold py-4 ">
                                    <span>
                                        Total</span>
                                    <span>7999₹/</span>
                                </div>

                            </div>
                            <div className="bg-[#F9F9F9] flex gap-4 items-start p-4 text-xl shadow-sm rounded-md">
                                <span className="mt-1"><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M2.00488 9.49979V3.99979C2.00488 3.4475 2.4526 2.99979 3.00488 2.99979H21.0049C21.5572 2.99979 22.0049 3.4475 22.0049 3.99979V9.49979C20.6242 9.49979 19.5049 10.6191 19.5049 11.9998C19.5049 13.3805 20.6242 14.4998 22.0049 14.4998V19.9998C22.0049 20.5521 21.5572 20.9998 21.0049 20.9998H3.00488C2.4526 20.9998 2.00488 20.5521 2.00488 19.9998V14.4998C3.38559 14.4998 4.50488 13.3805 4.50488 11.9998C4.50488 10.6191 3.38559 9.49979 2.00488 9.49979ZM4.00488 7.96755C5.4866 8.7039 6.50488 10.2329 6.50488 11.9998C6.50488 13.7666 5.4866 15.2957 4.00488 16.032V18.9998H20.0049V16.032C18.5232 15.2957 17.5049 13.7666 17.5049 11.9998C17.5049 10.2329 18.5232 8.7039 20.0049 7.96755V4.99979H4.00488V7.96755ZM9.00488 8.99979H15.0049V10.9998H9.00488V8.99979ZM9.00488 12.9998H15.0049V14.9998H9.00488V12.9998Z"></path></svg></span>
                                <h1>Have a coupon?
                                    <span className="text-black font-semibold cursor-pointer hover:text-[#787878] transition-all duration-300 ml-1"
                                        onClick={() => setshowCoupon(!showCoupon)}
                                    >Click here to enter your code</span></h1>
                            </div>
                            <div
                                className={`overflow-hidden transition-all duration-500 ${showCoupon ? "h-auto opacity-100 py-2" : "h-0 opacity-0"
                                    }`}
                            >
                                <div className="flex flex-col gap-4 py-2 font-medium">
                                    <span className="text-[#787878]">If you have a coupon code, please apply it below.</span>
                                    <div className="grid grid-cols-2 gap-3">
                                        <input type="text" name="" id="" placeholder="Coupon code" className="border  border-[#D9D9D9] focus:outline-none h-16 px-4" />
                                        <button className="bg-black text-white text-lg px-4">Apply coupon</button>
                                    </div>
                                </div>
                            </div>

                            <PaymentOptions />

                            <p className="text-base  font-semibold  text-[#787878] mb-4">Your personal data will be used to process your order, support your experience throughout this website, and for other purposes described in our <span className="text-black underline" >privacy policy</span>.</p>
                            <button onClick={validateForm} className="bg-black text-white text-lg px-4 h-16 w-full mb-9 font-semibold">Place Order</button>
                        </div>

                    </div>
                    {isLoading && (
        <div className="flex justify-center items-center top-0 left-0 w-full h-1/2 absolute bg-white opacity-60 cursor-wait">
          <img src="/images/Deconest-loader.gif" alt="Loading..." className="w-20 h-20" />
        </div>
      )}

                </div>
            </div>


            </div>

            <Footer />
            <Footernav />
        </div>
    )
}

export default Checkout
