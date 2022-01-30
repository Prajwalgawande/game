import React,{useState} from 'react';
import './App.css';
import Footer from './Components/Footer';
import Lastpage from './Components/Lastpage';
import Frontpage from './Components/Frontpage'
import Score from './Components/Score'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const App = () => {
  const [score, setscore] = useState(isNaN(localStorage.getItem("score"))?0:localStorage.getItem('score'));
  const [choice, setchoice] = useState('rock');
  return (
    
    <Router>
      <Score score={score}/>
      <Routes>
        <Route path="/" element={<Frontpage setchoice={setchoice} />}/>
      <Route path="/Result" element={<Lastpage setscore={setscore}  score={score} choice={choice}/>}/>
      </Routes>
      <Footer/>
      </Router>
    )
    ;
};

export default App;

