import { Button, Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { useEffect, useState, useRef } from "react";
import { useNavigate, useParams } from 'react-router-dom';
import { getCourse } from './requests';
import moment from "moment";
import Chip from "@mui/material/Chip";
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Stack from '@mui/material/Stack';
import styled from 'styled-components';
import Badge from '@mui/material/Badge';
import { VideoJS } from "./components/VideoJS";


export const CoursePage = () => {
  const { itemID } = useParams();
  const navigate = useNavigate()

  const [course, setCourse] = useState(null);
  const [lesson, setLesson] = useState(null);

  useEffect(() => {
    async function fetchData() {
      const getCoursePageItem = await getCourse(itemID);
      const courseData = {
        ...getCoursePageItem?.data,
        lessons: getCoursePageItem?.data?.lessons?.sort((a, b) => (a.order - b.order))
      };

      setCourse(courseData)
      setLesson(courseData?.lessons[0])

    }
    fetchData()
    // eslint-disable-next-line
  }, []
  )

  const handleLesson = (lesson) => {
    if (lesson.status === "locked") {
      alert('This lesson is locked')
      return
    }
    setLesson(lesson)
  }
  const playerRef = useRef(null);

  const play = {
    fill: true,
    fluid: true,
    autoplay: false,
    controls: true,
    preload: "metadata",
    sources: [
      {
        src: lesson?.link,
        type: "application/x-mpegURL"
      },
    ]
  };

  const handlePlayerReady = (player) => {
    playerRef.current = player;
  };

  return <><div><Button onClick={() => navigate(-1)}>Back</Button>
    <Grid container rowSpacing={2} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>

      <Grid container rowSpacing={2} columnSpacing={{ xs: 1, sm: 2, md: 3 }} item>
        <Grid xs={12} sm={6} md={6} lg={6} item>
          <Box>
            <Typography variant="h5">Course Info</Typography>
            <Typography variant="h6">Title: {course?.title}</Typography>
            <CustomStackCourse>
              <Typography variant="inherit">Status: </Typography>
              <Typography variant="inherit" color={(course?.status === "launched") ? 'primary' : 'error'}>{course?.status}</Typography>
            </CustomStackCourse>
            <Typography variant="inherit">Launch Date: {moment.utc(course?.launchDate).format('MM/DD/YYYY')}</Typography>
            <Typography variant="inherit">Duration: {Math.round(course?.duration / 60)} hours</Typography>
            <CustomStackCourse>
              <Typography variant="inherit">Tags:</Typography> {course?.tags?.map((tag, index) => (<Chip size="small" variant="filled" color="info" label={'#' + tag} key={index} />))}
            </CustomStackCourse>
            <CustomStackCourse>
              <Typography variant="inherit">Skills:</Typography>
              {course?.meta?.skills?.map((skill, index) => (<Chip size="small" variant="outlined" color="primary" label={skill} key={index} maxLength={2} />))}
            </CustomStackCourse>
          </Box>
        </Grid>
        <CustomGridCover xs={12} sm={6} md={6} lg={6} item>
          <Box component="img" height="150px" alt={lesson?.title} src={lesson?.previewImageLink + '/' + lesson?.order + '.webp'}></Box>
        </CustomGridCover>
      </Grid>

      <Grid container rowSpacing={2} columnSpacing={{ xs: 1, sm: 2, md: 3 }} item>
        <Grid container rowSpacing={2} columnSpacing={{ xs: 1, sm: 2, md: 3 }} item>
          <Grid xs={12} sm={12} md={6} lg={8} item>
            <Typography variant="h6">Lesson Name: {lesson?.title} </Typography>
            <Box>
              <VideoJS options={play} onReady={handlePlayerReady} />
            </Box>
          </Grid>

          <Grid xs={12} sm={12} md={6} lg={4} item>
            <Box>
              <Typography variant="overline">Lessons List</Typography>
              <List>
                {course?.lessons?.sort((a, b) => (a.order - b.order)).map((episode, i) => (<ListItem disablePadding key={episode?.order} onClick={() => handleLesson(episode)} >
                  <ListItemText primary={
                    <CustomBadge badgeContent={episode?.status} color={(episode?.status === "locked") ? 'error' : 'primary'}>
                      <Typography color={(episode?.status === "locked") ? 'error' : 'primary'}>{episode?.order + '. ' + episode?.title}</Typography>
                    </CustomBadge>
                  } />
                </ListItem>))}
              </List>
            </Box>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  </div>
  </>
};

const CustomStackCourse = styled(Stack)`
&.MuiStack-root{
  flex-direction: row;
  flex-wrap: wrap;
}
.MuiChip-root{
  margin: 2px;
}
`
const CustomGridCover = styled(Grid)`
&.MuiGrid-item{
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-content: center;
  justify-content: center;
  align-items: center;
}`

const CustomBadge = styled(Badge)`
  .MuiBadge-badge{
    top: 4px;
    right: -30px;}
    `



