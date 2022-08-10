import { Container, Grid, List, ListItem, Paper, Typography } from '@mui/material';
import React from 'react';
import ExperienceCard from './ExperienceCard';

function Experience() {
  return (
    <Container sx={{ display:'flex', flexDirection:'column', maxWidth: '700px'}}>
      <Typography variant="h4" align='start' sx={{mb:2, ml:-1}}>
        Education
      </Typography>
      <ExperienceCard 
          company="Imperial College London" 
          date="October 2018 - July 2022"
          title="Information Systems Engineering MEng"
          location="London, UK">
            <List>
              <ListItem sx={{display:'list-item'}}>
                Hi
              </ListItem>
              <ListItem sx={{display:'list-item'}}>
                h
              </ListItem>
            </List>
            <Typography sx={{ fontWeight:'bold' }}>
              
            </Typography>
      </ExperienceCard>
    </Container>
  )
}

export default Experience;