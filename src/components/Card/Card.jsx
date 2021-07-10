import React, { Component } from "react";
import "./card.css";

class Card extends Component {
  render() {
    const { icon, title, body, height } = this.props;

    return (
      <div className="about-card" style={{ height: height }}>
        <i className={icon}></i>
        <h2>{title}</h2>
        <p>{body}</p>
      </div>
    );
  }
}

export default Card;
