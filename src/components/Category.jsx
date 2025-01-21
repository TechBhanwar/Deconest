import React from 'react'

const Category = () => {
    return (
        <div>
            <div className="container py-10 lg:py-20 hidden lg:block">
                <div className='flex flex-col'>
                    <h1 className='text-center lg:text-left  text-xl lg:text-3xl font-bold'>Shop By Category</h1>
                    <div className='py-9 flex flex-col lg:flex-row space-x-9'>
    <div className='flex flex-col lg:w-[66%] space-y-9'>
        <div className='relative h-[434px] rounded-[20px] overflow-hidden group duration-300'>
            <img
                src="/images/Category1.jpg"
                alt=""
                className='w-full h-full transform scale-100 group-hover:scale-105 transition-transform duration-300 ease-in-out'
            />
            <div className='absolute top-0 left-0 right-0 bottom-0 bg-black bg-opacity-10 flex justify-start items-start p-5 cursor-pointer'>
                <p className='text-white text-xl lg:text-2xl font-bold'>Your Text Here</p>
            </div>
        </div>
        <div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-9">
                <div className='relative lg:h-[599px] rounded-[20px] overflow-hidden group duration-300'>
                    <img src="/images/Category3.jpg" alt="" className='w-full h-full transform scale-100 group-hover:scale-105 transition-transform duration-300 ease-in-out' />
                    <div className='absolute top-0 left-0 right-0 bottom-0 bg-black bg-opacity-10 flex justify-start items-start p-5 cursor-pointer'>
                        <p className='text-white text-xl lg:text-2xl font-bold'>Your Text Here</p>
                    </div>
                </div>
                <div className='relative lg:h-[599px] rounded-[20px] overflow-hidden group duration-300'>
                    <img src="/images/Category4.jpg" alt="" className='w-full h-full transform scale-100 group-hover:scale-105 transition-transform duration-300 ease-in-out' />
                    <div className='absolute top-0 left-0 right-0 bottom-0 bg-black bg-opacity-10 flex justify-start items-start p-5 cursor-pointer'>
                        <p className='text-white text-xl lg:text-2xl font-bold'>Your Text Here</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div className='relative lg:w-[33.9%] rounded-[20px] overflow-hidden lg:h-[1069px] group duration-300'>
        <img src="/images/Category2.jpg" alt="" className='h-full w-full transform scale-100 group-hover:scale-105 transition-transform duration-300 ease-in-out' />
        <div className='absolute top-0 left-0 right-0 bottom-0 bg-black bg-opacity-10 flex justify-start items-start p-5 cursor-pointer'>
            <p className='text-white text-xl lg:text-2xl font-bold'>Your Text Here</p>
        </div>
    </div>
</div>

                </div>
            </div>



        </div>
    )
}

export default Category
