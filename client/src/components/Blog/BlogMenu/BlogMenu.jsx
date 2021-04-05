import React, { Component } from "react";
import BlogCard from "../BlogCard/BlogCard";

import cardImage from "../../../images/IMG_0307-min.jpg";

import "./BlogMenu.css";

const blogText = require("../articleData/prepareHouse.json");

class BlogMenu extends Component {
  render() {
    return (
      <div className="section-blog">
        <BlogCard blogText={blogText} image={cardImage} />
      </div>
    );
  }
}

export default BlogMenu;
