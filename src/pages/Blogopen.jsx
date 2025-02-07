import React from 'react';
import Navbar from '../components/Navbar';
import { useParams, useNavigate } from 'react-router-dom';
import Footer from '../components/Footer';
import Footernav from '../components/Footernav';
import { blogs } from '../data/data'; // Import blog data


const Blogopen = () => {
  const { id } = useParams(); 
  const navigate = useNavigate();
  const blog = blogs.find(blog => blog.id === parseInt(id)); // Find the blog

  if (!blog) {
    return (
      <div>
       <Navbar />
        <div className="container text-center py-20">
          <h1 className="text-2xl font-bold text-red-500">Blog Not Found</h1>
          <p className="text-gray-500">The blog you are looking for does not exist.</p>
        </div>
        <Footer />
        <Footernav />
      </div>
    );
  }

  const currentIndex = blogs.findIndex(b => b.id === parseInt(id));
  const previousBlog = blogs[currentIndex - 1];
  const nextBlog = blogs[currentIndex + 1];


    return (
        <div>
           <Navbar />
            <div className="container">
                <div className='text-[16px] font-medium flex pt-3 space-x-2 cursor-pointer'>
                    <span  onClick={() => navigate(`/blog/`)} >Blog</span>
                    <span>/</span>
                    <span onClick={() => navigate(`/blog/`)}>{blog.category}</span>
                    <span>/</span>
                    <span>{blog.title}</span>
                    <span></span> 
                </div>

                <div className='flex flex-col justify-start items-start lg:justify-center lg:items-center py-2 space-y-4'>
                    <div className='w-full  lg:h-[700px]'>
                        <img src={blog.image} alt={blog.title} className='w-full h-full object-cover' />
                    </div>
                    <div className="">
                        <button className="px-4 py-2 bg-black text-white rounded-3xl text-sm hover:bg-white border hover:border-black duration-300 hover:text-black">
                            {blog.category}
                        </button>
                    </div>
                    <h1 className="text-[30px] lg:text-[50px] font-semibold ">{blog.title}</h1>
                    <p className="text-sm text-gray-500">By <span className="font-semibold px-1">{blog.author}</span> on  <span className="font-semibold px-1">{blog.date}</span></p>
                    <div className='bg-[#8a8a8a] h-[2px] w-52'></div>
                    <div className=' lg:px-52 '>
                        <p className="text-gray-700 mt-4 text-lg text-start lg:text-center">{blog.description}</p>
                    </div>

                    <div className='flex space-x-3 py-3 mt-4'>
                        {blog.tags?.map((tag, index) => (
                            <div key={index} className='px-5 py-2 text-[14px] rounded-3xl border cursor-pointer text-black'>
                                {tag}
                            </div>
                        ))}
                    </div>

                </div>
                <div className="w-full lg:w-[75%] border-t border-b border-[#d6d6d6] py-7 lg:mx-auto flex justify-between items-center">
      
        {previousBlog && (
          <span
            onClick={() => navigate(`/blog/${previousBlog.id}`)}
            className="cursor-pointer hover:underline flex flex-col text-start font-semibold"
            >
             <span className='text-[#8a8a8a]'>Previous</span> <span className='hidden lg:block'>{previousBlog.title}</span>
          </span>
        )}
        
        <div
      onClick={() => navigate(`/blog/`)} // Navigate to the specific blog page directly
      className="relative w-10 h-10 rounded-full text-black text-2xl flex justify-center items-center border border-[#d6d6d6] group cursor-pointer"
    >
  <span>
    <svg
      stroke="currentColor"
      fill="currentColor"
      stroke-width="0"
      viewBox="0 0 16 16"
      height="1em"
      width="1em"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3m5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3m5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3"></path>
    </svg>
  </span>

  <div className="absolute w-[150px] bottom-full mb-2 left-1/2 transform -translate-x-1/2 bg-black text-white text-sm px-4 py-2 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-md">
    <p className="text-center">Back to {blog.category}</p>
    <div className="absolute left-1/2 transform -translate-x-1/2 bottom-[-6px] w-0 h-0 border-l-[6px] border-r-[6px] border-t-[6px] border-t-black border-l-transparent border-r-transparent"></div>
  </div>
</div>

        {nextBlog && (
          <span
            onClick={() => navigate(`/blog/${nextBlog.id}`)}
            className="cursor-pointer hover:underline flex flex-col text-end font-semibold"
          >
           <span className='text-[#8a8a8a]'>Next</span> <span className='hidden lg:block'>{nextBlog.title}</span>
          </span>
        )}
      </div>

                <div className='flex flex-col py-4 w-full lg:w-[75%] mx-auto space-y-4 text-sm '>
                    <h1 className='text-center text-3xl font-semibold'>Leave a comment</h1>
                    <div className='grid grid-cols-1 lg:grid-cols-2 gap-5'>
                        <input type="text" name="" id="" className='border py-4 hover:outline-none outline-none px-4 border-[#d6d6d6] ' placeholder='Name' />
                        <input type="text" name="" id="" className='border py-4 hover:outline-none outline-none px-4 border-[#d6d6d6]' placeholder='Email' />
                    </div>
                    <textarea name="" id="" placeholder='Massage' className='border hover:outline-none outline-none p-5 h-[200px] border-[#d6d6d6] '></textarea>
                    <p>Please note, comments must be approved before they are published</p>
                    <div className="mx-auto">
                        <button className="px-4 py-3 bg-black text-white rounded-3xl text-sm hover:bg-white border hover:border-black duration-300 hover:text-black">
                            Post comment
                        </button>
                    </div>
                </div>

            </div>

            <Footer />
            <Footernav />
        </div>
    );
};

export default Blogopen;
