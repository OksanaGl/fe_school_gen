import './App.css';
import { courseInfo, coursePreview } from './requests.js';
import { BrowserRouter, Routes, Route, useNavigate } from 'react-router-dom';
import { CoursesListPage } from './CoursesListPage';
import {CoursePage} from './CoursePage';
import WrapContainer from './components/WrapContainer';
import { Button } from '@mui/material';

const App = () => {
  return (<div>
    <BrowserRouter>
      {<h1>Navigation</h1>}
      <WrapContainer>
      <Routes>
        <Route exact path="/" Component={CoursesListPage} /> 
        <Route  path="/:itemID" Component={CoursePage} /> 
      </Routes>
      </WrapContainer>
      {<h1>Footer</h1>} 
    </BrowserRouter>
  </div>

  );
}

export default App;
