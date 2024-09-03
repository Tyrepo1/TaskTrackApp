import { Grid } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { deleteTask, getTasks, saveTask, toggleTask } from '../../../api/Tasks/TasksAPI';
import CreateTask from '../components/CreateTask';
import TaskList from '../components/TaskList';
import { addNotification } from '../../../api/Notifications/NotificationsAPI';
import TaskStatus from '../components/TaskStatus';

function Analytics({ handleAgentSelect }) {
    const [taskList, setTaskList] = useState([]);
    const [allTaskList, setAllTaskList] = useState([]);
    const username = localStorage.getItem('username');

    useEffect(() => {
        getTasks().then((tasks) => {
            const filteredTasks = tasks.filter(task => task.assignee.includes(username));
            setTaskList(filteredTasks);
            setAllTaskList(tasks);
        })
    }, []);

    const handleDelete = (taskId) => {
        deleteTask(taskId)
        const updatedTasks = taskList.filter(task => task.id !== taskId);
        const updatedAllTasks = allTaskList.filter(task => task.id !== taskId);
        setTaskList(updatedTasks);
        setAllTaskList(updatedAllTasks)
    };

    const handleToggle = (taskId, completed) => {
        toggleTask(taskId, completed);
        const updatedTasks = taskList.map(task => {
            if (task.id === taskId) {
                return { ...task, completed: !task.completed };
            }
            return task;
        });
        const updatedAllTasks = allTaskList.map(task => {
            if (task.id === taskId) {
                return { ...task, completed: !task.completed };
            }
            return task;
        });
        setTaskList(updatedTasks);
        setAllTaskList(updatedAllTasks);
    };

    const handleCreateTask = (newTask) => {
        saveTask({ ...newTask, completed: false, createdAt: new Date().toISOString() })
        addNotification(newTask.assignee, "A new task was assigned to you")
        if (newTask.assignee.includes(username)) {
            setTaskList([...taskList, { ...newTask, id: taskList.length + 1, completed: false, createdAt: new Date().toISOString() }]);
        }
        setAllTaskList([...allTaskList, { ...newTask, id: allTaskList.length + 1, completed: false, createdAt: new Date().toISOString() }]);
    };


    return (
        <div className=''>
            <Grid container className='w-screen' spacing={2}>
                <Grid item xs={12}>
                    <TaskList tasks={taskList} onToggle={handleToggle} onDelete={handleDelete} />
                </Grid>
                <Grid item xs={12}>
                    <TaskStatus tasks={allTaskList} />
                </Grid>
                <Grid item xs={12}>
                    <CreateTask onCreate={handleCreateTask} />
                </Grid>

            </Grid>
        </div>
    );
}

export default Analytics;
