import React, { useState, useEffect } from "react";
import "./slideshow.scss";

const Slideshow = ({ children }) => {
  const [slidePosition, setSlidePosition] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      slidePosition === children.length - 1
        ? setSlidePosition(0)
        : setSlidePosition(slidePosition + 1);
    }, 4000);

    return () => clearInterval(timer);
  }, [slidePosition, children.length]);

  return (
    <div className="slideshow-container">
      <div className="slides-outer-wrapper">
        <div
          className={"slides-container"}
          style={{
            width: `${children.length * 100}%`,
            transform: `translate(-${
              (100 / children.length) * slidePosition
            }%, 0)`,
          }}
        >
          {children}
        </div>
      </div>
      <div className="dots">
        {children.map((_, index) => (
          <span
            className={slidePosition === index ? "dot active" : "dot"}
            onClick={(e) =>
              setSlidePosition(parseInt(e.target.getAttribute("name")))
            }
            name={index}
            key={index}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default Slideshow;
