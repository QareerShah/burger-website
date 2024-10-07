import React from 'react'
import { GrRestaurant } from 'react-icons/gr'

const Reservationform = () => {
  return (
    <div className='bg-green-700 p-6 rounded-lg mb-9'>
      <GrRestaurant className='w-[5rem] h-[5rem] text-white mt-[2rem] mx-auto' />
      <h1 className='text-center font-bold uppercase text-[30px] md:text-[40px] lg:text-[50px] mt-[0.5rem] text-white'>
        Reservation
      </h1>
      <p className='text-[20px] uppercase md:text-[25px] text-white font-bold text-center'>
        Book Your Table
      </p>

      {/* Inputs */}
      <div className='mt-[2rem]'>
        <div className='flex flex-col sm:flex-row space-y-3 sm:space-y-0 items-center w-[80%] mx-auto justify-between space-x-4'>
          <select
            className='px-10 py-2.5 bg-transparent rounded-lg outline-none font-bold text-white border-[2.2px] border-gray-100'
            name='people'
            id='people'
          >
            <option value='1' className='text-black'>1 Person</option>
            <option value='2' className='text-black'>2 People</option>
            <option value='3' className='text-black'>3 People</option>
            <option value='4' className='text-black'>4 People</option>
            <option value='5' className='text-black'>5 People</option>
          </select>

          <input
            type='date'
            className='px-10 py-2.5 bg-transparent rounded-lg outline-none font-bold text-white border-[2.2px] border-gray-100'
          />
        </div>

        <input
          type='time'
          className='px-10 py-2.5 bg-transparent block w-[80%] mx-auto mt-[1rem] rounded-lg outline-none font-bold text-[17px] text-white border-[2.2px] border-gray-100'
        />

        <div className='mt-[2rem] w-[80%] text-center mx-auto'>
          <button className='px-8 py-3 rounded-lg mb-[3rem] text-[16px] w-full bg-blue-950 transition-all duration-200 hover:bg-red-700 text-white'>
            Book Now
          </button>
        </div>
      </div>
    </div>
  )
}

export default Reservationform
