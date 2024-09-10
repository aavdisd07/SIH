import React from "react";
import { BsCart3 } from "react-icons/bs";
import { GrSchedule } from "react-icons/gr";
import { IoIosArrowDown } from "react-icons/io";
import { GrNotification } from "react-icons/gr";
import { GrAnalytics } from "react-icons/gr";
import { GoSidebarExpand } from "react-icons/go";
import { Link } from "react-router-dom";
import "./Sidebar.css";

const Sidebar = ({ onNavigate }) => {
  return (
    <aside id="sidebar">
      <div className="sidebar">
        <div className="sidebar-brand">
          <div className="minibar">
            <span className="icon close_icon">ClockWise</span>
          </div>
          <GoSidebarExpand />
        </div>
        <ul className="sidebar-list">
          MAIN MENU
          <Link to="/dashboard" >
          <li className="sidebar-list-item">
            <BsCart3 className="icon" /> Dashboard
          </li>
          </Link>
          <Link to="/analytics" >
          <li className="sidebar-list-item" id="drop-down">
            <GrAnalytics id="analy" />
            Analytics
            <IoIosArrowDown className="down" />
          </li>
          </Link>
          <Link to="/schedule" >
          <li className="sidebar-list-item">
            <GrSchedule /> Schedule
          </li>
          </Link>
          <Link to="/members" >
          <li className="sidebar-list-item">
            <BsCart3 className="icon" /> Members
          </li>
          </Link>
          <Link to="/notification">
          <li className="sidebar-list-item">
            <GrNotification /> Notifications
          </li>
          </Link>
        </ul>
        <ul className="sidebar-list">
          SETTINGS
          <Link to="/notification" >
          <li className="sidebar-list-item">
            <BsCart3 className="icon" /> Notifications{" "}
            <IoIosArrowDown className="down1" />
          </li>
          </Link>
          <Link to="/helpcenter">
          <li className="sidebar-list-item">
            <BsCart3 className="icon" /> Help center
          </li>
          </Link>
        </ul>
      </div>
    </aside>
  );
};

export default Sidebar;
