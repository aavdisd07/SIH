import React, { useState } from "react";
import "./LoginSignup.css";
import user_icon from "../Assets/user.png";
import email_icon from "../Assets/mail.png";
import password_icon from "../Assets/dialpad.png";
import org_icon from "../Assets/organization.png";
import show from "../Assets/show.png";
import hide from "../Assets/hide.png"; // Add a hide icon for toggling

const LoginSignup = ({ onLogin }) => {
  const [action, setAction] = useState("Login");
  const [passVisible, setPassVisible] = useState(false); // Renamed state for clarity

  const handleSwitch = () => {
    onLogin(); // Call the onLogin callback to switch to the main view
  };
  return (
    <div className="container">
      <div className="header">
        <div className="underline"></div>
        <div className="text">{action}</div>
      </div>
      <div className="inputs">
        {action === "Login" ? (
          <>
            <div className="input">
              <img src={email_icon} alt="" />
              <input type="email" placeholder="Email" />
            </div>
            <div className="input">
              <img src={password_icon} alt="" />
              <input
                type={passVisible ? "text" : "password"} // Toggle between text and password
                placeholder="Password"
              />
              <img
                src={passVisible ? hide : show} // Toggle icon based on state
                alt=""
                onClick={() => setPassVisible(!passVisible)}
              />
            </div>
            {/* <div className="input">
              <img src={password_icon} alt="" />
              <input
                type="password"
                placeholder="Confirm Password"
              />
            </div> */}
          </>
        ) : (
          <>
            <div className="input">
              <img src={org_icon} alt="" />
              <input type="text" placeholder="Organization name" />
            </div>
            <div className="input">
              <img src={user_icon} alt="" />
              <input type="text" placeholder="Admin name" />
            </div>
            <div className="input">
              <img src={password_icon} alt="" />
              <input type="tel" placeholder="Mobile Number" />
            </div>

            <div className="input">
              <img src={email_icon} alt="" />
              <input type="email" placeholder="Email" />
            </div>
            <div className="input">
              <img src={password_icon} alt="" />
              <input
                type={passVisible ? "text" : "password"} // Toggle between text and password
                placeholder="Password"
              />
              <img
                src={passVisible ? hide : show} // Toggle icon based on state
                alt=""
                onClick={() => setPassVisible(!passVisible)}
              />
            </div>

            <div className="input">
              <img src={password_icon} alt="" />
              <input
                type="password"
                placeholder="Confirm Password"
              />
            </div>


          </>
        )}
      </div>

      {action === "Sign Up" ? (
        <div></div>
      ) : (
        <div className="forgot-password">
          Forgot password? <span>Click Here!</span>
        </div>
      )}

      <div className="submit-container">
        <div
          className={action === "Login" ? "submit gray" : "submit"}
          onClick={() => setAction("Sign Up")}
        >
          Sign Up
        </div>
        <div
          className={action === "Sign Up" ? "submit gray" : "submit"}
          onClick={() => setAction("Login")}
        >
          Login
        </div>
      </div>
    </div>
  );
};

export default LoginSignup;
