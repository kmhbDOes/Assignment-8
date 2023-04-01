import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookmark } from "@fortawesome/free-solid-svg-icons";
// import { toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";

const Blog = ({ blog, handleReadTime, handleTitle }) => {
  const { thumbnail, authorName, authorImage, publishDate, readTime, title } =
    blog;
  return (
    <div>
      <p className="mb-10">
        <img className=" rounded-md" src={thumbnail} alt="" />
        <div className="details-section flex justify-between items-center mx-4">
          <div className="info-container flex justify-between gap-x-4 items-center">
            <div className="my-4">
              <img src={authorImage} alt="" />
            </div>
            <div>
              <h2 className="font-bold">{authorName}</h2>
              <h2>{publishDate}</h2>
            </div>
          </div>
          <div className="button-time-container flex-none md:flex gap-x-1 md:gap-x-3">
            <h4>{readTime} min read</h4>
            <button onClick={() => handleTitle(title)}>
              <FontAwesomeIcon icon={faBookmark} />
            </button>
          </div>
        </div>
        <div className="md:text-left">
          <h2 className="text-center md:text-left font-bold text-3xl">
            {title}
          </h2>
          <button
            onClick={() => handleReadTime(readTime)}
            className="underline text-purple-500 items-start my-2"
          >
            Mark as read
          </button>
        </div>
        <hr className="h-4 my-3" />
      </p>
    </div>
  );
};

export default Blog;
