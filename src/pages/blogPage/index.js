import React from "react";
import "./blogPage.styles.scss";

const renderBlog = data => {
  const { title, paragraphs, images } = data;

  if (data.data !== null) {
    const blogTitle = React.createElement(
      "h2",
      { key: "title", className: "mb-5 mt-3 text-center" },
      title
    );

    let article = [blogTitle];
    for (let i = 0; i < paragraphs.length; i++) {
      article[i + 1] = React.createElement(
        "p",
        { key: `para${i}` },
        paragraphs[i]
      );
    }

    const fullArticle = renderImages(images, article);

    return fullArticle;
  }
};

const renderImages = (images, article) => {
  let arr = [...article];
  for (let i = 0; i < images.length; i++) {
    let imgPrio = images[i].prio;
    let imgEl = React.createElement("img", {
      key: `img${i}`,
      src: images[i].url
    });
    arr.splice(imgPrio, 0, imgEl);
  }

  const bodyWithImages = React.createElement(
    "div",
    { key: "bodyWithImages" },
    arr
  );

  return bodyWithImages;
};

const BlogPage = props => {
  return <div className="blogPage">{renderBlog(props.location.state)}</div>;
};

export default BlogPage;
