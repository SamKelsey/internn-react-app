import React from "react";
import { HashLink } from "react-router-hash-link";
import "./whyInternn.scss";
import config from "../../config";
import TopTile from "../utils/TopTile";
import FadeInSection from "../utils/FadeInSection";
import Helmet from "react-helmet";

const info = [
  {
    title: "Pricing",
    text: "Here at internn, we are here to gain experience and build our portfolios. Therefore, we don’t require the large salaries of other photographers, allowing us to charge unbeatable prices. This is something that really sets us apart for property owners, as the price barrier to having beautiful photos taken of your property is completely removed. From only £30 you could have pro-level photos taken of your property, that’s hard to beat!",
    image: "IMG_1176_portrait",
    button: {
      text: "Price calculator",
      link: "/#pricing",
    },
  },
  {
    title: "Support local talent",
    text: "We are a local startup that offers great opportunities to students. By booking with us, you’re contributing to supporting local students in kickstarting their dream careers in photography! If this isn’t reason enough, it’s also a great opportunity to support a new local business and we would be hugely grateful to hear from you!",
    image: "IMG_9990_portrait",
    button: {
      text: "Meet the team",
      link: "/about-us/#meet-the-team",
    },
  },
  {
    title: "Simplicity",
    text: "We want property photography to be as simple as booking a haircut! No need to search around to find a reliable photographer, arranging a good date and paying an arm and a leg for your photos. Instead, take 2 minutes to make a booking using our online booking system then just be there on the day to let our student in to take the photographs. We will handle the rest, including payment (we will automatically take payment, only after we’ve photographed your property). Just sit back and relax whilst we edit your photos before sending them to you via email. Simple as that!",
    image: "IMG_2549-HDR",
    button: {
      text: "How it works",
      link: "/about-us/#how-it-works",
    },
  },
];

const WhyInternn = () => {
  const colourThemes = ["white", "red", "grey"];
  let currTheme = 0;
  const getColourTheme = () => {
    let result = colourThemes[currTheme];
    currTheme = currTheme >= 2 ? 0 : currTheme + 1;
    return result;
  };

  return (
    <div className="section-why-internn">
      <Helmet>
        <title>Why internn | internn</title>
        <meta
          name="description"
          content="Beautiful property photos, for a fraction of the price. Get your property noticed with stunning photos, without breaking the bank."
        />
      </Helmet>
      <TopTile
        image="IMG_0307-lg.jpg"
        title="Why internn?"
        subtitle='"Beautiful property photos, for a fraction of the price."'
      />
      {info.map((reason, index) => {
        const colourTheme = getColourTheme();

        return (
          <div
            key={index}
            className={`why-internn-reason-wrapper--${colourTheme} ${
              index % 2 !== 0 && "reverse"
            }`}
          >
            <FadeInSection>
              <div className="why-internn-reason">
                <div className="reason-left">
                  <div className="reason-text">
                    <h2>{reason.title}</h2>
                    <p>{reason.text}</p>
                  </div>
                  <HashLink className="reason-button" to={reason.button.link}>
                    {reason.button.text}
                  </HashLink>
                </div>
                <img
                  src={`${config["s3-images-url"]}/${reason.image}-sm.jpg`}
                  alt="property"
                />
              </div>
            </FadeInSection>
          </div>
        );
      })}
    </div>
  );
};

export default WhyInternn;
