import React, { Component } from "react";
import { Link } from "react-router-dom";
import TextTruncate from "react-text-truncate";
import "./blogCard.css";

class BlogCard extends Component {
  render() {
    const { title, subtitle, intro } = this.props.blogText;
    const { image } = this.props;

    console.log(this.props.location);

    return (
      <div className="blogCard">
        <div className="image-wrapper">
          <img src={image} alt="Post" />
        </div>
        <div className="text-wrapper">
          <div className="header-wrapper">
            <h1>
              <span>{title}:</span> {subtitle}
            </h1>
          </div>
          <div className="p-wrapper">
            <TextTruncate line={3} element="p" text={intro} />
          </div>
          <div className="button-wrapper">
            <Link className="post-link" to={`blog/${title}`}>
              Read post
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default BlogCard;
