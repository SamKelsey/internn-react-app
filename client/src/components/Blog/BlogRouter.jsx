import React, { Component } from "react";
import { Route, Switch, useRouteMatch } from "react-router-dom";

import BlogMenu from "./BlogMenu/BlogMenu";
import BlogArticle from "./BlogArticle/BlogArticle";

const BlogRouter = () => {
  let { path, url } = useRouteMatch();

  return (
    <Switch>
      <Route exact path={`${url}/`}>
        <BlogMenu />
      </Route>
      <Route path={`${url}/:articleId`}>
        <BlogArticle />
      </Route>
    </Switch>
  );
};

export default BlogRouter;
