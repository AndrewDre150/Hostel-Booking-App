import React from 'react';
import long1 from '../images/long-1.jpeg'
import long2 from '../images/long-2.jpg'
function About() {
  return (
    <section className="bg-white dark:bg-gray-900" id="about">
      <div className="gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6">
        <div className="font-light text-gray-500 sm:text-lg dark:text-gray-400">
          <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">We're Here to help you find your next Hostel</h2>
          <p className="mb-4">We are strategists, designers and developers. Innovators and problem solvers.  
          we're driven by a passion for travel and a commitment to providing exceptional service. 
          Our team of dedicated professionals works tirelessly to ensure that every aspect of your experience, 
          from browsing hostels to completing bookings, is smooth and hassle-free. 
          We believe in the power of exploration and the memories it creates, and we're proud to be a part of your journey. Join us in discovering the world, one hostel at a time.
           Thank you for choosing Muk Hostels, where your adventure begins.

</p>
          {/* <p>We are strategists, designers and developers. Innovators and problem solvers. Small enough to be simple and quick.</p> */}
        </div>
        <div className="grid grid-cols-2 gap-4 mt-8">
          <img className="w-full rounded-lg" src={long1} alt="office content 1" />
          <img className="mt-4 w-full lg:mt-10 rounded-lg" src={long2} alt="office content 2" />
        </div>
      </div>
    </section>
  );
}

export default About;
