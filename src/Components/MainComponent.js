import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import CommonContent from './CommonContext';
import NewSignup from './NewSignup';
import SignupCustodian from './SignupCustodian';

function MainComponent() {
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
        <NewSignup />
      ) : (
        <SignupCustodian />
      )}
    </div>
  );
}

export default MainComponent;
