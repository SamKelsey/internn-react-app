import React, { useState } from "react";
import "./question.scss";

const Question = ({ question }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className={`faqs-question-wrapper${isOpen ? "--active" : ""}`}
      onClick={() => setIsOpen(!isOpen)}
    >
      <div className="faqs-question">
        <div className="question-text">
          <h3 className="question-prefix">Q:</h3>
          <h3>{question.question}</h3>
        </div>
        <div className="plus-icon">
          <div></div>
          <div></div>
        </div>
      </div>
      <div className="faqs-answer">
        <p className="question-prefix">A:</p>
        <p className="question-answer">{question.ans}</p>
      </div>
    </div>
  );
};

export default Question;
