import React, { useContext } from "react";
import "./portfolio.scss";
import { Helmet } from "react-helmet";
import TopTile from "../utils/TopTile";
import PhotoGallery from "../utils/PhotoGallery";
import { scrollToTop } from "../../services/utils";
import { ImageDataContext } from "../../contexts/ImageDataContext";

const Portfolio = () => {
  scrollToTop();

  const { imageData, loading } = useContext(ImageDataContext);

  const portfolioImages = loading
    ? []
    : Object.keys(imageData).map((key) => {
        return {
          image: key,
          title: imageData[key].title,
          description: imageData[key].description,
          noBeds: imageData[key].noBeds,
          noBaths: imageData[key].noBaths,
        };
      });

  return (
    <div className="section-portfolio">
      <Helmet>
        <title>Portfolio | internn</title>
        <meta
          name="description"
          content="Seeing is believing. View our portfolio of property photographs taken by our incredible student photographers. Stunning, low-cost photographs."
        />
      </Helmet>
      <TopTile
        image="IMG_2471-HDR-lg.jpg"
        title="Portfolio"
        subtitle='"Our quality speaks for itself"'
      />
      <PhotoGallery images={portfolioImages} />
    </div>
  );
};

export default Portfolio;
