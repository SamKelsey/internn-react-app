import React from "react";
import "./topTile.scss";

import config from "../../../config";

const TopTile = ({ title, subtitle, image, noArrow, ...props }) => {
  const scrollDown = () => {
    window.scrollTo(0, 650);
  };

  const renderHeaders = () => (
    <div className="top-tile-text">
      {title && <h2>{title}</h2>}
      {subtitle && <h3>{subtitle}</h3>}
    </div>
  );

  const renderChildren = () => props.children;

  return (
    <div
      className="top-tile"
      style={{
        backgroundImage: `linear-gradient(0deg, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(
          ${config["s3-images-url"]}/${image}
        )`,
      }}
    >
      {title || subtitle ? renderHeaders() : renderChildren()}
      {noArrow ? (
        ""
      ) : (
        <i
          className="fas fa-chevron-down bounce"
          onClick={() => scrollDown()}
        ></i>
      )}
    </div>
  );
};

export default TopTile;
