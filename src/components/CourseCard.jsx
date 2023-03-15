import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import Rating from '@mui/material/Rating';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import { useNavigate } from 'react-router-dom';



export const CourseCard = ({ previewImageLink, title, description, id, rating, lessonsCount, meta }) => {
const navigate = useNavigate();

  return <Card sx={{ maxWidth: 345 }}>
    <CardActionArea onClick={()=> navigate(('/'+id))}>
      <CardMedia
        component="img"
        height="140"
        image="https://cdn.creazilla.com/illustrations/1695212/training-session-classroom-training-training-and-development-illustration-md.jpeg"
        // image={previewImageLink}
        alt={title}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>
        <Typography variant="body1" color="text.secondary">
          {description}
        </Typography>
        <Typography variant="body1" color="text.primary">Lessons number: {lessonsCount}
        </Typography>

        <Typography component="legend" variant="body1" color="text.primary">Skills</Typography>
        <Box sx={{ width: '100%', maxWidth: 340, bgcolor: 'background.paper' }}>
          <List >
            {meta?.skills?.map((skill, index) => (<ListItem disablePadding key={index}>
              <ListItemText primary={skill} />
            </ListItem>))}
          </List>
        </Box>
        <Typography component="legend">Rating</Typography>
        <Rating name="half-rating-read" defaultValue={rating} precision={0.5} readOnly />
      </CardContent>
    </CardActionArea>
  </Card>
}