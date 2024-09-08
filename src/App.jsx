import React, { useState } from 'react';
import LoginSignup from './Components/LoginSignup/LoginSignup';
import SideBar from './Components/Sidebar';
import Body from './Components/Body';
import './App.css';
import Card from './Components/Card';


function App() {
  // State to manage which component to show
  const [showLoginSignup, setShowLoginSignup] = useState(true);

  // Function to handle switching to the main view
  const handleSwitchToMain = () => {
    setShowLoginSignup(false);
  };

  // Function to handle switching back to the login/signup view
  const handleSwitchToLogin = () => {
    setShowLoginSignup(true);
  };

  return (
    <>
      {showLoginSignup ? (
        <div>
          <button
            className='m-20'
            style={{ backgroundColor: 'red' }}
            onClick={handleSwitchToMain} // Handle the button click to continue without login
          >
            Continue without login
          </button>
          <LoginSignup onLogin={handleSwitchToMain} />
        </div>
      ) : (
        <div className='grid-container'>
          <SideBar onSwitchToLogin={handleSwitchToLogin} />
          <Card/>
          <Body onSwitchToLogin={handleSwitchToLogin} />
        </div>
      )}
      
    </>
  );
}

export default App;
