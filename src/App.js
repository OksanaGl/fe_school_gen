import './App.css';
import { courseInfo, coursePreview } from './requests.js';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { CoursesList } from './CoursesList';
import {CoursePage} from './CoursePage';


const App = () => {

  return (<div>
    <BrowserRouter>
      {<h1>Navigation</h1>}
      <Routes>
        <Route exact path="/" Component={CoursesList} /> 
        <Route  path="/:itemID" Component={CoursePage} /> 
      </Routes>
      {<h1>Footer</h1>} 
    </BrowserRouter>
  </div>

  );
}

export default App;
