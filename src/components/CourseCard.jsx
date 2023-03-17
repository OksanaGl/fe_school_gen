import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import Rating from '@mui/material/Rating';
import Box from '@mui/material/Box';
// import List from '@mui/material/List';
// import ListItem from '@mui/material/ListItem';
// import ListItemText from '@mui/material/ListItemText';
import { useNavigate } from 'react-router-dom';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import styled from 'styled-components';
import Grid from '@mui/material/Grid';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';


export const CourseCard = ({ previewImageLink, title, description, id, rating, lessonsCount, meta }) => {
const navigate = useNavigate();

  return <Grid xs={12}>
  <Card>
    <CardActionArea onClick={()=> navigate(('/'+id))}>
      <CardMedia
        component="img"
        height="140"
        image={previewImageLink + '/cover.webp'}
        alt={title}
      />
      <CardContent>
        <Typography paragraph  variant="h6" component="div" align="left">
          {title}
        </Typography>
        <Typography component="legend" variant="overline">Rating</Typography>
        <Rating name="half-rating-read" defaultValue={rating} precision={0.5} readOnly />
        <Typography variant="subtitle2" color="text.primary">Lessons number: {lessonsCount}
        </Typography>
        <Typography  variant="body2" color="text.secondary" >
          {description}
        </Typography>
        

        </CardContent>
    </CardActionArea>
        <Box sx={{ width: '100%', maxWidth: 340, bgcolor: 'background.paper' }}>
        <Accordion disableGutters>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
         <Typography component="legend" variant="overline" color="text.primary">Skills</Typography>
        </AccordionSummary>
        <AccordionDetails>
        <CustomStack  direction="row" spacing={1}>
      {meta?.skills?.map((skill, index) => (<Chip size="small" variant="outlined" color="primary" label={skill} key={index} maxLength={2} />))}
    </CustomStack>
        </AccordionDetails>
      </Accordion>
        </Box>

        
   
  </Card>
  </Grid>
}

const CustomStack = styled(Stack)`
flex-wrap: wrap;
.MuiChip-root{
  margin: 2px;
}
`