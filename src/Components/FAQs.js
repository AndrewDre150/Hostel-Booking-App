import React, { useState } from 'react';

const FAQs = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleAccordionToggle = (index) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <div className='faqs' id="faqs">
        <h1 style={{textAlign: 'center', fontWeight: 'bold',marginBottom: 18, fontSize: 30, color: 'orange'}}>Frequently Asked Questions</h1>
         <div id="accordion-example">
      <h2 id="accordion-example-heading-1">
        <button
          type="button"
          className={`flex items-center justify-between w-full p-5 font-small text-left text-gray-500 border border-b-0 border-gray-200 rounded-t-xl focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 ${
            activeIndex === 1 && 'bg-gray-100 dark:bg-gray-800'
          }`}
          aria-expanded={activeIndex === 1}
          aria-controls="accordion-example-body-1"
          onClick={() => handleAccordionToggle(1)}
        >
          <span>How do I make a reservation at your hostel?</span>
          <svg
            data-accordion-icon
            className={`w-6 h-6 rotate-180 shrink-0 ${
              activeIndex === 1 && 'transform rotate-0'
            }`}
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
            ></path>
          </svg>
        </button>
      </h2>
      <div
        id="accordion-example-body-1"
        className={`p-5 border border-b-0 border-gray-200 dark:border-gray-700 ${
          activeIndex === 1 ? 'block' : 'hidden'
        }`}
        aria-labelledby="accordion-example-heading-1"
      >
        <p className="mb-2 text-gray-500 dark:text-gray-400">
        Making a reservation at our hostel is quick and easy! Simply visit our website and go to the "Book Now" page.
         Select your check-in and check-out dates, choose the type of room or bed you prefer, and provide the necessary details.
         Once you've completed the booking process and received a confirmation email, your reservation will be secured.
        </p>
      </div>

      
    </div>
    <h2 id="accordion-example-heading-2">
  <button
    type="button"
    className={`flex items-center justify-between w-full p-5 font-small text-left text-gray-500 border border-b-0 border-gray-200 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 ${
      activeIndex === 2 && 'bg-gray-100 dark:bg-gray-800'
    }`}
    aria-expanded={activeIndex === 2}
    aria-controls="accordion-example-body-2"
    onClick={() => handleAccordionToggle(2)}
  >
    <span>What payment methods do you accept for reservations?</span>
    <svg
      data-accordion-icon
      className={`w-6 h-6 shrink-0 ${
        activeIndex === 2 && 'transform rotate-0'
      }`}
      fill="currentColor"
      viewBox="0 0 20 20"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
      ></path>
    </svg>
  </button>
</h2>
<div
  id="accordion-example-body-2"
  className={`p-5 border border-b-0 border-gray-200 dark:border-gray-700 ${
    activeIndex === 2 ? 'block' : 'hidden'
  }`}
  aria-labelledby="accordion-example-heading-2"
>
  <p className="mb-2 text-gray-500 dark:text-gray-400">
  We accept various payment methods to cater to our guests' preferences.
   You can make a reservation using major credit cards (Visa, MasterCard, American Express),
    as well as through mobile money both on Airtel and Mtn.
   Additionally, we also accept cash payments for in-person bookings, subject to availability.
  </p>
</div>

<h2 id="accordion-example-heading-3">
  <button
    type="button"
    className={`flex items-center justify-between w-full p-5 font-small text-left text-gray-500 border border-gray-200 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 ${
      activeIndex === 3 && 'bg-gray-100 dark:bg-gray-800'
    }`}
    aria-expanded={activeIndex === 3}
    aria-controls="accordion-example-body-3"
    onClick={() => handleAccordionToggle(3)}
  >
    <span>Can I cancel or modify my reservation after it's been confirmed?</span>
    <svg
      data-accordion-icon
      className={`w-6 h-6 shrink-0 ${
        activeIndex === 3 && 'transform rotate-0'
      }`}
      fill="currentColor"
      viewBox="0 0 20 20"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
      ></path>
    </svg>
  </button>
</h2>
<div
  id="accordion-example-body-3"
  className={`p-5 border border-t-0 border-gray-200 dark:border-gray-700 ${
    activeIndex === 3 ? 'block' : 'hidden'
  }`}
  aria-labelledby="accordion-example-heading-3"
>
  <p className="mb-2 text-gray-500 dark:text-gray-400">
  Yes, you can modify or cancel your reservation, but please refer to our cancellation policy for specific details.
   Generally, we offer a flexible cancellation policy with a specified time frame before your check-in date. Any changes or cancellations made within this period may be subject to a fee.
   Please review our policy on the website for more information.
   </p>
</div>

    </div>
  );
};

export default FAQs;
