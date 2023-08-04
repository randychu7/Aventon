import Lottie from 'lottie-react';
import animationData from '../assets/banner.json';

export default function banner(){
    return(
        <div className='h-[80em] rounded-3xl mt-[50em] md:mt-0 md:h-[100%] w-full md:items-center justify-evenly flex flex-col md:flex-row bg-black dark:bg-white md:p-[70px]'>

            <div className="flex w-full md:w-[50%] md:mr-[35px] items-center md:p-[30px] p-6 justify-center mb-5 md:mb-0">
                <h1 className='dark:text-black text-white text-3xl md:text-5xl font-bold reveal-type split-type'>By 2024, more than 75% of businesses will incorporate AI automation into their core operations, revolutionizing industries and driving unprecedented efficiency and innovation <br/> <br/> -Gartner</h1>
            </div>

            <div className="flex rounded-xl items-center bg-white justify-center">
            <Lottie className='w-[100%] h-[100%] object-cover' animationData={animationData}/>
            </div>

    </div>
    )
    
}