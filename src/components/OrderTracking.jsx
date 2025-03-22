import React from "react";

const OrderTracking = () => {
  return (
<div>

<div className=" relative">
    <div className="flex flex-row items-center gap-4 p-3 ">
        <span className="text-xl py-2 bg-white ">
        <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path fill="none" d="M0 0h24v24H0V0z"></path><path d="M20 8h-3V4H3c-1.1 0-2 .9-2 2v11h2c0 1.66 1.34 3 3 3s3-1.34 3-3h6c0 1.66 1.34 3 3 3s3-1.34 3-3h2v-5l-3-4zm-.5 1.5 1.96 2.5H17V9.5h2.5zM6 18c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zm2.22-3c-.55-.61-1.33-1-2.22-1s-1.67.39-2.22 1H3V6h12v9H8.22zM18 18c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1z"></path></svg>
        </span>
        <span>parcel Delivery via <strong> Luxury Furniture Hub</strong> </span>
    </div>
    <div className="flex flex-row items-start  gap-4 p-3 ">
        <span className="py-2 rounded-full bg-white ">
            <div  className="bg-black w-5 h-5 rounded-full ">
                
            </div>
        </span>
        <div className="flex flex-col gap-5">
        <span> <strong> Order recived</strong>   </span>
        <span className="text-sm text-gray-600 font-semibold">
        We've recived your order and will  get started on it <br />  Shortily
        </span>
        <span className="text-sm text-gray-600 font-semibold">
            Estimate Friday,  15 Sep 2024 , 07:00-19:00
        </span>
        <div>
            <button className="px-4 py-2 border rounded-3xl">Resduled </button>
        </div>
        </div>
    </div>
    <div className="flex flex-row items-center  gap-4 p-3 ">
        <span className="py-2 rounded-full bg-white ">
            <div  className="border border-black w-3 h-3 rounded-full ">
                
            </div>
        </span>
     
        <span className="text-sm text-gray-600 font-semibold">
          packing your order
        </span>
     
       
    </div>
    <div className="flex flex-row items-center  gap-4 p-3 ">
        <span className="py-2 rounded-full bg-white ">
            <div  className="border border-black w-3 h-3 rounded-full ">
                
            </div>
        </span>
     
        <span className="text-sm text-gray-600 font-semibold">
          Getting ready to dispatch
        </span>
     
       
    </div>
    <div className="flex flex-row items-center  gap-4 p-3 ">
        <span className="py-2 rounded-full bg-white ">
            <div  className="border border-black w-3 h-3 rounded-full ">
                
            </div>
        </span>
     
        <span className="text-sm text-gray-600 font-semibold">
          on the way
        </span>
     
       
    </div>
    <div className="flex flex-row items-center  gap-4 p-3 ">
        <span className="py-2 rounded-full bg-white ">
            <div  className="border border-black w-3 h-3 rounded-full ">
                
            </div>
        </span>
     
        <span className="text-sm text-gray-600 font-semibold">
         deliverd
        </span>
     
       
    </div>
    <div className="flex flex-row items-start  gap-4 p-3 ">
        <span className=" py-2 rounded-full bg-white text-black ">
        <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 384 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M172.268 501.67C26.97 291.031 0 269.413 0 192 0 85.961 85.961 0 192 0s192 85.961 192 192c0 77.413-26.97 99.031-172.268 309.67-9.535 13.774-29.93 13.773-39.464 0zM192 272c44.183 0 80-35.817 80-80s-35.817-80-80-80-80 35.817-80 80 35.817 80 80 80z"></path></svg>
        </span>
     
        <span className="text-sm text-gray-600 font-semibold">
        Royal Botanic Gardens, Kew, Richmond, London <br />
TW9 3AB, United Kingdom

        </span>
     
       
    </div>
   

{/* <div className="w-1 h-full absolute top-0 bg-black"></div> */}

</div>


</div>
  );
};

export default OrderTracking;
