import React, { useState, useEffect } from 'react';
import { Card, CardContent, Button, TextField, Grid, Typography, Chip, Avatar, List, ListItem, ListItemAvatar, ListItemText } from '@mui/material';
import { getUsers } from '../../../api/Users/UsersAPI';

const CreateTask = ({ onCreate }) => {
  const [title, setTitle] = useState('');
  const [deadline, setDeadline] = useState('');
  const [assigneeInput, setAssigneeInput] = useState('');
  const [assignee, setAssignee] = useState([]);
  const [users, setUsers] = useState([]);
  const [error, setError] = useState('');
  const [showUserList, setShowUserList] = useState(false); // State to track whether to show the user list

  useEffect(() => {
    getUsers().then((userList) => {
      setUsers(userList);
    });
  }, []);

  const handleCreate = () => {
    if (!title || !deadline || assignee.length === 0) {
      setError('All fields are required');
      return;
    }

    onCreate({ title, deadline, assignee });
    setTitle('');
    setDeadline('');
    setAssigneeInput('');
    setAssignee([]);
    setError(''); // Reset error message
  };

  const handleAssigneeClick = (selectedUser) => {
    if (!assignee.includes(selectedUser)) {
      setAssignee([...assignee, selectedUser]);
    }
  };

  const handleAssigneeFocus = () => {
    setShowUserList(true); // Show the user list when the assignee text box is focused
  };

  const handleAssigneeBlur = () => {
    // Delay the hiding of the user list to allow time for the click event to be captured
    setTimeout(() => {
      setShowUserList(false); // Hide the user list when the assignee text box loses focus
    }, 200);
  };

  return (
    <Card>
      <CardContent>
        <Typography variant="h5" color="primary">
          Create New Task
        </Typography>
        <br />
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Deadline"
              type="datetime-local"
              value={deadline}
              onChange={(e) => setDeadline(e.target.value)}
              InputLabelProps={{
                shrink: true,
              }}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Assignee"
              value={assigneeInput}
              onFocus={handleAssigneeFocus}
              onBlur={handleAssigneeBlur}
              onChange={(e) => setAssigneeInput(e.target.value)}
            />
            {showUserList && ( // Show the user list only when the assignee text box is focused
              <List style={{ maxHeight: '150px', overflowY: 'auto' }}>
                {users
                  .filter(user => assigneeInput.trim() === '' || user.toLowerCase().includes(assigneeInput.toLowerCase()))
                  .map((user, index) => (
                    <ListItem button key={index} onClick={() => handleAssigneeClick(user)}>
                      <ListItemAvatar>
                        <Avatar>{user.charAt(0)}</Avatar>
                      </ListItemAvatar>
                      <ListItemText primary={user} />
                    </ListItem>
                  ))}
              </List>

            )}
            <div style={{ marginTop: '8px' }}>
              {assignee.map((chip, index) => (
                <Chip key={index} label={chip} onDelete={() => {
                  setAssignee(assignee.filter((_, i) => i !== index));
                }} style={{ marginRight: '8px', marginBottom: '8px' }} />
              ))}
            </div>
          </Grid>
          {error && (
            <Grid item xs={12}>
              <Typography variant="body2" color="error">{error}</Typography>
            </Grid>
          )}
        </Grid>
        <br />
        <Button onClick={handleCreate} variant="contained" color="primary">
          Create
        </Button>
      </CardContent>
    </Card>
  );
};

export default CreateTask;
