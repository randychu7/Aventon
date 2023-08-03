import Navbar from './components/navbar';
import Hero from './components/hero';
import Features from './components/features';
import Sections  from './components/sections';
import Carousel from './components/products';
import Accordion from './components/accordian';

import './App.css';

function App() {
  

  return (
    
    <div>
  
        <Navbar/>

        <div className='w-full hero h-screen  mt-[15em]'>

          <Hero/>


        </div>

        <div className='pb-[10px] w-full relative mb-[20em]' >
          <Features/>
        </div>
        <section className='h-[10em] bg-black dark:bg-white'  style={{borderRadius: '90px 90px 0 0'}}>

        </section>

        <Sections/>

        <section className='h-screen flex items-center'>
         
         <div className=' p-5 w-full'>


          <div className='w-full flex items-center dark:text-white justify-center text-5xl mb-[4em] mt-[4em] font-bold'><h2>Our <span className='gradient-text'>AI</span> Models</h2></div>
          <div className='hidden md:flex'>
          <Carousel/>
          </div>
          
          <div className='h-[40em] p-5 block md:hidden'> 
            <Accordion/>
            </div>
         
          </div>
        </section>

       

  

    </div>
    
  )
}

export default App
