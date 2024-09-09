import React from "react";
import { BsCart3 } from "react-icons/bs";
import { GrSchedule } from "react-icons/gr";
import { IoIosArrowDown } from "react-icons/io";
import { GrNotification } from "react-icons/gr";
import { GrAnalytics } from "react-icons/gr";
import { GoSidebarExpand } from "react-icons/go";
import Card from "../Homepage/Card";
import { Link } from "react-router-dom";
import "./Sidebar.css";

const Sidebar = ({ onSwitchToLogin, onNavigate }) => {
  const handleClick = (page) => {
    if (onNavigate) {
      onNavigate(page);
    }
  };

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
          <li
            className="sidebar-list-item"
            onClick={() => handleClick("dashboard")}
          >
            <BsCart3 className="icon" /> Dashboard
          </li>
          <li
            className="sidebar-list-item"
            id="drop-down"
            onClick={() => handleClick("analytics")}
          >
            <GrAnalytics id="analy" />
            Analytics
            <IoIosArrowDown className="down" />
          </li>
          <li
            className="sidebar-list-item"
            onClick={() => handleClick("schedule")}
          >
            <GrSchedule /> Schedule
          </li>
          <li
            className="sidebar-list-item"
            onClick={() => handleClick("schedule")}
          >
            <BsCart3 className="icon" />{" "}
            <Link to="/members" onClick={() => handleClick("members")}>
              Members
            </Link>
          </li>
          <li
            className="sidebar-list-item"
            onClick={() => handleClick("notifications")}
          >
            <GrNotification /> Notifications
          </li>
        </ul>
        <ul className="sidebar-list">
          SETTINGS
          <li
            className="sidebar-list-item"
            onClick={() => handleClick("notifications-settings")}
          >
            <BsCart3 className="icon" /> Notifications <IoIosArrowDown />
          </li>
          <li className="sidebar-list-item" onClick={() => handleClick("help")}>
            <BsCart3 className="icon" /> Help center
          </li>
        </ul>
      </div>
      <button
        className="m-20"
        style={{ backgroundColor: "blue" }}
        onClick={onSwitchToLogin}
      >
        Switch to Login/Signup
      </button>
    </aside>
  );
};

export default Sidebar;
