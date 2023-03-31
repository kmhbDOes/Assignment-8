import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookmark } from "@fortawesome/free-solid-svg-icons";

const Blog = ({ blog, handleReadTime }) => {
  const { thumbnail, authorName, authorImage, publishDate, readTime, title } =
    blog;
  return (
    <div>
      <p className="mb-10">
        <img src={thumbnail} alt="" />
        <div className="details-section flex justify-between items-center">
          <div className="info-container flex justify-between gap-x-4 items-center">
            <div className="my-4">
              <img src={authorImage} alt="" />
            </div>
            <div>
              <h2>{authorName}</h2>
              <h2>{publishDate}</h2>
            </div>
          </div>
          <div className="button-time-container flex gap-x-1 md:gap-x-3">
            <h4>{readTime} min read</h4>
            <button onClick={() => handleReadTime(readTime)}>
              <FontAwesomeIcon icon={faBookmark} />
            </button>
          </div>
        </div>
        <div className="">
          <h2 className="text-left font-bold">{title}</h2>
          <button className="underline ">Mark as read</button>
        </div>
      </p>
    </div>
  );
};

export default Blog;
