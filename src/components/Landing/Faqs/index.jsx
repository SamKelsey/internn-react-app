import React, { useState } from "react";
import "./faqs.scss";
import Question from "./Question";

const questions = [
  {
    question: "How many rooms do I need?",
    ans: "A room is defined as any area in a property that will require 2 or less photographs (eg. a garage, kitchen, living room or garden). If you are still unsure then get in touch with us using our contact form and we will be happy to help.",
  },
  {
    question: "How long will it take for my booking to be confirmed?",
    ans: "We will aim to confirm your booking within the next 2 working days. You will be notified once your booking is confirmed.",
  },
  {
    question: "Will taking the photographs take a long time?",
    ans: "Not at all! The time needed varies depending on property size, but it usually won't take over an hour.",
  },
];

const Faqs = () => {
  return (
    <div id="faqs" className="section-faqs">
      <h2>FAQ's</h2>
      {questions.map((question, index) => (
        <Question key={index} question={question} />
      ))}
    </div>
  );
};

export default Faqs;
