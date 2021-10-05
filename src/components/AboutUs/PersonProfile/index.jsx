import React, { useContext } from "react";
import "./personProfile.scss";
import TopTile from "../../utils/TopTile";
import PersonCard from "../PersonCard";
import { useParams } from "react-router";
import peopleInfo from "../AboutPage/OurTeam/teamInfo";
import { kebabToSentence } from "../../../services/stringServices";
import PhotoGallery from "../../utils/PhotoGallery";
import { scrollToTop } from "../../../services/utils";
import { ImageDataContext } from "../../../contexts/ImageDataContext";

const PersonProfile = () => {
  scrollToTop();

  const { imageData, loading } = useContext(ImageDataContext);
  const name = kebabToSentence(useParams().name);

  const getPersonInfo = () => {
    return peopleInfo.filter((person) => person.name === name)[0];
  };

  const personInfo = getPersonInfo();
  const images = loading
    ? []
    : personInfo.portfolio.map((key) => ({
        image: key,
        title: imageData[key].title,
        description: imageData[key].description,
        noBeds: imageData[key].noBeds,
        noBaths: imageData[key].noBaths,
      }));

  return (
    <div className="section-person-profile">
      <TopTile image="IMG_1472-lg.jpg">
        <PersonCard expanded {...personInfo} />
      </TopTile>
      <h2>Portfolio</h2>
      <PhotoGallery images={images} />
    </div>
  );
};

export default PersonProfile;
