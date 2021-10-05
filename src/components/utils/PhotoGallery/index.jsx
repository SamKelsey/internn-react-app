import React from "react";
import "./photoGallery.scss";
import PropertyPhoto from "../PropertyPhoto";

const PhotoGallery = ({ images }) => {
  const createColumns = () => {
    const col1 = [];
    const col2 = [];
    let i = true;

    images.forEach((image) => {
      i ? col1.push(image) : col2.push(image);
      i = !i;
    });

    return [col1, col2];
  };

  const [col1, col2] = createColumns();

  return (
    <div className="photo-gallery">
      <div className="col1">
        {col1.map((image, index) => (
          <PropertyPhoto
            key={index}
            extraClasses="photo-gallery-photo"
            image={image}
          />
        ))}
      </div>
      <div className="col2">
        {col2.map((image, index) => (
          <PropertyPhoto
            key={index}
            extraClasses="photo-gallery-photo"
            image={image}
          />
        ))}
      </div>
    </div>
  );
};

export default PhotoGallery;
