import React, { useState } from "react";
import "./faqs.scss";
import Question from "./Question";

const questions = [
  {
    question: "How do I know what a room is?",
    ans: "A room is defined as any area in a property that will require 2 or less photographs. Eg. Garage, kitchen, living room, garden.",
  },
  {
    question:
      "How do I get in touch if I'm unsure about how many rooms I need?",
    ans: "If you have any questions at all then please don't hesitate to contact us using our contact form.",
  },
  {
    question: "How do I know what a room is?",
    ans: "A room is defined as any area in a property that will require 2 or less photographs. Eg. Garage, kitchen, living room, garden.",
  },
];

const Faqs = () => {
  return (
    <div className="section-faqs">
      <h2>FAQ's</h2>
      {questions.map((question) => (
        <Question question={question} />
      ))}
    </div>
  );
};

export default Faqs;
