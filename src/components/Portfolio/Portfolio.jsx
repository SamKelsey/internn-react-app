import React from "react";
import "./portfolio.scss";
import { Helmet } from "react-helmet";
import TopTile from "../utils/TopTile";
import PhotoGallery from "../utils/PhotoGallery";
import { scrollToTop } from "../../services/utils";

const portfolioImages = [
  "IMG_1176_portrait",
  "IMG_1472",
  "IMG_1472",
  "IMG_1176_portrait",
  "IMG_1472",
];

const Portfolio = () => {
  scrollToTop();

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
