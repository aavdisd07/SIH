import React from "react";
import { BsCart3 } from "react-icons/bs";
import { GrSchedule } from "react-icons/gr";
import { IoIosArrowDown } from "react-icons/io";
import { GrNotification } from "react-icons/gr";
import { GrAnalytics } from "react-icons/gr";
import { GoSidebarExpand } from "react-icons/go";
import { FaUserClock } from "react-icons/fa6";

const Sidebar = ({ onSwitchToLogin }) => {
  return (
    <aside id="sidebar">
      <div className="sidebar"> {/* Corrected the typo from <dgitiv> to <div> */}
        <div className="sidebar-brand">
          <div className="minibar">
            {/* <FaUserClock /> */}
            <span className="icon close_icon">ClockWise</span>
            {/* <span className="icon close_icon">ClockInPro</span> */}
          </div>
          <GoSidebarExpand />
        </div>
        <ul className="sidebar-list">
          MAIN MENU
          <li className="sidebar-list-item">
            <a href="">
              <BsCart3 className="icon" /> DASHBOARD
            </a>
          </li>
          <li className="sidebar-list-item" id="drop-down">
            <a href="">
              <GrAnalytics /> Analytics
            </a>
            <IoIosArrowDown />
          </li>
          <li className="sidebar-list-item">
            <a href="">
              <GrSchedule /> Schedule
            </a>
          </li>
          <li className="sidebar-list-item">
            <a href="">
              <BsCart3 className="icon" /> Members
            </a>
          </li>
          <li className="sidebar-list-item">
            <a href="">
              <GrNotification /> Notifications
            </a>
          </li>
        </ul>
        <ul className="sidebar-list">
          SETTINGS
          <li className="sidebar-list-item">
            <a href="">
              <BsCart3 className="icon" /> Notifications <IoIosArrowDown />
            </a>
          </li>
          <li className="sidebar-list-item">
            <a href="">
              <BsCart3 className="icon" /> Help center
            </a>
          </li>
        </ul>
      </div> {/* Corrected the closing div tag */}
      <button
        className="m-20"
        style={{ backgroundColor: 'blue' }}
        onClick={onSwitchToLogin} // Handle the button click to switch to the login/signup view
      >
        Switch to Login/Signup
      </button>
    </aside>
  );
};

export default Sidebar;
