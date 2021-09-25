import React, { useState, useEffect } from "react";
import Slide from "./Slide/Slide";
import "./slideshow.scss";
import slideInfo from "./slideInfo.js";

const SlideShow = () => {
  const [slidePosition, setSlidePosition] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      slidePosition == slideInfo.length - 1
        ? setSlidePosition(0)
        : setSlidePosition(slidePosition + 1);
    }, 4000);

    return () => clearInterval(timer);
  }, [slidePosition]);

  return (
    <div className="slideshow-container">
      <div className="slides-outer-wrapper">
        <div
          className={"slides-container"}
          style={{
            width: `${slideInfo.length * 100}%`,
            transform: `translate(-${(100 / slideInfo.length) * slidePosition
              }%, 0)`,
          }}
        >
          {slideInfo.map((slide) => (
            <Slide key={slide.image} slideInfo={slide} />
          ))}
        </div>
      </div>
      <div className="dots">
        {slideInfo.map((_, index) => (
          <span
            className={slidePosition == index ? "dot active" : "dot"}
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

export default SlideShow;
