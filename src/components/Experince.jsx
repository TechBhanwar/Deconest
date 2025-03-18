import React from 'react'
import { Link } from 'react-router-dom'


const Experince = () => {
    return (
        <div>
            <div className="container py-10">

                <div class="flex flex-col lg:items-start items-center justify-center lg:justify-start">
                    <h2 class="text-[30px] font-bold text-black text-center lg:text-start">Experience, Trust & Style – All in One Place</h2>
                    <p class="text-[16px] font-normal text-gray-500 lg:mb-6 mb-5">Transforming spaces, elevating lifestyles</p>
                </div>
                <div className='flex flex-col lg:flex-row '>
                    <div className='w-full lg:w-[60%] flex flex-col lg:flex-row gap-7  lg:gap-3 relative '>
                        <div className='w-full lg:w-[60%] '>
                            <div className='h-[40rem]'>
                                <img src="images/Experince.jpg" alt="" className='w-full h-full' />
                            </div>
                        </div>
                        <div className='w-full lg:w-[40%] hidden lg:block '>
                            <div><img src="images/Experince1.jpg" alt="" className='w-full h-full' /></div>
                        </div>
                        <div
                            className="w-full lg:w-[93%] h-32 bg-white rounded-md lg:absolute left-[30rem] bottom-24 flex justify-between items-center mb-5 px-2  lg:px-8 py-4"
                            style={{
                                boxShadow: " rgba(14, 30, 37, 0.12) 0px 2px 4px 0px, rgba(14, 30, 37, 0.32) 0px 2px 16px 0px"
                            }}
                        >
                            {[
                                { number: "1", label: "Store" },
                                { number: "10+", label: "Years of Experience" },
                                { number: "150+", label: "Partnered Brands" },
                                { number: "399K+", label: "Happy Customers" },
                            ].map((item, index) => (
                                <div key={index} className="text-center">
                                    <h1 className="text-xl lg:text-4xl  font-extrabold text-gray-800">{item.number}</h1>
                                    <p className="text-sm text-black tracking-wide">{item.label}</p>
                                </div>
                            ))}
                        </div>

                    </div>
                    <div className="w-full lg:w-[40%] px-2 lg:px-9 font-normal flex flex-col gap-5 text-black text-lg leading-relaxed">
                        <p>
                            Our journey began <span className="font-semibold">10+ years ago</span> with a simple dream –
                            to make every home a masterpiece of <span className="font-semibold">elegance and comfort</span>.
                            What started as a small passion project soon turned into a <span className="font-semibold">thriving brand,
                                trusted by 399k+ customers</span>. Through dedication, creativity, and a commitment to quality,
                            we have transformed countless spaces into stylish and functional homes.
                            Every design tells a story, and we take pride in crafting spaces that truly reflect
                            the personalities of those who live in them.
                        </p>
                        <Link to="/Contact" >  <button className="bg-white border-black transition-all duration-300 border hover:bg-black hover:text-white lg:px-8 lg:h-14 py-3 w-48 lg:w-64 text-black text-lg font-semibold rounded-lg shadow-md hover:shadow-lg">
                            Get In Touch
                        </button></Link>
                    </div>


                </div>
            </div>
        </div>
    )
}

export default Experince
