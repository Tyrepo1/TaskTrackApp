import React from 'react';
import { Dialog, DialogTitle, DialogContent, DialogActions, Button, Typography, Grid } from '@mui/material';

const TaskDetails = ({ open, onClose, task }) => {
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

  return (
    <Dialog open={open} onClose={onClose} fullWidth maxWidth="md">
      <DialogTitle>
        <Typography variant="h6">Task Details</Typography>
      </DialogTitle>
      <DialogContent dividers>
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <Typography variant="subtitle1" color="textSecondary">Title:</Typography>
            <Typography variant="body1">{task.title}</Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography variant="subtitle1" color="textSecondary">Deadline:</Typography>
            <Typography variant="body1">{formatDate(task.deadline)}</Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography variant="subtitle1" color="textSecondary">Status:</Typography>
            <Typography variant="body1">{task.completed ? 'Completed' : 'Incomplete'}</Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography variant="subtitle1" color="textSecondary">Assignee:</Typography>
            {task.assignee.map((assignee, index) => (
              <Typography key={index} variant="body1">{assignee}</Typography>
            ))}
          </Grid>
          <Grid item xs={6}>
            <Typography variant="subtitle1" color="textSecondary">Created At:</Typography>
            <Typography variant="body1">{formatDate(task.createdAt)}</Typography>
          </Grid>
        </Grid>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose} color="primary">
          Close
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default TaskDetails;
