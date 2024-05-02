import React, { useState, useEffect } from 'react';
import { Typography, List, ListItem, ListItemAvatar, ListItemText, Avatar, Divider, CardContent, Card } from '@mui/material';
import { getUsers } from '../../../api/Users/UsersAPI';

const UsersPage = () => {
  const [users, setUsers] = useState([]);

  const fetchUsers = () => {
    getUsers().then((users) => {
      setUsers(users)
    })
  };

  useEffect(() => {
    fetchUsers();
  }, []);


  return (
    <div style={{ margin: '16px' }}>
      <Typography variant="h4" gutterBottom>
        Users
      </Typography>
      <Card>
        <CardContent>
          <List>
            {users.map((user, index) => (
              <React.Fragment key={index}>
                <ListItem alignItems="center">
                  <ListItemAvatar>
                    <Avatar>{user[0]}</Avatar>
                  </ListItemAvatar>
                  <ListItemText
                    primary={user}
                    primaryTypographyProps={{ style: { lineHeight: '48px' } }} 
                  />
                </ListItem>
                {index !== users.length - 1 && <Divider />}
              </React.Fragment>
            ))}
          </List>
        </CardContent>
      </Card>

    </div>
  );
};

export default UsersPage;
