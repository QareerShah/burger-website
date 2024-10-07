"use client";
import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import Image from 'next/image'; 
import { BiCycling } from 'react-icons/bi';

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1,
    slidesToSlide: 1, // default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1,
    slidesToSlide: 1, // default to 1.
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1, // default to 1.
  },
};

const Hero = () => {
  return (
    <div>
      <Carousel 
        additionalTransfrom={0} 
        arrows={false} 
        autoPlay={true} 
        autoPlaySpeed={4000} 
        centerMode={false}
        infinite 
        responsive={responsive} 
        itemClass='item' 
        showDots={true}
      >
        {/* First hero slide */}
        <div className='w-full h-[88vh] flex items-center justify-center flex-col bg-blue-950'>
          <div className='w-[80%] grid grid-cols-1 md:grid-cols-2 justify-center items-center gap-[2rem] mx-auto'>
            {/* Image usage */}
            <Image src="/images/b3.png" alt="burger image" width={500} height={500} className='hidden md:block' priority />
            <div>
              <h1 className='text-[40px] font-semibold text-yellow-400'>Juicy Bites</h1>
              <h1 className='text-[90px] leading-[5rem] uppercase text-white font-bold'>Yummy <br /> Burgers</h1>
              <p className='mt-[1rem] text-white text-opacity-70 text-[18px]'>
                Welcome to JuicyBuns, where we bring you the ultimate burger experience! Our burgers 
                are crafted with the finest ingredients, from juicy patties to freshly baked buns. With 
                classic favorites and bold new flavors, theres something for every craving. Join us for 
                a burger adventure you wont forget!
              </p>
              <div className='flex items-center space-x-4'>
                <button className='mt-8 px-8 py-2 sm:py-3 text-[14px] sm:text-[16px] bg-green-500 transition-all duration-200 
                hover:bg-green-700 flex items-center rounded-md space-x-2 text-white'>
                  <BiCycling className="w-[1.7rem] h-[1.7rem]" />
                  <span className='font-bold'>Order Now</span>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Second hero slide */}
        <div className='w-full h-[88vh] flex items-center justify-center flex-col bg-red-950'>
          <div className='w-[80%] grid grid-cols-1 md:grid-cols-2 justify-center items-center gap-[2rem] mx-auto'>
            {/* Image usage */}
            <Image src="/images/b1.png" alt="burger image" width={500} height={500} className='hidden md:block' priority />
            <div>
              <h1 className='text-[40px] font-semibold text-yellow-400'>Flavor Burst</h1>
              <h1 className='text-[90px] leading-[5rem] uppercase text-white font-bold'>Tasty<br />Burgers</h1>
              <p className='mt-[1rem] text-white text-opacity-70 text-[18px]'>
                Welcome to JuicyBuns, where we bring you the ultimate burger experience! Our burgers 
                are crafted with the finest ingredients, from juicy patties to freshly baked buns. With 
                classic favorites and bold new flavors, theres something for every craving. Join us for 
                a burger adventure you wont forget!
              </p>
              <div className='flex items-center space-x-4'>
                <button className='mt-8 px-8 py-2 sm:py-3 text-[14px] sm:text-[16px] bg-blue-500 transition-all duration-200 
                hover:bg-green-700 flex items-center rounded-md space-x-2 text-white'>
                  <BiCycling className="w-[1.7rem] h-[1.7rem]" />
                  <span className='font-bold'>Order Now</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </Carousel>
    </div>
  );
};

export default Hero;
