import React, { useState } from 'react';
import LanguageIcon from '@mui/icons-material/Language';
import HouseIcon from '@mui/icons-material/House';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';

const Accordion = () => {
  const [activeAccordion, setActiveAccordion] = useState(null);

  const handleAccordionClick = (index) => {
    setActiveAccordion((prevIndex) => (prevIndex === index ? null : index));
  };

  const accordionData = [

    {
      id: 1,
      icon: <HouseIcon/>,
      question: 'Real Estate',
      answer: (<div className='p-2 text-black dark:text-white'>

            
            <ul style={{ listStyle: "disc" }}>
               
            <li>Smart Property Recommendations: Personalized property suggestions.</li>
            <li>Instant Property Information: Real-time details about properties.</li>
            <li>Automated Appointment Scheduling: Efficient coordination between agents and clients.</li>
            <li>Enhanced Lead Qualification: Pre-qualification of leads for higher conversion.</li>
            </ul>

    </div>),
      linkUrl: '/docs/getting-started/introduction/',

    },
    {
        id: 2,
        icon: <LanguageIcon/>,
        question: 'E-Commerce',
        answer: (
          <div className='p-2 text-black dark:text-white'>
         <ul style={{ listStyle: "disc" }}>
         <div className='w-full flex items-center justify-center'>
                <h3 className='font-bold text-2xl text-red-500 mb-1'>Comming Soon</h3>
                </div>
              <li>24/7 Customer Support: Instant assistance and guidance through the purchase journey.</li>
              <li>Personalized Recommendations: Tailored product suggestions for a better shopping experience.</li>
              <li>Seamless Order Tracking: Real-time updates on orders and delivery details.</li>
              <li>Increased Conversion Rates: Proactive assistance to boost sales.</li>
              </ul>
          </div>
        ),
      
      },
    {
      id: 3,
      icon: <CalendarMonthIcon/>,
      question: 'Corporate',
      answer: (<div className='p-2 text-black dark:text-white'>
            
            <ul style={{ listStyle: "disc" }}>
                <div className='w-full flex items-center justify-center'>
                <h3 className='font-bold text-2xl text-red-500 mb-1'>Comming Soon</h3>
                </div>
                <li>Intelligent Event Planning: Smart event planning tools and insights.</li>
                <li>Automated Event Reminders: Timely reminders for attendees.</li>
                <li>Efficient Resource Allocation: Optimal allocation of event resources.</li>
                <li>Streamlined Registration Process: Simplified and automated registration.</li>
            </ul>

    </div>),
    },
  ];


  return (
    <div id="accordion-collapse" data-accordion="collapse">
      {accordionData.map((item) => (
        <div className='relative' key={item.id}>
          <h2 id={`accordion-collapse-heading-${item.id}`}>
            <button
              type="button"
              className={`flex items-center justify-between w-full p-5 font-medium dark:text-white text-left dark:bg-[#17171d] border border-gray-200 rounded-xl mb-2 dark:border-[#1b1b22] hover:bg-gray-100 dark:hover:bg-gray-800 ${
                activeAccordion === item.id ? 'active' : ''
              }`}
              data-accordion-target={`#accordion-collapse-body-${item.id}`}
              aria-expanded={activeAccordion === item.id}
              aria-controls={`accordion-collapse-body-${item.id}`}
              onClick={() => handleAccordionClick(item.id)}
            >
              <div>{item.icon}</div>
              <span>{item.question}</span>
              <svg
                data-accordion-icon
                className={`w-3 h-3 rotate-180 shrink-0 ${
                  activeAccordion === item.id ? 'rotate' : ''
                }`}
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 10 6"
              >
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5 5 1 1 5" />
              </svg>
            </button>
          </h2>
          <div
            id={`accordion-collapse-body-${item.id}`}
            className={`${
              activeAccordion === item.id ? 'block' : 'hidden'
            } p-5 dark:bg-[#17171d] border-gray-200 dark:border-gray-700`}
            aria-labelledby={`accordion-collapse-heading-${item.id}`}
          >
            <p className="mb-2">{item.answer}</p>

           {item.linkUrl && <a href={item.linkUrl} className='text-blue-600 underline'>See Demo</a>} 


          </div>
        </div>
      ))}
    </div>
  );
};

export default Accordion;
