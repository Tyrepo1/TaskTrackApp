import React, { useState, useEffect } from 'react';
import { List, Card, CardContent, Typography, TextField, MenuItem } from '@mui/material';
import TaskItem from './TaskItem';
import DeleteConfirmationDialog from './DeleteConfirmationDialog';

function TaskList({ tasks, onDelete, onToggle }) {
  const [filterTitle, setFilterTitle] = useState('');
  const [filterStatus, setFilterStatus] = useState('');
  const [sortedTasks, setSortedTasks] = useState([]);
  const [deleteConfirmationOpen, setDeleteConfirmationOpen] = useState(false);
  const [taskToDelete, setTaskToDelete] = useState(null);

  useEffect(() => {
    const sorted = [...tasks].sort((a, b) => {
      return a.deadline.localeCompare(b.deadline); // Sort alphabetically by deadline
    });
    setSortedTasks(sorted);
  }, [tasks]);

  const handleTitleFilterChange = (event) => {
    setFilterTitle(event.target.value);
  };

  const handleStatusFilterChange = (event) => {
    setFilterStatus(event.target.value);
  };

  const handleDeleteConfirmationOpen = (task) => {
    setTaskToDelete(task);
    setDeleteConfirmationOpen(true);
  };

  const handleDeleteConfirmationClose = () => {
    setDeleteConfirmationOpen(false);
    setTaskToDelete(null);
  };

  const handleDeleteConfirmed = () => {
    onDelete(taskToDelete.id);
    setDeleteConfirmationOpen(false);
    setTaskToDelete(null);
  };

  return (
    <Card>
      <CardContent>
        <Typography variant="h5" color="primary">
          My Tasks
        </Typography>

        {/* Filter by title */}
        <TextField
          fullWidth
          label="Search by Title"
          value={filterTitle}
          onChange={handleTitleFilterChange}
          margin="normal"
        />

        {/* Filter by status */}
        <TextField
          select
          fullWidth
          label="Search by Status"
          value={filterStatus}
          onChange={handleStatusFilterChange}
          margin="normal"
        >
          <MenuItem value="">All</MenuItem>
          <MenuItem value="completed">Completed</MenuItem>
          <MenuItem value="incomplete">Incomplete</MenuItem>
        </TextField>

        <List>
          {sortedTasks
            .filter(task =>
              task.title.toLowerCase().includes(filterTitle.toLowerCase()) &&
              (filterStatus === '' || (filterStatus === 'completed' && task.completed) || (filterStatus === 'incomplete' && !task.completed))
            )
            .map((task) => (
              <TaskItem key={task.id} task={task} onDelete={() => handleDeleteConfirmationOpen(task)} onToggle={onToggle} />
            ))}
        </List>

        {/* Delete confirmation dialog */}
        <DeleteConfirmationDialog
          open={deleteConfirmationOpen}
          onClose={handleDeleteConfirmationClose}
          onConfirm={handleDeleteConfirmed}
        />
      </CardContent>
    </Card>
  );
}

export default TaskList;
