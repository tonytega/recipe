import React from 'react'
import {AppBar,Toolbar,styled, Typography,Box, InputBase, Badge, Avatar, Menu, MenuItem} from '@mui/material'
import { Mail, MenuBook, Notifications, Pets } from '@mui/icons-material'
import { display } from '@mui/system';
import { useState } from 'react';

export const Navbar = () => {
   const [open, setOpen] = useState(false);

const StyledToolBar = styled(Toolbar)({
    display:'flex',
    justifyContent:'space-between'
})
const Search = styled('div')(({theme})=>({
    backgroundColor : 'white',
    padding : "0 10px",
    borderRadius: theme.shape.borderRadius ,
    width: "40%"
}))
const Icons = styled(Box)(({theme})=>({
    display:'none',
    gap:20,
    alignItems: 'center',
    [theme.breakpoints.up('sm')] : {
      display: 'flex'
    }
}))
const UserBox = styled(Box)(({theme})=>({
    display:'flex',
    gap:20,
    alignItems: 'center',
    [theme.breakpoints.up('sm')] : {
      display: 'none'
    }

}))

  return (
    <AppBar sx={{position : 'sticky'}}>
        <StyledToolBar sx={{backgroundColor:'green'}}>
            <Typography variant="h6" sx={{display: {xs:'none',sm:"block"}}} >Recipe</Typography>
            <MenuBook sx={{display: {xs:'block',sm:"none"}}}/>
            <Search><InputBase placeholder='search... '/></Search>
            <Icons>
            <Badge badgeContent={4} color="error">
              <Mail />
            </Badge>
            <Badge badgeContent={4} color="error">
              <Notifications />
            </Badge>
            <Avatar onClick={()=>{setOpen(!open)}} sx={{width :30,height:30}} src='https://images.pexels.com/photos/1310522/pexels-photo-1310522.jpeg?auto=compress&cs=tinysrgb&w=600'/>
            </Icons>
            <UserBox onClick={()=>{setOpen(!open)}}>
            <Avatar sx={{width :30,height:30}} src='https://images.pexels.com/photos/1310522/pexels-photo-1310522.jpeg?auto=compress&cs=tinysrgb&w=600'/>
              <Typography variant='span'>John</Typography>
            </UserBox>
        </StyledToolBar>
        <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        open={open}
        onClose={()=>{setOpen(!open)}}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
      >
        <MenuItem >Profile </MenuItem>
        <MenuItem >My account</MenuItem>
        <MenuItem >Logout</MenuItem>
      </Menu>
         
        
    </AppBar>
  )
}
