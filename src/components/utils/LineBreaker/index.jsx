import React from "react";
import "./lineBreaker.scss";

const LineBreaker = ({ extraClasses }) => {
  return (
    <div className={`line-breaker ${extraClasses}`}>
      <div></div>
      <i class="fas fa-camera"></i>
      <div></div>
    </div>
  );
};

export default LineBreaker;
