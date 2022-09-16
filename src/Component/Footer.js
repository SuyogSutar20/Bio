import React from 'react'
import { AppBar, Typography, Toolbar, Grid, Tab, Tabs, Drawer } from '@mui/material'
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import SendIcon from '@mui/icons-material/Send';
import Stack from '@mui/material/Stack';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Ui from '../Images/ux-design.png';
import web from '../Images/web-design.png';
import UX from '../Images/ux.png';
import Wordpress from '../Images/wordpress.png';



import Container from '@mui/material/Container';

const Footer = () => {
    
  return (
    <div Container className='CardMainTop'>
      <Box className='HeadTypo'>
                <Typography className='HeadLOc'>FrontEnd</Typography>
                <Typography className='follwMe'>Copyright ©2022 All rights reserved | This template is made with Suyog Sutar</Typography>
                
        </Box>  
        
    </div>
  )
}

export default Footer