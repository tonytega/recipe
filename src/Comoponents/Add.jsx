import { Avatar, Box, Button, ButtonGroup, CssBaseline, Fab, Modal, ScopedCssBaseline, styled, TextField, Tooltip, Typography } from '@mui/material'
import React from 'react'
import {Add as AddIcon, DateRange, EmojiEmotions, Image, Person, VideoCameraBack} from '@mui/icons-material'
import { useState } from 'react'
import { Stack } from '@mui/system'

const StyledModal = styled(Modal)({
    display : 'flex',
    justifyContent :'center',
     alignItems :'center'
})
const UserBox = styled(Box)({
    display : 'flex',
     alignItems :'center',
     gap:10,
     marginBottom:'20px'
})

export const Add = () => {
    const [open, setOpen] = useState(false);
  return (
    <>
    <Tooltip title="Delete" sx={{position : 'fixed', bottom:20,left:{xs:'calc(50% - 25px)',md:30}}}
    onClick={e=>{setOpen(true)}}>
    <Fab color="primary" aria-label="add">
        <AddIcon />
    </Fab>
    </Tooltip>
    <CssBaseline/>
    <StyledModal
        open={open}
        onClose={e=>{setOpen(false)}}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        

        <Box width={500} height={350} bgcolor={"background.default"} color ={'text.primary'} p={3} borderRadius={5} >
            
            <Typography variant='h6' color='gray' textAlign='center'> Create Post</Typography>
            <UserBox onClick={()=>{setOpen(!open)}}>
            <Avatar sx={{width :30,height:30}} src='https://images.pexels.com/photos/1310522/pexels-photo-1310522.jpeg?auto=compress&cs=tinysrgb&w=600'/>
              <Typography variant='span' fontWeight={500}>John</Typography>
            </UserBox>
            <TextField
                sx={{width:'100%'}}
                id="standard-multiline-static"
                multiline
                rows={4}
                placeholder="What kind of recipe have you discovered"
                variant="standard"
                />
            <Stack direction='row' gap='1' mt={2} mb={3}>
                    <EmojiEmotions color='primary'/>
                    <Image cplor='secondary'/>
                    <VideoCameraBack color='success'/> 
                    <Person color='error'/> 

            </Stack>
            <ButtonGroup fullWidth variant="contained" aria-label="outlined primary button group">
                <Button >Post</Button>
                <Button sx={{width: '100px'}}><DateRange/></Button>
            </ButtonGroup>
        </Box>
            
  </StyledModal>
    </>
  )
}
