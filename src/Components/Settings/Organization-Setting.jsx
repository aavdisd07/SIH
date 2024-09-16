import React from 'react';
// import profilepic from "../Assets/employee.jpg";
const OrganizationDetails = () => {
  return (
    <>
      <div style={styles.card}>
        <div style={styles.cardContent}>
          <img
            // src={profilepic}
             src="https://img.freepik.com/free-photo/brunette-businesswoman-showing-her-tablet_23-2148142790.jpg?size=626&ext=jpg&ga=GA1.1.205134601.1723479407&semt=ais_hybrid"
            alt="Profile"
            style={styles.cardImage}
          />
          <div style={styles.leftSection}>
            <h2 style={styles.heading}>Organization Details</h2>
            <p style={styles.orgName}>SGGSIE&T</p>
             <div style={styles.contactDetails}>
              <p style={styles.sectionTitle}><strong>Contact Details:</strong></p>
              <p style={styles.sectionText}>+91-1234567890</p>
              <p style={styles.sectionText}>contact@sggsie&t.edu.in</p>
            </div>
            <div style={styles.address}>
              <p style={styles.sectionTitle}><strong>Address:</strong></p>
              <p style={styles.sectionText}>SGGS Institute of Engineering & Technology,</p>
              <p style={styles.sectionText}>Nanded, Maharashtra, India</p>
            </div>
            <div style={styles.orgInfo}>
              <p style={styles.sectionTitle}><strong>Other Organization Details:</strong></p>
              <p style={styles.sectionText}>Additional details about the organization.</p>
            </div>
            <div style={styles.socialMedia}>
              <p style={styles.sectionTitle}><strong>Social Media Links:</strong></p>
              <p style={styles.sectionText}>Facebook | Twitter | LinkedIn</p>
            </div>
            <button style={styles.button}>Edit and Send</button>
          </div>
        </div>
        <div style={styles.footer}>
        <p>Other admins should approve the changes</p>
      </div>
      </div>
      
    </>
  );
};

const styles = {
   card: {
    width: '50%', // Increased width to make the card larger
    maxWidth: '1000px', // Set a maximum width to control the size on larger screens
    margin: '50px auto', // Center the card horizontally with margin
    padding: '30px', // Increased padding for more internal spacing
    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
    borderRadius: '15px',
    border: '2px solid aqua',
    backgroundColor: 'transparent',
    fontFamily: 'Arial, sans-serif',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    flexWrap: 'wrap', // Allows wrapping of content for better responsiveness
    animation: 'borderAnimation 2s infinite', 
  },
  cardContent: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  leftSection: {
    textAlign: 'center',
    color:'white'
  },
  heading: {
    color: '#00ffff',
    fontSize: '30px',
    // marginBottom: '10px',
  },
  orgName: {
    fontSize: '24px',
    color: '#fff',
    marginBottom: '10px',
  },
  cardImage: {
    width: '150px',
    height: '150px',
    borderRadius: '50%',
    marginBottom:'10px',
    objectfit: "cover",
    objectPosition:"1px 1px"
  
  },
  orgName: {
    fontSize: '24px',
    color: '#fff',
    // marginBottom: '10px',
  },
  contactDetails: {
    marginBottom: '10px',
  },
  address: {
    marginBottom: '10px',
  },
  orgInfo: {
    marginBottom: '10px',
  },
  socialMedia: {
    // marginBottom: '10px',
  },
  button: {
    backgroundColor: 'rgba(0, 255, 255, 0.2)', // Light transparent color
    color: 'white',
    padding: '10px 20px',
    border: '2px solid #00ffff',
    borderRadius: '5px',
    cursor: 'pointer',
    // margin: '10px 0',
    width: '100%',
  },
  footer: {
    textAlign: 'center',
    marginTop: '20px',
    color: '#00ffff',
    marginLeft:'100px',
    fontSize:'20px',
  },
};



export default OrganizationDetails;