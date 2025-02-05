import React, { useState } from 'react';

import { blogs } from '../data/data';
import { useNavigate } from 'react-router-dom';
import Footer from '../components/Footer';
import Footernav from '../components/Footernav';
import Navbar from '../components/Navbar';

const Blog = () => {
    const [selectedCategory, setSelectedCategory] = useState('Dining & Kitchen');
    const [searchQuery, setSearchQuery] = useState('');
    const navigate = useNavigate();

    const handleCategoryClick = (category) => {
        setSelectedCategory(category);
    };

    const handleSearchChange = (e) => {
        setSearchQuery(e.target.value);
    };

    const filteredBlogs = blogs.filter(blog => {
        return (
            blog.category === selectedCategory &&
            (blog.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                blog.description.toLowerCase().includes(searchQuery.toLowerCase()))
        );
    });




    return (
        <div>
           <Navbar />
            <div className="container overflow-hidden">
                <div className='py-3 lg:py-9 flex flex-col space-y-3 justify-center  items-center '>
                    <h2 className='text-[32px] text-black font-semibold'>Blogs </h2>
                    <div className='text-[15px] font-medium flex space-x-2'>
                        <span>Home</span>
                        <span>/</span>
                        <span>Blog</span>
                        <span>/</span>
                        <span>{selectedCategory}</span> {/* Dynamically render the category name */}
                    </div>
                    <div>
                        <ul className='flex flex-row space-x-4 lg:space-x-14 text-[12px] lg:text-[18px] font-semibold'>
                            <li
                                className={`hoverbefore relative cursor-pointer ${selectedCategory === 'Dining & Kitchen' ? 'text-black' : 'text-gray-500'}`}
                                onClick={() => handleCategoryClick('Dining & Kitchen')}
                            >
                                Dining & Kitchen
                            </li>
                            <li
                                className={`hoverbefore relative cursor-pointer ${selectedCategory === 'Furniture' ? 'text-black' : 'text-gray-500'}`}
                                onClick={() => handleCategoryClick('Furniture')}
                            >
                                Furniture
                            </li>
                            <li
                                className={`hoverbefore relative cursor-pointer ${selectedCategory === 'Home Decor' ? 'text-black' : 'text-gray-500'}`}
                                onClick={() => handleCategoryClick('Home Decor')}
                            >
                                Home Decor
                            </li>
                            <li
                                className={`hoverbefore relative cursor-pointer ${selectedCategory === 'News' ? 'text-black' : 'text-gray-500'}`}
                                onClick={() => handleCategoryClick('News')}
                            >
                                News
                            </li>
                            <li
                                className={`hoverbefore relative cursor-pointer ${selectedCategory === 'Life Style' ? 'text-black' : 'text-gray-500'}`}
                                onClick={() => handleCategoryClick('Life Style')}
                            >
                                Life Style
                            </li>
                        </ul>
                    </div>

                </div>


                <div className='py-2 lg:py-7 flex'>
                    <div className='w-1/4 p-2  flex-col space-y-6 hidden lg:flex'>

                        <form action="" className='border-b border-black flex'>
                            <input
                                type="search"
                                placeholder='Search blog....'
                                className='h-9 text-sm border-none focus:border-none focus:outline-none w-full'
                                value={searchQuery}
                                onChange={handleSearchChange}
                            />
                            <button >
                                <span className='text-black'><svg stroke="currentColor" fill="currentColor" stroke-width="0" version="1.1" id="search" x="0px" y="0px" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><g><path d="M20.031,20.79c0.46,0.46,1.17-0.25,0.71-0.7l-3.75-3.76c1.27-1.41,2.04-3.27,2.04-5.31
		c0-4.39-3.57-7.96-7.96-7.96s-7.96,3.57-7.96,7.96c0,4.39,3.57,7.96,7.96,7.96c1.98,0,3.81-0.73,5.21-1.94L20.031,20.79z
		 M4.11,11.02c0-3.84,3.13-6.96,6.96-6.96c3.84,0,6.96,3.12,6.96,6.96c0,3.84-3.12,6.96-6.96,6.96C7.24,17.98,4.11,14.86,4.11,11.02
		z"></path></g></svg></span>
                            </button>
                        </form>

                        <ul className='flex flex-col space-y-3 text-[14px] text-[#8a8a8a] cursor-pointer'>
                            <h1 className='text-lg text-black font-semibold'>Categories</h1>
                            <li
                                className={` relative  cursor-pointer ${selectedCategory === 'Dining & Kitchen' ? 'text-black' : 'text-gray-500'}`}
                                onClick={() => handleCategoryClick('Dining & Kitchen')}
                            >
                                Dining & Kitchen
                            </li>
                            <li
                                className={` relative cursor-pointer ${selectedCategory === 'Furniture' ? 'text-black' : 'text-gray-500'}`}
                                onClick={() => handleCategoryClick('Furniture')}
                            >
                                Furniture
                            </li>
                            <li
                                className={` relative cursor-pointer ${selectedCategory === 'Home Decor' ? 'text-black' : 'text-gray-500'}`}
                                onClick={() => handleCategoryClick('Home Decor')}
                            >
                                Home Decor
                            </li>
                            <li
                                className={` relative cursor-pointer ${selectedCategory === 'News' ? 'text-black' : 'text-gray-500'}`}
                                onClick={() => handleCategoryClick('News')}
                            >
                                News
                            </li>
                            <li
                                className={` relative cursor-pointer ${selectedCategory === 'Life Style' ? 'text-black' : 'text-gray-500'}`}
                                onClick={() => handleCategoryClick('Life Style')}
                            >
                                Life Style
                            </li>
                        </ul>

                        <h1 className='text-lg font-semibold'>Related Posts</h1>

                        <div>
                            <div className='flex flex-col space-y-2'>
                                <div className="max-w-lg bg-white rounded-lg  overflow-hidden">
                                    <div className="flex">
                                        <div className="w-1/3  flex justify-center items-center">
                                            <img src="/images/SideBlog1.jpg" alt='' className="  object-cover" />
                                        </div>
                                        <div className="w-2/3 p-4">
                                            <span className='text-[14px] text-[#8a8a8a]'>News</span>
                                            <h5 className="text-lg font-bold">Exploring the Future</h5>
                                            <span className='text-[14px] font-semibold '>0 comment</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="max-w-lg bg-white rounded-lg  overflow-hidden">
                                    <div className="flex">
                                        <div className="w-1/3 flex justify-center items-center">
                                            <img src="/images/SideBlog2.jpg" alt='' className=" object-cover" />
                                        </div>
                                        <div className="w-2/3 p-4">
                                            <span className='text-[14px] text-[#8a8a8a]'>News</span>
                                            <h5 className="text-lg font-bold">Fix Up  Dining Room </h5>
                                            <span className='text-[14px] font-semibold '>2 comment</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="max-w-lg bg-white rounded-lg  overflow-hidden">
                                    <div className="flex">
                                        <div className="w-1/3 flex justify-center items-center">
                                            <img src="/images/SideBlog2.jpg" alt='' className=" object-cover" />
                                        </div>
                                        <div className="w-2/3 p-4">
                                            <div class="flex str justify-start mb-1 gap-1 items-center"><svg stroke="currentColor" fill="gray" stroke-width="0" viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M496 203.3H312.36L256 32l-56.36 171.3H16l150.21 105.4-58.5 171.3L256 373.84 404.29 480l-58.61-171.3z"></path></svg><svg stroke="currentColor" fill="gray" stroke-width="0" viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M496 203.3H312.36L256 32l-56.36 171.3H16l150.21 105.4-58.5 171.3L256 373.84 404.29 480l-58.61-171.3z"></path></svg><svg stroke="currentColor" fill="gray" stroke-width="0" viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M496 203.3H312.36L256 32l-56.36 171.3H16l150.21 105.4-58.5 171.3L256 373.84 404.29 480l-58.61-171.3z"></path></svg><svg stroke="currentColor" fill="gray" stroke-width="0" viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M496 203.3H312.36L256 32l-56.36 171.3H16l150.21 105.4-58.5 171.3L256 373.84 404.29 480l-58.61-171.3z"></path></svg><svg stroke="currentColor" fill="gray" stroke-width="0" viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M496 203.3H312.36L256 32l-56.36 171.3H16l150.21 105.4-58.5 171.3L256 373.84 404.29 480l-58.61-171.3z"></path></svg></div>
                                            <h5 className="text-lg font-bold">Fix Up  Living Room </h5>
                                            <span className='text-[14px] font-semibold '>0 comment</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <h1 className='text-lg font-semibold'>Tags</h1>

                        <div className='flex space-x-2'>
                            <div className='flex justify-center items-center px-5 py-2 text-[12px] rounded-3xl border cursor-pointer hover:bg-black hover:text-white duration-300'> Furniture</div>
                            <div className='flex justify-center items-center px-5 py-2 text-[12px] rounded-3xl border cursor-pointer hover:bg-black hover:text-white duration-300'>News</div>
                        </div>


                    </div>
                    <div className='w-full lg:w-3/4 px-1 lg:px-5'>
                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
                            {filteredBlogs.map(blog => (
                                <div   onClick={() => navigate(`/blog/${blog.id}`)}>
                                    <div className="  overflow-hidden cursor-pointer ">
                                        <div className='w-full h-[187px]'>
                                            <img src={blog.image} alt='' className="w-full h-full object-cover" />
                                        </div>


                                        <div className="py-2 px flex flex-col space-y-2">

                                            <p className="text-sm text-gray-500">{blog.date}</p>


                                            <h3 className="text-xl font-semibold text-gray-800 "> {blog.title} </h3>


                                            <p className="text-gray-600">{blog.description.slice(0, 100)}...</p>


                                            <div>
                                                <button
                                                    onClick={() => navigate(`/blog/${blog.id}`)}
                                                    className="px-4 py-2 bg-black text-white rounded-3xl text-sm hover:bg-white border hover:border-black duration-300 hover:text-black"
                                                >
                                                    Read More
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>


                    </div>






                </div>

            </div>
            <Footer />
            <Footernav />
        </div>
    )
}

export default Blog
