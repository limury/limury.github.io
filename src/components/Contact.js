import { Paper, Typography, Grid, Box, Link } from '@mui/material';
import React from 'react';

function Contact() {
  return (
    <Paper elevation={3} sx={{marginY: 'auto', padding: 3, flexGrow:1, display:'flex', maxWidth:'700px', flexDirection: 'column'}}>
      <Typography sx={{mb:1}}>
        Lorenzo Bernasconi
      </Typography>

      <Grid container>
        <Grid item xs={5} sx={{display:'flex',flexDirection:'row', alignItems:'center', mb: 1}}>
          <span role="img" aria-label="email">✉️</span>
          <Typography ml={1}>
            Email
          </Typography>
        </Grid>
        <Grid item xs={7}>
          <Typography>
            lorenzo.j.bernasconi@gmail.com
          </Typography>
        </Grid>

        <Grid item xs={5} sx={{display:'flex',flexDirection:'row', alignItems:'center', mb: 1}}>
          <span role="img" aria-label="phone">📞</span>
          <Typography ml={1}>
            Phone
          </Typography>
        </Grid>
        <Grid item xs={7}>
          <Typography>
            +44 7464261168
          </Typography>
        </Grid>

        <Grid item xs={5} sx={{display:'flex',flexDirection:'row', alignItems:'center', mb: 1}}>
          <span role="img" aria-label="linkedin">💼</span>
          <Typography ml={1}>
            LinkedIn 
          </Typography>
        </Grid>
        <Grid item xs={7}>
          <Link href="https://www.linkedin.com/in/lorenzo-bernasconi-552983197/" color='inherit'>
            Click Here
          </Link>
        </Grid>

        <Grid item xs={5} sx={{display:'flex',flexDirection:'row', alignItems:'center', mb: 1}}>
          <span role="img" aria-label="github">🚀</span>
          <Typography ml={1}>
            GitHub 
          </Typography>
        </Grid>
        <Grid item xs={7}>
          <Link href="https://github.com/limury" color='inherit'>
            Click Here
          </Link>
        </Grid>
      </Grid>

    </Paper>
  )
}

export default Contact