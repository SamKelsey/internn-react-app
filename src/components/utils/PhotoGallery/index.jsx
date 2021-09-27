import React from "react";
import "./photoGallery.scss";
import PropertyPhoto from "../PropertyPhoto";

const PhotoGallery = ({ images }) => {
  const col1 = [];
  const col2 = [];

  images.forEach((image, index) =>
    index % 2 === 0 ? col1.push(image) : col2.push(image)
  );

  return (
    <div className="photo-gallery">
      <div className="col1">
        {col1.map((image) => (
          <PropertyPhoto
            key={image}
            extraClasses="photo-gallery-photo"
            image={image}
          />
        ))}
      </div>
      <div className="col2">
        {col2.map((image) => (
          <PropertyPhoto
            key={image}
            extraClasses="photo-gallery-photo"
            image={image}
          />
        ))}
      </div>
    </div>
  );
};

export default PhotoGallery;
