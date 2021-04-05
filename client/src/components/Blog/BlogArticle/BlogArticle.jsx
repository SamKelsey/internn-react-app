import React, { Component } from "react";
import { useParams } from "react-router-dom";

import getBlogInfo from "../../utilities/getBlogInfo";

const BlogArticle = () => {
  let { articleId } = useParams();

  const { title, subtitle, intro, body } = getBlogInfo(articleId);

  return (
    <h1>
      {title}: {subtitle}
    </h1>
  );
};

export default BlogArticle;
