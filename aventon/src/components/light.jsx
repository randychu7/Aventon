// ActionToggle.jsx
import React, { useState, useEffect } from 'react';
import { BsFillSunFill, BsMoonStarsFill } from "react-icons/bs";

export default function ActionToggle() {
  // Initialize the light state based on the current theme in localStorage
  const [light, setLight] = useState(localStorage.theme === 'light');

  useEffect(() => {
    // Update the light state whenever the theme in localStorage changes
    setLight(localStorage.theme === 'light');
  }, []);

  const toggleDarkMode = () => {
    if (localStorage.theme === 'dark') {
      localStorage.theme = 'light';
    } else {
      localStorage.theme = 'dark';
    }
    // Update the light state after toggling the mode
    setLight((prevLight) => !prevLight);
    document.documentElement.classList.toggle('dark');
  };

  return (
    <div
      onClick={toggleDarkMode}
      className=" rounded-md flex ml-3 items-center  justify-center  text-vume-dark-primary "
    >
        <div className='w-[40px] h-[40px] dark:border-gray-500 transition-all border duration-500 hover:bg-gray-300 dark:text-white flex items-center justify-center rounded-md'>
            {light ?  <BsFillSunFill/> : <BsMoonStarsFill/>}
        </div>  
    </div>
  );
}
