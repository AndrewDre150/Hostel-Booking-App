import React from 'react';

function CommonContent({ activeContent, handleButtonClick }) {
  return (
    <div className='round-both'>
      <button
        type="button"
        className={`text-gray ${activeContent === 'student' ? 'bg-blue-700' : 'bg-white'} hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-10 py-3.5 text-center me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 mt-3`}
        onClick={() => handleButtonClick('student')}
      >
        I am a Student
      </button>
      <button
        type="button"
        className={`text-gray ${activeContent === 'custodian' ? 'bg-blue-700' : 'bg-white'} hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-10 py-3.5 text-center me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 mt-3`}
        onClick={() => handleButtonClick('custodian')}
      >
        I am a Custodian
      </button>
    </div>
  );
}

export default CommonContent;
