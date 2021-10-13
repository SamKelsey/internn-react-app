import React, { useContext } from "react";
import "./personProfile.scss";
import TopTile from "../../utils/TopTile";
import PersonCard from "../PersonCard";
import { useParams } from "react-router";
import { kebabToSentence } from "../../../services/stringServices";
import PhotoGallery from "../../utils/PhotoGallery";
import { scrollToTop } from "../../../services/utils";
import { ImageDataContext } from "../../../contexts/ImageDataContext";
import { TeamDataContext } from "../../../contexts/TeamDataContext";

const PersonProfile = () => {
  scrollToTop();

  const name = kebabToSentence(useParams().name);

  const imageContext = useContext(ImageDataContext);
  const peopleContext = useContext(TeamDataContext);

  const personInfo = peopleContext.loading
    ? {}
    : peopleContext.teamData.filter((person) => person.name === name)[0];

  const images = imageContext.loading
    ? []
    : (personInfo.portfolio || []).map((key) => ({
        image: key,
        title: imageContext.imageData[key].title,
        description: imageContext.imageData[key].description,
        noBeds: imageContext.imageData[key].noBeds,
        noBaths: imageContext.imageData[key].noBaths,
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
