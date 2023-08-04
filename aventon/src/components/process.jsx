import SearchIcon from '@mui/icons-material/Search';
import AutorenewIcon from '@mui/icons-material/Autorenew';
import BuildIcon from '@mui/icons-material/Build';


export default function process() {
  return (
    <div className='w-full md:w-[70%] xl:w-[40%] flex flex-col items-center justify-center '>

    <h3 className='text-6xl font-bold dark:text-white'>The <span className='gradient-text'>Process</span></h3>
    <p className='mb-[80px] mt-2 text-gray-400'>Unveiling the Seamless AI Automation Journey</p>

    <div className='flex flex-col md:flex-row gap-7 w-full justify-between'>
   
       <div className='h-[17em] md:w-[18em] border dark:border-none rounded-lg relative '>
           <div className='absolute  w-full h-full dark:bg-gray-500 opacity-20'></div>
           <div className='absolute top-1/2 w-full left-1/2 transform flex flex-col items-center justify-center dark:text-white -translate-x-1/2 -translate-y-1/2'>
             <SearchIcon sx={{ fontSize: "40px" }} />
             <p className="dark:text-white mt-5 font-bold">Discover</p>
             <div className='w-[90%] p-1 pt-4'>
             <p className='text-[13px] text-gray-700 dark:text-gray-400'>Schedule a consultation call to explore the best automation strategies for your business. </p>
             </div> 
             
           </div>
         </div>

         <div className='h-[17em] md:w-[18em] dark:border-none border rounded-lg relative '>
           <div className='absolute w-full h-full dark:bg-gray-500 opacity-20'></div>
           <div className='absolute top-1/2 w-full left-1/2 transform flex flex-col items-center dark:text-white justify-center -translate-x-1/2 -translate-y-1/2'>
             <AutorenewIcon sx={{ fontSize: "40px" }} />
             <p className="dark:text-white mt-5 font-bold">Automate</p>
             <div className='w-[90%] p-1 pt-4'>
             <p className='text-[13px] text-gray-700 dark:text-gray-400'>Leverage our advanced AI technologies and deploy tailored solutions for seamless automation</p>
             </div> 
             
           </div>
         </div>

         <div className='h-[17em] md:w-[18em] border dark:border-none rounded-lg relative '>
           <div className='absolute w-full h-full dark:bg-gray-500 opacity-20'></div>
           <div className='absolute  dark:text-white top-1/2 w-full left-1/2 transform flex flex-col items-center justify-center -translate-x-1/2 -translate-y-1/2'>
             <BuildIcon sx={{ fontSize: "40px" }} />
             <p className="dark:text-white mt-5 font-bold">Optimize</p>
             <div className='w-[90%] p-1 pt-4'>
             <p className='text-[13px] text-gray-700 dark:text-gray-400'>Schedule a consultation call to explore the best automation strategies for your business. </p>
             </div> 
             
           </div>
         </div>

        

           

    </div>
    <div className='w-full flex items-center justify-center mt-10'> <button className='p-1 h-[45px] hover:bg-blue-700  bg-blue-600 rounded-lg w-[150px] text-white'>View Plans</button></div>

   </div>
  )
}