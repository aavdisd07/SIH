import React, { useState, useEffect } from 'react';
// import profilepic from "../Assets/employe.jpg"; // Adjust path as needed
import './styles.css'; // Ensure this import is correct

const GeneralSettings = () => {
  const [theme, setTheme] = useState('Dark');

  useEffect(() => {
    document.body.className = theme.toLowerCase() + '-theme';
  }, [theme]);

  const handleThemeChange = (event) => {
    setTheme(event.target.value);
  };

  return (
    <div style={styles.container} className={theme.toLowerCase() + '-theme'}>
      <div style={styles.cardContent}>
        <div style={styles.leftSidebar}>
          <div style={styles.settingsSection}>
            <p style={styles.sectionTitle}><strong>Notification Settings:</strong></p>
            <p style={styles.sectionText}>Configure your notification preferences here.</p>
          </div>
          <div style={styles.settingsSection}>
            <p style={styles.sectionTitle}><strong>Theme:</strong></p>
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
            <p style={styles.sectionTitle}><strong>Social Media Links:</strong></p>
            <p style={styles.sectionText}>Facebook | Twitter | LinkedIn</p>
          </div>
        </div>
        <div style={styles.mainContent}>
          <p style={styles.profileText}>Admin Profile</p>
          <img
            // src={profilepic}
             src="data:image/png;base64,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"
            alt="Profile"
            style={styles.cardImage}
          />
          <div style={styles.detailsSection}>
            <p style={styles.detailTitle}><strong>Name:</strong></p>
            <p style={styles.detailText}>Sanika Narwade</p>
            <p style={styles.detailTitle}><strong>Position:</strong></p>
            <p style={styles.detailText}>Software Engineer</p>
            <p style={styles.detailTitle}><strong>ID:</strong></p>
            <p style={styles.detailText}>123456</p>
            <p style={styles.detailTitle}><strong>Email:</strong></p>
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
    width: '70%', // Adjust width to fit content
    maxWidth: '1000px', // Set a maximum width to control the size on larger screens
    margin: '50px auto', // Center the card horizontally with margin
    padding: '30px', // Increased padding for more internal spacing
    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
    borderRadius: '15px',
    border: '2px solid aqua',
    backgroundColor: 'transparent',
    fontFamily: 'Arial, sans-serif',
    display: 'flex',
    animation: 'borderAnimation 2s infinite', 
  },
  cardContent: {
    width: '100%',
    display: 'flex',
  },
  leftSidebar: {
    flex: '1 1 30%',
    padding: '10px',
    borderRight: '2px solid #00ffff',
  },
  mainContent: {
    flex: '2 1 70%',
    padding: '10px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  profileText: {
    color: '#00ffff',
    fontSize: '30px',
    marginBottom: '20px',
  },
 cardImage: {
    width: '150px',
    height: '150px',
    borderRadius: '50%',   // Makes the image round
    marginBottom: '20px',
    objectFit: 'cover',    // Ensures the image covers the circle without distortion
    // border: '2px solid #00ffff',  // Optional: Add a border if needed
  },

  detailsSection: {
    width: '100%',
    textAlign: 'center',
    marginBottom: '20px',
  },
  detailTitle: {
    color: '#00ffff',
    fontSize: '20px',
    marginBottom: '5px',
  },
  detailText: {
    color: '#fff',
    fontSize: '16px',
    marginBottom: '10px',
  },
  button: {
    backgroundColor: 'rgba(0, 255, 255, 0.2)', // Light transparent color
    color: 'white',
    padding: '10px 20px',
    border: '2px solid #00ffff',
    borderRadius: '5px',
    cursor: 'pointer',
    margin: '10px 0',
    width: '30%',
    transition: 'all 0.3s ease', // Smooth transition for hover effects
  },
  settingsSection: {
    marginBottom: '20px',
    textAlign: 'left',
  },
  socialMedia: {
    marginTop: '20px',
  },
  themeSelector: {
    backgroundColor: '#222',
    color: '#fff',
    border: '1px solid #00ffff',
    borderRadius: '5px',
    padding: '5px 10px',
    fontSize: '16px',
    margin: '10px 0',
  },
  sectionTitle: {
    color: '#00ffff',
    fontSize: '20px',
    marginBottom: '30px',
  },
  sectionText: {
    color: '#fff',
    fontSize: '16px',
    marginBottom: '30px',
  },
  footer: {
    textAlign: 'center',
    color: '#00ffff',
    fontSize: '20px',
    marginTop: '20px',
    marginRight:'150px',
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