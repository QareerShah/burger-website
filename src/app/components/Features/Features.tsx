import React from 'react'
import Image from 'next/image'
 
const Features = () => {
  return (
    <div className='pt-[5rem] pb-[3rem]'>f
    {/* Headinng */}
    <h1 className='heading'>
    Crafted with passion <br />for every
        <span className='text-red-700'> delicious bite!</span>
    </h1>

       {/* Cards */}

          <div className='w-[90%] md:w-[80%] mt-[3rem] md:mt-[5rem] mb[3rem] mx-auto grid grid-cols-1 md:grid-cols-2
          lg:grid-cols-3 gap-[3rem]'>
          {/* 1st card */}
          <div data-aos='fade-left' data-aos-anchor-placement='top-center' >
            <div className='p-6 hover:bg-white rounded-lg transition-all duration-200'>
            <Image src="/images/b12.png" alt='burger image' height={50} width={300} className='rounded-3xl'/>
            <h1 className='mt-[1.5rem] text-center text-[24px] text-black font-semibold'>
                Chicken Burger
            </h1>
            <p className='mt-[0.2rem] text-black text-opacity-60 text-center'>
            Indulge in our mouthwatering chicken burger, crafted with tender, juicy chicken and fresh
             ingredients that ignite your taste buds! Experience the perfect blend of flavor and satisfaction in every bite!
            </p>
            </div>
          </div>

          {/* 2nd card */}

          <div data-aos='zoom-in' data-aos-delay="200" data-aos-anchor-placement='top-center'>
            <div className='p-6 hover:bg-white lg:translate-y-[3rem] rounded-lg transition-all duration-200'>
            <Image src="/images/b14.jpg" alt='burger image' height={50} width={300} className='rounded-3xl'/>
            <h1 className='mt-[1.5rem] text-center text-[24px] text-black font-semibold'>
                Zinger Burger
            </h1>
            <p className='mt-[0.2rem] text-black text-opacity-60 text-center'>
            Savor the crispy Zinger Burger, bursting with flavor and crafted with tender chicken and our signature spices.
            Treat yourself to a taste sensation that will keep you coming back for more!
            </p>
            </div>
          </div>


               {/* 3rd card */}
            
               <div data-aos='fade-right' data-aos-delay="400"  data-aos-anchor-placement='top-center'>
            <div className='p-6 hover:bg-white rounded-lg transition-all duration-200'>
            <Image src="/images/b11.png" alt='burger image' height={50} width={300} className='rounded-3xl'/>
            <h1 className='mt-[1.5rem] text-center text-[24px] text-black font-semibold'>
                Beaf Burger
            </h1>
            <p className='mt-[0.2rem] text-black text-opacity-60 text-center'>
            Experience the bold flavors of our beef burgers, made with the finest
            ingredients and topped with your favorites. Bite into happiness with every delicious mouthful!
            </p>
            </div>
          </div>

          </div>
    </div>
  )
}

export default Features 