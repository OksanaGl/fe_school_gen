import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { CoursesListPage } from './CoursesListPage';
import {CoursePage} from './CoursePage';
import WrapContainer from './components/WrapContainer';

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
