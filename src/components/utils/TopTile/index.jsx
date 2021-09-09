import React from "react";
import "./topTile.scss";

import config from "../../../config";

const TopTile = ({ title, subtitle, image }) => {
  const scrollDown = () => {
    window.scrollTo(0, 650);
  };

  return (
    <div
      className="top-tile"
      style={{
        backgroundImage: `linear-gradient(0deg, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(
          ${config["s3-images-url"]}/${image}
        )`,
      }}
    >
      <div className="top-tile-text">
        <h2>{title}</h2>
        <h3>{subtitle}</h3>
      </div>
      <i
        className="fas fa-chevron-down bounce"
        onClick={() => scrollDown()}
      ></i>
    </div>
  );
};

export default TopTile;
