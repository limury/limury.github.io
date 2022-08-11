import { Box, Container, Grid, List, ListItem, Paper, Typography } from '@mui/material';
import React from 'react';
import ExperienceCard from './ExperienceCard';

function ExtendedCV() {
  return (
    <Container sx={{ mt: 10, display:'flex', alignSelf: 'start', justifySelf: 'start', justifyContent: 'start', flexDirection:'column', maxWidth: '700px'}}>
      <Typography variant="h4" align='start' sx={{mb:2, ml:-1}}>
        Education
      </Typography>
      <ExperienceCard
          company="Imperial College London" 
          date="October 2018 - Ongoing"
          title="Information Systems Engineering MEng (Electronic Engineering and Computer Science)"
          location="London, UK">
            <List sx={{ listStyleType: 'disc', ml: 2}}>
              <ListItem sx={{display:'list-item'}} disableGutters={true} disablePadding={true}>
                <Typography>
                  <strong>Academic Attainment:</strong> First Class Honours
                </Typography>
              </ListItem>
              <ListItem sx={{display:'list-item'}} disableGutters={true} disablePadding={true}>
                <Typography>
                  <strong>Awards:</strong>
                </Typography>
                <List sx={{ listStyleType: 'disc', ml: 2}} disablePadding={true}>
                  <ListItem sx={{display:'list-item'}} disableGutters={true} disablePadding={true}>
                    2022 Dean's List Award (top 10% academic performance in cohort).
                  </ListItem>
                  <ListItem sx={{display:'list-item'}} disableGutters={true} disablePadding={true}>
                    2022 Willis Jackson Medal and Prize for excellence in final year studies.
                  </ListItem>
                </List>
              </ListItem>
            </List>
            <Typography sx={{ fontWeight:'bold' }}>
              
            </Typography>
      </ExperienceCard>
      {/* <Box height={10}/> */}

      <Typography variant="h4" align='start' sx={{mb:2, ml:-1, mt:5}}>
        Work Experience 
      </Typography>
      <ExperienceCard
          company="Xapien - Automated Research" 
          date="March 2021 - September 2021"
          title="Machine Learning Engineer"
          location="London, UK">
            <List sx={{ listStyleType: 'disc', ml: 2}}>
              <ListItem sx={{display:'list-item'}} disableGutters={true} disablePadding={true}>
                <Typography>
                  Researched new natural language processing models such as <strong><a href="https://arxiv.org/abs/1810.04805">BERT</a></strong> for the 
                  company to use for text analysis and implemented them 
                  in <strong>Python</strong>, improving the
                  quality of the corporate reports generated for customers.
                </Typography>
              </ListItem>
              <ListItem sx={{display:'list-item'}} disableGutters={true} disablePadding={true}>
                <Typography>
                  Proposed a modification to the <a href="https://arxiv.org/pdf/2106.05648.pdf">AURORA algorithm</a>, 
                  netting a 40% increase in performance across various
                  metrics. Implemented in <strong>Python</strong> for validation and later in <strong>C++</strong> for efficiency. 
                  Currently writing a conference
                  paper as first author about this new approach.
                </Typography>
              </ListItem>
              <ListItem sx={{display:'list-item'}} disableGutters={true} disablePadding={true}>
                <Typography>
                  Used <strong>Docker</strong> to create containerized versions of experiments, netting a ∼1000% average speed increase when
                  being run on the Imperial College High-Performance Computing Cluster over when being run on lab machines.
                </Typography>
              </ListItem>
            </List>
      </ExperienceCard>
      <Box height={10}/>
      <ExperienceCard
          company="Imperial College Adaptive and Intelligent Robotics Lab" 
          date="January 2020 - July 2022"
          title="Undergraduate/Visiting Researcher"
          location="London, UK">
            <List sx={{ listStyleType: 'disc', ml: 2}}>
              <ListItem sx={{display:'list-item'}} disableGutters={true} disablePadding={true}>
                <Typography>
                  Co-authored a research paper at a major academic conference for robotics and machine learning (IEEE ICRA)
                  for which I implemented experiments in <strong>Python</strong> involving parallelized algorithms and robotics simulations.
                </Typography>
              </ListItem>
              <ListItem sx={{display:'list-item'}} disableGutters={true} disablePadding={true}>
                <Typography>
                  Proposed a modification to the <a href="https://arxiv.org/pdf/2106.05648.pdf">AURORA algorithm</a>, 
                  netting a 40% increase in performance across various
                  metrics. Implemented in <strong>Python</strong> for validation and later in <strong>C++</strong> for efficiency. 
                  Currently writing a conference
                  paper as first author about this new approach.
                </Typography>
              </ListItem>
              <ListItem sx={{display:'list-item'}} disableGutters={true} disablePadding={true}>
                <Typography>
                  Used <strong>Docker</strong> to create containerized versions of experiments, netting a ∼1000% average speed increase when
                  being run on the Imperial College High-Performance Computing Cluster using the <strong>Linux Cluster PBS System</strong> over
                   when being run on lab machines.
                </Typography>
              </ListItem>
            </List>
      </ExperienceCard>
      <Box height={10}/>
      <ExperienceCard
          company="SnapSense - Empowering healthcare workers with modern AI."
          date="May 2020 - March 2021"
          title="Co-Founder, CTO, Fullstack Developer"
          location="London, UK">
            <List sx={{ listStyleType: 'disc', ml: 2}}>
              {/* <ListItem sx={{display:'list-item'}} disableGutters={true} disablePadding={true}>
                <Typography>
                  SnapSense provides an online platform for diabetic patients with foot ulcers to effectively communicate with 
                  doctors. The platform allows patients to send pictures of the foot ulcers to doctors so they can be inspected.
                  SnapSense further improves the user experience by using machine learning to automatically detect infection and ischemia
                  in the images, and if detected it will alert the doctor that the patient requires urgent attention.
                </Typography>
              </ListItem> */}
              <ListItem sx={{display:'list-item'}} disableGutters={true} disablePadding={true}>
                <Typography>
                  Created an online platform using various <strong>Node JS</strong> frameworks to allow doctors and patients to communicate.
                  Co-authored a research paper at a major academic conference for robotics and machine learning (IEEE ICRA)
                  for which I implemented experiments in <strong>Python</strong> involving parallelized algorithms and robotics simulations.
                </Typography>
              </ListItem>
              <ListItem sx={{display:'list-item'}} disableGutters={true} disablePadding={true}>
                <Typography>
                  Created and deployed a machine learning system using <strong>YOLOv2</strong> in <strong>Python</strong> to identify 
                  infections in diabetic
                  ulcers with 86% accuracy, resulting in an expected 10% decrease in foot amputations thanks to early diagnosis.
                </Typography>
              </ListItem>
              <ListItem sx={{display:'list-item'}} disableGutters={true} disablePadding={true}>
                <Typography>
                  Negotiated to pilot our platform at 2 major London hospitals (St. Thomas and Chelsea and Westminster).
                </Typography>
              </ListItem>
              <ListItem disableGutters={true}>
                <Typography>
                  <a href="https://www.youtube.com/watch?v=MNrLKAAJrq8">Here is one of our pitches</a>
                </Typography>
              </ListItem>
            </List>
      </ExperienceCard>
      <Box height={10}/>
      <ExperienceCard
          company="StatCollect - Big Data for Small Business"
          date="April 2019 - April 2020"
          title="Co-Founder, CTO"
          location="London, UK">
            <List sx={{ listStyleType: 'disc', ml: 2}}>
              <ListItem sx={{display:'list-item'}} disableGutters={true} disablePadding={true}>
                <Typography>
                  Led the implementation of our automated data analysis/collection systems in small businesses to make them
                  more efficient using <strong>Python</strong> and <strong>JavaScript</strong> (example:
                  reducing the idle time per day of a dentist office by an average of 25 minutes by tracking how late/early each patient tends to be).
                </Typography>
              </ListItem>
              <ListItem sx={{display:'list-item'}} disableGutters={true} disablePadding={true}>
                <Typography>
                Obtained 12 clients over a year whilst continuing my studies.
                </Typography>
              </ListItem>
            </List>
      </ExperienceCard>
      <Box height={40}/>
    </Container>
  )
}

export default ExtendedCV;