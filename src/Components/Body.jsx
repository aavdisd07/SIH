import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Sidebar from "./Sidebar/Sidebar";
import Dashboard from "./Dashboard/DPage";
import Analytics from "./Analytics/Analytics";
import Schedule from "./Schedule/Schedule";
import Members from "./Member/Member";
import Notification from "./Notification/Notification";
import "./Body.css";
import Helpcenter from "./HelpCenter/Helpcenter";
import LoginAndSecurity from './Settings/LoginAndSecurity';
import GeneralSetting from './Settings/General-Setting';
import OrganizationSetting from './Settings/Organization-Setting';



const Body = () => {
  const [currentPage, setCurrentPage] = useState("dashboard");

  const handleNavigation = (page) => {
    setCurrentPage(page);
  };

  return (
    <div className="grid-container">
      <Sidebar onNavigate={handleNavigation} />
      <div className="main">
        <Routes>
          <Route path="/SIH" element={<Dashboard />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/analytics" element={<Analytics />} />
          <Route path="/schedule" element={<Schedule />} />
          <Route path="/members" element={<Members />} />
          <Route path="/notification" element={<Notification />} />
          <Route path="/helpcenter" element={<Helpcenter />} />
          <Route path="/login-and-security" element={<LoginAndSecurity />} />
          <Route path="/general-settings" element={<GeneralSetting />} />
          <Route
            path="/organization-settings"
            element={<OrganizationSetting />}
          />
        </Routes>
      </div>
    </div>
  );
};

export default Body;
