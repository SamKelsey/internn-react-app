import React from "react";
import { Link } from "react-router-dom";
import Slideshow from "../../utils/Slideshow";
import "./topper.scss";
import slideInfo from "./slideInfo.js";
import TopTile from "../../utils/TopTile";

const Topper = () => {
  const getButton = (link, isExternal, text) =>
    isExternal ? (
      <a className="topper-slide-button" href={link}>
        {text}
      </a>
    ) : (
      <Link className="topper-slide-button" to={link}>
        {text}
      </Link>
    );

  return (
    <Slideshow>
      {slideInfo.map(({ text: { line1, line2, line3 }, button, image }) => (
        <TopTile key={line1} image={image} noArrow>
          <div className="topper-slide">
            <div className="topper-slide-text">
              <h2>{line1}</h2>
              <h2>{line2}</h2>
              <h2>{line3}</h2>
            </div>
            {getButton(button.link, button.isExternal, button.text)}
          </div>
        </TopTile>
      ))}
    </Slideshow>
  );
};

export default Topper;
