import React, { useState, useEffect } from "react";
import "./propertyPhoto.scss";
import config from "../../../config";

const PropertyPhoto = ({
  image: { title, noBeds, noBaths, description, image },
  extraClasses,
}) => {
  const [isExpanded, setIsExpanded] = useState(false);

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
            <i className="fas fa-bed"></i>
            <h3>{noBeds}</h3>
          </div>
          <div className="room-stat">
            <i className="fas fa-bath"></i>
            <h3>{noBaths}</h3>
          </div>
        </div>
        <p>{description}</p>
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
