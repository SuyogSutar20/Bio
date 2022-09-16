import React from 'react'
import { AppBar, Typography, Toolbar, Grid, Tab, Tabs, Drawer } from '@mui/material'
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import '../css/HeaderNav.css';
import Avtar from '../Images/Avtar.png';
import Html from '../Images/html-file.png';
import Css from '../Images/css.png';
import Bootstrap from '../Images/bootstrap.png';



import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import SendIcon from '@mui/icons-material/Send';
import Stack from '@mui/material/Stack';

const Skill = () => {
    
  return (
    <div container>
    <Grid container spacing={2} columns={12}>
    <Grid item lg={7} xs={12}>
    <Grid container  columns={12}>
        <Grid item lg={4} xs={12}>
            <Box className='IcoSkillMain'>
            <Typography className='SubKey'>HTML</Typography>
            </Box>
        </Grid>
        <Grid item lg={4} xs={12}>
        <Box className='IcoSkillMain'>
            <Typography className='SubKey'>CSS</Typography>
            </Box>
        </Grid>
        <Grid item lg={4} xs={12}>
        <Box className='IcoSkillMain'>
            <Typography className='SubKey'>JAVASRIPT</Typography>
            </Box>
        </Grid>
    </Grid>
    <Grid container  columns={12}>
        <Grid item lg={4} xs={12}>
            <Box className='IcoSkillMain'>
            <Typography className='SubKey'>BOOTSTRAP</Typography>
            </Box>
        </Grid>
        <Grid item lg={4} xs={12}>
        <Box className='IcoSkillMain'>
            <Typography className='SubKey'>REACT JS</Typography>
            </Box>
        </Grid>
        <Grid item lg={4} xs={12}>
        <Box className='IcoSkillMain'>
            <Typography className='SubKey'>FIGMA</Typography>
            </Box>
        </Grid>
    </Grid>
    <Grid container  columns={12}>
        <Grid item lg={4} xs={12}>
            <Box className='IcoSkillMain'>
            <Typography className='SubKey'>CANVA</Typography>
            </Box>
        </Grid>
        <Grid item lg={4} xs={12}>
        <Box className='IcoSkillMain'>
            <Typography className='SubKey'>PHOTOSHOP</Typography>
            </Box>
        </Grid>
        <Grid item lg={4} xs={12}>
        <Box className='IcoSkillMain'>
            <Typography className='SubKey'>ILLUTRATOR</Typography>
            </Box>
        </Grid>
    </Grid>
    </Grid>
    <Grid item lg={5} xs={12}>
        <Box>
        <Grid container  columns={12}>
        
        <Grid item  xs={8}>
        <Typography><span className='CountEXP'>3</span>Years Experience Working</Typography>
        </Grid> 
        </Grid>
        </Box>
    </Grid>
</Grid>
</div>
  )
}

export default Skill