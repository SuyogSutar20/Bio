import React from 'react'
import { AppBar, Typography, Toolbar, Grid, Tab, Tabs, Drawer } from '@mui/material'
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import '../css/HeaderNav.css';
import Avtar from '../Images/Avtar.png';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import SendIcon from '@mui/icons-material/Send';
import Stack from '@mui/material/Stack';

const Headerdiv = () => {
    
  return (
    <div container>
    <Grid container spacing={2} columns={12}>
    <Grid item lg={7} xs={12}>
        <Box className='ContHead'>
            <Typography className='HeadLOc'>HELLO______</Typography>
            <Typography className='HeadMAinTypo'>I AM SUYOG SUTAR</Typography>
            <Typography className='SubDesig'>FrontEnd Developer</Typography>
            <Stack className='BtnMainPart' direction="row" spacing={2}>
                <Button variant="contained" endIcon={<SendIcon />}>
                    Send
                </Button>
                <Button variant="outlined" startIcon={<DeleteIcon />}>
                    Delete
                </Button>
            
            </Stack>
        </Box>
    </Grid>
    <Grid item lg={5} xs={12}>
        <Box>
        <img src={Avtar} className="ImageAvtar"/>
        </Box>
    </Grid>
</Grid>
</div>
  )
}

export default Headerdiv