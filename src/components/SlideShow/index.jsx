import React, { useState, useEffect } from "react";
import Slide from "./Slide/Slide";
import "./slideshow.scss";
import slideInfo from "./slideInfo.js";

const SlideShow = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      currentSlide == slideInfo.length - 1
        ? setCurrentSlide(0)
        : setCurrentSlide(currentSlide + 1);
    }, 40000);

    return () => clearInterval(timer);
  }, [currentSlide]);
  return (
    <React.Fragment>
      <div className="slideshow-container">
        <div className="slides-outer-wrapper">
          <div className={`slides-container position-${currentSlide}`}>
            {slideInfo.map((slide) => (
              <Slide key={slide.image} slideInfo={slide} />
            ))}
          </div>
        </div>
        <div className="dots">
          {slideInfo.map((_, index) => (
            <span
              className={currentSlide == index ? "dot active" : "dot"}
              onClick={(e) => setCurrentSlide(e.target.getAttribute("name"))}
              name={index}
              key={index}
            ></span>
          ))}
        </div>
      </div>
    </React.Fragment>
  );
};

export default SlideShow;
