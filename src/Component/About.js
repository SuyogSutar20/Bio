import React from 'react'
import { AppBar, Typography, Toolbar, Grid, Tab, Tabs, Drawer } from '@mui/material'
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import '../css/HeaderNav.css';
import Aboutus from '../Images/about-us.png';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import SendIcon from '@mui/icons-material/Send';
import Stack from '@mui/material/Stack';

const About = () => {
    
  return (
    <div container>
    <Grid container spacing={2} columns={12}>
    <Grid item lg={5} xs={12}>
        
        <Box className='imagBox'>
        <img src={Aboutus} className="ImageABout"/>
        </Box>
    </Grid>
    <Grid item lg={7} xs={12}>
    <Box className='ContHead'>
            <Typography className='HeadLOc'>LET’S <br></br> INTRODUCE ABOUT<br></br> MYSELF</Typography>
            <Typography variant='subtitle1' className='SubMain'>
            A highly skilled and proficient Front End
            with over 3 years of professional experience in
            designing and creating responsiveand adaptive
            websites. Experienced in leveraging HTML, CSS, React js
            and JavaScript programminglanguages to drive
            design, build, test anddeployment efforts for custom
            website solutions.Results-driven individual
            contributor with asuccessful track re
            cord in exceeding expectationsfor web development
            initiatives.
            </Typography>
            
        </Box>
    </Grid>
</Grid>
</div>
  )
}

export default About