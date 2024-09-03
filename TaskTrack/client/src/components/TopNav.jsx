import { Button } from '@mui/material';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import * as React from 'react';
import { useNavigate } from 'react-router-dom';
import logoNoBackground from '../images/tasktrack-high-resolution-logo-transparent.png';

export default function PrimarySearchAppBar() {
  const navigate = useNavigate();

  const goHome = () => {
    navigate('/home');
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <img alt='logo' onClick={goHome} src={logoNoBackground} className=' w-32 cursor-pointer mr-4'/>
          <Box sx={{ flexGrow: 1 }} />
          <Button color="inherit" onClick={() => navigate("/login")}>
              Login
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
