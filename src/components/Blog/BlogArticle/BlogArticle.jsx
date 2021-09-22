import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet";
import config from "../../../config";
import getBlogInfo from "../getBlogInfo";
import TopTile from "../../utils/TopTile";
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
      <TopTile image={`${imageName}-lg.jpg`}>
        <h1 className="blog-article-header">
          <span>{title}:</span> {subtitle}
        </h1>
      </TopTile>
      <div className="blog-article-content">
        <p>{intro}</p>
        {renderBody(body)}
      </div>
    </div>
  );
};

export default BlogArticle;
