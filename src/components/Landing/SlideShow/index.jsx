import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./slideshow.scss";
import slideInfo from "./slideInfo.js";
import TopTile from "../../utils/TopTile";

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

  const getButton = (link, isExternal, text) =>
    isExternal ? <a href={link}>{text}</a> : <Link to={link}>{text}</Link>;

  return (
    <div className="slideshow-container">
      <div className="slides-outer-wrapper">
        <div
          className={"slides-container"}
          style={{
            width: `${slideInfo.length * 100}%`,
            transform: `translate(-${
              (100 / slideInfo.length) * slidePosition
            }%, 0)`,
          }}
        >
          {slideInfo.map(({ text: { line1, line2, line3 }, button, image }) => (
            <TopTile key={line1} image={image} noArrow>
              <div className="slide">
                <div className="slide-text">
                  <h2>{line1}</h2>
                  <h2>{line2}</h2>
                  <h2>{line3}</h2>
                </div>
                {/* Create link generator component to return an a or Link component here. */}
                <button className="slide-button">
                  {getButton(button.link, button.isExternal, button.text)}
                </button>
              </div>
            </TopTile>
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
