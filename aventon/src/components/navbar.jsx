import { useState } from 'react';
import logo from '/logo.png';
import Light from '../components/light';
// import Hamburger from '../components/hamburger';
import MenuIcon from '@mui/icons-material/Menu';
export default function Nav() {
    const [open, setOpen] = useState(false);

    const handleOpen = () => {
        setOpen(true);
      };
    
      const handleClose = () => {
        setOpen(false);
      };
    
    const handleScrollToSection = (sectionId) => {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      };

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
              <li   onClick={() => handleScrollToSection('benefits')} className='text-[17.5px] dark:text-white hover:-translate-y-1 font-bold mr-5 hover:text-gray-500 dark:hover:text-gray-500 transition-all duration-200 hover:cursor-pointer'>
                Benefits
              </li>
              <li   onClick={() => handleScrollToSection('models')} className='text-[17.5px] dark:text-white hover:-translate-y-1 font-bold mr-5 hover:text-gray-500 dark:hover:text-gray-500 transition-all duration-200 hover:cursor-pointer'>
                AI Models
              </li>
              <li onClick={() => handleScrollToSection('process')} className='text-[17.5px] dark:text-white hover:-translate-y-1 font-bold mr-5 hover:text-gray-500 dark:hover:text-gray-500 transition-all duration-200 hover:cursor-pointer'>
                Process
              </li>
              <li   onClick={() => handleScrollToSection('plans')} className='text-[17.5px] dark:text-white hover:-translate-y-1 font-bold mr-5 hover:text-gray-500 dark:hover:text-gray-500 transition-all duration-200 hover:cursor-pointer'>
                Plans
              </li>
              <li   onClick={() => handleScrollToSection('faqs')} className='text-[17.5px] dark:text-white hover:-translate-y-1 font-bold mr-5 hover:text-gray-500 dark:hover:text-gray-500 transition-all duration-200 hover:cursor-pointer'>
                FAQs
              </li>
            </ul>
          </div>

          <div className='md:flex hidden -translate-x-12 md:translate-x-0 items-center'>
            <Light />
            <button   onClick={() => handleScrollToSection('plans')} className='h-[50px] w-[140px] bg-blue-600 ml-4 rounded-full 
                                            transition-all duration-200 floating-button shadow-below'>
              <h2 className='font-bold text-1xl text-white'>View Plans</h2>
            </button>
          </div>

          <div className='flex items-center relative md:hidden '>
            <Light />
            {/* <Hamburger /> */}
            <div className='w-[40px] h-[40px] ml-3 dark:border-gray-500 transition-all border duration-500 hover:bg-gray-300 dark:text-white flex items-center justify-center rounded-md'>
          <MenuIcon onClick={handleOpen} className='text-[40px] dark:text-white hover:text-gray-500 dark:hover:text-gray-500 transition-all duration-200 hover:cursor-pointer' />

          </div>
         </div>

        

         {open && (
    <div className='doNotClose overlay fixed md:hidden w-full top-0 left-0 right-0 bottom-0 z-20' onClick={handleClose}>
    <div className='flex flex-col p-7 dark:text-white items-start gap-y-6 dark:bg-[#030808] bg-[#fbfefe]' style={{ position: 'relative' }}>
      <div onClick={() => handleScrollToSection('benefits')} className='hover:text-gray-500 hover:cursor-pointer h-full w-full'>Benefits</div>
      <div onClick={() => handleScrollToSection('models')} className='hover:text-gray-500 hover:cursor-pointer h-full w-full'>AI Models</div>
      <div onClick={() => handleScrollToSection('process')} className='hover:text-gray-500 hover:cursor-pointer h-full w-full'>Process</div>
      <div onClick={() => handleScrollToSection('plans')} className='hover:text-gray-500 hover:cursor-pointer h-full w-full'>Plans</div>
      <div onClick={() => handleScrollToSection('faqs')} className='hover:text-gray-500 hover:cursor-pointer h-full w-full'>FAQs</div>
    </div>
  </div>
)}


          
        </div>
      </div>
    </nav>
  );
}