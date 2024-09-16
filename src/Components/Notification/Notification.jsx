import React from 'react';
import { Box, Typography, Card, CardContent, IconButton, List, ListItem, ListItemText, Divider } from '@mui/material';
import { Delete as DeleteIcon } from '@mui/icons-material';

const notifications = [
  { id: 1, type: 'info', message: 'Employee John Doe has clocked in late today.' },
  { id: 2, type: 'warning', message: 'Employee Jane Smith is absent without notice.' },
  { id: 3, type: 'error', message: 'System encountered an error while processing attendance data.' },
  { id: 4, type: 'info', message: 'Employee Michael Brown has updated their profile.' },
];

const Notification = ({ notification = {} }) => {
  const { type = 'info', message = '' } = notification;

  let color;
  switch (type) {
    case 'info':
      color = 'aqua';
      break;
    case 'warning':
      color = 'red';
      break;
    case 'error':
      color = 'white';
      break;
    default:
      color = 'black';
  }

  return (
    <ListItem
      style={{
        backgroundColor: color,
        color: 'black',
        borderRadius: '5px',
        marginBottom: '10px',
        padding: '10px',
      }}
    >
      <ListItemText primary={message} />
      <IconButton edge="end" aria-label="delete" style={{ color: 'black' }}>
        <DeleteIcon />
      </IconButton>
    </ListItem>
  );
};

const Notifications = () => {
  return (
    <Box
      sx={{
        width: '100%',
        padding: '20px',
        backgroundColor: 'black',
        color: 'white',
        borderRadius: '10px',
      }}
    >
      <Typography variant="h3" gutterBottom sx={{ color: 'aqua',textAlign:"center" }}>
        Notifications
      </Typography>
      <Card
        sx={{
          backgroundColor: 'black',
          color: 'white',
          borderRadius: '10px',
          width: '100%',
          boxShadow: 'none', // Remove box shadow if not needed
        }}
      >
        <CardContent>
          <List>
            {notifications.map(notification => (
              <React.Fragment key={notification.id}>
                <Notification notification={notification} />
                <Divider light sx={{ borderColor: 'aqua' }} />
              </React.Fragment>
            ))}
          </List>
        </CardContent>
      </Card>
    </Box>
  );
};

export default Notifications;
