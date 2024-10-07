import React from 'react'
import Image from 'next/image'
import { BiPhone } from 'react-icons/bi'
import Reservationform from './Reservationform'

const Reservation = () => {
  return (
    <div className='pt-[5rem] relative mt-[2rem] bg-center bg-cover bg-[url("/images/bg-black.png")]'>
        {/* Overlay */}
        <div className='absolute w-full h-full bg-black/60 top-0 left-0 right-0 bottom-0'></div>
        <div className='w-[80%] relative z-[20] mx-auto grid grid-cols-1 lg:grid-cols-2 items-center gap-[3rem]'>
          {/* Text Content */}
          <div>
            <h1 className='text-[30px] md:text-[40px] lg:text-[50px] text-white font-bold leading-[3rem] md:leading-[4rem]'>
                DO YOU HAVE ANY DINNER PLAN TODAY? RESERVE YOUR TABLE 
            </h1>
            <p className='text-[17px] mt-[1rem] text-white text-opacity-50'>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
              Dignissimos totam excepturi, aspernatur odio sed quos 
              ab voluptate dicta, molestiae, sapiente dolorum non. 
              Libero magnam sequi corporis labore officiis aspernatur tenetur?
            </p>
            <div className='mt-[2rem] flex items-center space-x-4'>
               <div className='w-[3rem] h-[3rem] bg-red-500 rounded-full flex items-center justify-center flex-col  hover:bg-green-800'>
                <BiPhone className='w-[1.7rem] h-[1.7rem] text-white'  />
               </div>
               <div>
                <h1 className='text-[25px] text-white font-semibold'>Quick Order 24/7</h1>
                <h1 className='text-yellow-300 font-bold text-[30px]'>+0123 456 789</h1>
               </div>
            </div>
         </div>
          {/* Reservation form */}
          <Reservationform />
        </div>
    </div>
  )
}

export default Reservation
