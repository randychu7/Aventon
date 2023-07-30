import { useState } from 'react'
import logo from '/logo.png'
import './App.css'
import Light from './components/light'
import Hero from './components/hero'
function App() {

  return (
    
      <div className='w-screen'>
        <nav className='w-full'>
          <div className='h-[90px] dark:bg-[#030808] bg-[#fbfefe] fixed top-0 lefrt p-10 left-0 w-full '>
            <div className='w-full h-full flex items-center justify-between'>   
                  <div className='flex items-center'>
                        <img src={logo} className='h-[35px]' alt='logo' />
                        <div className='flex flex-col items-start ml-3 mb-[12px] relative'> 
                          <h1 className='text-[25px] dark:text-white font-bold'>AVENTON</h1>
                          <h3 className='text-[17.5px] absolute dark:text-white bottom-[-11px] font-bold'>AUTOMATION</h3>
                        </div>
                      
                  </div>        
                  <div>
                    <ul className='flex items-center gap-x-20 '>
                      <li className='text-[17.5px] dark:text-white hover:-translate-y-1 font-bold mr-5 hover:text-gray-500 dark:hover:text-gray-500 transition-all duration-200 hover:cursor-pointer '>Home</li>
                      <li className='text-[17.5px] dark:text-white hover:-translate-y-1 font-bold mr-5 hover:text-gray-500 dark:hover:text-gray-500 transition-all duration-200 hover:cursor-pointer'>About</li>
                      <li className='text-[17.5px] dark:text-white hover:-translate-y-1 font-bold mr-5 hover:text-gray-500 dark:hover:text-gray-500 transition-all duration-200 hover:cursor-pointer'>Contact</li>
                      <li className='text-[17.5px] dark:text-white hover:-translate-y-1 font-bold mr-5 hover:text-gray-500 dark:hover:text-gray-500 transition-all duration-200 hover:cursor-pointer'>Blog</li>
                      </ul>
                  </div>

                  <div className='flex items-center'>
                  <Light/>
                  <button
                className='h-[50px] w-[140px] bg-[#0061b6] ml-4 rounded-full 
                            transition-all duration-200 floating-button shadow-below'
              >
                <h2 className='font-bold text-1xl text-white'>View Plans</h2>
              </button>
                   
                  </div>
            </div>
          </div>
        </nav>


        <div className='w-full bg-slate-300 h-full mt-[6em]'>

          <Hero/>


        </div>
      </div>
    
  )
}

export default App
