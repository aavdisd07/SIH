import React from 'react';
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField'; // You need this to render the input field in Autocomplete
import Avatar from "@mui/joy/Avatar";
import Badge from "@mui/joy/Badge";
import "./DPage.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell } from '@fortawesome/free-regular-svg-icons';


const employees = [
  {
    id: 1,
    name: "Alice Johnson",
    position: "Software Engineer",
    email: "alice.johnson@example.com",
  },
  {
    id: 2,
    name: "Bob Smith",
    position: "Product Manager",
    email: "bob.smith@example.com",
  },
  {
    id: 3,
    name: "Carol White",
    position: "UX Designer",
    email: "carol.white@example.com",
  },
  // Add more employee records as needed
];

const autocompleteStyles = {
  '& .MuiOutlinedInput-root': {
    color: 'white', // Text color inside the Autocomplete
    backgroundColor: '#333' // Background color of the input field
  },
  '& .MuiInputLabel-root': {
    color: 'white' // Label color
  },
  '& .MuiAutocomplete-option': {
    color: 'white', // Option text color
    backgroundColor: '#333' // Option background color
  },
  '& .MuiAutocomplete-option:hover': {
    backgroundColor: '#555' // Option hover background color
  }
};

const Nav = () => {
  return (
    <div className="nav">
      {/* Left Section */}
      <div className="left-section">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7cMpC2i702amb-DUG_UzbeQDZxmMjZiOK4Q&s"
          alt="logo"
          className="logo"
        />
      </div>

      {/* Center Section */}
      <div className="center-section">
      <Autocomplete
        options={employees}
        getOptionLabel={(option) => option.name}
        renderOption={(props, option) => (
          <li {...props} key={option.id}>
            {option.name} - {option.position}
          </li>
        )}
        renderInput={(params) => (
          <TextField {...params} label="Search employees" variant="outlined" sx={autocompleteStyles} />
        )}
        sx={{ width: 300 ,height:50 }}
      />
      </div>

      {/* Right Section */}
      <div className="right-section">
  <FontAwesomeIcon icon={faBell} style={{ fontSize: "25px", color: "aqua", marginRight: "15px" }} />
  
  <Avatar
    size="lg"
    radius="sm"
    src="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-1.png"
  />
</div>
    </div>
  );
};

export default Nav;
