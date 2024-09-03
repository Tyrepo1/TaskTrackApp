import NotificationsIcon from '@mui/icons-material/Notifications';
import { Badge, Button, Divider, IconButton, List, ListItem, ListItemText, Popover, Typography } from '@mui/material';
import React, { useState, useEffect } from 'react';
import { deleteNotification, fetchNotifications } from '../../../api/Notifications/NotificationsAPI';

const NotificationsButton = () => {
  const [notifications, setNotifications] = useState([
    {
      id: "notification1",
      message: "You have a new task assigned.",
      timestamp: new Date("2024-05-01T08:00:00"),
      recipient: "user1"
    },
    {
      id: "notification2",
      message: "Reminder: Complete project proposal by tomorrow.",
      timestamp: new Date("2024-05-02T10:30:00"),
      recipient: "user1"
    },
    {
      id: "notification3",
      message: "You have a new task assigned.",
      timestamp: new Date("2024-05-01T12:45:00"),
      recipient: "user2"
    },
    // Add more notifications as needed
  ]);
  const username = localStorage.getItem('username');

  useEffect(() => {
    fetchNotifications().then((notifications) => {
      const filteredNotifications = notifications.filter(notification => notification.recipient.includes(username));
      setNotifications(filteredNotifications);
    })
  }, []);

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: 'numeric',
      minute: 'numeric',
      second: 'numeric',
    });
  };

  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleDelete = (notificationId) => {
    deleteNotification(notificationId)
    const updatedNotifications = notifications.filter(notification => notification.id !== notificationId);
    setNotifications(updatedNotifications);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'notifications-popover' : undefined;

  return (
    <div>
      <IconButton onClick={handleClick} aria-describedby={id} color='inherit'>
        <Badge badgeContent={notifications.length} color="error">
          <NotificationsIcon />
        </Badge>
      </IconButton>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
      >
        <div style={{ padding: '10px', maxWidth: '400px' }}>
          <Typography variant="h6" gutterBottom>
            Notifications
          </Typography>
          <List>
            {notifications.map((notification) => (
              <div key={notification.id}>
                <ListItem>
                  <ListItemText
                    primary={notification.message}
                    secondary={formatDate(notification.timestamp)}
                  />
                  <Button onClick={() => handleDelete(notification.id)}>Delete</Button>
                </ListItem>
                <Divider />
              </div>
            ))}
          </List>
        </div>
      </Popover>
    </div>
  );
};

export default NotificationsButton;
