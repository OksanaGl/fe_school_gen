import { Grid, Pagination } from "@mui/material";
import { useEffect, useState } from "react";
import { CourseCard } from "./components/CourseCard";
import { getCoursesList } from "./requests";


export const CoursesList = () => {
  const [list,setList] = useState([])
  const [itemOffset, setItemOffset] = useState(0);

  const itemsPerPage = 10;
  const endOffset = itemOffset + itemsPerPage;
  const currentItems = list.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(list.length / itemsPerPage);
  

  const setPage = (e,page) => {
    setItemOffset((page-1)*itemsPerPage)
  }
  
  useEffect(() => {
    async function fetchData(){
      const getInfo = await getCoursesList();
      setList(getInfo?.data?.courses)
    }
    fetchData()

  },[])


  return <><Grid container rowSpacing={2} columnSpacing={{ xs: 1, sm: 2, md: 3 }}> 
    {currentItems?.map((course)=>(<Grid  key={course?.id}  xs={4} item><CourseCard  {...course}/> </Grid>))}
    </Grid>
    <Pagination onChange={setPage} count={pageCount} size="small"/>
    </>

}


