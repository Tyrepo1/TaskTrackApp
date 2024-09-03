import React from 'react';
import diverseDevs from '../../../images/diverse_devs.jpg';
import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

function Hero() {

  const navigate = useNavigate()

  return (
    <div style={{ position: 'relative', overflow: 'hidden' }}>
      <img
        alt='Banner'
        src={diverseDevs}
        className='w-full h-full -z-50 absolute top-0 left-0 object-cover brightness-[20%]'
      />
      <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56 relative">
        <div className="text-center">
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
            Unlock Your Team's Potential in Task Management
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-400">
            Track, Create, or Assign Tasks
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Button
              variant='contained'
              sx={{
                height: "3rem",
                mb: "1rem"
              }}
              onClick={() => { navigate("/login") }}
            >
              Get started
            </Button>

          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
