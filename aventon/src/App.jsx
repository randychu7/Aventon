import Navbar from './components/navbar';
import Hero from './components/hero';
import Features from './components/features';
import Sections  from './components/sections';
import Carousel from './components/carousel';


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

        <section className='h-screen'>

        </section>

       

  

    </div>
    
  )
}

export default App
