import React from 'react'
import TeamCard from './teamCard'
import Image from 'next/image'

const Team = () => {
  return (
    <div className='pt-[5rem] pb-[3rem] '>
      <h2 className='heading'>Meet Our expert <span className='text-red-700'>Chef</span></h2>
      <div className='mt-[5rem] w-[80%] mx-auto grid grid-cols-1 md:grid-cols2 lg:grid-cols-3 gap-[3rem] 
      items-center '>
        <div data-aos='fade-right'  data-aos-anchor-placement='top-center'>
          <TeamCard image="/images/t1.png" name="John Doe" position="Kitchen Poster" />
          </div>

          <div data-aos='zoom-in' data-aos-delay='300' data-aos-anchor-placement='top-center'>
  <TeamCard image="/images/t2.png" name="Bohn Doe" position="Executive Chef" />
</div>

        <div  data-aos='fade-right' data-oas-delay='600'  data-aos-anchor-placement='top-center'>
          <TeamCard image="/images/t3.png" name="Bohn Doe" position="Head Chef" />
          </div>
      </div>
    </div>
  )
}

export default Team