import React, { Component } from "react";
import "./card.css";

class Card extends Component {
  render() {
    return (
      <div className="about-card">
        <i className={this.props.icon}></i>
        <h1>{this.props.title}</h1>
        <p>{this.props.body}</p>
      </div>
    );
  }
}

export default Card;
