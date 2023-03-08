import {  MenuBookOutlined, MenuOpen } from '@mui/icons-material'
import { AppBar, IconButton, Menu, MenuItem, Toolbar, Typography } from '@mui/material'
import {useState} from 'react'

const Navbar = () => {
    const [openmenu, setOpenmenu] = useState(false)
    const handleclick=(event)=>{
        setOpenmenu(event.currentTarget)
    }
    const handleclose=()=>{
        setOpenmenu(false)
    }
  return (
    <AppBar position='sticky'>
        <Toolbar
        sx={{
            justifyContent:'space-between'
        }}
        >
            <Typography
            variant='h5'
            >Chijokes</Typography>

            <IconButton
            sx={{
                color:'white'
            }}
            onClick={handleclick}
            >
                <MenuOpen/>
            </IconButton>

            <Menu
            anchorEl={openmenu}
            open={Boolean(openmenu)}
            onClose={handleclose}
            >
                <MenuItem>come</MenuItem>
            </Menu>

        </Toolbar>
    </AppBar>
)
}

export default Navbar