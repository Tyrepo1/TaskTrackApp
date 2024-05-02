// src/components/HowItWorks.js

import React from 'react';
import { Container, Grid, Typography } from '@mui/material';

const steps = [
  {
    title: 'Create Your Account',
    description: "Getting started is easy. Users can create a account by detailing their username, email, and password.",
  },
  {
    title: 'Organize Tasks',
    description: 'Whether you are an individual or part of a team, use our platform to organize tasks seamlessly. Create tasks, set deadlines, and track progress effortlessly.',
  },
  {
    title: 'Collaborate',
    description: "Stay connected and collaborate efficiently. Assign tasks to each other within our platform. It's the perfect place to foster collaboration.",
  },
  {
    title: 'Achieve Your Task Goals',
    description: "It's all about success. Users can accomplish their task goals effectively, whether it's completing projects on time, meeting deadlines, or achieving personal productivity milestones.",
  },
  {
    title: 'Grow and Succeed',
    description: "It's not just a platform; it's a pathway to task management success. With TaskTrack, you can continuously grow and succeed in managing your tasks and projects. Your success story begins here.",
  }
];


const HowItWorks = () => {
  return (
    <Container className="py-16">
      <Typography variant="h3" component="h2" className="text-center mb-8">
        How It Works
      </Typography>
      <br></br>
      <Grid container spacing={4}>
        {steps.map((step, index) => (
          <Grid item xs={12} sm={6} md={3} key={index}>
            <div className="text-center">
              <div className="mb-4">
                <div className="w-12 h-12 bg-blue-500 rounded-full text-white flex items-center justify-center text-2xl">
                  {index + 1}
                </div>
              </div>
              <Typography variant="h6" component="h3" className="mb-2">
                {step.title}
              </Typography>
              <Typography variant="body2" color="textSecondary">
                {step.description}
              </Typography>
            </div>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default HowItWorks;
