import React from "react";
import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet";

import getBlogInfo from "../../utilities/getBlogInfo";
import cardImage from "../../../images/IMG_0307.JPG";

import "./blogArticle.css";

const renderBody = (body) => {
  return body.map(({ header, content }) => {
    return (
      <React.Fragment>
        <h2>{header}</h2>
        <p>{content}</p>
      </React.Fragment>
    );
  });
};

const BlogArticle = () => {
  let { articleId } = useParams();
  const { title, subtitle, intro, body } = getBlogInfo(articleId);

  console.log(body);

  return (
    <div className="section-article">
      <Helmet>
        <link
          rel="canonical"
          href="https://www.internn.co.uk/blog/prepare-your-property"
        />
      </Helmet>
      <div className="header-wrapper">
        <img src={cardImage} alt="Article" />
        <h1>
          <span>{title}:</span> {subtitle}
        </h1>
      </div>
      <div className="content-wrapper">
        <p>{intro}</p>
        {renderBody(body)}
      </div>
    </div>
  );
};

export default BlogArticle;
