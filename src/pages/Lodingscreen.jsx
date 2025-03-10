import React, { useState, useEffect } from "react";



const Lodingscreen = () => {


    const [progress, setProgress] = useState(0);

    useEffect(() => {
      const interval = setInterval(() => {
        setProgress((prev) => (prev < 100 ? prev + 10 : 100));
      }, 500);
  
      return () => clearInterval(interval);
    }, []);
  return (
    <div>
     
<div className='flex justify-center items-center h-[100vh] flex-col space-y-6'>
    <div className='w-28 h-28 border-[5px]  border-[#C2FB01] bg-[#0080FF] rounded-full flex justify-center items-center relative overflow-hidden'>
<span className='z-50'>    <svg width="54" height="76" viewBox="0 0 54 76" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M30.3059 23.3887H53.138L19.2461 74.9486L26.3941 34.9877L26.4167 34.8613H26.2883H0.560973L14.9796 0.357422H38.7599L30.2053 23.2436L30.1511 23.3887H30.3059Z" fill="#CFEFFF" stroke="#C2FB01" stroke-width="0.214844"/>
</svg></span>

  <span className='absolute -right-1 top-[11px]'>
  <svg width="82" height="93" viewBox="0 0 82 93" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M25.6938 60.2174L25.7214 60.1511L25.6706 60.1003L0.695507 35.1252L39.0508 0.550487L81.6582 43.1579C79.3319 68.0943 60.3308 88.1868 35.9119 92.1698L19.3148 75.5726L25.6938 60.2174Z" fill="url(#paint0_linear_561_13954)" stroke="#C2FB01" stroke-width="0.214844"/>
<defs>
<linearGradient id="paint0_linear_561_13954" x1="13.3915" y1="22.2692" x2="66.9521" y2="75.8319" gradientUnits="userSpaceOnUse">
<stop stop-opacity="0.5"/>
<stop offset="1" stop-opacity="0"/>
</linearGradient>
</defs>
</svg>
  </span>

 



    </div>
    <div className="w-[90%] max-w-[564px] bg-[#202733] h-6 rounded-2xl overflow-hidden">
      <div
        className="h-full bg-[#0E95FA] transition-all duration-300 rounded-2xl"
        style={{ width: `${progress}%` }}
      ></div>
    </div>
<h1 className="text-4xl font-normal">LOADING  {progress}%..</h1>

</div>

    </div>
  )
}

export default Lodingscreen
