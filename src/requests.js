import axios from 'axios';
const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIzYThjYTk1MC0wMjk3LTQ2YTktYTE0YS1hMzUxNjY5NWY1NzIiLCJwbGF0Zm9ybSI6InN1YnNjcmlwdGlvbnMiLCJpYXQiOjE2Nzg4MTA2MTQsImV4cCI6MTY3OTcxMDYxNH0.oQTywPwnKbQmt3tQrGLLVJp4ahH5yc6ixvfJxFdczbg';
export const getCoursesList = () => axios.get('https://api.wisey.app/api/v1/core/preview-courses', { headers: { Authorization: `Bearer ${token}` } })
  .then(function (response) {
    // console.log( response);
    return response
  })
  .catch()
  
  export const getCourse = (courseId) => axios.get(`https://api.wisey.app/api/v1/core/preview-courses/${courseId}`, { headers: { Authorization: `Bearer ${token}` } })
  .then(function (response) {
    // console.log( response);
    return response
  })
  .catch()