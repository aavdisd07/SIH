import React from 'react';
// import profilepic from "../Assets/employee.jpg";
const LoginAndSecurity = () => {
  return (
    <div style={styles.card}>
      <div style={styles.cardContent}>
        <div style={styles.leftSection}>
          <img
            // src={profilepic}
             src="https://img.freepik.com/free-photo/brunette-businesswoman-showing-her-tablet_23-2148142790.jpg?size=626&ext=jpg&ga=GA1.1.205134601.1723479407&semt=ais_hybrid"
            alt="Profile"
            style={styles.cardImage}
          />
           <h2 style={styles.organizationName}>Organization Name</h2>
          <p style={styles.activeAdmins}>Active Admins</p>
          <p style={styles.adminName}><strong>Sanika Narwade</strong></p>

        </div>
        <div style={styles.rightSection}>
          <div style={styles.cardHeader}>
            <h1 style={styles.cardTitle}>Login and Security</h1>
          </div>
          <div style={styles.personalDetailsSection}>
            <h2>Personal Details</h2>
            <button style={styles.button}>Change Personal Password</button>
          </div>
          
          <div style={styles.organizationDetailsSection}>
            <h2>Organization Details</h2>
            <div style={styles.detailItem}>
              <label><strong>Admin Panel Email:</strong></label>
              <input type="email" placeholder="Admin123.com" style={styles.input} />
            </div>

            <div style={styles.detailItem}>
              <label><strong>Admin Panel Password:</strong></label>
              <input type="password" placeholder="Enter password" style={styles.input} />
            </div>

            <button style={styles.button}>Send for Approval</button>
          </div>
        </div>
      </div>
    </div>
  );
};

const styles = {
  card: {
    maxWidth: '800px',
    margin: '50px auto',
    padding: '20px',
    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
    borderRadius: '15px',
    border: '2px solid aqua', // Border color and width
    backgroundColor: 'transparent', // Remove background color
    fontFamily: 'Arial, sans-serif',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'flex-start',
    animation: 'borderAnimation 2s infinite', // Apply animation
  },
  cardHeader: {
    width: '100%',
    textAlign: 'center',
    marginBottom: '20px', // Space below the title
  },
  organizationName: {
    fontSize: '24px', // Adjust font size
    color: '#00ffff', // Text color
    marginBottom: '10px', // Space below the text
  },
  activeAdmins: {
    fontSize: '18px', // Adjust font size
    color: '#ffffff', // Text color
    marginBottom: '5px', // Space below the text
  },
  adminName: {
    fontSize: '20px', // Adjust font size
    color: '#ffffff', // Text color
    fontWeight: 'bold', // Bold text
  },
  cardTitle: {
    color: '#fff',
    fontSize: '30px',
    color: '#00ffff',
  },
  cardContent: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  leftSection: {
    flex: '1',
    textAlign: 'center',
  },
  rightSection: {
    flex: '2',
    paddingLeft: '20px',
  },
  personalDetailsSection: {
    marginTop: '30px',
    fontSize:'20px' // Adds space between "Login and Security" and "Personal Details"
  },
  organizationDetailsSection: {
    marginTop: '20px',
    fontSize:'20px' // Adds space between "Personal Details" and "Organization Details"
  },
  cardImage: {
    width: '150px',
    height: '150px',
    borderRadius: '50%',
    marginBottom: '20px',
  },
  button: {
    backgroundColor: 'rgba(255, 255, 255, 0.3)', // Light transparent color (white with 30% opacity)
    color: 'white',
    padding: '10px 20px',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    margin: '10px 0',
    width: '100%',
  },
  input: {
    width: '100%',
    padding: '8px',
    margin: '10px 0',
    borderRadius: '5px',
    border: '1px solid rgba(255, 255, 255, 0.3)', // Light transparent border
    backgroundColor: 'rgba(255, 255, 255, 0.1)', // Light transparent background
    color: 'white', // Text color to ensure readability
  },
  detailItem: {
    marginBottom: '20px',
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

export default LoginAndSecurity;