import React from 'react';
import Image from 'next/image';
import { RiEBike2Fill } from 'react-icons/ri';
import { IoFastFood } from 'react-icons/io5';
import { BsDoorOpen } from 'react-icons/bs';

const Delivery = () => {
  return (
    <div className='pt-[8rem] pb-[3rem]'>
      <div className='w-[80%] mx-auto grid items-center grid-cols-1 lg:grid-cols-2 gap-[3rem]'>
        {/* Image */}
        <div data-aos='fade-right'  data-aos-anchor-placement='top-center'
        className='flex justify-center'>
          {/* Use Next.js Image component for better optimization */}
          <Image
            src="/images/delivery_boy.png" // Ensure the path is correct
            alt="Delivery Boy"
            width={500} // Set a width for the image
            height={500} // Set a height for the image
            className='object-cover'
          />
        </div>

        {/* Text content */}
        <div>
        <h1 className='text-[30px] md:text-[40px] lg:text-[50px] xl:text-[60px] font-bold leading-[3rem] md:leading-[4rem]'>
        Your <span className='text-red-700'>Favourite Burger</span> on the way
       </h1>
   
       <p className='mt-[2rem] text-black text-[17px] text-opacity-70 '>
       At our burger joint, we believe that enjoying your favorite burger 
       should be effortless and convenient. With our fast and reliable delivery 
       service, you can savor every bite from the comfort of your home. Whether it's a
        late-night craving or a weekend feast, we ensure that your meal arrives fresh and hot, 
        ready to delight your taste buds. Experience the joy of gourmet burgers delivered right
         to your doorstep,making every occasion special!
      </p>
         <div className='flex items-center space-x-3 mt-[2rem]'>
           <RiEBike2Fill className='w-[2rem] h-[2rem] text-red-600'/> 
           <h1 className='text-18px text-black font-medium ' >Delivery in 30 minutes</h1>   
        </div> 

        <div className='flex items-center space-x-3 mt-[1rem]'>
           <IoFastFood className='w-[2rem] h-[2rem] text-red-600'/> 
           <h1 className='text-18px text-black font-medium ' >Free Shipping from 75$</h1>   
        </div> 

        <div className='flex items-center space-x-3 mt-[1rem]'>
           <BsDoorOpen className='w-[2rem] h-[2rem] text-red-600'/> 
           <h1 className='text-18px text-black font-medium ' >Delivery on your Doorstep</h1>   
        </div> 

        </div>
      </div>
    </div>
  );
}

export default Delivery;
