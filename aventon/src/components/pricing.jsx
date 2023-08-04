import { BsCheck } from 'react-icons/bs';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';

export default function pricing() {
    return (<div>
        <div className='w-full flex flex-col justify-center p-4 items-center'>  
        <h3 className='font-bold text-6xl '><span className='gradient-text'>Subscriptions </span></h3>
        <p className='text-gray-400 mb-10 mt-4 text-center md:text-left'> We currently have two tiers for subscriptions, choose the best plan for your business.</p>
        </div>
                  

        <div className='flex flex-col md:flex-row gap-5'>
            

            <div className="w-full flex flex-col p-5 border border-gray-200 rounded-lg sm:p-8 dark:bg-[#1d2529]  dark:border-gray-700">
          <h5 className="mb-4 text-xl font-medium text-gray-500 dark:text-white">Standard plan</h5>
          <div className="flex items-baseline text-gray-900 dark:text-white relative">
            <span className="text-3xl font-semibold">$</span>
            <span className="text-5xl font-extrabold tracking-tight line-through">2000</span>
            
          
            <span className="ml-1 text-xl font-normal text-gray-500 dark:text-gray-400">/month</span>
            
          </div>
          <div className='flex items-center just'>
            <h2 className='text-red-600 text-5xl font-bold'>Free</h2> 
            <div className='w-[95px] ml-3 text-white flex rounded-lg items-center justify-center h-[40px] bg-blue-600'>
            <div className='flex'>
            <p>Limited</p>
            <AutoAwesomeIcon/>
                </div>
            </div>
            </div>
          <ul role="list" className="space-y-5 mt-[40px] my-7">
        
            
            <li className="flex space-x-3">
              <BsCheck className="flex-shrink-0 w-4 h-4 bg-blue-600 rounded-full text-white" />
              <span className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400">1 hour workshop call to identify the needs of your business.</span>
            </li>
            <li className="flex space-x-3">
              <BsCheck className="flex-shrink-0 w-4 h-4 bg-blue-600 rounded-full text-white" />
              <span className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400">Monthly AI optimizations.</span>
            </li>
            <li className="flex space-x-3">
              <BsCheck className="flex-shrink-0 w-4 h-4 bg-blue-600 rounded-full text-white" />
              <span className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400">Maintence and upgrades</span>
            </li>
            <li className="flex space-x-3">
              <BsCheck className="flex-shrink-0 w-4 h-4 bg-blue-600 rounded-full text-white" />
              <span className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400">Integration help.</span>
            </li>
            <li className="flex space-x-3">
              <BsCheck className="flex-shrink-0 w-4 h-4 bg-blue-600 rounded-full text-white" />
              <span className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400">Cancel anytime.</span>
            </li>
            <li className="flex space-x-3">
              <BsCheck className="flex-shrink-0 w-4 h-4 bg-gray-500 rounded-full text-white dark:text-black" />
              <span className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400" style={{ textDecoration: 'line-through' }}>AI Customization Options.</span>
            </li>
            <li className="flex space-x-3">
              <BsCheck className="flex-shrink-0 w-4 h-4 bg-gray-500 rounded-full text-white dark:text-black" />
              <span className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400" style={{ textDecoration: 'line-through' }}>Advanced AI Features.</span>
            </li>
            <li className="flex space-x-3">
              <BsCheck className="flex-shrink-0 w-4 h-4 bg-gray-500 rounded-full text-white dark:text-black" />
              <span className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400" style={{ textDecoration: 'line-through' }}>Priority Support.</span>
            </li>
            
            
          </ul>
          <button
            type="button"
            className="text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-200 dark:focus:ring-blue-900 font-medium rounded-lg text-sm px-5 py-2.5 inline-flex justify-center w-full text-center"
          >
            Choose plan
          </button>
        </div>

        <div className="w-full flex flex-col p-5 border border-gray-200 rounded-lg  sm:p-8 dark:bg-[#1d2529] dark:border-gray-700">
          <h5 className="mb-4 text-xl font-medium text-gray-500 dark:text-white">Premium plan</h5>
          <div className="flex items-baseline text-gray-900 dark:text-white relative">
            <span className="text-3xl font-semibold">$</span>
            <span className="text-5xl font-extrabold tracking-tight">3000</span>
            
          
            <span className="ml-1 text-xl font-normal text-gray-500 dark:text-gray-400">/month</span>
            
          </div>
          
          <ul role="list" className="space-y-5 mt-[87px] my-7">
        
            
            <li className="flex space-x-3">
              <BsCheck className="flex-shrink-0 w-4 h-4 bg-blue-600 rounded-full text-white" />
              <span className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400">1 hour workshop call to identify the needs of your business.</span>
            </li>
            <li className="flex space-x-3">
              <BsCheck className="flex-shrink-0 w-4 h-4 bg-blue-600 rounded-full text-white" />
              <span className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400">Unlimited AI optimizations.</span>
            </li>
            <li className="flex space-x-3">
              <BsCheck className="flex-shrink-0 w-4 h-4 bg-blue-600 rounded-full text-white" />
              <span className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400">Maintence and upgrades.</span>
            </li>
            <li className="flex space-x-3">
              <BsCheck className="flex-shrink-0 w-4 h-4 bg-blue-600 rounded-full text-white" />
              <span className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400">Integration help.</span>
            </li>
            <li className="flex space-x-3">
              <BsCheck className="flex-shrink-0 w-4 h-4 bg-blue-600 rounded-full text-white" />
              <span className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400">Cancel anytime.</span>
            </li>
            <li className="flex space-x-3">
              <BsCheck className="flex-shrink-0 w-4 h-4  bg-blue-600 rounded-full text-white " />
              <span className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400" >AI Customization Options.</span>
            </li>
            <li className="flex space-x-3">
              <BsCheck className="flex-shrink-0 w-4 h-4  bg-blue-600 rounded-full text-white " />
              <span className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400">Advanced AI Features.</span>
            </li>
            <li className="flex space-x-3">
              <BsCheck className="flex-shrink-0 w-4 h-4  bg-blue-600 rounded-full text-white " />
              <span className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400">Priority Support.</span>
            </li>
            
          </ul>
          <button
            type="button"
            className="dark:text-white border dark:border-gray-600 focus:ring-4 focus:outline-none focus:ring-blue-200 dark:focus:ring-blue-900 font-medium rounded-lg text-sm px-5 py-2.5 inline-flex justify-center w-full text-center" disabled
          >
            Unavailable
          </button>
        </div>
        </div>
        </div>
       
      );
    
}