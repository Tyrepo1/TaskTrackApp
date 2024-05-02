import React, { useState } from 'react';
import { ListItem, ListItemText, ListItemSecondaryAction, Checkbox, IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import TaskDetails from './TaskDetails';

const listItemStyle = {
  backgroundColor: '#ffffff',
  marginBottom: '8px',
};

const completedTaskStyle = {
  textDecoration: 'line-through',
  color: '#999999', // Color for crossed out text
};

function TaskItem({ task, onDelete, onToggle }) {
  const [open, setOpen] = useState(false);

  const handleToggle = () => {
    onToggle(task.id, task.completed);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };

  return (
    <>
      <ListItem style={listItemStyle}>
        <Checkbox
          edge="start"
          tabIndex={-1}
          checked={task.completed}
          onChange={handleToggle}
        />
        <ListItemText
          primary={task.title}
          secondary={formatDate(task.deadline)}
          style={task.completed ? completedTaskStyle : null}
          onClick={handleOpen}
        />
        <ListItemSecondaryAction>
          <IconButton edge="end" aria-label="delete" onClick={() => onDelete(task.id)}>
            <DeleteIcon />
          </IconButton>
        </ListItemSecondaryAction>
      </ListItem>
      <TaskDetails open={open} onClose={handleClose} task={task} /> {/* Render the TaskDetailsDialog component */}
    </>
  );
}

export default TaskItem;
