import React, { Component } from "react";
import "./joinUs.css";

import PageHeader from "../utilities/PageHeader/PageHeader";

class JoinUs extends Component {
  render() {
    return (
      <div className="section-text">
        <PageHeader
          title="Join the team!"
          subtitle="We are looking for talented students."
        />
        <p>
          Here at <span>internn</span> we always love to hear from new talent.
          If you're an aspiring photographer, eager to build client experience
          and an impressionable portfolio, then be sure to get in touch with us
          using the contact form. We're excited to hear from you!
        </p>
      </div>
    );
  }
}

export default JoinUs;
