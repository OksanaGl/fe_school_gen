import { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';
import { getCourse } from './requests';

export const CoursePage = () => {
  const { itemID } = useParams();

  const [course, setCourse] = useState(null)

  useEffect(() => {
    async function fetchData() {
      const getCoursePageItem = await getCourse(itemID);
      setCourse(getCoursePageItem?.data)

    }
    fetchData()
  }, []
  )
  console.log(course);
  return <div>Course Page {course?.title}</div>
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



