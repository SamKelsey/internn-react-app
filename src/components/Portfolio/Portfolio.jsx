import React, { useContext } from "react";
import "./portfolio.scss";
import { Helmet } from "react-helmet";
import TopTile from "../utils/TopTile";
import PhotoGallery from "../utils/PhotoGallery";
import { scrollToTop } from "../../services/utils";
import { ImageDataContext } from "../../contexts/ImageDataContext";

const portfolioImageNames = [
  "IMG_2832-HDR-2",
  "IMG_2825-HDR",
  "IMG_0111",
  "IMG_0244",
  "IMG_0250",
  "IMG_0251",
  "IMG_0307",
  "IMG_1161",
  "IMG_1176_portrait",
  "IMG_1178",
  "IMG_1463",
  "IMG_1472",
  "IMG_1496-2",
  "IMG_2461",
  "IMG_2471-HDR",
  "IMG_2502-HDR",
  "IMG_2512-HDR",
  "IMG_2530-HDR",
  "IMG_2549-HDR",
  "IMG_2571-HDR",
  "IMG_2676-HDR",
  "IMG_2706-HDR",
  "IMG_2709-HDR",
  "IMG_2766-HDR",
  "IMG_7596",
  "IMG_8256",
  "IMG_9990_portrait",
];

const Portfolio = () => {
  scrollToTop();

  const { imageData, loading } = useContext(ImageDataContext);

  const portfolioImages = loading
    ? []
    : portfolioImageNames.map((key) => {
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
