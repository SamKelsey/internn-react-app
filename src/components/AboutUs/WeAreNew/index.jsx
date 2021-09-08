import React from "react";
import SocialIcons from "../../utils/SocialIcons";
import "./weAreNew.scss";
import FadeInSection from "../../utils/FadeInSection";

const WeAreNew = () => {
  return (
    <div className="we-are-new-section">
      <FadeInSection>
        <div className="we-are-new-content">
          <h2>
            We are <span>new!</span>
          </h2>
          <div className="support-us-wrapper">
            <h3>Support us!</h3>
            <p>
              We are a brand new business! We recently opened up in the Aberdeen
              and Aberdeenshire areas and are excited to build our local
              reputation! Being a new, small business is hard. If you could
              follow us on Instagram, Facebook and LinkedIn it would help our
              vision come to life!
            </p>
          </div>
        </div>
        <div className="follow-us-wrapper">
          <h3>Follow us</h3>
          <SocialIcons />
        </div>
      </FadeInSection>
    </div>
  );
};

export default WeAreNew;
