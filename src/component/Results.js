import React from 'react';

const Results = props => {
  return (
    <div id="result-summary">
      <p>
        You got <strong>{props.score}</strong> out of{' '}
        <strong>{props.totalNumOfQs}</strong> questions right
      </p>
      <p>Good job</p>
      {
        props?.val==undefined?"":<button className="next-btn" onClick={props.nextQuizHandler}>
        Next Quiz
      </button>
      }
      
    </div>
  );
};

export default Results;
