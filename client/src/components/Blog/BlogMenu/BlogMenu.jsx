import React, { Component } from "react";
import BlogCard from "../BlogCard/BlogCard";

import PageHeader from "../../utilities/PageHeader/PageHeader";

import cardImage from "../../../images/IMG_0307-min.jpg";

import "./BlogMenu.css";

const BlogMenu = () => {
  const blogText = require("../articleData/prepare-your-property.json");
  return (
    <div className="section-blog">
      <PageHeader title="Blog" subtitle="Keep watch for new posts soon!" />
      <div className="blog-cards">
        <BlogCard blogText={blogText} image={cardImage} />
      </div>
    </div>
  );
};

export default BlogMenu;
