import React from "react";
import "./blogPost.styles.scss";

import { Link } from "react-router-dom";

const BlogPost = ({ post }) => {
  return (
    <Link
      to={{
        pathname: "/blog",
        state: post
      }}
    >
      <div className="post">
        <img src={post.images[0].url} alt="img"></img>
        <h2>{post.title}</h2>
        <p>{post.paragraphs[0].slice(0, 50)} ...</p>
      </div>
    </Link>
  );
};

export default BlogPost;
