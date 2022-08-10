import { Grid, Typography, Paper } from '@mui/material'
import React from 'react'

// requires
// {
//     company,
//     date,
//     title,
//     location,
//     body
// }
function ExperienceCard(props) {
  return (
      <Paper elevation={3} sx={{width: '100%', padding: 3, alignSelf: 'center', flexGrow: 1, display:'flex', flexDirection: 'column'}}>
        <Grid container>
          <Grid item xs={6} sx={{display:'flex', flexDirection:'row', justifyContent: 'start'}}>
            <Typography sx={{fontWeight: 'bold'}}>
              {props.company}
            </Typography>
          </Grid>
          <Grid item xs={6} sx={{display:'flex', flexDirection:'row', justifyContent: 'end'}}>
            <Typography>
              {props.date}
            </Typography>
          </Grid>

          <Grid item xs={6} sx={{display:'flex', flexDirection:'row', justifyContent: 'start'}}>
            <Typography sx={{fontStyle:'italic'}}>
              {props.title}
            </Typography>
          </Grid>
          <Grid item xs={6} sx={{display:'flex', flexDirection:'row', justifyContent: 'end'}}>
            <Typography>
              {props.location}
            </Typography>
          </Grid>
          <Grid item xs={12} sx={{display:'flex', flexDirection:'row', mt:1, justifyContent: 'start'}}>
              {props.children}
          </Grid>
        </Grid>
      </Paper>
  )
}

export default ExperienceCard