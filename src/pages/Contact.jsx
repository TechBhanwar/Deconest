import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Footernav from '../components/Footernav'

const Contact = () => {
  return (
    <div>
       <Navbar />
        
      
      
          <div class="2xl:px-24 lg:3xl:px-36 lg:pb-3  py-8  lg:w-full mx-auto">

            <div class="flex flex-col space-y-3 justify-center  items-center ">
              <h1 class="lg:text-lg text-base  text-gray-500">contact Us</h1>

              <h2 class="lg:text-4xl text-xl  text-black font-bold text-center">We're  Here To Help - Get In Touch <br /> Us Today  </h2>
         </div>
          </div>
   

         <section class="w-full pb-8 relative bg-white">
      
          <div class="2xl:px-24 3xl:px-36 lg:pb-3  lg:py-5 px-6 lg:px-8 w-full ">
            <div class="flex flex-col  px-2 lg:px-10  rounded-lg shadow shadow-[#9C9292]">
              <div class="flex flex-col lg:flex-row w-full gap-8  lg:px-3 py-10 justify-between">
                  <div class="flex space-y-7 w-full flex-col">
                    <h1 class="lg:text-2xl text-xl  text-black font-bold">
                       Sent
                      An Message
                    </h1>
                     <div class="border py-4 rounded-lg px-4">
                          <div class=" bg-white w-24 text-center  -mt-6  ">
                            <h1 class=" text-base font-normal ">Your Name</h1>
                          </div>
                        <input type="text" class="border-none py-1 outline-none placeholder:text-sm font-normal w-full " required  placeholder="Enter your Name" />
                     </div>
                     <div class="border py-4 rounded-lg px-4">
                          <div class=" bg-white w-[8rem] text-center  -mt-6">
                            <h1 class=" text-base font-normal">Your Phone No.</h1>
                          </div>
                        <input type="number" class="border-none py-1 outline-none placeholder:text-sm font-normal  w-full" required placeholder="Enter your No." />
                     </div>
                     <div class="border py-4  rounded-lg px-4">
                          <div class=" bg-white w-24  text-center  -mt-6">
                            <h1 class=" text-base font-normal">Your Email</h1>
                          </div>
                        <input type="email" class="border-none py-1 outline-none placeholder:text-sm font-normal  w-full" required placeholder="Enter your Mail" />
                     </div>
                     <div class="border py-4 rounded-lg px-4">
                          <div class=" bg-white w-24 text-center  -mt-6  ">
                            <h1 class=" text-base font-normal">Subject</h1>
                          </div>
                        <input type="text" class="border-none py-1 outline-none placeholder:text-sm font-normal  w-full" required placeholder="Write Your Subject" />
                     </div>
                     <div class="border  py-5 h-32   rounded-lg px-4">
                          <div class=" bg-white w-24 text-center  -mt-6  ">
                            <h1 class=" text-base font-normal">Message</h1>
                          </div>
                        <input type="text" class="border-none py-1 outline-none placeholder:text-sm font-normal  w-full" required placeholder="Write Your Message" /></div>
                       
                      </div>

                      
                        
                  <div class="w-full py-12 flex space-y-4 flex-col">
                    
                    <div class="flex rounded-lg shadow space-x-3 shadow-[#9C9292] px-4 py-5 h-32 flex-row">

                      <div class="rounded-full text-black hover:text-white   justify-center mt-7 lg:mt-4  items-center flex lg:w-12 w-14 h-10 lg:h-12 border border-black duration-300 transition-all hover:bg-black">
                        <span class=" "><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="1.5em" width="1.5em" xmlns="http://www.w3.org/2000/svg"><path fill="none" stroke-width="2" d="M12,22 C12,22 4,16 4,10 C4,5 8,2 12,2 C16,2 20,5 20,10 C20,16 12,22 12,22 Z M12,13 C13.657,13 15,11.657 15,10 C15,8.343 13.657,7 12,7 C10.343,7 9,8.343 9,10 C9,11.657 10.343,13 12,13 L12,13 Z"></path></svg></span>
                      </div>
                      <div class="flex w-80  flex-col">
                        <h1 class="text-lg  font-bold" >Registered Office</h1>
                        <h2 class="text-base  text-[#525566] font-medium"> Alwar, Rajasthan- 302016, India</h2>
                      </div>
                    </div>
                    <div class="flex rounded-lg  shadow space-x-3 shadow-[#9C9292] px-4  py-5 h-32 flex-row items-center">
                      <div class="rounded-full  text-black hover:text-white justify-center mt-7 lg:mt-4  items-center flex lg:w-12 w-14 h-10 lg:h-12 border border-black duration-300 transition-all hover:bg-black">
                        <span class="  "><svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" height="1.2em" width="1.2em" xmlns="http://www.w3.org/2000/svg"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path><path d="M14.05 2a9 9 0 0 1 8 7.94"></path><path d="M14.05 6A5 5 0 0 1 18 10"></path></svg></span>
                      </div>
                      <div class="flex w-80  flex-col">
                        <h1 class="text-lg  font-bold" >Contact No.</h1>
                        <h2 class="text-base  text-[#525566] font-medium">+91-6375289134</h2>
                      </div>

                    </div>
                    <div class="flex rounded-lg shadow space-x-3 shadow-[#9C9292] px-4 py-5 h-32 flex-row items-center">

                      <div class="rounded-full  text-black hover:text-white  border border-black duration-300 transition-all hover:bg-black justify-center mt-3 lg:mt-0 items-center flex  lg:w-12 w-14 h-10 lg:h-12 bg-white">
                        <span class=" "><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="1.2em" width="1.2em" xmlns="http://www.w3.org/2000/svg"><path fill="none" d="M0 0h24v24H0V0z"></path><path d="M22 6c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6zm-2 0-8 5-8-5h16zm0 12H4V8l8 5 8-5v10z"></path></svg></span>
                      </div>
                      <div class="flex w-80   flex-col">
                        <h1 class="text-lg  font-bold" >Email</h1>
                        <h2 class="text-base  text-[#525566] font-medium">komaltara2003@gmail.com</h2>
                      </div>
                    </div> 

                    <div className="py-4">
  <button
    className="bg-white border-black transition-all duration-300 border hover:bg-black hover:text-white px-7 h-14 py-3 w-56 lg:w-64 text-black text-lg font-semibold rounded-lg"
    onClick={() => alert("Message sent successfully!")}
  >
    Send Message
  </button>
</div>

                  </div> 
              </div>
                
              <div className="h-96 w-full overflow-hidden border-dashed border-gray-400 px-2 mb-10 py-3 border-[2px]">
  <iframe
    src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d20303.983749899104!2d76.652822!3d27.5458651!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e1!3m2!1sen!2sin!4v1741332732112!5m2!1sen!2sin"
    className="w-full h-full border-0"
    allowFullScreen
    loading="lazy"
    referrerPolicy="no-referrer-when-downgrade"
    title='map'
  ></iframe>
</div>

          </div>
          </div>
        </section>



       <Footer />
      <Footernav />
    </div>
  )
}

export default Contact
