import React, { Component } from "react";

class BlogArticle extends Component {
  render() {
    const { title, subtitle, intro, body } = this.props.blogText;
    console.log(body);

    return (
      <div>
        Blog Article
        <h1>{title}</h1>
        <h2>{subtitle}</h2>
        <div>{intro}</div>
        <div>{body[0].header}</div>
        <div>{body[0].content}</div>
      </div>
    );
  }
}

export default BlogArticle;
