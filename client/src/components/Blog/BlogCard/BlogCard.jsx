import React, { Component } from "react";
import TextTruncate from "react-text-truncate";
import "./blogCard.css";

class BlogCard extends Component {
  render() {
    const { title, subtitle, intro } = this.props.blogText;
    const image = this.props.image;

    return (
      <div className="blogCard">
        <div className="image-wrapper">
          <img src={image} alt="Post" />
        </div>
        <div className="text-wrapper">
          <h1>
            <span>{title}:</span> {subtitle}
          </h1>
          <TextTruncate line={4} element="p" text={intro} />
          <button>Read post</button>
        </div>
      </div>
    );
  }
}

export default BlogCard;
