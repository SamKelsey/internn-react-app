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
        <h3>
          <span className="question-prefix">Q:</span> {question.question}
        </h3>
        <div className="plus-icon">
          <div></div>
          <div></div>
        </div>
      </div>
      <p className="faqs-answer">
        <span className="question-prefix">A:</span> {question.ans}
      </p>
    </div>
  );
};

export default Question;
