import React from 'react';
import Image from 'next/image';

interface Props {
  name: string;
  image: string; // Ensure this is a valid URL or import path
  position: string;
}

const TeamCard: React.FC<Props> = ({ name, image, position }) => {
  return (
    <div className="flex flex-col items-center">
      <Image 
        src={image} 
        alt={`Image of ${name}`} // Great for accessibility!
        width={400} 
        height={400} 
        className="rounded-2xl" 
      />
      <h1 className="text-[40px] text-gray-800 mt-[1.5rem] text-center font-bold">
        {name}
      </h1>
      <p className="mt-[0.4rem] mb-[0.4rem] px-4 py-1 bg-green-600 text-white text-center font-medium w-fit">
        {position}
      </p>
      <p className="text-center md:w-[70%] text-gray-600 mt-[1rem]">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita quisquam dolor vel distinctio ut corporis debitis!?
      </p>
    </div>
  );
}

export default TeamCard;
