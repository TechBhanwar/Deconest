import React, { useState } from "react";

const CheckoutPage = () => {
  const [step, setStep] = useState(1); // Track which step is active
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    state: "",
    zip: "",
    country: "",
    shippingMethod: "standard",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const nextStep = () => {
    setStep(step + 1);
  };

  const prevStep = () => {
    setStep(step - 1);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Order placed successfully!");
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white shadow-lg rounded-lg p-6 w-full max-w-2xl">
        <h2 className="text-2xl font-bold text-center mb-6">Checkout</h2>

        {/* Step 1: Personal Information */}
        {step === 1 && (
          <div>
            <h3 className="text-lg font-semibold mb-4">Personal Information</h3>
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              value={formData.name}
              onChange={handleChange}
              className="w-full mb-3 p-2 border rounded"
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              className="w-full mb-3 p-2 border rounded"
            />
            <input
              type="text"
              name="phone"
              placeholder="Phone Number"
              value={formData.phone}
              onChange={handleChange}
              className="w-full mb-3 p-2 border rounded"
            />
            <div className="flex justify-between">
              <button
                onClick={nextStep}
                className="bg-blue-500 text-white px-4 py-2 rounded"
              >
                Next
              </button>
            </div>
          </div>
        )}

        {/* Step 2: Shipping Address */}
        {step === 2 && (
          <div>
            <h3 className="text-lg font-semibold mb-4">Shipping Address</h3>
            <input
              type="text"
              name="address"
              placeholder="Address"
              value={formData.address}
              onChange={handleChange}
              className="w-full mb-3 p-2 border rounded"
            />
            <input
              type="text"
              name="city"
              placeholder="City"
              value={formData.city}
              onChange={handleChange}
              className="w-full mb-3 p-2 border rounded"
            />
            <input
              type="text"
              name="state"
              placeholder="State"
              value={formData.state}
              onChange={handleChange}
              className="w-full mb-3 p-2 border rounded"
            />
            <input
              type="text"
              name="zip"
              placeholder="Zip Code"
              value={formData.zip}
              onChange={handleChange}
              className="w-full mb-3 p-2 border rounded"
            />
            <input
              type="text"
              name="country"
              placeholder="Country"
              value={formData.country}
              onChange={handleChange}
              className="w-full mb-3 p-2 border rounded"
            />
            <div className="flex justify-between">
              <button
                onClick={prevStep}
                className="bg-gray-500 text-white px-4 py-2 rounded"
              >
                Back
              </button>
              <button
                onClick={nextStep}
                className="bg-blue-500 text-white px-4 py-2 rounded"
              >
                Next
              </button>
            </div>
          </div>
        )}

        {/* Step 3: Shipping Method */}
        {step === 3 && (
          <div>
            <h3 className="text-lg font-semibold mb-4">Shipping Method</h3>
            <div className="flex flex-col">
              <label className="flex items-center space-x-2">
                <input
                  type="radio"
                  name="shippingMethod"
                  value="standard"
                  checked={formData.shippingMethod === "standard"}
                  onChange={handleChange}
                  className="mr-2"
                />
                Standard Shipping (5-7 days)
              </label>
              <label className="flex items-center space-x-2">
                <input
                  type="radio"
                  name="shippingMethod"
                  value="express"
                  checked={formData.shippingMethod === "express"}
                  onChange={handleChange}
                  className="mr-2"
                />
                Express Shipping (2-3 days)
              </label>
            </div>
            <div className="flex justify-between mt-4">
              <button
                onClick={prevStep}
                className="bg-gray-500 text-white px-4 py-2 rounded"
              >
                Back
              </button>
              <button
                onClick={handleSubmit}
                className="bg-green-500 text-white px-4 py-2 rounded"
              >
                Place Order
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CheckoutPage;
