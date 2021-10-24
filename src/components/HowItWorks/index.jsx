import React from "react";
import Card from "../utils/Card/Card";
import "./howItWorks.scss";
const HowItWorks = () => {
  const infoList = [
    {
      icon: "fas fa-calculator",
      title: "Use our price calculator for an instant quote.",
      body: "At internn we are confident we offer pricing that can't be matched. Therefore, we want it to be as clear as possible. Start by getting an instant price with our calculator!",
    },
    {
      icon: "fas fa-calendar-check",
      title: "Make a booking!",
      body: "Our students are flexible with their times, so choose a time that works best for you and get that appointment booked! Make sure to let us know how many rooms you need photographed!",
    },
    {
      icon: "far fa-check-circle",
      title: "We confirm your booking.",
      body: "Once we see your booking we will find an internn who is available for the appointment. After we've got an internn, we will confirm your booking and notify you. This usually takes no more than a day.",
    },
    {
      icon: "fas fa-camera",
      title: "Photo time!",
      body: "Time for the main event! Make sure you're around to let our internn into your property. Then you can relax whilst we photograph the property. This normally takes around 1 hour depending on the property size.",
    },
    {
      icon: "far fa-envelope",
      title: "Receive your photos!",
      body: "We will be hard at work behind the scenes, fine tuning your photos. Once finished, we will deliver them to you digitally via email. Keep an eye on your inbox! This usually takes no more than 7 days from the photoshoot.",
    },
    {
      icon: "far fa-question-circle",
      title: "Got questions?",
      body: "We are always here to help. If you've got any questions at all about how we work or just a general enquiry then please don't hesitate to get in touch via our contact form. We would love to hear from you!",
    },
  ];

  return (
    <div id="how-it-works" className="section-how-it-works">
      <h2>How it works</h2>
      <div className="about-cards">
        {infoList.map(({ icon, title, body }) => (
          <Card
            key={title}
            icon={icon}
            title={title}
            body={body}
            height={300}
          />
        ))}
      </div>
    </div>
  );
};

export default HowItWorks;
