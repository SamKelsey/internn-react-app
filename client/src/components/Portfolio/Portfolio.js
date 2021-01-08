import React, { Component } from "react";
import "./portfolio.css";

import IMG_0217 from "../../images/IMG_0217-min.jpg";
import IMG_0220 from "../../images/IMG_0220-min.jpg";
import IMG_0243 from "../../images/IMG_0243-min.jpg";
import IMG_0244 from "../../images/IMG_0244-min.jpg";
import IMG_0246 from "../../images/IMG_0246-min.jpg";
import IMG_0249 from "../../images/IMG_0249-min.jpg";
import IMG_0250 from "../../images/IMG_0250-min.jpg";
import IMG_0251 from "../../images/IMG_0251-min.jpg";
import IMG_0307 from "../../images/IMG_0307-min.jpg";
import IMG_1161 from "../../images/IMG_1161-min.jpg";
import IMG_1178 from "../../images/IMG_1178-min.jpg";
import IMG_1184 from "../../images/IMG_1184-min.jpg";
import IMG_1193 from "../../images/IMG_1193-min.jpg";
import IMG_1210 from "../../images/IMG_1210-min.jpg";

class Portfolio extends Component {
  render() {
    return (
      <div id="section-portfolio">
        <h1>Our Portfolio...</h1>
        <h2>We love to showcase our work.</h2>

        <div class="row">
          <div class="column">
            <img src={IMG_0251} />
            <img src={IMG_0244} />
            <img src={IMG_0217} />
            <img src={IMG_1161} />
            <img src={IMG_1193} />
            <img src={IMG_0220} />
            <img src={IMG_0249} />
          </div>
          <div class="column">
            <img src={IMG_0307} />
            <img src={IMG_1178} />
            <img src={IMG_0250} />
            <img src={IMG_1184} />
            <img src={IMG_1210} />
            <img src={IMG_0246} />
            <img src={IMG_0243} />
          </div>
        </div>
      </div>
    );
  }
}

export default Portfolio;
