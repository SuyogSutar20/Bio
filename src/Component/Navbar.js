import { AppBar, Typography, Toolbar, Grid, Tab, Tabs, Drawer } from '@mui/material'
import React from 'react'
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Button from '@mui/material/Button';


const Navbar = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="sticky" style={{backgroundColor: "white", color:"black"}}>
        <Toolbar>
          <Typography className='LogoTake' variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Front <span className='ExSpace'>End</span> 
          </Typography>
          <Button className='linkTop' color="inherit">Login</Button>
          <Button className='linkTop' color="inherit">Service</Button>
          <Button className='linkTop' color="inherit">Project</Button>

        </Toolbar>
      </AppBar>
    </Box>
  )
}

export default Navbar;