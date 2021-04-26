import React, { Component } from "react";
import "./card.css";

class Card extends Component {
  render() {
    return (
      <div className="about-card">
        <i className={this.props.icon}></i>
        <h2>{this.props.title}</h2>
        <p>{this.props.body}</p>
      </div>
    );
  }
}

export default Card;
