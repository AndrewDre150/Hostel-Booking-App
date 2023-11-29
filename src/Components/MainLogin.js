import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import CommonContent from './CommonContext';


import LoginCustodian from './LoginCustodian';
import NewLogin from './NewLogin';

function MainLogin() {
  const [activeContent, setActiveContent] = useState('student');

  const handleButtonClick = (buttonType) => {
    setActiveContent(buttonType);
  };

  return (
    <div>
      <CommonContent
        activeContent={activeContent}
        handleButtonClick={handleButtonClick}
      />
       {activeContent === 'student' ? (
        <NewLogin />
      ) : (
        <LoginCustodian />
      )}
    </div>
  );
}

export default MainLogin;
