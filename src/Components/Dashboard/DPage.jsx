import React from "react";
import "./DPage.css";
import Autocomplete from "@mui/joy/Autocomplete";
import AutocompleteOption from "@mui/joy/AutocompleteOption";
import Avatar from "@mui/joy/Avatar";
import Badge from "@mui/joy/Badge";
import Home from "./Home";


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

const DPage = () => {
  return (
    <div className="Container">
      <div className="main">
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
              variant="soft"
              placeholder="Search employees"
              options={employees}
              getOptionLabel={(option) => option.name}
              renderOption={(props, option) => (
                <AutocompleteOption {...props} key={option.id}>
                  {option.name} - {option.position}
                </AutocompleteOption>
              )}
              sx={{ width: 300 }}
            />
          </div>

          {/* Right Section */}
          <div className="right-section">
            <Badge badgeContent="44" className="notification-icon">
              <span style={{ fontSize: "25px", color: "aqua" }}>🔔</span>
            </Badge>

    
            {/* <i className="chat-icon"  class="cil-chat-bubble"></i> */}

            <Avatar
        size="lg"
        radius="sm"
        src="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-1.png"
      />

            
          </div>

       
        </div>
        <Home/>
      </div>
    </div>
  );
};

export default DPage;
