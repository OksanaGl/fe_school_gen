import { Button, Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from 'react-router-dom';
import { getCourse } from './requests';
export const CoursePage = () => {
  const { itemID } = useParams();
  const navigate = useNavigate()

  const [course, setCourse] = useState(null);

  useEffect(() => {
    async function fetchData() {
      const getCoursePageItem = await getCourse(itemID);
      setCourse(getCoursePageItem?.data)

    }
    fetchData()
  }, []
  )
  // console.log(course);
  console.log(course?.courseVideoPreview?.link);
  return <div><Button onClick={() => navigate(-1)}>Back</Button>
  <br></br>
  Course Page {course?.title}
  <br></br>
  <Grid>
    <Box>
    <Typography>{course?.meta?.courseVideoPreview?.link}</Typography>
    </Box>
  </Grid>
  </div>
};

// export const CoursePageItem = () => {
//   const course = useState([])

//   useEffect(() => {
//     async function fetchData() {
//       const getCoursePageItem = await getCourse(itemID);
//       course(getCoursePageItem?.)
//     }
//     fetchData()
//   }
//   )
// }



