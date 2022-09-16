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

const Service = () => {
    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 2000,
        cssEase: "linear"
      };
  return (
    <div Container className='CardMainTop'>
      <Box className='HeadTypo'>
                <Typography className='HeadLOc'>SERVICE OFFERS</Typography>
        </Box>  
        <Grid container spacing={2} columns={12}>
        <Grid item lg={3}>
            <Box className='SelectBox'>
            <Card className='CardServ'>
                <Box className='IcoCarMain'>
                <img src={Ui} className="IcoMain"/>
                </Box>
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div" className='ServiceNam'>
                    UI DESIGN
                    </Typography>
                    <Typography variant="body2" color="text.secondary" className='textService'>Creating professional UI designing
                    </Typography>
                </CardContent>
                
            </Card>
            </Box>
        </Grid>
        <Grid item lg={3}>
        <Box className='SelectBox'>
            <Card className='CardServ'>
                <Box className='IcoCarMain'>
                <img src={web} className="IcoMain"/>
                </Box>
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div" className='ServiceNam'>
                    WEB DESIGN
                    </Typography>
                    <Typography variant="body2" color="text.secondary" className='textService'>Creating professional UI designing
                    </Typography>
                </CardContent>
                
            </Card>
            </Box>
        </Grid>
        <Grid item lg={3}>
        <Box className='SelectBox'>
            <Card className='CardServ'>
                <Box className='IcoCarMain'>
                <img src={UX} className="IcoMain"/>
                </Box>
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div" className='ServiceNam'>
                    UI/UX DESIGN
                    </Typography>
                    <Typography variant="body2" color="text.secondary" className='textService'>Creating professional UI designing
                    </Typography>
                </CardContent>
                
            </Card>
            </Box>
        </Grid>
        <Grid item lg={3}>
        <Box className='SelectBox'>
            <Card className='CardServ'>
                <Box className='IcoCarMain'>
                <img src={Wordpress} className="IcoMain"/>
                </Box>
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div" className='ServiceNam'>
                    WORDPRESS
                    </Typography>
                    <Typography variant="body2" color="text.secondary" className='textService'>Creating professional UI designing
                    </Typography>
                </CardContent>
                
            </Card>
            </Box>

            
        </Grid>
        </Grid>
    </div>
  )
}

export default Service