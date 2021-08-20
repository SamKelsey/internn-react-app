import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet";

import getBlogInfo from "../getBlogInfo";

import "./blogArticle.scss";

const BlogArticle = () => {
  const DESCRIPTION_LENGTH = 160;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  let { articleId } = useParams();

  const { title, subtitle, intro, body, imageName, description } =
    getBlogInfo(articleId);

  const getDescription = () => {
    if (description) {
      return description.substring(0, DESCRIPTION_LENGTH);
    } else {
      return intro.substring(0, DESCRIPTION_LENGTH);
    }
  };

  const renderBody = (body) => {
    return body.map(({ header, content, isNumbered }, index) => {
      return (
        <div key={index}>
          <h2>
            {isNumbered && <span>{index + 1}. </span>}
            {header}
          </h2>
          <p>{content}</p>
        </div>
      );
    });
  };

  return (
    <div className="section-article">
      <Helmet>
        <title>{`${subtitle} | internn`}</title>
        <meta name="description" content={getDescription()} />
      </Helmet>
      <div className="header-wrapper">
        <img
          src={require(`../../../images/${imageName}`).default}
          alt="Article"
        />
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
