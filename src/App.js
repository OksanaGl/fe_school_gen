import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { CoursesListPage } from './CoursesListPage';
import { CoursePage } from './CoursePage';
import WrapContainer from './components/WrapContainer';

const App = () => {
  return (<div>
    <BrowserRouter>
      <WrapContainer>
        <Routes>
          <Route exact path="/" Component={CoursesListPage} />
          <Route path="/:itemID" Component={CoursePage} />
        </Routes>
      </WrapContainer>
    </BrowserRouter>
  </div>

  );
}

export default App;
