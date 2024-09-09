import React from "react";
import "./DPage.css";
import Autocomplete from "@mui/joy/Autocomplete";
import AutocompleteOption from "@mui/joy/AutocompleteOption";
import Avatar from "@mui/joy/Avatar";
import { StaticDatePicker } from "@mui/x-date-pickers";
import dayjs from "dayjs";
import Badge from "@mui/joy/Badge";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import ModalDialog from "@mui/joy/ModalDialog";
import DialogTitle from "@mui/joy/DialogTitle";
import DialogContent from "@mui/joy/DialogContent";
import DialogActions from "@mui/joy/DialogActions";
import Divider from "@mui/joy/Divider";
import Typography from "@mui/joy/Typography";
import { IoChatbubbleEllipses } from "react-icons/io5";
import Dropdown from "@mui/joy/Dropdown";
import IconButton from "@mui/joy/IconButton";
import Menu from "@mui/joy/Menu";
import MenuButton from "@mui/joy/MenuButton";
import MenuItem from "@mui/joy/MenuItem";
import MoreVert from "@mui/icons-material/MoreVert";

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
              <Typography sx={{ fontSize: "25px", color: "aqua" }}>
                🔔
              </Typography>
            </Badge>

            <IoChatbubbleEllipses className="chat-icon" />

            {/* <Avatar color="info" size="lg" variant="solid" className="avatar" /> */}
            <Avatar
              alt="Remy Sharp"
              src="https://pngfre.com/wp-content/uploads/oggy-2.png"
              className="avatar"
            />
            <Dropdown>
              <MenuButton
                className="menu-btn"
                slots={{ root: IconButton }}
                slotProps={{ root: { variant: "filled" } }}
              >
                <MoreVert id="morevert" />
              </MenuButton>
              <Menu>
                <MenuItem>Profile</MenuItem>
                <MenuItem>My account</MenuItem>
                <MenuItem>Logout</MenuItem>
              </Menu>
            </Dropdown>
          </div>
        </div>
        <div className="middlebody">
          <ModalDialog className="modal-dialog">
            <DialogTitle>Hello Admin!</DialogTitle>
            <Divider inset="context" />
            <DialogContent>
              Today 97% Employees are present , 85% present employees are
              on-time
            </DialogContent>
            <DialogActions>
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <StaticDatePicker
                  defaultValue={dayjs("2022-04-17")}
                  sx={{
                    width: "100%", // Fit to the container width
                    maxWidth: "250px", // Adjust as needed
                    "& .MuiPickerView-root": {
                      fontSize: "0.75rem", // Smaller font size for the calendar
                    },
                    "& .MuiDayPicker-Day": {
                      width: "1.5rem", // Adjust day cell size
                      height: "1.5rem",
                    },
                    "& .MuiDayPicker-Day.selected": {
                      borderRadius: "50%", // Round selection for better visual
                    },
                  }}
                />
              </LocalizationProvider>
            </DialogActions>
          </ModalDialog>
          <div className="sidebody">
            <ModalDialog className="modal-dialog">
              <DialogTitle>Hello Admin!</DialogTitle>
              <Divider inset="context" />
              <DialogContent>
                Today 97% Employees are present , 85% present employees are
                on-time
              </DialogContent>
              <DialogActions>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <StaticDatePicker
                    defaultValue={dayjs("2022-04-17")}
                    sx={{
                      width: "100%", // Fit to the container width
                      maxWidth: "250px", // Adjust as needed
                      "& .MuiPickerView-root": {
                        fontSize: "0.75rem", // Smaller font size for the calendar
                      },
                      "& .MuiDayPicker-Day": {
                        width: "1.5rem", // Adjust day cell size
                        height: "1.5rem",
                      },
                      "& .MuiDayPicker-Day.selected": {
                        borderRadius: "50%", // Round selection for better visual
                      },
                    }}
                  />
                </LocalizationProvider>
              </DialogActions>
            </ModalDialog>
          </div>
        </div>
       
      </div>
    </div>
  );
};

export default DPage;
