
    import Lottie from 'lottie-react'; // Make sure to import the correct LottieProps
  import animationData from '../assets/ai_animation.json'
  import {useRef} from 'react'
  import "../App.css"
  
 
  
  export default function Hero() {
    
    const aiRef = useRef(null) // <--- here's the change
    return (
      <div className='w-full hero'>
      
          <div className='flex-col flex md:flex-row items-center justify-center'>
            
            <div className=' flex justify-center w-[50%] items-center'>
                  <div>
                        <h2 className=' text-5xl md:text-7xl dark:text-white mb-6 font-black text-center md:text-left'>
                        Boost productivity, maximize <span className='gradient-text'>profits.</span>
                        </h2>
                        <h3 className='text-1xl text-center dark:text-gray-200 md:text-left'>Embrace the power of automation, elevate your business, and watch your profits grow.</h3>
                        <div className='w-full flex justify-center md:justify-start'>
                                <button
                                        className='h-[50px] w-[140px] mt-6 bg-[#0061b6] rounded-full 
                                                    transition-all duration-200 floating-button shadow-below'
                                    >
                                        <h2 className='font-bold text-1xl text-white'>Get Started</h2>
                                    </button>
                        </div>
                       
                    </div>

                </div>

                <div>
                <Lottie lottieRef={aiRef} className='h-[600px] -translate-y-12' animationData={animationData}/>

                </div>

           
          </div>
      
      </div>
    );
  }