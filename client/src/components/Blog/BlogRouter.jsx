import React, { Component } from "react";
import { Route } from "react-router-dom";

import BlogMenu from "./BlogMenu/BlogMenu";
import BlogArticle from "./BlogArticle/BlogArticle";

class BlogRouter extends Component {
  render() {
    const { match } = this.props;
    console.log(match);

    return (
      <React.Fragment>
        <Route exact path={`${match.url}/`} component={BlogMenu} />
        <Route path={`${match.url}/:articleFile`} component={BlogArticle} />
      </React.Fragment>
    );
  }
}

export default BlogRouter;
