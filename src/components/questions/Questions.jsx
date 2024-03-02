import "./questions.css";
import { useState } from "react";

const Questions = ({ obj }) => {
  const [answerDisplay, setAnswerDisplay] = useState(false);

  const toggleAnswerDisplay = () => {
    setAnswerDisplay((prev) => !prev);
  };

  return (
    <div className="fix">
      <div className="question-block">
        {obj?.question}
        <div className="btns">
          {!answerDisplay && (
            <div onClick={toggleAnswerDisplay} className="expand-btn">
              +
            </div>
          )}
          {answerDisplay && (
            <div onClick={toggleAnswerDisplay} className="collapse-btn">
              -
            </div>
          )}
        </div>
      </div>
      {answerDisplay && <p className="answer-block">{obj?.answer}</p>}
    </div>
  );
};

export default Questions;
