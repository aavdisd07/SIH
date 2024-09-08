// main body

import React from "react";

const Body = ({ onSwitchToLogin }) => {
  return (
    <div>
      Body
      <>
        <button
          className="m-20"
          style={{ backgroundColor: "blue" }}
          onClick={onSwitchToLogin} // Handle the button click to switch to the login/signup view
        >
          Switch to Login/Signup
        </button>
      </>
    </div>
  );
};

export default Body;
