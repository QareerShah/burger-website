import React from 'react'
import { FaBurger, FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa6'

const Footer = () => {
  return (
    <footer className='pt-[5rem] pb-[3rem] bg-gray-900'>
      <div className='w-[80%] pb-[2rem] border-b-[2px] border-b-gray-300 border-opacity-50 mx-auto grid
       grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[3rem] items-start'>
        {/* 1st Part */}
        <div>
          <div className="flex items-center text-white space-x-2">
            <FaBurger className="w-[1.2rem] h-[1.2rem] sm:h-[1.4rem] text-orange-500" />
            <h1 className="text-[20px] sm:text-[30px] font-semibold">JuicyBuns</h1>
          </div>
          <p className='text-white text-opacity-60 mt-[0.4rem]'>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nam eius
            </p>
            <p className='mt-[1rem] text-white'>support@example.com</p>
            <p className='text-red-300 text-[19px] font-bold '>+(123) 456 789</p>
        </div>
         {/* 2nd Part */}

         <div>
          <h1 className='text-[23px] font-semibold mb-[2rem] text-white' >Products</h1>
          <p className='mt-[0.7rem] text-white opacity-60 hover:text-yellow-300 transition-all 
          duration-200 cursor-pointer w-fit '>Chicken Burger</p>
             <p className='mt-[0.7rem] text-white opacity-60 hover:text-yellow-300 transition-all 
          duration-200 cursor-pointer w-fit '>Cheese Deluxe</p>
             <p className='mt-[0.7rem] text-white opacity-60 hover:text-yellow-300 transition-all 
          duration-200 cursor-pointer w-fit '>Crispy Crunch</p>
             <p className='mt-[0.7rem] text-white opacity-60 hover:text-yellow-300 transition-all 
          duration-200 cursor-pointer w-fit '>Spicy stack</p>
             <p className='mt-[0.7rem] text-white opacity-60 hover:text-yellow-300 transition-all 
          duration-200 cursor-pointer w-fit '>Big Beast</p>
             <p className='mt-[0.7rem] text-white opacity-60 hover:text-yellow-300 transition-all 
          duration-200 cursor-pointer w-fit '>Beefy Bite</p>
         </div>
         
          {/* 3rd Part */}
         <div>
          <h1 className='text-[23px] font-semibold mb-[2rem] text-white' >Quick Link</h1>
          <p className='mt-[0.7rem] text-white opacity-60 hover:text-yellow-300 transition-all 
          duration-200 cursor-pointer w-fit '>Home</p>
             <p className='mt-[0.7rem] text-white opacity-60 hover:text-yellow-300 transition-all 
          duration-200 cursor-pointer w-fit '>About</p>
             <p className='mt-[0.7rem] text-white opacity-60 hover:text-yellow-300 transition-all 
          duration-200 cursor-pointer w-fit '>Menu</p>
             <p className='mt-[0.7rem] text-white opacity-60 hover:text-yellow-300 transition-all 
          duration-200 cursor-pointer w-fit '>Blog</p>
             <p className='mt-[0.7rem] text-white opacity-60 hover:text-yellow-300 transition-all 
          duration-200 cursor-pointer w-fit '>Contact</p>
          <p className='mt-[0.7rem] text-white opacity-60 hover:text-yellow-300 transition-all 
          duration-200 cursor-pointer w-fit '>News Letter</p>
         </div>
         {/* 3rd part */}
       <div>
       <h1 className='text-[23px] font-semibold mb-[2rem] text-white uppercase' >opening hours</h1>
       <p className='text-white text-[18px]'>Monday - Friday : <span className='text-yellow-300'>8am - 4am</span></p>
       <p className='text-white text-[18px]'>Saturday : <span className='text-yellow-300'>8am - 12am</span></p>

       {/* Social Icons */}
        <div className='flex mt-[2rem] items-center space-x-6  '>
          <FaFacebook className='w-[1.5rem] h-[1.5rem] text-blue-400 ' />
          <FaInstagram className='w-[1.5rem] h-[1.5rem] text-orange-400 ' />
          <FaTwitter className='w-[1.5rem] h-[1.5rem] text-blue-300 ' />
        </div>
       </div>
</div>
            {/* Copywrite text */}
         <p className='text-white text-center mt-[1.5rem] opacity-50'>
          copywrite &copy; 2024 <span className='text-yellow-300'>WebDev Warriors</span>. All rights reserved</p>
    </footer>
  )
}

export default Footer
