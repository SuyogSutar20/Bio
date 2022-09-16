import React from 'react'
import { Drawer, IconButton } from '@mui/material'
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';

const DrawerCamp = () => {
    const [open, setOpen] = useState(false)
  return (
    <>
        <Drawer open={open} onClose={() => setOpen(false)}></Drawer>
        <IconButton>
            <MenuRoundedIcon/>
        </IconButton>
    </>
  )
}

export default DrawerCamp