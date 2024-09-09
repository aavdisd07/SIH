import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginSignup from './Components/LoginSignup/LoginSignup';
import SideBar from './Components/Sidebar/Sidebar';
import Body from './Components/Body';
import './App.css';
import Card from './Components/Homepage/Card';
import DPage from './Components/Dashboard/DPage';

function App() {
  const [showLoginSignup, setShowLoginSignup] = useState(true);
  const [currentPage, setCurrentPage] = useState(''); // State to track the current page

  const handleSwitchToMain = () => {
    setShowLoginSignup(false);
  };

  const handleSwitchToLogin = () => {
    setShowLoginSignup(true);
  };

  const handleNavigate = (page) => {
    setCurrentPage(page); // Update the current page based on sidebar navigation
  };

  return (
    <Router>
      <>
        {showLoginSignup ? (
          <div>
            <button
              className='m-20'
              style={{ backgroundColor: 'red' }}
              onClick={handleSwitchToMain}
            >
              Continue without login
            </button>
            <LoginSignup onLogin={handleSwitchToMain} />
          </div>
        ) : (
          <div className='grid-container'>
            <SideBar onSwitchToLogin={handleSwitchToLogin} onNavigate={handleNavigate} />
            <Routes>
              <Route path="/dashboard" element={<DPage />} />
              <Route path="/members" element={<Card />} />
              <Route path="/schedule" element={<Body />} />
              {/* Add more routes here as needed */}
            </Routes>
            {/* Render the content based on the current page */}
            {currentPage === 'dashboard' && <DPage />}
            {currentPage === 'members' && <Card />}
            {currentPage === 'schedule' && <Body />}
            {/* Render additional components based on the current page */}
          </div>
        )}
      </>
    </Router>
  );
}

export default App;
