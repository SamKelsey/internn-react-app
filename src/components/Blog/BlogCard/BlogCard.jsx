import React from "react";
import { Link, useRouteMatch } from "react-router-dom";
import TextTruncate from "react-text-truncate";
import "./blogCard.scss";

const BlogCard = ({ title, subtitle, intro, imageName }) => {
  let { url } = useRouteMatch();
  // Remove any trailing slashes from url
  url = url.replace(/\/$/, "");

  const getBlogLink = () =>
    subtitle
      .match(
        /[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g
      )
      .join("-")
      .toLowerCase();

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
          <Link className="post-link" to={`${url}/${getBlogLink()}`}>
            Read post
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
