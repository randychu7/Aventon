import React, { useEffect } from 'react';
import gsap from 'gsap'; // Import gsap here
import Navbar from './components/navbar';
import Hero from './components/hero';
import Features from './components/features';
import { splitText } from './splitText';

import './App.css';

function App() {
  useEffect(() => {
    splitText();
  }, []);

  return (
    
    <div>
  
        <Navbar/>

        <div className='w-full hero  h-screen  mt-[10em]'>

          <Hero/>


        </div>

        <div className='pb-[150px] '>
          <Features/>
        </div>

        <section className='bg-black rounded-t-xl dark:bg-white' style={{borderRadius: '130px 130px 0 0'}}>
          <p className='reveal-type split-type text-white dark:text-black text-6xl font-bold'> 
          Experience endless <span className='gradient-text'>performance</span> with our AI automated solutions, as our cutting-edge technology continually optimizes and evolves to meet your business demands.
        </p>
        </section>
        <section className='bg-black dark:bg-white'>
        <p className='reveal-type split-type text-white dark:text-black text-6xl font-bold'> 
        Elevate <span className='gradient-text'>customer</span> satisfaction and engagement while benefiting from cost savings, personalized interactions, and exceptional support.</p>
        </section>
        <section className='bg-black dark:bg-white'>
        <p className='reveal-type split-type text-white dark:text-black text-6xl font-bold'> 
        Enjoy <span className='gradient-text'>round-the-clock</span> service availability, providing continuous support and accessibility to your customers.
        </p>
        </section>

    </div>
    
  )
}

export default App
