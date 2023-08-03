import Lottie from 'lottie-react';
import Feature1 from '../assets/features1.json';
import Feature2 from '../assets/features2.json';
import Feature3 from '../assets/features3.json';
import { splitText } from './splitText';
import React, { useEffect } from 'react';


export default function sections() {
    useEffect(() => {
        splitText();
      }, []);
    return (
        <div>
             <section className='bg-black h-screen  flex items-center p-6 flex-col-reverse md:flex-row dark:bg-white'>

                <div className='md:w-[50%] p-5'> 
                <p className='reveal-type split-type mt-7 text-white text-center md:text-left dark:text-black text-[30px] md:text-6xl font-bold'> 
                Experience endless <span className='gradient-text'>performance</span> with our AI solutions. <span className='md:text-[35px] text-[24px] mt-4 font-normal'>
Our AI is constantly updated and evolved to adapt to your dynamic needs, ensuring a seamless and high-performing experience for your business.</span>
                </p>
                </div>

                <div className='md:w-[50%] md:p-10'>
                    <Lottie className='w-[100%] h-[100%] object-cover' animationData={Feature3}/>
                </div>

                </section>

                <section className='bg-black h-screen flex md:flex-row flex-col items-center dark:bg-white'>

                <div className='md:w-[50%] md:p-10'>
                    <Lottie className='w-[100%] h-[100%] object-cover' animationData={Feature2}/>
                </div>

                <div className='md:w-[50%] p-5 flex items-center'>
                <p className='reveal-type mt-8 md:mt-0 split-type text-white text-center md:text-left dark:text-black text-[30px] md:text-6xl font-bold'> 

                Elevate <span className='gradient-text'>customer</span> satisfaction and engagement <span className='md:text-[35px] text-[24px] mt-4 font-normal'> Enjoy the benefits of cost savings, personalized interactions, and exceptional support. Leave a lasting impression on your customers.</span></p>

                </div>

                </section>



                <section className='bg-black h-screen flex items-center p-6 flex-col-reverse md:flex-row dark:bg-white' style={{borderRadius: '0px 0px 90px 90px'}}>

                    <div className='md:w-[50%] p-5'> 
                    <p className='reveal-type split-type mt-8 text-white text-center md:text-left dark:text-black text-[30px] md:text-6xl font-bold'> 
                    Enjoy <span className='gradient-text'>round-the-clock </span>  service.
                    
                    <span className='md:text-[35px] text-[24px] mt-4 font-normal'> With continuous accessibility, you can rely on us to assist you at any time, empowering your business to thrive without interruption and cater to your customers' needs promptly.</span>
                    </p></div>

                    <div className='md:w-[50%] md:p-10'>
                        <Lottie className='w-[100%] h-[100%] object-cover' animationData={Feature1}/>
                    </div>

                </section>
        </div>
    )
}