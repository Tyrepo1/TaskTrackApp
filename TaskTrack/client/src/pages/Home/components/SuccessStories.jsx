import React from 'react'
import { Grid } from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import johnSmithImage from '../../../images/john-smith.jpg'
import xyzComapnyImage from '../../../images/xyz-company.jpg'
import jandeDoeImage from '../../../images/jane-doe.png'

const cardData = [
  {
    imageAlt: "John Smith",
    image: johnSmithImage,
    quote: "Thanks to TaskTrack, I efficiently organized my tasks and deadlines, leading to a promotion as a Senior Project Manager. It's a game-changer for my career!",
    author: "John Smith",
  },
  {
    imageAlt: "XYZ Company",
    image: xyzComapnyImage,
    quote: "We've streamlined our project management process with TaskTrack, resulting in higher productivity and better project outcomes.",
    author: "XYZ Company",
  },
  {
    imageAlt: "Jane Doe",
    image: jandeDoeImage,
    quote: "As a freelancer, TaskTrack has helped me stay on top of my assignments and deliverables, enabling me to secure consistent work at competitive rates. It's a win-win for freelancers and clients alike.",
    author: "Jane Doe",
  },
];



function generateCards() {
  return cardData.map((data, index) => (
    <Grid key={index} item xs={12} sm={6} md={4}>
      <div style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
        <Card style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
          <CardMedia component="img" image={data.image} alt={data.imageAlt} style={{ flex: 1, height: "10vh" }} />
          <CardContent style={{ flex: 1 }}>
            <blockquote class="relative">
              <svg class="absolute -top-6 -start-8 h-16 w-16 text-gray-100 dark:text-gray-700" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                <path d="M7.39762 10.3C7.39762 11.0733 7.14888 11.7 6.6514 12.18C6.15392 12.6333 5.52552 12.86 4.76621 12.86C3.84979 12.86 3.09047 12.5533 2.48825 11.94C1.91222 11.3266 1.62421 10.4467 1.62421 9.29999C1.62421 8.07332 1.96459 6.87332 2.64535 5.69999C3.35231 4.49999 4.33418 3.55332 5.59098 2.85999L6.4943 4.25999C5.81354 4.73999 5.26369 5.27332 4.84476 5.85999C4.45201 6.44666 4.19017 7.12666 4.05926 7.89999C4.29491 7.79332 4.56983 7.73999 4.88403 7.73999C5.61716 7.73999 6.21938 7.97999 6.69067 8.45999C7.16197 8.93999 7.39762 9.55333 7.39762 10.3ZM14.6242 10.3C14.6242 11.0733 14.3755 11.7 13.878 12.18C13.3805 12.6333 12.7521 12.86 11.9928 12.86C11.0764 12.86 10.3171 12.5533 9.71484 11.94C9.13881 11.3266 8.85079 10.4467 8.85079 9.29999C8.85079 8.07332 9.19117 6.87332 9.87194 5.69999C10.5789 4.49999 11.5608 3.55332 12.8176 2.85999L13.7209 4.25999C13.0401 4.73999 12.4903 5.27332 12.0713 5.85999C11.6786 6.44666 11.4168 7.12666 11.2858 7.89999C11.5215 7.79332 11.7964 7.73999 12.1106 7.73999C12.8437 7.73999 13.446 7.97999 13.9173 8.45999C14.3886 8.93999 14.6242 9.55333 14.6242 10.3Z" fill="currentColor" />
              </svg>
              <br></br>
              <div class="relative z-10">
                <p class="text-gray-800 sm:text-xl"><em>{data.quote}</em></p>
              </div>
            </blockquote>
            <br></br>
            <p>- {data.author}</p>
          </CardContent>
        </Card>
      </div>
    </Grid>
  ));
}

function SuccessStories() {
  return (
    <div>
      <div className="mx-auto max-w-2xl py-16">
        <div className="text-center">
          <h1 className="text-4xl font-bold tracking-tight text-black sm:text-4xl">
            Success Stories
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-400">
            TaskTrack has helped thousands of teams over the years.
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-400">
            Here are some of our top success stories and great friends and supporters.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
          </div>
        </div>
      </div>
      <div className=' md:mx-24'>
        <Grid container spacing={10}>
          {generateCards()}
        </Grid>
      </div>

    </div>
  )
}

export default SuccessStories