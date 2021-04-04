import React, { Component } from "react";
import BlogCard from "./BlogCard/BlogCard";

import cardImage from "../../images/IMG_0307-min.jpg";

const blogText = require("./articleData/prepareHouse.json");

class Blog extends Component {
  render() {
    return (
      <div>
        <BlogCard blogText={blogText} image={cardImage} />
      </div>
    );
  }
}

export default Blog;
