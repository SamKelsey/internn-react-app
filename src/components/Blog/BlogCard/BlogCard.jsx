import React from "react";
import { Link, useRouteMatch } from "react-router-dom";
import TextTruncate from "react-text-truncate";
import { toKebabCase } from "../../../services/stringServices";
import "./blogCard.scss";

const BlogCard = ({ title, subtitle, intro, imageName }) => {
  let { url } = useRouteMatch();

  return (
    <div className="blogCard">
      <div className="image-wrapper">
        <img src={require(`../../../images/${imageName}`).default} alt="Post" />
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
          <Link className="post-link" to={`${url}/${toKebabCase(subtitle)}`}>
            Read post
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
