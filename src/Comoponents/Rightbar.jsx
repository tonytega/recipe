import React from 'react'
import {Avatar, AvatarGroup, Box, Divider, ImageList, ImageListItem, List, ListItem, ListItemAvatar, ListItemText, Typography} from '@mui/material'

export const Rightbar = () => {
  return (
    <Box  flex={2} p={2} sx={{display:{xs:'none',sm:'block'}}}>
      
      <Box position="fixed" width={300}>
        <Typography variant='h6' fontWeight={100} >
          Online Friends
        </Typography>
          <AvatarGroup max={7}>
            <Avatar alt="Remy Sharp" src="https://images.pexels.com/photos/6626882/pexels-photo-6626882.jpeg?auto=compress&cs=tinysrgb&h=204&fit=crop&w=228&dpr=1" />
            <Avatar alt="Travis Howard" src="https://images.pexels.com/photos/1382731/pexels-photo-1382731.jpeg?auto=compress&cs=tinysrgb&w=600" />
            <Avatar alt="Cindy Baker" src="https://images.pexels.com/photos/697509/pexels-photo-697509.jpeg?auto=compress&cs=tinysrgb&w=600" />
            <Avatar alt="Agnes Walker" src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=600" />
            <Avatar alt="Trevor Henderson" src="https://images.pexels.com/photos/1674752/pexels-photo-1674752.jpeg?auto=compress&cs=tinysrgb&w=600" />
        </AvatarGroup>
        <Typography variant='h6' fontWeight={100} mt={2} mb={2} >
          Latest photos
        </Typography>
        <ImageList cols={3} gap={5}  rowHeight={100}>
        
          <ImageListItem >
            <img
              src='https://media.istockphoto.com/photos/healthy-lifestyle-good-life-organic-food-vegetables-close-up-portrait-picture-id1151268627?b=1&k=20&m=1151268627&s=612x612&w=0&h=PAbE8o5cQKQMMeKi-MQb3q0UqUezDWwpWSfgDJHAEaU='
              alt=''
              loading="lazy"
            />
          </ImageListItem>
          <ImageListItem >
            <img
              src='https://media.istockphoto.com/photos/woman-holding-a-slice-of-cucumber-picture-id1173527649?b=1&k=20&m=1173527649&s=612x612&w=0&h=P6qL1fss8jYVUWlMlkSP0ZWki37WF4cJqR7_a6jX9q0='
              alt=''
              loading="lazy"
            />
          </ImageListItem>
          <ImageListItem >
            <img
              src='https://images.pexels.com/photos/1099680/pexels-photo-1099680.jpeg?auto=compress&cs=tinysrgb&w=600'
              alt=''
              loading="lazy"
            />
          </ImageListItem>
          
        </ImageList>
      
        <Typography variant='h6' fontWeight={100} >
          Latest Conversation
        </Typography>
        <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Remy Sharp" src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=600" />
        </ListItemAvatar>
        <ListItemText
          primary="Brunch this weekend?"
          secondary={
            <>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                Ali Connors
              </Typography>
              {" — I'll be in your neighborhood doing errands this…"}
            </>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" />
        </ListItemAvatar>
        <ListItemText
          primary="Summer BBQ"
          secondary={
            <>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                to Scott, Alex, Jennifer
              </Typography>
              {" — Wish I could come, but I'm out of town this…"}
            </>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" />
        </ListItemAvatar>
        <ListItemText
          primary="Oui Oui"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                Sandra Adams
              </Typography>
              {' — Do you have Paris recommendations? Have you ever…'}
            </React.Fragment>
          }
        />
      </ListItem>
    </List>
      </Box>

    </Box>
  )
}
