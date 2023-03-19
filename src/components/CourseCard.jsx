import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import Rating from '@mui/material/Rating';
import Box from '@mui/material/Box';
import { useNavigate } from 'react-router-dom';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import styled from 'styled-components';
import Grid from '@mui/material/Grid';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { VideoJS } from './VideoJS';
import { useRef, useState, useEffect } from 'react';


export const CourseCard = ({ previewImageLink, title, description, id, rating, lessonsCount, meta }) => {
  const navigate = useNavigate();
  const [hover, setHover] = useState(false);
  const videoUrl = meta?.courseVideoPreview?.link
  const playerRef = useRef(null);
  const play = {
    fill: true,
    fluid: true,
    autoplay: false,
    controls: false,
    muted: true,
    height: 140,
    responsive: true,
    preload: "metadata",
    sources: [
      {
        src: videoUrl,
        type: "application/x-mpegURL"
      },
    ]
  };
  useEffect(() => {
    if (hover) {
      playerRef?.current?.play()
    } else {
      playerRef?.current?.pause()
    }
  },
    [hover, playerRef?.current])

  const handlePlayerReady = (player) => {
    playerRef.current = player;
  };

  return <Grid xs={12} item>
    <Card
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}>
      <CardActionArea onClick={() => navigate(('/' + id))}>
        <WrapperVideo hover={hover}>
          <VideoJS options={play} style={{ display: 'none' }} onReady={handlePlayerReady} />
          <CardMedia
            component="img"
            height="140"
            image={previewImageLink + '/cover.webp'}
            alt={title}
          />
        </WrapperVideo>
        <CardContent>
          <Typography paragraph variant="h6" component="div" align="left">
            {title}
          </Typography>
          <Typography component="legend" variant="overline">Rating</Typography>
          <Rating name="half-rating-read" defaultValue={rating} precision={0.5} readOnly />
          <Typography variant="subtitle2" color="text.primary">Lessons number: {lessonsCount}
          </Typography>
          <Typography variant="body2" color="text.secondary" >
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
            <CustomStack direction="row" spacing={1}>
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

const WrapperVideo = styled.div`
img{
  display:${(props) => props.hover ? 'none' : 'block'};
}
div{
  display: ${(props) => props.hover ? 'block' : 'none'};
  height:140px;
  overflow:hidden;
}

 
 
`