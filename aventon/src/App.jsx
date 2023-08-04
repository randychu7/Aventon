import Navbar from './components/navbar';
import Hero from './components/hero';
import Features from './components/features';
import Sections  from './components/sections';
import Carousel from './components/products';
import Accordion from './components/accordian';
import Process from './components/process';
import Banner from './components/banner';
import Pricing from './components/pricing';
import Faq from './components/faq';
import Footer from './components/footer';
import React, { useState, useEffect } from 'react';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import Testimonials from './components/testimonials';

import './App.css';

function App() {
  const [showFixedButton, setShowFixedButton] = useState(false);

  const[switchButtons, setSwitchButtons] = useState(true);

  const handleSwitch = () => {
      setSwitchButtons(false);
  }

  useEffect(() => {
    const handleScroll = () => {
      // Check if the user has scrolled beyond a certain position (e.g., 200 pixels)
      if (window.scrollY > 200) {
        setShowFixedButton(true);
      } else {
        setShowFixedButton(false);
      }
    };

    // Attach the scroll event listener when the component mounts
    window.addEventListener('scroll', handleScroll);

    // Clean up the scroll event listener when the component unmounts
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    
    <div>

{showFixedButton && (
        <button
          className='fixed bottom-8 right-8 bg-blue-600 hover:bg-blue-700 text-white h-[60px] w-[60px] rounded-lg'
          onClick={() => {
    
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          style={{ zIndex: 999 }}
        >
          <ArrowUpwardIcon style={{ fontSize: 40 }} />
        </button>
      )}
  
        <Navbar/>

        <div  className='w-full hero h-screen mt-[14em] 2xl:mt-[10em]'>

          <Hero/>


        </div>

        <section  className='2xl:-translate-y-[190px]'>
            <Testimonials/>
        </section>

      <div id="benefits" className='mt-[30px] mb-[13em]'></div>

        <div  className='pb-[10px] w-full relative mt-[5em] mb-[19em]' >
          <Features/>
        </div>


        <section className='h-[15em] bg-black dark:bg-white'  style={{borderRadius: '90px 90px 0 0'}}>

        </section>

        <Sections/>

       


        <section id="models" className=' flex items-center'>

         
         
         <div  className=' p-5 w-full'>


          <div className='w-full flex items-center dark:text-white justify-center text-6xl mb-[1em] mt-[3em] md:mt-[3em] font-bold'>
            
              <h2>Our <span className='gradient-text'>AI </span> Models</h2></div>
              <div className='hidden md:flex'>
                 <Carousel/>
              </div>
          
          <div className='h-[40em] p-5 block md:hidden'> 
                <Accordion/>
            </div>
         
          </div>
        </section>

        <section id="process" className='h-screen flex mt-[4em] mb-[15em] items-center justify-center'>
        
        <Process/>


        </section>

        <section className='h-screen mb-[13em] 2xl:mb-0 flex justify-center items-center'>

         <Banner/>
          
        </section>
        
        
        
        <section id="plans" className='h-screen relative mb-[19em] 2xl:mb-0 mt-[68em] md:mt-12 flex flex-col justify-center items-center'>
   

          

          <Pricing/>

        </section>

        <section id="faqs" className='h-screen mt-[75em] md:mt-12 flex  justify-center items-center'>
          <Faq/>
          </section>

        <section className='mt-[30em] md:mt-0'>
        <Footer/>
        </section>
    

  

    </div>
    
  )
}

export default App
