import React, { useState } from "react";
import "./propertyPhoto.scss";
import config from "../../../config";

import info from "./info.json";

const PropertyPhoto = ({ image, extraClasses }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const getImageData = () => {
    return info[image];
  };

  const { title, bio, beds, bathrooms } = getImageData();

  return (
    <div className={`property-photo-wrapper ${extraClasses}`}>
      <div className="property-photo">
        <img src={`${config["s3-images-url"]}/${image}-sm.jpg`} alt={title} />
        <div
          className={`photo-footer ${isExpanded && "photo-footer--inactive"}`}
        >
          <h3>{title}</h3>
          <button
            className="read-button"
            onClick={() => setIsExpanded(!isExpanded)}
          >
            Read more
          </button>
        </div>
      </div>
      <div className={`property-info ${isExpanded && "property-info--active"}`}>
        <h3>{title}</h3>
        <div className="room-stats">
          <div className="room-stat">
            <i class="fas fa-bed"></i>
            <h3>{beds}</h3>
          </div>
          <div className="room-stat">
            <i class="fas fa-bath"></i>
            <h3>{bathrooms}</h3>
          </div>
        </div>
        <p>{bio}</p>
        <button
          className="read-button--dark"
          onClick={() => setIsExpanded(!isExpanded)}
        >
          Read less
        </button>
      </div>
    </div>
  );
};

export default PropertyPhoto;
