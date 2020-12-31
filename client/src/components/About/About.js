import React from "react";
import { Link } from "react-router-dom";
import "./about.css";
import logo from "../../images/white_orginal_design_withSlogan.png";
import stockPicture from "../../images/stock-pic.jpg";

class About extends React.Component {
  render() {
    return (
      <div id="about-us" className="about-us">
        <div className="content-wrapper">
          <div className="left-side">
            <div className="about-us-text">
              <h3>What we do...</h3>
              <p>
                At <span className="para-logo">internn</span>, we{" "}
                <span>think Students.</span>
              </p>
              <p>
                We are a <span>team of students</span>, based in{" "}
                <span>Aberdeen</span>, offering outstanding{" "}
                <span>property photography</span>, for a{" "}
                <span>fraction of the price!</span>
              </p>
              <p>
                <span>Unsure about pricing?</span> <br />
                Get an instant price using our price calculator below! As
                students, we don't rely on large salaries and instead just love
                photography and the experience! Therefore, we can offer market
                leading prices.
              </p>
              <p>
                <span>Unsure about quality?</span> <br />
                Seeing is believing, so check out our{" "}
                <Link to="/portfolio">portfolio of work!</Link> Still not
                convinced? Rest assured, all internn's receive a high standard
                of training before working independently on client site. This
                way, our internn's can take time to perfect their skills in a
                supportive environment before capturing your dream property
                images.
              </p>
            </div>
          </div>
          <div className="right">
            <img id="about-logo" src={logo} />
            <img id="stock-img" src={stockPicture} />
          </div>
        </div>
      </div>
    );
  }
}

export default About;
