import React, { Component, Fragment } from "react";
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
import IMG_0555 from "../../images/IMG_0555-min.jpg";
import IMG_8225 from "../../images/IMG_8225-min.jpg";
import IMG_8256 from "../../images/IMG_8256-min.jpg";

class Portfolio extends Component {
  constructor(props) {
    super(props);
    this.state = {
      oneColumn: false,
    };
  }

  componentDidMount() {
    window.addEventListener("resize", () => {
      this.handleResize();
    });
    this.handleResize();
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.handleResize);
  }

  handleResize() {
    if (document.documentElement.clientWidth < 800) {
      this.setState({
        oneColumn: true,
      });
    } else {
      this.setState({
        oneColumn: false,
      });
    }
  }

  render() {
    return (
      <div id="section-portfolio">
        <h1>Our Portfolio...</h1>
        <h2>We love to showcase our work.</h2>

        <div className="row">
          <div id="header-column">
            <img id="header-pic" src={IMG_0307} />
          </div>
          {this.state.oneColumn ? (
            <Fragment>
              <div className="column">
                <img src={IMG_1178} />
                <img src={IMG_1161} />
                <img src={IMG_0555} />
                <img src={IMG_0220} />
                <img src={IMG_0244} />
                <img src={IMG_0250} />
                <img src={IMG_1193} />
                <img src={IMG_1184} />
              </div>
            </Fragment>
          ) : (
            <Fragment>
              <div className="column">
                <img src={IMG_8225} />
                <img src={IMG_1178} />
                <img src={IMG_0555} />
                <img src={IMG_0244} />
                <img src={IMG_1193} />
                {/* <img src={IMG_0251} /> */}
                {/* <img src={IMG_0246} /> */}
              </div>
              <div className="column">
                <img src={IMG_8256} />
                <img src={IMG_1161} />
                <img src={IMG_0220} />
                <img src={IMG_0250} />
                <img src={IMG_1184} />
                {/* <img src={IMG_1210} /> */}
                {/* <img src={IMG_0217} /> */}
                {/* <img src={IMG_0249} /> */}
              </div>
            </Fragment>
          )}
        </div>
      </div>
    );
  }
}

export default Portfolio;
