import React, { useState } from 'react';
import { Button, Text } from '@mantine/core';
import LanguageIcon from '@mui/icons-material/Language';
import HouseIcon from '@mui/icons-material/House';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';

const CustomComponent = () => {
  const [selectedOption, setSelectedOption] = useState('Option 1');

  const optionTexts = {
    'Option 1': (
      <div className='p-2 text-black dark:text-white'>
        <ul style={{ listStyle: "disc" }}>
          <div><h2 className='text-4xl mb-4'>E-Commerce</h2></div>
          <li>24/7 Customer Support: Instant assistance and guidance through the purchase journey.</li>
          <li>Personalized Recommendations: Tailored product suggestions for a better shopping experience.</li>
          <li>Seamless Order Tracking: Real-time updates on orders and delivery details.</li>
          <li>Increased Conversion Rates: Proactive assistance to boost sales.</li>
        </ul>
        <a className='text-blue-600 underline mt-7'>View Demo</a>

      </div>
    ),
    'Option 2': (
      <div className='p-2 text-black dark:text-white'>
        <ul style={{ listStyle: "disc" }}>
          <div><h2 className='text-4xl mb-4'>Real Estate <h3 className='font-bold text-2xl text-red-500 mb-5'>Comming Soon</h3></h2></div>
         
            <li>Smart Property Recommendations: Personalized property suggestions.</li>
            <li>Instant Property Information: Real-time details about properties.</li>
            <li>Automated Appointment Scheduling: Efficient coordination between agents and clients.</li>
            <li>Enhanced Lead Qualification: Pre-qualification of leads for higher conversion.</li>
        </ul>
      </div>
    ),
    'Option 3': (
      <div className='p-2 text-black dark:text-white'>
        <ul style={{ listStyle: "disc" }}>
          <div><h2 className='text-4xl mb-4'>Event Management <h3 className='font-bold text-2xl text-red-500 mb-5'>Comming Soon</h3></h2></div>
         
            
                
                <li>Intelligent Event Planning: Smart event planning tools and insights.</li>
                <li>Automated Event Reminders: Timely reminders for attendees.</li>
                <li>Efficient Resource Allocation: Optimal allocation of event resources.</li>
                <li>Streamlined Registration Process: Simplified and automated registration.</li>

        </ul>
      </div>
    ),
  };

  const handleOptionClick = (option) => {
    setSelectedOption(option);
  };

  return (
    <div className='w-full  h-full flex flex-col md:flex-row md:justify-evenly'>

      <div className='grid grid-cols-1  md:grid-cols-2 gap-5 md:w-[30%]'>

        <div className='border dark:border-none flex h-[15em] dark:bg-[#17171d] dark:border-gray-600 rounded-lg  dark:text-white hover:bg-[#1d80d7] dark:hover:bg-[#1d80d7] hover:text-white duration-300 transition-all hover:cursor-pointer flex-col justify-center items-center md:w-[120]  p-5' onClick={() => handleOptionClick('Option 1')}>
          <div className='p-8 w-full flex items-center flex-col '>

            <LanguageIcon sx={{ fontSize: "40px" }} />

            <h2 className='font-bold mt-3'>E-Commerce</h2>

          </div>
          <button className='h-[35px] w-[140px]  rounded-md bg-[#444455] text-white p-5 flex items-center justify-center'>Learn More</button>
        </div>

        <div className='border dark:border-none flex h-[15em] dark:hover:bg-[#1d80d7] hover:bg-[#1d80d7] hover:text-white dark:bg-[#17171d] dark:border-gray-600 rounded-lg dark:text-white hover:cursor-pointer duration-300  transition-all flex-col justify-center items-center w-full  p-5' onClick={() => handleOptionClick('Option 2')}>
          <div className='p-8 w-full flex items-center flex-col '>

            <HouseIcon sx={{ fontSize: "40px" }} />

            <h2 className='font-bold mt-3'>Real-Estate</h2>

          </div>
          <button className='h-[35px] w-[140px] rounded-md bg-[#444455] text-white p-5 flex items-center justify-center'>Learn More</button>
        </div>

        <div className='border dark:border-none hover:bg-[#1d80d7] dark:hover:bg-[#1d80d7] hover:text-white dark:bg-[#17171d] flex h-[15em] rounded-lg dark:text-white hover:cursor-pointer duration-300  transition-all flex-col justify-center items-center w-full ' onClick={() => handleOptionClick('Option 3')}>
          <div className='p-6 w-full flex items-center flex-col '>

            <CalendarMonthIcon sx={{ fontSize: "40px" }} />

            <h2 className='font-bold mt-3 text-center'>Event Management</h2>

          </div>
          <button className='h-[35px] w-[140px] rounded-md bg-[#444455] text-white p-5 flex items-center justify-center'>Learn More</button>
        </div>
      </div>

      <div className='lg:w-[40em] w-[50%] h-[33em] p-10 '>
        <Text size="xl">{optionTexts[selectedOption]}</Text>
      </div>

    </div>
  );
};

export default CustomComponent;
