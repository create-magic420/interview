import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import MultipleChoiceQuiz from './component/MultipleChoiceQuiz';
import './styles.css';
function App() {

  const [counter,setCounter]=useState(0)

  

  return (
  
  <div className="app">
      <MultipleChoiceQuiz />
    </div>
    
  );
}

export default App;
