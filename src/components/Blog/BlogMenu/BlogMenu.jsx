import React from "react";
import BlogCard from "../BlogCard/BlogCard";
import { Helmet } from "react-helmet";

import PageHeader from "../../utilities/PageHeader/PageHeader";
import blogFiles from "../articleData";

// import cardImage from "../../../images/IMG_0307.JPG";

import "./BlogMenu.css";

const BlogMenu = () => {
  // Return each blogFiles as a BlogCard.
  const renderBlogCards = () =>
    blogFiles.map(({ title, subtitle, intro, imageName }) => {
      return (
        <BlogCard key={title} {...{ title, subtitle, intro, imageName }} />
      );
    });

  return (
    <div className="section-blog">
      <Helmet>
        <title>Blog. | internn</title>
        <meta
          name="description"
          content="Stay up to date with all the incredible work and hot tips our internn students have to offer whilst taking beautiful property photos for our customers."
        />
      </Helmet>
      <PageHeader title="Blog" subtitle="Keep watch for new posts soon!" />
      <div className="blog-cards">{renderBlogCards()}</div>
    </div>
  );
};

export default BlogMenu;
