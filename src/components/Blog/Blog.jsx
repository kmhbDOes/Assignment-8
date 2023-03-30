import React from "react";

const Blog = (props) => {
  const { thumbnail, authorName, authorImage, publishDate } = props.blog;
  return (
    <div>
      <p className="my-4">
        <img src={thumbnail} alt="" />
        <div>
          <div>
            <div className="flex ">
              <img src={authorImage} alt="" />
            </div>
            <div>
              <h2>{authorName}</h2>
              <h2>{publishDate}</h2>
            </div>
          </div>
          <div></div>
        </div>
      </p>
    </div>
  );
};

export default Blog;
