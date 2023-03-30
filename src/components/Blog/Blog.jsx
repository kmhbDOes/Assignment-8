import React from "react";

const Blog = (props) => {
  const { thumbnail, authorName } = props.blog;
  return (
    <div>
      <p className="my-4">
        <img src={thumbnail} alt="" />
      </p>
    </div>
  );
};

export default Blog;
