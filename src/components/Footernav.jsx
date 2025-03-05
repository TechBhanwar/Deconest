import React from 'react'
import { Link } from 'react-router-dom'

const Footernav = () => {
  return (
    <div className="Footernav fixed bottom-0 left-0 right-0 bg-white lg:hidden shadow-sm">
        <div className='px-2 py-2 grid grid-cols-4'>
           <Link to="/" >
            <div className='flex flex-col justify-center items-center'>
                <span>
                    <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 576 512" height="20px" width="20px" xmlns="http://www.w3.org/2000/svg">
                        <path d="M280.37 148.26L96 300.11V464a16 16 0 0 0 16 16l112.06-.29a16 16 0 0 0 15.92-16V368a16 16 0 0 1 16-16h64a16 16 0 0 1 16 16v95.64a16 16 0 0 0 16 16.05L464 480a16 16 0 0 0 16-16V300L295.67 148.26a12.19 12.19 0 0 0-15.3 0zM571.6 251.47L488 182.56V44.05a12 12 0 0 0-12-12h-56a12 12 0 0 0-12 12v72.61L318.47 43a48 48 0 0 0-61 0L4.34 251.47a12 12 0 0 0-1.6 16.9l25.5 31A12 12 0 0 0 45.15 301l235.22-193.74a12.19 12.19 0 0 1 15.3 0L530.9 301a12 12 0 0 0 16.9-1.6l25.5-31a12 12 0 0 0-1.7-16.93z"></path>
                    </svg>
                </span>
                <h1 className='text-[12px]'>HOME</h1>
            </div></Link>
            <Link to="/product" >
            <div className='flex flex-col justify-center items-center'>
                <span>
                    <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" height="20px" width="20px" xmlns="http://www.w3.org/2000/svg">
                        <rect width="176" height="176" x="48" y="48" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" rx="20" ry="20"></rect>
                        <rect width="176" height="176" x="288" y="48" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" rx="20" ry="20"></rect>
                        <rect width="176" height="176" x="48" y="288" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" rx="20" ry="20"></rect>
                        <rect width="176" height="176" x="288" y="288" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" rx="20" ry="20"></rect>
                    </svg>
                </span>
                <h1 className='text-[12px]'>Products</h1>
            </div>
            </Link>
            <Link to="/login" >
            <div className='flex flex-col justify-center items-center'>
                <span>
                <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="20px" width="20px" xmlns="http://www.w3.org/2000/svg"><g id="User"><g><path d="M17.438,21.937H6.562a2.5,2.5,0,0,1-2.5-2.5V18.61c0-3.969,3.561-7.2,7.938-7.2s7.938,3.229,7.938,7.2v.827A2.5,2.5,0,0,1,17.438,21.937ZM12,12.412c-3.826,0-6.938,2.78-6.938,6.2v.827a1.5,1.5,0,0,0,1.5,1.5H17.438a1.5,1.5,0,0,0,1.5-1.5V18.61C18.938,15.192,15.826,12.412,12,12.412Z"></path><path d="M12,9.911a3.924,3.924,0,1,1,3.923-3.924A3.927,3.927,0,0,1,12,9.911Zm0-6.847a2.924,2.924,0,1,0,2.923,2.923A2.926,2.926,0,0,0,12,3.064Z"></path></g></g></svg>
                </span>
                <h1 className='text-[12px]'>ACCOUNT</h1>
            </div>
            </Link>
            <Link to="/wishlist" >
            <div className='flex flex-col justify-center items-center relative'>
                <span>
                    <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" height="20px" width="20px" xmlns="http://www.w3.org/2000/svg">
                        <path d="M349.6 64c-36.4 0-70.7 16.7-93.6 43.9C233.1 80.7 198.8 64 162.4 64 97.9 64 48 114.2 48 179.1c0 79.5 70.7 143.3 177.8 241.7L256 448l30.2-27.2C393.3 322.4 464 258.6 464 179.1 464 114.2 414.1 64 349.6 64zm-80.8 329.3l-4.2 3.9-8.6 7.8-8.6-7.8-4.2-3.9c-50.4-46.3-94-86.3-122.7-122-28-34.7-40.4-63.1-40.4-92.2 0-22.9 8.4-43.9 23.7-59.3 15.2-15.4 36-23.8 58.6-23.8 26.1 0 52 12.2 69.1 32.5l24.5 29.1 24.5-29.1c17.1-20.4 43-32.5 69.1-32.5 22.6 0 43.4 8.4 58.7 23.8 15.3 15.4 23.7 36.5 23.7 59.3 0 29-12.5 57.5-40.4 92.2-28.8 35.7-72.3 75.7-122.8 122z"></path>
                    </svg>
                    <span className="absolute -top-1 right-8 bg-red-500 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">1</span>
                </span>
                <h1 className='text-[12px]'>WISHLIST</h1>
            </div>
            </Link>
        </div>
    </div>
  )
}

export default Footernav
