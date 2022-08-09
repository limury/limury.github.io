import { Paper, Typography, Grid, Box, Link, Divider } from '@mui/material';
import React from 'react';

function Contact() {
  return (
    <Paper elevation={3} sx={{marginY: 'auto', padding: 3, flexGrow:1, display:'flex', maxWidth:'700px', flexDirection: 'column'}}>

      {/* For large screen */}
      <Grid container sx={{display: {xs: 'none', sm: 'flex'}}}>
        <Grid item xs={6} sx={{display:'flex',flexDirection:'row', alignItems:'center', mb: 1, pr: 1, justifyContent: 'end'}}>
          <Typography sx={{mb:2}} align='end' variant='h4'>
            Lorenzo
          </Typography>
        </Grid>
        <Grid item xs={6} sx={{pl: 1}}>
          <Typography sx={{mb:2}} align='start' variant='h4'>
            Bernasconi
          </Typography>
        </Grid>

        <Grid item xs={6} sx={{display:'flex',flexDirection:'row', alignItems:'center', mb: 1, pr: 3, justifyContent: 'end'}}>
          <span role="img" aria-label="email">✉️</span>
          <Typography ml={1}>
            Email
          </Typography>
        </Grid>
        <Divider orientation="vertical" flexItem style={{marginRight:"-1px"}} />
        <Grid item xs={6} sx={{pl: 3}}>
          <Typography>
            lorenzo.j.bernasconi@gmail.com
          </Typography>
        </Grid>

        <Grid item xs={6} sx={{display:'flex',flexDirection:'row', alignItems:'center', mb: 1, pr: 3, justifyContent: 'end'}}>
          <span role="img" aria-label="phone">📞</span>
          <Typography ml={1}>
            Phone
          </Typography>
        </Grid>
        <Divider orientation="vertical" flexItem style={{marginRight:"-1px"}} />
        <Grid item xs={6} sx={{pl: 3}}>
          <Typography>
            +44 7464261168
          </Typography>
        </Grid>

        <Grid item xs={6} sx={{display:'flex',flexDirection:'row', alignItems:'center', mb: 1, pr: 3, justifyContent: 'end'}}>
          <span role="img" aria-label="linkedin">💼</span>
          <Typography ml={1}>
            LinkedIn 
          </Typography>
        </Grid>
        <Divider orientation="vertical" flexItem style={{marginRight:"-1px"}} />
        <Grid item xs={6} sx={{pl: 3}}>
          <Link href="https://www.linkedin.com/in/lorenzo-bernasconi-552983197/" color='inherit'>
            Click Here
          </Link>
        </Grid>

        <Grid item xs={6} sx={{display:'flex',flexDirection:'row', alignItems:'center', mb: 1, pr: 3, justifyContent: 'end'}}>
          <span role="img" aria-label="github">🚀</span>
          <Typography ml={1}>
            GitHub 
          </Typography>
        </Grid>
        <Divider orientation="vertical" flexItem style={{marginRight:"-1px"}} />
        <Grid item xs={6} sx={{pl: 3}}>
          <Link href="https://github.com/limury" color='inherit'>
            Click Here
          </Link>
        </Grid>
      </Grid>

      {/* Small screen */}
      <Grid container sx={{display: {xs: 'flex', sm: 'none'}}}>
        <Grid item xs={6} sx={{display:'flex',flexDirection:'row', alignItems:'center', mb: 1, pr: 1, justifyContent: 'end'}}>
          <Typography sx={{mb:2}} align='end' variant='h4'>
            Lorenzo
          </Typography>
        </Grid>
        <Grid item xs={6} sx={{pl: 1}}>
          <Typography sx={{mb:2}} align='start' variant='h4'>
            Bernasconi
          </Typography>
        </Grid>

        <Grid item xs={6} sx={{display:'flex',flexDirection:'row', alignItems:'center', mb: 1, pr: 3, justifyContent: 'end'}}>
          <span role="img" aria-label="email">✉️</span>
          <Typography ml={1}>
            Email
          </Typography>
        </Grid>
        <Divider orientation="vertical" flexItem style={{marginRight:"-1px"}} />
        <Grid item xs={6} sx={{pl: 3}}>
          <Typography>
            lorenzo.j.bernasconi@gmail.com
          </Typography>
        </Grid>

        <Grid item xs={6} sx={{display:'flex',flexDirection:'row', alignItems:'center', mb: 1, pr: 3, justifyContent: 'end'}}>
          <span role="img" aria-label="phone">📞</span>
          <Typography ml={1}>
            Phone
          </Typography>
        </Grid>
        <Divider orientation="vertical" flexItem style={{marginRight:"-1px"}} />
        <Grid item xs={6} sx={{pl: 3}}>
          <Typography>
            +44 7464261168
          </Typography>
        </Grid>

        <Grid item xs={6} sx={{display:'flex',flexDirection:'row', alignItems:'center', mb: 1, pr: 3, justifyContent: 'end'}}>
          <span role="img" aria-label="linkedin">💼</span>
          <Typography ml={1}>
            LinkedIn 
          </Typography>
        </Grid>
        <Divider orientation="vertical" flexItem style={{marginRight:"-1px"}} />
        <Grid item xs={6} sx={{pl: 3}}>
          <Link href="https://www.linkedin.com/in/lorenzo-bernasconi-552983197/" color='inherit'>
            Click Here
          </Link>
        </Grid>

        <Grid item xs={6} sx={{display:'flex',flexDirection:'row', alignItems:'center', mb: 1, pr: 3, justifyContent: 'end'}}>
          <span role="img" aria-label="github">🚀</span>
          <Typography ml={1}>
            GitHub 
          </Typography>
        </Grid>
        <Divider orientation="vertical" flexItem style={{marginRight:"-1px"}} />
        <Grid item xs={6} sx={{pl: 3}}>
          <Link href="https://github.com/limury" color='inherit'>
            Click Here
          </Link>
        </Grid>
      </Grid>

    </Paper>
  )
}

export default Contact