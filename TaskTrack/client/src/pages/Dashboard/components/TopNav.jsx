import LogoutIcon from '@mui/icons-material/Logout';
import MenuIcon from '@mui/icons-material/Menu';
import { AppBar, Box, IconButton, Toolbar } from '@mui/material';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import NotificationsButton from './NotificationsButton';

import logoNoBackground from '../../../images/tasktrack-high-resolution-logo-transparent.png';

function TopNav({ toggleDrawer }) {
    const navigate = useNavigate();

    const handleLogOut = () => {
        localStorage.removeItem('username');
        localStorage.setItem('loggedIn', false);
        navigate('/login');
    };

    return (
        <AppBar position="fixed">
            <Toolbar>
                <IconButton color="inherit" aria-label="open drawer" onClick={toggleDrawer} edge="start">
                    <MenuIcon />
                </IconButton>
                <img src={logoNoBackground} className="w-32 cursor-pointer mr-4" alt="Logo" />
                <div className="ml-auto">
                    <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
                        <NotificationsButton/>
                        <IconButton
                            size="large"
                            edge="end"
                            aria-label="account of current user"
                            aria-haspopup="true"
                            onClick={handleLogOut}
                            color="inherit"
                        >
                            <LogoutIcon />
                        </IconButton>
                    </Box>
                </div>
            </Toolbar>
        </AppBar>
    );
}

export default TopNav;
