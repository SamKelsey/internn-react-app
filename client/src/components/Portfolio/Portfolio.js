import React, { Component, Fragment } from "react";
import "./portfolio.css";
import { Helmet } from "react-helmet";

import PageHeader from "../utilities/PageHeader/PageHeader";

import IMG_0220 from "../../images/IMG_0220-min.jpg";
import IMG_0244 from "../../images/IMG_0244-min.jpg";
import IMG_0250 from "../../images/IMG_0250-min.jpg";
import IMG_0307 from "../../images/IMG_0307-min.jpg";
import IMG_1161 from "../../images/IMG_1161-min.jpg";
import IMG_1178 from "../../images/IMG_1178-min.jpg";
import IMG_1184 from "../../images/IMG_1184-min.jpg";
import IMG_1193 from "../../images/IMG_1193-min.jpg";
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
        <Helmet>
          <title>internn | Portfolio</title>
        </Helmet>
        <PageHeader
          title="Portfolio"
          subtitle="We love to showcase our work!"
        />
        <div className="row">
          <div id="header-column">
            <img id="header-pic" src={IMG_0307} alt="portfolio" />
          </div>
          {this.state.oneColumn ? (
            <Fragment>
              <div className="column">
                <img src={IMG_1178} alt="portfolio" />
                <img src={IMG_1161} alt="portfolio" />
                <img src={IMG_0555} alt="portfolio" />
                <img src={IMG_0220} alt="portfolio" />
                <img src={IMG_0244} alt="portfolio" />
                <img src={IMG_0250} alt="portfolio" />
                <img src={IMG_1193} alt="portfolio" />
                <img src={IMG_1184} alt="portfolio" />
              </div>
            </Fragment>
          ) : (
            <Fragment>
              <div className="column">
                <img src={IMG_8225} alt="portfolio" />
                <img src={IMG_1178} alt="portfolio" />
                <img src={IMG_0555} alt="portfolio" />
                <img src={IMG_0244} alt="portfolio" />
                <img src={IMG_1193} alt="portfolio" />
                {/* <img src={IMG_0251} /> */}
                {/* <img src={IMG_0246} /> */}
              </div>
              <div className="column">
                <img src={IMG_8256} alt="portfolio" />
                <img src={IMG_1161} alt="portfolio" />
                <img src={IMG_0220} alt="portfolio" />
                <img src={IMG_0250} alt="portfolio" />
                <img src={IMG_1184} alt="portfolio" />
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
