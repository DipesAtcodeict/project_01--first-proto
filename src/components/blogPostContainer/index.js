import React, { useState, useEffect } from "react";
import "./blogPostContainer.styles.scss";

import axios from "axios";

import BlogPost from "../blogPost";

const renderBlogs = posts => {
  if (posts) {
    return posts.map(post => {
      return <BlogPost post={post} key={post.id} />;
    });
  }
};

const BlogPostContainer = () => {
  const [posts, setPosts] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get("http://localhost:3000/data");
      setPosts(result.data);
    };
    fetchData();
  }, []);

  return <div className="blogContainer style-4">{renderBlogs(posts)}</div>;
};

export default BlogPostContainer;
