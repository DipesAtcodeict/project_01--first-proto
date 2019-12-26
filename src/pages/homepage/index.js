import React from "react";
import "./homepage.styles.scss";

import BlogPostContainer from "../../components/blogPostContainer";

const HomePage = () => {
  return (
    <div className="posts">
      <BlogPostContainer />
    </div>
  );
};

export default HomePage;
