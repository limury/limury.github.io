import { Avatar, Box, Container, Grid, Paper, Typography } from '@mui/material';
import React from 'react';
import profilePic from '../img/profile.jpg';


function Profile() {
  return (
    <>
    <Box sx={{ display: {xs: 'none', sm: 'flex'} }}>
    <Grid container>
      <Grid item xs={4}>
        <Avatar 
          src="..\..\img\profile.jpg"
          alt="Lorenzo Bernasconi"
          sx={{ width:'110%', aspectRatio:"1/1", height: 'auto'}}
        />

      </Grid>
      <Grid item xs={8} sx={{display:'inherit', zIndex: 1}}>
        <Paper elevation={3} sx={{marginY: 'auto', padding: 3}}>
          {/* Name */}
          <Box sx={{display:'flex',flexDirection:'row', alignItems:'center', mb: 1}}>
            <span role="img" aria-label="wave">👋</span>
            <Typography ml={1}>
              Hi! I'm Lorenzo.
            </Typography>
          </Box>
          {/* Studies */}
          <Box sx={{display:'flex',flexDirection:'row', alignItems:'center', mb: 1}}>
            <span role="img" aria-label="university">🎓</span>
            <Typography ml={1}>
              I studied Electronic Engineering and Computer Science at Imperial College London.
            </Typography>
          </Box>
          {/* Specialize */}
          <Box sx={{display:'flex',flexDirection:'row', alignItems:'center', mb: 1}}>
            <span role="img" aria-label="university">🤖</span>
            <Typography ml={1}>
              I specialize in Machine Learning and Fullstack Development.
            </Typography>
          </Box>
          {/* Open for work */}
          <Box sx={{display:'flex',flexDirection:'row', alignItems:'center'}}>
            <span role="img" aria-label="university">🚀</span>
            <Typography ml={1}>
              I am open for work so don't hesitate to get in touch!
            </Typography>
          </Box>

        </Paper>
      </Grid>
    </Grid>
    </Box>
    <Container sx={{ display: {xs: 'flex', sm: 'none'}, flexGrow: 1, backgroundImage:`url(${profilePic})`, 
                     backgroundSize: 'cover', backgroundPositionX:'50%', height: '100vh',
                     justifyContent: 'center'}}>
        <Paper elevation={3} sx={{marginTop: 'auto', marginBottom: '20%', padding: 3}}>
          {/* Name */}
          <Box sx={{display:'flex',flexDirection:'row', alignItems:'center', mb: 1}}>
            <span role="img" aria-label="wave">👋</span>
            <Typography ml={1}>
              Hi! I'm Lorenzo.
            </Typography>
          </Box>
          {/* Studies */}
          <Box sx={{display:'flex',flexDirection:'row', alignItems:'center', mb: 1}}>
            <span role="img" aria-label="university">🎓</span>
            <Typography ml={1}>
              I studied Electronic Engineering and Computer Science at Imperial College London.
            </Typography>
          </Box>
          {/* Specialize */}
          <Box sx={{display:'flex',flexDirection:'row', alignItems:'center', mb: 1}}>
            <span role="img" aria-label="university">🤖</span>
            <Typography ml={1}>
              I specialize in Machine Learning and Fullstack Development.
            </Typography>
          </Box>
          {/* Open for work */}
          <Box sx={{display:'flex',flexDirection:'row', alignItems:'center'}}>
            <span role="img" aria-label="university">🚀</span>
            <Typography ml={1}>
              I am open for work so don't hesitate to get in touch!
            </Typography>
          </Box>

        </Paper>
    </Container>
    </>
  
  )
}

export default Profile