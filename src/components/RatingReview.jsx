import { useState } from "react";



const RatingReview = () => {
    const [isReplydiv, setReplydiv] = useState(false)
     const [showReviewBox, setShowReviewBox] = useState(false);
     const handleWriteReviewClick = () => {
        setShowReviewBox(!showReviewBox);
      }
    return (
        <div>
            <div className="container">
                <div>
                    <div className='bg-white shadow-md py-2 rounded-lg px-6 mb-3 '>
                        <div className='grid grid-cols-1 lg:grid-cols-3 gap-4 lg:gap-0 py-5'>
                            <div className='flex flex-col '>
                                <span className='font-bold'>Total Reviews</span>
                                <div className='flex items-center gap-2'>
                                    <h1 className='text-[2.5rem] font-bold'>10.1k </h1>
                                    <div>
                                        <div className='px-3 py-1 text-sm text-green-600 bg-[#f6f6f6] flex items-center gap-1 rounded-2xl'>
                                            <span>21%</span>
                                            <span><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 576 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M384 160c-17.7 0-32-14.3-32-32s14.3-32 32-32l160 0c17.7 0 32 14.3 32 32l0 160c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-82.7L342.6 374.6c-12.5 12.5-32.8 12.5-45.3 0L192 269.3 54.6 406.6c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3l160-160c12.5-12.5 32.8-12.5 45.3 0L320 306.7 466.7 160 384 160z"></path></svg></span>
                                        </div>
                                    </div>

                                </div>
                                <h1 className='text-[#8a8a8a]'>
                                    Growth in Reviews on this Year !
                                </h1>
                            </div>

                            <div>
                                <span className='font-bold'>Avrage Rating</span>
                                <div className='flex items-center gap-2'>
                                    <h1 className='text-[2.5rem] font-bold'>4.0 </h1>
                                    <div>
                                        <div className='flex items-center gap-1 text-yellow-500 text-lg '>
                                            <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 576 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"></path></svg>
                                            <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 576 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"></path></svg>
                                            <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 576 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"></path></svg>
                                            <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 576 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"></path></svg>
                                            <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 576 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M528.1 171.5L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6zM388.6 312.3l23.7 138.4L288 385.4l-124.3 65.3 23.7-138.4-100.6-98 139-20.2 62.2-126 62.2 126 139 20.2-100.6 98z"></path></svg>
                                        </div>
                                    </div>

                                </div>
                                <h1 className='text-[#8a8a8a]'>
                                    Avrage Rating on this Year !
                                </h1>
                            </div>
                            <div>
                                <div className='flex items-center font-semibold gap-1' >
                                    <span className='text-yellow-300'>
                                        <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 576 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"></path></svg>
                                    </span>
                                    <span>5</span>
                                    <span> <div className='px-20 py-1 rounded-3xl   bg-yellow-300' ></div></span>
                                    <span className='font-semibold text-sm'>2.0k</span>
                                </div>
                                <div className='flex items-center font-semibold gap-1' >
                                    <span className='text-yellow-300'>
                                        <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 576 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"></path></svg>
                                    </span>
                                    <span>4</span>
                                    <span> <div className='px-16 py-1 rounded-3xl  bg-yellow-300 ' ></div></span>
                                    <span className='font-semibold text-sm'>1.0k</span>
                                </div>
                                <div className='flex items-center font-semibold gap-1' >
                                    <span className='text-yellow-300'>
                                        <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 576 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"></path></svg>
                                    </span>
                                    <span>3</span>
                                    <span> <div className='px-12 py-1 rounded-3xl   bg-yellow-300' ></div></span>
                                    <span className='font-semibold text-sm'>0.5k</span>
                                </div>
                                <div className='flex items-center font-semibold gap-1' >
                                    <span className='text-yellow-300'>
                                        <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 576 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"></path></svg>
                                    </span>
                                    <span>2</span>
                                    <span> <div className='px-8 py-1 rounded-3xl   bg-yellow-300' ></div></span>
                                    <span className='font-semibold text-sm'>0.25k</span>
                                </div>
                                <div className='flex items-center font-semibold gap-1' >
                                    <span className='text-yellow-300'>
                                        <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 576 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"></path></svg>
                                    </span>
                                    <span >1</span>
                                    <span> <div className='px-4 py-1 rounded-3xl   bg-yellow-300' ></div></span>
                                    <span className='font-semibold text-sm' >0k</span>
                                </div>


                            </div>
                            
                        </div>
                    </div>
                   

                    <div className='bg-white  rounded-lg  py-5 animate-slideup'>
                        <div className='flex flex-col md:flex-row gap-3 lg:gap-0 py-4 border-b mb-3'>
                            <div className='w-full lg:w-1/4' >
                                <div className='flex gap-4'>
                                    <div className='w-24 h-24 rounded-md bg-[#f6f6f6]'>
                                        <img src="images\reviewuser.png" alt="" />
                                    </div>
                                    <div className='flex flex-col gap-2 '>
                                        <span className='text-xl font-semibold'>
                                            Towidur Rheman
                                        </span>
                                        <span className='text-[#8a8a8a] text-sm flex gap-2 items-center'>
                                            <svg class="h-5 w-5 text-blue-700" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                                                <path fill-rule="evenodd" d="M12 2c-.791 0-1.55.314-2.11.874l-.893.893a.985.985 0 0 1-.696.288H7.04A2.984 2.984 0 0 0 4.055 7.04v1.262a.986.986 0 0 1-.288.696l-.893.893a2.984 2.984 0 0 0 0 4.22l.893.893a.985.985 0 0 1 .288.696v1.262a2.984 2.984 0 0 0 2.984 2.984h1.262c.261 0 .512.104.696.288l.893.893a2.984 2.984 0 0 0 4.22 0l.893-.893a.985.985 0 0 1 .696-.288h1.262a2.984 2.984 0 0 0 2.984-2.984V15.7c0-.261.104-.512.288-.696l.893-.893a2.984 2.984 0 0 0 0-4.22l-.893-.893a.985.985 0 0 1-.288-.696V7.04a2.984 2.984 0 0 0-2.984-2.984h-1.262a.985.985 0 0 1-.696-.288l-.893-.893A2.984 2.984 0 0 0 12 2Zm3.683 7.73a1 1 0 1 0-1.414-1.413l-4.253 4.253-1.277-1.277a1 1 0 0 0-1.415 1.414l1.985 1.984a1 1 0 0 0 1.414 0l4.96-4.96Z" clip-rule="evenodd"></path>
                                            </svg> <span>
                                                Verified purchase
                                            </span>
                                        </span>
                                        <span className='text-[#8a8a8a] text-sm' >November 18 2023 at 15:35
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div className='w-full lg:w-3/4' >
                                <div>
                                    <div className='flex flex-col gap-3'>
                                        <div className='flex items-center gap-1 text-yellow-500 text-base '>
                                            <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 576 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"></path></svg>
                                            <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 576 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"></path></svg>
                                            <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 576 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"></path></svg>
                                            <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 576 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"></path></svg>
                                            <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 576 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M528.1 171.5L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6zM388.6 312.3l23.7 138.4L288 385.4l-124.3 65.3 23.7-138.4-100.6-98 139-20.2 62.2-126 62.2 126 139 20.2-100.6 98z"></path></svg>
                                            <span className='text-[#8a8a8a] font-semibold text-sm'>24-10-2024</span>
                                        </div>
                                        <p className='font-medium text-[#8a8a8a]'>
                                            I recently purchased a modern wooden dining table from this website, and I must say, the quality exceeded my expectations! The craftsmanship is top-notch, and the finish is smooth and elegant. It perfectly complements my home interior. The delivery was on time, and the assembly was super easy. Highly recommended for anyone looking for premium furniture!
                                        </p>
                                        <span onClick={() => setReplydiv(!isReplydiv)} className='flex flex-row gap-2 items-center cursor-pointer'> <span>Reply</span> <span><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M10.53 5.03a.75.75 0 1 0-1.06-1.06l-6.25 6.25a.75.75 0 0 0 0 1.06l6.25 6.25a.75.75 0 1 0 1.06-1.06L5.56 11.5H17a3.248 3.248 0 0 1 3.25 3.248v4.502a.75.75 0 0 0 1.5 0v-4.502A4.748 4.748 0 0 0 17 10H5.56l4.97-4.97Z"></path></svg></span></span>
                                        <div className={`w-full flex gap-2 overflow-hidden transition-all duration-300 ${isReplydiv ? "h-auto block" : "h-0 hidden"}`}>

                                            <input
                                                type="text"
                                                className="w-[22rem] border-b focus:outline-none focus:ring-0 "
                                                placeholder="Type here..."
                                            />
                                            <button  className='px-4 py-2 border rounded-lg shadow-sm font-semibold hover:bg-black hover:text-white duration-300 ease-in-out '>Reply </button>
                                        </div>

                                        <div className='flex gap-3'>
                                            {/* <button className='px-6 py-3 border rounded-xl shadow-sm font-semibold hover:bg-black hover:text-white duration-300 ease-in-out '>Publish Comment</button>
                    <button className='px-6 py-3 border rounded-xl shadow-sm font-semibold hover:bg-black hover:text-white duration-300 ease-in-out '>Direct Massage</button>
                    <button className='px-4 text-lg py-3 border rounded-xl shadow-sm font-semibold hover:bg-black text-green-500  duration-300 ease-in-out '>
                      <span >
                      <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M47.6 300.4L228.3 469.1c7.5 7 17.4 10.9 27.7 10.9s20.2-3.9 27.7-10.9L464.4 300.4c30.4-28.3 47.6-68 47.6-109.5v-5.8c0-69.9-50.5-129.5-119.4-141C347 36.5 300.6 51.4 268 84L256 96 244 84c-32.6-32.6-79-47.5-124.6-39.9C50.5 55.6 0 115.2 0 185.1v5.8c0 41.5 17.2 81.2 47.6 109.5z"></path></svg>
                      </span>
                    </button> */}
                                            <h1 className='font-semibold'>Did you find this helpful?</h1>
                                            <span className='text-lg'><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M466.27 286.69C475.04 271.84 480 256 480 236.85c0-44.015-37.218-85.58-85.82-85.58H357.7c4.92-12.81 8.85-28.13 8.85-46.54C366.55 31.936 328.86 0 271.28 0c-61.607 0-58.093 94.933-71.76 108.6-22.747 22.747-49.615 66.447-68.76 83.4H32c-17.673 0-32 14.327-32 32v240c0 17.673 14.327 32 32 32h64c14.893 0 27.408-10.174 30.978-23.95 44.509 1.001 75.06 39.94 177.802 39.94 7.22 0 15.22.01 22.22.01 77.117 0 111.986-39.423 112.94-95.33 13.319-18.425 20.299-43.122 17.34-66.99 9.854-18.452 13.664-40.343 8.99-62.99zm-61.75 53.83c12.56 21.13 1.26 49.41-13.94 57.57 7.7 48.78-17.608 65.9-53.12 65.9h-37.82c-71.639 0-118.029-37.82-171.64-37.82V240h10.92c28.36 0 67.98-70.89 94.54-97.46 28.36-28.36 18.91-75.63 37.82-94.54 47.27 0 47.27 32.98 47.27 56.73 0 39.17-28.36 56.72-28.36 94.54h103.99c21.11 0 37.73 18.91 37.82 37.82.09 18.9-12.82 37.81-22.27 37.81 13.489 14.555 16.371 45.236-5.21 65.62zM88 432c0 13.255-10.745 24-24 24s-24-10.745-24-24 10.745-24 24-24 24 10.745 24 24z"></path></svg></span>
                                            <span className='text-lg'><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M466.27 225.31c4.674-22.647.864-44.538-8.99-62.99 2.958-23.868-4.021-48.565-17.34-66.99C438.986 39.423 404.117 0 327 0c-7 0-15 .01-22.22.01C201.195.01 168.997 40 128 40h-10.845c-5.64-4.975-13.042-8-21.155-8H32C14.327 32 0 46.327 0 64v240c0 17.673 14.327 32 32 32h64c11.842 0 22.175-6.438 27.708-16h7.052c19.146 16.953 46.013 60.653 68.76 83.4 13.667 13.667 10.153 108.6 71.76 108.6 57.58 0 95.27-31.936 95.27-104.73 0-18.41-3.93-33.73-8.85-46.54h36.48c48.602 0 85.82-41.565 85.82-85.58 0-19.15-4.96-34.99-13.73-49.84zM64 296c-13.255 0-24-10.745-24-24s10.745-24 24-24 24 10.745 24 24-10.745 24-24 24zm330.18 16.73H290.19c0 37.82 28.36 55.37 28.36 94.54 0 23.75 0 56.73-47.27 56.73-18.91-18.91-9.46-66.18-37.82-94.54C206.9 342.89 167.28 272 138.92 272H128V85.83c53.611 0 100.001-37.82 171.64-37.82h37.82c35.512 0 60.82 17.12 53.12 65.9 15.2 8.16 26.5 36.44 13.94 57.57 21.581 20.384 18.699 51.065 5.21 65.62 9.45 0 22.36 18.91 22.27 37.81-.09 18.91-16.71 37.82-37.82 37.82z"></path></svg></span>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>


                    </div>

                    <div>

                            <div className='flex lg:flex-row space-y-3 flex-col space-x-3'>
                  <div className='flex flex-col justify-center  lg:justify-end lg:border-r pr-10'>
                  <p className="text-xl ">Leave a Review</p>
                 
                    <h2 className='text-gray-400 text-sm'>Be the first to write a review</h2>
                  </div>
                  <div className='px-8 flex justify-center items-center lg:justify-start'>
                    <button onClick={handleWriteReviewClick} className='bg-black lg:px-7 px-3 py-2 lg:py-3 text-white lg:text-base text-sm font-medium lg:font-semibold'>
                      Write A Review
                    </button>
                  </div>
                </div>
                            </div>
                            {showReviewBox && (
              <div className='reviewbox py-5 flex  mt-7 space-y-3 flex-col'>
                <h1 className='text-gray-400 text-lg font-semibold'>Write a Review</h1>
                <p className='text-gray-400 text-sm font-normal'>Rating</p>
                <span className='flex flex-row text-orange-500'>
                  {[...Array(5)].map((_, index) => (
                    <svg key={index} stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" height="1.5em" width="1.5em" xmlns="http://www.w3.org/2000/svg">
                      <path d="M11.9998 17L6.12197 20.5902L7.72007 13.8906L2.48926 9.40983L9.35479 8.85942L11.9998 2.5L14.6449 8.85942L21.5104 9.40983L16.2796 13.8906L17.8777 20.5902L11.9998 17ZM11.9998 14.6564L14.8165 16.3769L14.0507 13.1664L16.5574 11.0192L13.2673 10.7554L11.9998 7.70792L10.7323 10.7554L7.44228 11.0192L9.94893 13.1664L9.18311 16.3769L11.9998 14.6564Z"></path>
                    </svg>
                  ))}
                </span>

                <p className='text-gray-400 text-base'>Review Title <span className='text-gray-400 text-sm'>(100)</span></p>
                <input type="text" className='border border-[#D9D9D9] focus:outline-none h-14 px-4 w-full lg:w-1/2' placeholder='Give your review a title' />
                <p className='text-gray-400 text-xs'>Review</p>
                <textarea name="" id="" rows="5" className='border w-full lg:w-[50%] px-2 py-2 active:outline-none focus:outline-none active:border-none' placeholder='Write your comments here'></textarea>

                <label for="uploadFile1"
                  class="bg-white text-gray-500 font-semibold text-base rounded max-w-[18rem] px-2 h-48 flex flex-col items-center justify-center cursor-pointer border-2 border-gray-300 border-dashed  font-[sans-serif]">
                  <svg xmlns="http://www.w3.org/2000/svg" class="w-11 mb-2 fill-gray-500" viewBox="0 0 32 32">
                    <path
                      d="M23.75 11.044a7.99 7.99 0 0 0-15.5-.009A8 8 0 0 0 9 27h3a1 1 0 0 0 0-2H9a6 6 0 0 1-.035-12 1.038 1.038 0 0 0 1.1-.854 5.991 5.991 0 0 1 11.862 0A1.08 1.08 0 0 0 23 13a6 6 0 0 1 0 12h-3a1 1 0 0 0 0 2h3a8 8 0 0 0 .75-15.956z"
                      data-original="#000000" />
                    <path
                      d="M20.293 19.707a1 1 0 0 0 1.414-1.414l-5-5a1 1 0 0 0-1.414 0l-5 5a1 1 0 0 0 1.414 1.414L15 16.414V29a1 1 0 0 0 2 0V16.414z"
                      data-original="#000000" />
                  </svg>
                  Upload file

                  <input type="file" id='uploadFile1' class="hidden" />
                  <p class="text-xs font-medium text-gray-400 mt-2">PNG, JPG SVG, WEBP, and GIF are Allowed.</p>
                </label>

                <label htmlFor="" className='text-gray-400 text-sm lg:text-base '>Name displayed Publicly</label>
                <input type="text" className='border border-[#D9D9D9] focus:outline-none h-14 px-4 w-full lg:w-1/2' placeholder='Enter your name (public)' />

                <p className='text-gray-400  text-sm lg:text-base flex text-center'>Email</p>
                <input type="text" className='border border-[#D9D9D9] focus:outline-none h-14 px-4 w-full lg:w-1/2' placeholder='Enter your email (private)' />

                <div className=' w-full lg:w-[50%]  lg:py-4 text-gray-400  text-sm lg:text-sm  lg:h-14 flex justify-center items-center'>
                  How we use your data: We’ll only contact you about the review you left, and only if necessary. By submitting your review, you agree to Judge.me’s terms, privacy, and content policies.
                </div>

                <div className='flex flex-row space-x-3 py-3  items-center'>
                  <button   onClick={() => setShowReviewBox(prev => !prev)}  className='border outline-none border-black bg-white  text-sm lg:text-lg font-medium lg:font-semibold text-black lg:px-8 px-4 py-2 lg:py-2'>Cancel Review</button>
                  <button className='border border-black bg-black text-sm lg:text-lg font-medium lg:font-semibold text-white lg:px-8 px-4 py-2 lg:py-2'>Submit Review</button>
                </div>
              </div>
            )}



                </div>
            </div>


        </div>
    )
}

export default RatingReview
