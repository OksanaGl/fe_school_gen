import { Button } from "@mui/material";
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
  console.log(course);
  return <div>Course Page {course?.title}   <Button onClick={() => navigate(-1)}>Back</Button></div>
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



