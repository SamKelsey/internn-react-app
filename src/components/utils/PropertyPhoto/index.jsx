import React, { useState } from "react";
import "./propertyPhoto.scss";
import config from "../../../config";

import info from "./info.json";

const PropertyPhoto = ({ image }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const getImageData = (image) => {
    return info.IMG_1472;
  };

  const { title, bio, beds, bathrooms } = getImageData(image);

  return (
    <div className="property-photo-wrapper">
      <div className="property-photo">
        <img src={`${config["s3-images-url"]}/${image}-sm.jpg`} alt={title} />
        <div className="photo-footer">
          <h3>1 bed flat, Peterculter</h3>
          <button onClick={() => setIsExpanded(!isExpanded)}>Read more</button>
        </div>
      </div>
      <div className="property-info">Property info here</div>
    </div>
  );
};

export default PropertyPhoto;
