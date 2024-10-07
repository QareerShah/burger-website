import React from 'react'
import { ImCross } from 'react-icons/im'
import Link from 'next/link'

interface Props {
  showNav: boolean;
  closeNav: () => void;
}

const MobileNav = ({ closeNav, showNav }: Props) => {
  // Corrected the typo in translate-x-0
  const navStyle = showNav ? "translate-x-0" : "translate-x-[-100%]";

  return (
    <div className={`fixed ${navStyle} right-0 left-0 top-0 bottom-0 h-screen
    bg-[#000000e0] z-[1002] overflow-auto transition-all duration-500`}>
      <ImCross onClick={closeNav} className='absolute top-8 right-8 w-8 h-8 text-white cursor-pointer' />

      {/* Nav Div */}
      <div className={`bg-emerald-700 transition-all duration-500 delay-200 flex flex-col items-center
      justify-center w-[90%] md:w-[70%] h-[100%]`}>
        {/* Nav Items */}
        <ul className='space-y-6 md:space-y-10'>
          <li className='text-2xl md:text-[35px] font-medium hover:text-yellow-600 text-white'>
            <Link href='/'>Home</Link>
          </li>
          <li className='text-2xl md:text-[35px] font-medium hover:text-yellow-600 text-white'>
            <Link href='/shop'>Shop</Link>
          </li>
          <li className='text-2xl md:text-[35px] font-medium hover:text-yellow-600 text-white'>
            <Link href='/menu'>Menu</Link>
          </li>
          <li className='text-2xl md:text-[35px] font-medium hover:text-yellow-600 text-white'>
            <Link href='/blog'>Blog</Link>
          </li>
          <li className='text-2xl md:text-[35px] font-medium hover:text-yellow-600 text-white'>
            <Link href='/contact'>Contact</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default MobileNav;
