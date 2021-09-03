import React from "react";
import TopTile from "../TopTile";
import "./aboutUs.scss";
import config from "../../config";

const AboutUs = () => {
  return (
    <div className="about-us-page">
      <TopTile
        title="About us"
        subtitle='"Rethinking property photography, starting in Aberdeen."'
        image="IMG_0220.JPG"
      />
      <div className="about-content">
        <p>
          We provide top quality property photographs at unheard of prices. We
          are here for landlords, AirBnB owners, home sellers or anyone who has
          a property they are looking to get some top notch photographs for,
          without breaking the bank! Alongside property owners, internn is here
          for students. We believe that students can provide huge value, this is
          what sets us apart. As such, all our property photographs are taken by
          students who are either looking to gain experience to kickstart their
          careers in photography or are eager to earn some money whilst at
          university, using their hobby.
        </p>
        <div className="image-wrapper">
          <img src={`${config["s3-images-url"]}/IMG_0220.JPG`} />
        </div>
        <h2>We are new!</h2>
        <p>
          We are a brand new business! We recently opened up in the Aberdeen and
          Aberdeenshire areas and are excited to build our local reputation!
          Being a new, small business is hard. If you could follow us on
          Instagram, Facebook and LinkedIn it would help our vision come to
          life!
        </p>
      </div>
    </div>
  );
};

export default AboutUs;
