import Lottie from 'lottie-react';
import animationData from '../assets/banner.json';

export default function banner(){
    return(
        <div className='h-[50em] mt-[50em] md:mt-0 md:h-[70%] w-full items-center justify-center flex flex-col md:flex-row bg-blue-600 md:p-[70px]'>

            <div className="flex w-full md:w-[50%] items-center md:p-[30px] justify-center mb-5 md:mb-0">
                <h1 className='text-white text-3xl md:text-5xl font-bold reveal-type split-type'>By 2024, more than 75% of businesses will incorporate AI automation into their core operations, revolutionizing industries and driving unprecedented efficiency and innovation <br/> <br/> -Gartner</h1>
            </div>

            <div className="flex rounded-xl items-center bg-white justify-center">
            <Lottie className='w-[100%] h-[100%] object-cover' animationData={animationData}/>
            </div>

    </div>
    )
    
}