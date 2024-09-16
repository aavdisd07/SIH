import React from "react";
import "./DPage.css";
import Nav from "./Nav"; 
import Home from "./Home";


const DPage = () => {
  return (
    <div className="Container">
      <div className="main">
        <Nav/>
        <Home/>
      </div>
    </div>
  );
};

export default DPage;
