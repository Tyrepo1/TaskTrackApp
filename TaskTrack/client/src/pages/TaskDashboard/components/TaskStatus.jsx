import React, { useState } from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Typography, Chip, Avatar, FormControl, InputLabel, Select, MenuItem, Box, Tooltip } from '@mui/material';

const TaskStatus = ({ tasks }) => {
  const currentDate = new Date();
  const [filter, setFilter] = useState('All');

  const getStatus = (task) => {
    if (task.completed) {
      return { label: 'Completed', color: 'success' };
    } else if (new Date(task.deadline) < currentDate) {
      return { label: 'Deadline Exceeded', color: 'error' };
    } else {
      return { label: 'Incomplete', color: 'warning' };
    }
  };

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

  const handleFilterChange = (event) => {
    setFilter(event.target.value);
  };

  const filteredTasks = filter === 'All' ? tasks : tasks.filter(task => getStatus(task).label === filter);

  return (
    <Paper>
      <TableContainer>
        <Typography variant="h5" color="primary" align="left" gutterBottom>
          Task Status
        </Typography>
        <FormControl fullWidth style={{ marginBottom: '1rem' }}>
          <InputLabel id="filter-label">Filter by Status</InputLabel>
          <Select
            labelId="filter-label"
            id="filter-select"
            value={filter}
            onChange={handleFilterChange}
          >
            <MenuItem value="All">All</MenuItem>
            <MenuItem value="Completed">Completed</MenuItem>
            <MenuItem value="Incomplete">Incomplete</MenuItem>
            <MenuItem value="Deadline Exceeded">Deadline Exceeded</MenuItem>
          </Select>
        </FormControl>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Assignees</TableCell>
              <TableCell>Title</TableCell>
              <TableCell>Deadline</TableCell>
              <TableCell>Status</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {filteredTasks.map((task, index) => (
              <TableRow key={index}>
                <TableCell>
                  <Box display="flex">
                    {task.assignee.map((assignee, idx) => (
                      <Tooltip title={assignee} key={idx}>
                        <Avatar key={idx} style={{ margin: '0.25rem', backgroundColor: '#3f51b5' }}>
                          {assignee.charAt(0)}
                        </Avatar>
                      </Tooltip>
                    ))}
                  </Box>
                </TableCell>
                <TableCell>{task.title}</TableCell>
                <TableCell>{formatDate(task.deadline)}</TableCell>
                <TableCell>
                  <Chip label={getStatus(task).label} color={getStatus(task).color} />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Paper>
  );
};

export default TaskStatus;
