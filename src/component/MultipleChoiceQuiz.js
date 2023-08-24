import React, { useState, useEffect } from 'react';
import { Quizzes } from '../Quizzes';
import { shuffleOrder } from '../utils/Utils';
import ReactStars from "react-rating-stars-component";
import '../styles.css';

import Question from './Questions';
import Result from './Results';
import ProgressBar from './ProgressBar';

function MultipleChoiceQuiz() {
  const [currentQuiz, setCurrentQuiz] = useState(0);
  const [numOfQuestions, setNumOfQuestions] = useState(0);
  const [score, setScore] = useState(0);
  const [resultSummary, setResultSummary] = useState(false);
  const [animation, setAnimation] = useState(false);
  const [numIncorrect, setNumIncorrect] = useState(0);
const [shuffledAnswerChoices,setShuffledAnswerChoices]=useState([])
const [valTrue,setValTrue]=useState(false)
const [rete, setRate] = useState(0);


console.log(shuffledAnswerChoices,"shuffledAnswerChoices");
  useEffect(() => {
    if (!animation) {
      setAnimation('multiple-choices');
      setTimeout(() => {
        setAnimation(false);
      }, 350);
    } else {
      setAnimation(false);
    }
  },[]);

  const handleNextQuestion = (answer) => {
    console.log(answer,"answer");
    const newScore = answer ? score + 1 : score;
    setScore(newScore);
  
    setNumOfQuestions(numOfQuestions + 1);

    if (numOfQuestions === Quizzes[currentQuiz].questions.length - 1) {
      setResultSummary(true);
    }
  };

  const handleNextQuiz = () => {
    if (currentQuiz + 1 === Quizzes.length) {
      setCurrentQuiz(0);
    } else {
      setCurrentQuiz(currentQuiz + 1);
    }

    setResultSummary(false);
    setNumOfQuestions(0);
    setScore(0);
    setNumIncorrect(0);
  };

  const { title, questions } = Quizzes[currentQuiz];
  const currentQuestion = questions[numOfQuestions];
  console.log(currentQuestion,"currentQuestion");


 useEffect(()=>{
   setShuffledAnswerChoices( shuffleOrder([
    ...currentQuestion?.incorrectAnswers,
    currentQuestion?.correctAnswer,
  ]))
  },[currentQuestion])
console.log(resultSummary,"resultSummary");
  return (
    <div className="container">
      <ProgressBar
        score={score}
        numIncorrect={numIncorrect}
        totalNumOfQs={questions.length}
      />
      <h1>{title + " " + (currentQuestion?.value==undefined?3:currentQuestion?.value) + " " + "of" + " " + questions.length}</h1>
    {
      currentQuestion?.value==1&& <ReactStars
      count={5}
      size={24}
      edit={false}
      value={1}
      activeColor="#ffd700"
    />
    }
       {
      currentQuestion?.value==2&& <ReactStars
      count={5}
      size={24}
      edit={false}
      value={2}
      activeColor="#ffd700"
    />
    }
      {
      currentQuestion?.value==3&& <ReactStars
      count={5}
      size={24}
      edit={false}
      value={3}
      activeColor="#ffd700"
    />
    }
      {resultSummary ? (
        <Result
          score={score}
          numOfQuestions={numOfQuestions}
          nextQuizHandler={handleNextQuiz}
          totalNumOfQs={questions.length}
          val={currentQuestion?.value}
        />
      ) : (
        <Question
          currentQuestion={currentQuestion}
          shuffledAnswerChoices={shuffledAnswerChoices}
          nextQuestionHandler={handleNextQuestion}
          animation={animation}
        />
      )}
    </div>
  );
}

export default MultipleChoiceQuiz;
