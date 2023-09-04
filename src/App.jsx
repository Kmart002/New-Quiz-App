import { Route, Routes } from 'react-router-dom';
import './App.css';
import LandingPage from './Components/Landingpage/Landingpage'
import Home from './Components/Home/Home';

import Html from './Components/Quiz/Html';
import Css from './Components/Quiz/Css';
import Quiz from './Components/Quiz/Quiz';
import { jsQuizz } from './Components/Constants';
import { htmlQuizz } from './Components/HtmlQuestions';
import { cssQuizz } from './Components/CssQuestions';





function App() {
  return (
    <>
    
      <Routes>
        <Route path='/' element={<LandingPage />} />
        <Route path='/Home' element={<Home/>}/>
        <Route path='/Html' element={<Html questions={htmlQuizz.questions}/>} />
        <Route path='/Css' element={<Css questions={cssQuizz.questions}/>} />
        <Route path='/Quiz' element={<Quiz questions={jsQuizz.questions}/>} />
        
      </Routes>
    </>
  );
}

export default App;
