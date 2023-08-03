import { useState } from 'react';
import Lottie from 'lottie-react';
import animationData from '../assets/ai_animation.json';
import { useRef } from 'react';
import axios from 'axios';
import '../App.css';

export default function Hero() {
  const [email, setEmail] = useState('');

  const handleEmail = async (e) => {
    e.preventDefault();
    try {
      axios.post('https://aventon-api.herokuapp.com/api/v1/emails', {
        email: email,
      });
    } catch (error) {
      console.log(error);
    }
  };

  const aiRef = useRef(null);

  return (
    <div className='w-full xl:mt-[13em]'>
      <div className='flex-col flex md:flex-row items-center justify-center'>
        <div className='flex justify-center w-[50%] xl:w-[40%] items-center'>
          <div className='lg:p-10 mb-14 md:mb-0'>
            <h2 className='text-5xl md:text-8xl dark:text-white mb-6 font-black text-center md:text-left'>
              Boost productivity, maximize <span className='gradient-text'>profits.</span>
            </h2>
            <h3 className='text-1xl text-center dark:text-gray-200 xl:w-[70%] md:text-left'>
              Aventon Automation helps businesses integrate and automate processes, saving time and money while increasing revenue
            </h3>
            <div className='w-full flex justify-center md:justify-start'>
              <div className='flex flex-col md:flex-row w-full  items-center'>
                <form onSubmit={handleEmail} className='flex flex-col md:flex-row items-center md:items-start'>

                  <input
                    value={email}
                    onChange={(e) => setEmail(e.target.value)} // <-- Update the state with the input value
                    className='w-[350px] h-[50px] mt-7 rounded-lg border p-4 mr-4'
                    placeholder='Enter Your Email..'
                  ></input>
                  

                  <button className='h-[50px] w-[140px] bg-[#0061b6] rounded-full mt-7 transition-all duration-200 floating-button shadow-below'>
                    <h2 className='font-bold text-1xl text-white'>Get Started</h2>
                  </button>

                 
                </form>
              </div>
            </div>
          </div>
        </div>
        <div>
          <Lottie lottieRef={aiRef} className='md:h-[600px] -translate-y-12' animationData={animationData} />
        </div>
      </div>
    </div>
  );
}
