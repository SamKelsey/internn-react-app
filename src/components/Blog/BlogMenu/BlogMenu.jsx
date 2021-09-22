import React from "react";
import BlogCard from "../BlogCard/BlogCard";
import { Helmet } from "react-helmet";

import TopTile from "../../utils/TopTile";
import blogFiles from "../articleData";

// import cardImage from "../../../images/IMG_0307.JPG";

import "./BlogMenu.scss";

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
      <TopTile
        image="IMG_0250-lg.jpg"
        title="Blog"
        subtitle="Follow us on our social media to keep up with new posts!"
      />
      <div className="blog-cards">{renderBlogCards()}</div>
    </div>
  );
};

export default BlogMenu;
