import React from 'react';

const ProgressBar = props => {
  const questionsLeft = props.totalNumOfQs - (props.score + props.numIncorrect);
console.log(questionsLeft);
  console.log(props.score,"mmmmm ");

  const divStyle = {
    display: 'grid',
    gridTemplateColumns: `${props.score}fr ${
      props.numIncorrect
    }fr ${questionsLeft}fr`,
  };

  return (
    <div style={divStyle} className="progress-bar">
      <div className="green">
        {props.score ? (
          <span role="img" aria-label="check-mark-button-emoji">
          </span>
        ) : null}
      </div>
      <div className="red">
        {props.numIncorrect ? (
          <span role="img" aria-label="slightly-frowning-face-emoji">
          </span>
        ) : null}
      </div>
    </div>
  );
};

export default ProgressBar;
