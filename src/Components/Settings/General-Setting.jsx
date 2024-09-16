import React, { useState, useEffect } from "react";
// import profilepic from "../Assets/employe.jpg"; // Adjust path as needed
import "./styles.css"; // Ensure this import is correct

const GeneralSettings = () => {
  const [theme, setTheme] = useState("Dark");

  useEffect(() => {
    document.body.className = theme.toLowerCase() + "-theme";
  }, [theme]);

  const handleThemeChange = (event) => {
    setTheme(event.target.value);
  };

  return (
    <div style={styles.container} className={theme.toLowerCase() + "-theme"}>
      <div style={styles.cardContent}>
        <div style={styles.leftSidebar}>
          <div style={styles.settingsSection}>
            <p style={styles.sectionTitle}>
              <strong>Notification Settings:</strong>
            </p>
            <p style={styles.sectionText}>
              Configure your notification preferences here.
            </p>
          </div>
          <div style={styles.settingsSection}>
            <p style={styles.sectionTitle}>
              <strong>Theme:</strong>
            </p>
            <p style={styles.sectionText}>Select your preferred theme:</p>
            <select
              style={styles.themeSelector}
              value={theme}
              onChange={handleThemeChange}
            >
              <option value="Light">Light</option>
              <option value="Dark">Dark</option>
              <option value="Solarized">Solarized</option>
              <option value="Monokai">Monokai</option>
            </select>
            <p style={styles.sectionText}>Current Theme: {theme}</p>
          </div>
          <div style={styles.socialMedia}>
            <p style={styles.sectionTitle}>
              <strong>Social Media Links:</strong>
            </p>
            <p style={styles.sectionText}>Facebook | Twitter | LinkedIn</p>
          </div>
        </div>
        <div style={styles.mainContent}>
          <p style={styles.profileText}>Admin Profile</p>
          <img
            // src={profilepic}
            src="https://img.freepik.com/free-photo/brunette-businesswoman-showing-her-tablet_23-2148142790.jpg?size=626&ext=jpg&ga=GA1.1.205134601.1723479407&semt=ais_hybrid"
            alt="Profile"
            style={styles.cardImage}
          />
          <div style={styles.detailsSection}>
            <p style={styles.detailTitle}>
              <strong>Name:</strong>
            </p>
            <p style={styles.detailText}>Sanika Narwade</p>
            <p style={styles.detailTitle}>
              <strong>Position:</strong>
            </p>
            <p style={styles.detailText}>Software Engineer</p>
            <p style={styles.detailTitle}>
              <strong>ID:</strong>
            </p>
            <p style={styles.detailText}>123456</p>
            <p style={styles.detailTitle}>
              <strong>Email:</strong>
            </p>
            <p style={styles.detailText}>sanika.narwade@123.com</p>
            <button style={styles.button}>Edit and Save</button>
          </div>
        </div>
      </div>
    </div>
  );
};

const styles = {
  container: {
    width: "70%", // Adjust width to fit content
    maxWidth: "1000px", // Set a maximum width to control the size on larger screens
    margin: "50px auto", // Center the card horizontally with margin
    padding: "30px", // Increased padding for more internal spacing
    boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
    borderRadius: "15px",
    border: "2px solid aqua",
    backgroundColor: "transparent",
    fontFamily: "Arial, sans-serif",
    display: "flex",
    animation: "borderAnimation 2s infinite",
  },
  cardContent: {
    width: "100%",
    display: "flex",
  },
  leftSidebar: {
    flex: "1 1 30%",
    padding: "10px",
    borderRight: "2px solid #00ffff",
  },
  mainContent: {
    flex: "2 1 70%",
    padding: "10px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  profileText: {
    color: "#00ffff",
    fontSize: "30px",
    marginBottom: "20px",
  },
  cardImage: {
    width: "150px",
    height: "150px",
    borderRadius: "50%", // Makes the image round
    marginBottom: "20px",
    objectFit: "cover", // Ensures the image covers the circle without distortion
    // border: '2px solid #00ffff',  // Optional: Add a border if needed
  },

  detailsSection: {
    width: "100%",
    textAlign: "center",
    marginBottom: "20px",
  },
  detailTitle: {
    color: "#00ffff",
    fontSize: "20px",
    marginBottom: "5px",
  },
  detailText: {
    color: "#fff",
    fontSize: "16px",
    marginBottom: "10px",
  },
  button: {
    backgroundColor: "rgba(0, 255, 255, 0.2)", // Light transparent color
    color: "white",
    padding: "10px 20px",
    border: "2px solid #00ffff",
    borderRadius: "5px",
    cursor: "pointer",
    margin: "10px 0",
    width: "30%",
    transition: "all 0.3s ease", // Smooth transition for hover effects
  },
  settingsSection: {
    marginBottom: "20px",
    textAlign: "left",
  },
  socialMedia: {
    marginTop: "20px",
  },
  themeSelector: {
    backgroundColor: "#222",
    color: "#fff",
    border: "1px solid #00ffff",
    borderRadius: "5px",
    padding: "5px 10px",
    fontSize: "16px",
    margin: "10px 0",
  },
  sectionTitle: {
    color: "#00ffff",
    fontSize: "20px",
    marginBottom: "30px",
  },
  sectionText: {
    color: "#fff",
    fontSize: "16px",
    marginBottom: "30px",
  },
  footer: {
    textAlign: "center",
    color: "#00ffff",
    fontSize: "20px",
    marginTop: "20px",
    marginRight: "150px",
  },
};
// Define the animation in JavaScript
const animationStyles = `
  @keyframes borderAnimation {
    0% {
      border-color: aqua;
    }
    50% {
      border-color: rgba(0, 255, 255, 0.5); /* Light transparent color */
    }
    100% {
      border-color: aqua;
    }
  }
`;

const styleSheet = document.createElement("style");
styleSheet.type = "text/css";
styleSheet.innerText = animationStyles;
document.head.appendChild(styleSheet);

export default GeneralSettings;
