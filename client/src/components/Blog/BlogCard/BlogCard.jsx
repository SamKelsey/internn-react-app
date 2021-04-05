import React, { Component } from "react";
import { Link, useRouteMatch } from "react-router-dom";
import TextTruncate from "react-text-truncate";
import "./blogCard.css";

const BlogCard = ({
  image,
  blogText: { filename, title, subtitle, intro },
}) => {
  let { url } = useRouteMatch();
  // Remove any trailing slashes from url
  url = url.replace(/\/$/, "");

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
          <Link className="post-link" to={`${url}/${filename}`}>
            Read post
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
