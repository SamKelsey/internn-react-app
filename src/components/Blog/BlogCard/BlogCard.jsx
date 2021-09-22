import React from "react";
import { Link, useRouteMatch } from "react-router-dom";
import TextTruncate from "react-text-truncate";
import { toKebabCase } from "../../../services/stringServices";
import "./blogCard.scss";
import config from "../../../config";

const BlogCard = ({ title, subtitle, intro, imageName }) => {
  let { url } = useRouteMatch();

  return (
    <div className="blog-card">
      <div
        className="blog-image"
        style={{
          backgroundImage: `url(${config["s3-images-url"]}/${imageName}-md.jpg)`,
        }}
      ></div>
      <div className="blog-text-wrapper">
        <h2>
          <span>{title}:</span> {subtitle}
        </h2>
        <div className="p-wrapper">
          <p>{intro}</p>
        </div>
        <div className="post-button-wrapper">
          <Link className="post-link" to={`${url}/${toKebabCase(subtitle)}`}>
            Read post
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
