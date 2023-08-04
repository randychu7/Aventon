import { useState, useEffect } from 'react';
import Lottie from 'lottie-react';
import animationData from '../assets/ai_animation.json';
import { useRef } from 'react';
import '../App.css';

export default function Hero() {


  const aiRef = useRef(null);
 


  return (
    <div className='w-full'>
      <div className='flex-col flex md:flex-row items-center justify-center'>
        <div className='flex justify-center w-[50%] xl:w-[40%] items-center'>
          <div className='lg:p-10 mb-14 md:mb-0'>
            <h2 className='text-6xl 2xl:text-8xl dark:text-white mb-6 font-black text-center md:text-left'>
            Maximize Productivity and <span className='gradient-text'>Profit</span> with AI. 
            </h2>
            <h3 className='text-[16px] text-black dark:text-gray-300 text-center md:text-left'>

Aventon Automation drives business success through smart integration, automation enabling seamless efficiency and increased revenue generation.
                </h3>
            
          </div>
        </div>
        <div>
          <Lottie lottieRef={aiRef} className='2xl:h-[600px] -translate-y-12' animationData={animationData} />
        </div>
      </div>
    </div>
  );
}
