import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";


const OnloadPopup = () => {
   const [showPopup, setShowPopup] = useState(true); 
   const location = useLocation();
   useEffect(() => {
    const popupShown = sessionStorage.getItem("popupShown");

    // 🟢 Sirf refresh par dikhaye, navigate par nahi
    if (!popupShown && location.pathname === "/") {
      setShowPopup(true);
    }
  }, [location.pathname]);

  const handleClose = () => {
    setShowPopup(false);
    sessionStorage.setItem("popupShown", "true"); // ✅ Close karne ke baad session me save ho jaye
  };


  return (

       showPopup && (
                      <div className="fixed top-0 left-0 w-full px-8   lg:px-0  h-[100vh] bg-black bg-opacity-30 flex items-center justify-center z-[99999999]">
                          <div className="bg-white relative -top-4  shadow-lg lg:w-[57rem] lg:h-[34rem] h-[20rem] bg-cover bg-center grid grid-cols-2 "   >
                            
                            <div className='bg-cover bg-center' style={{ backgroundImage: "url('images/onloadpopup.jpg')" }}></div>
                            <div>
                            <div className=' px-4  flex-col    items-center justify-center flex  h-full'>
                            <h1 className="text-3xl font-bold text-black mt-4">Welcome ! <span className='text-4xl'>Deconest </span></h1>
                            <h1 className="text-3xl font-bold text-black mt-4">GET 20% OFF</h1>
          <p className="text-lg text-center py-4 text-black">
            Discover premium furniture that blends comfort and elegance. Sign up now and enjoy an exclusive discount on your first purchase!
          </p>
          <div className="flex py-3 flex-row">
            <input
              type="email"
              className="py-3 px-5 border border-black outline-none w-full rounded-l-md"
              placeholder="Your email address"
            />
            <button className="bg-stone-800 text-white px-5 py-3 rounded-r-md">
              Subscribe
            </button>
          </div>
          <button className='px-[7.45rem]  py-3 border rounded-md  bg-black text-white shadow-sm font-semibold hover:bg-white hover:text-black duration-300 ease-in-out flex items-center gap-1 '>Get 20% Off
          </button>

                            </div>
                            </div>
      
      
      
      
                              <button 
                                  className=" border absolute  text-black right-2 top-3   duration-300 rounded hover:bg-black hover:text-white"
                                  onClick={handleClose}
                              >
                                  <span className=''><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" height="1.5rem" width="1.5rem" xmlns="http://www.w3.org/2000/svg"><path d="m289.94 256 95-95A24 24 0 0 0 351 127l-95 95-95-95a24 24 0 0 0-34 34l95 95-95 95a24 24 0 1 0 34 34l95-95 95 95a24 24 0 0 0 34-34z"></path></svg></span>
                              </button>
                          </div>
                      </div>
                  )
      
  
  )
}

export default OnloadPopup
