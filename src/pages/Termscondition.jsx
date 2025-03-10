import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Footernav from '../components/Footernav'



const Termscondition = () => {
  return (
    <div>
      <Navbar />

      <div>
      <div className="container mx-auto py-10 px-5">
        <div className='space-y-5'>
          <h1 className='text-black text-2xl lg:text-3xl font-bold'>Terms and Conditions</h1>
           <h1 className='text-gray-600 font-normal text-base lg:text-lg'>Welcome to <span className='text-black underline font-bold'>Deconest</span>  ! By accessing and using our website, you agree to comply with the following terms and conditions. Please read them carefully.</h1>
           
           <h1 className='text-gray-600 font-normal text-base lg:text-lg'>
           By accessing and using our website, you agree to comply with and be bound by these terms and conditions. If you do not agree with any part of these terms, you are advised not to use this platform. We reserve the right to update, change, or modify these terms at any time without prior notice. Your continued use of the site after such modifications constitutes your acceptance of the new terms.
           Users must ensure that any information provided on this website is accurate, up-to-date, and does not violate any legal or ethical guidelines. You agree not to use this platform for any unlawful or harmful activities, including but not limited to fraudulent transactions, data breaches, or spreading malicious software.
           </h1>

           <ul className='px-4 text-gray-600 font-normal text-base lg:text-lg list-disc'>
            <li>All orders placed through our website are subject to availability.</li>
            <li>We reserve the right to refuse or cancel any order for any reason.</li>
            <li>Payments must be made using the available payment methods listed on our website.</li>
           </ul>
            
            <h1 className='text-gray-600 font-normaltext-base lg:text-lg' >All content on this website, including but not limited to text, images, logos, and design elements, is protected under copyright laws. You are not permitted to copy, distribute, modify, or reproduce any part of this website without prior written permission from the owners. Unauthorized use may result in legal action.</h1>
           <h1 className='text-gray-600 font-normal text-base lg:text-lg' >We take user privacy seriously and are committed to safeguarding personal information. Any data collected through this website, including cookies and browsing behavior, will be stored securely and used only for analytical or service-related purposes. Users have the right to request the deletion or modification of their personal data at any time
           Our website and its content are provided on an "as is" basis. We make no warranties or guarantees regarding the accuracy, completeness, or reliability of the information presented. Under no circumstances shall we be held liable for any direct, indirect, or incidental damages resulting from the use of this site.
           </h1>
           <h1 className='text-gray-600 font-normal text-base lg:text-lg'>
           These terms and conditions shall be governed by and construed in accordance with the laws of . Any disputes arising from the use of this website shall be subject to the exclusive jurisdiction of the local courts.
           </h1>
        </div>

    


         
      </div>
      </div>
      <Footer />
      <Footernav />
    </div>
  )
}

export default Termscondition
