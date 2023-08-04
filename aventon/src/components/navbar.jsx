import { useState } from 'react';
import logo from '/logo.png';

import Light from '../components/light';
import Hamburger from '../components/hamburger';

export default function Nav() {
  return (
    <nav className='fixed top-0 left-0 right-0 w-full bg-[#fbfefe] dark:bg-[#030808]' style={{ zIndex: 9 }}>
      <div className='h-full p-5 w-full flex items-center justify-between'>
        {/* ... rest of the code */}
        <div className='w-full h-full flex items-center justify-between'>
          <div className='flex items-center'>
            <img src={logo} className='h-[35px]' alt='logo' />
            <div className='flex flex-col items-start ml-3 mb-[12px] relative'>
              <h1 className='text-[25px] dark:text-white font-bold'>AVENTON</h1>
              <h3 className='text-[17.5px] absolute dark:text-white bottom-[-11px] font-bold'>AUTOMATION</h3>
            </div>
          </div>

          <div className='hidden md:flex'>
            <ul className='flex items-center xl:gap-x-6 '>
              <li className='text-[17.5px] dark:text-white hover:-translate-y-1 font-bold mr-5 hover:text-gray-500 dark:hover:text-gray-500 transition-all duration-200 hover:cursor-pointer'>
                Benefits
              </li>
              <li className='text-[17.5px] dark:text-white hover:-translate-y-1 font-bold mr-5 hover:text-gray-500 dark:hover:text-gray-500 transition-all duration-200 hover:cursor-pointer'>
                Models
              </li>
              <li className='text-[17.5px] dark:text-white hover:-translate-y-1 font-bold mr-5 hover:text-gray-500 dark:hover:text-gray-500 transition-all duration-200 hover:cursor-pointer'>
                Process
              </li>
              <li className='text-[17.5px] dark:text-white hover:-translate-y-1 font-bold mr-5 hover:text-gray-500 dark:hover:text-gray-500 transition-all duration-200 hover:cursor-pointer'>
                Plans
              </li>
              <li className='text-[17.5px] dark:text-white hover:-translate-y-1 font-bold mr-5 hover:text-gray-500 dark:hover:text-gray-500 transition-all duration-200 hover:cursor-pointer'>
                FAQs
              </li>
            </ul>
          </div>

          <div className='md:flex hidden -translate-x-12 md:translate-x-0 items-center'>
            <Light />
            <button className='h-[50px] w-[140px] bg-blue-600 ml-4 rounded-full 
                                            transition-all duration-200 floating-button shadow-below'>
              <h2 className='font-bold text-1xl text-white'>View Plans</h2>
            </button>
          </div>

          <div className='flex items-center md:hidden '>
            <Light />
            <Hamburger />
          </div>
          
        </div>
      </div>
    </nav>
  );
}
