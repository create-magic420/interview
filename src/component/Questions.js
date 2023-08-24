import React, { useState } from 'react';

import '../styles.css';


const Question=(props)=>{

  const[state,setState]=useState( {
    pick: false,
    correct: false,
  })
  const isGreenOrRed = pick => {
    if (pick === state.pick) {
      return state.correct ? 'correct' : 'incorrect';
    } else if (
      pick === !state.correct &&
      props.currentQuestion.correctAnswer
    ) {
      return 'correct';
    } else {
      return 'clear';
    }
  };

  const handleSelect = pick => {
    if (pick === props.currentQuestion.correctAnswer) {
      setState({ pick, correct: true });
    } else {
      setState({ pick });
    }
  };

  const moveToNextQuestion = () => {
    setState({ pick: false, correct: false });
    props.nextQuestionHandler(state.correct);
  };


  const { currentQuestion, shuffledAnswerChoices } = props;

  return (
    <div className={props.animation ? props.animation : null}>
      <p>{currentQuestion.text}</p>
      <ol type="A">
        {shuffledAnswerChoices.map((pick, idx) => {
          return (
            <li
              key={idx}
              className={state.pick ? isGreenOrRed(pick) : null}
              onClick={() => handleSelect(pick)}
            >
              {pick}
            </li>
          );
        })}
      </ol>
      {state.pick && (
        <div>
          {state.correct ? (
            <p>
              <i>Correct!</i>
            </p>
          ) : (
            <p>
              <i>Incorrect...</i>
            </p>
          )}
          <button className="next-btn" onClick={moveToNextQuestion}>
            Next Question
          </button>
        </div>
      )}
    </div>
  );
}


// class Question extends React.Component {
//   state = {
//     pick: false,
//     correct: false,
//   };

//   isGreenOrRed = pick => {
//     if (pick === this.state.pick) {
//       return this.state.correct ? 'correct' : 'incorrect';
//     } else if (
//       pick === !this.state.correct &&
//       this.props.currentQuestion.correctAnswer
//     ) {
//       return 'correct';
//     } else {
//       return 'clear';
//     }
//   };

//   handleSelect = pick => {
//     if (pick === this.props.currentQuestion.correctAnswer) {
//       this.setState({ pick, correct: true });
//     } else {
//       this.setState({ pick });
//     }
//   };

//   moveToNextQuestion = () => {
//     this.setState({ pick: false, correct: false });
//     this.props.nextQuestionHandler(this.state.correct);
//   };

//   render() {
//     const { currentQuestion, shuffledAnswerChoices } = this.props;

//     return (
//       <div className={this.props.animation ? this.props.animation : null}>
//         <p>{currentQuestion.text}</p>
//         <ol type="A">
//           {shuffledAnswerChoices.map((pick, idx) => {
//             return (
//               <li
//                 key={idx}
//                 className={this.state.pick ? this.isGreenOrRed(pick) : null}
//                 onClick={() => this.handleSelect(pick)}
//               >
//                 {pick}
//               </li>
//             );
//           })}
//         </ol>
//         {this.state.pick && (
//           <div>
//             {this.state.correct ? (
//               <p>
//                 <i>Correct!</i>
//               </p>
//             ) : (
//               <p>
//                 <i>Incorrect...</i>
//               </p>
//             )}
//             <button className="next-btn" onClick={this.moveToNextQuestion}>
//               Next
//             </button>
//           </div>
//         )}
//       </div>
//     );
//   }
// }

export default Question;
