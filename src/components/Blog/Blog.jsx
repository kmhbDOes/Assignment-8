import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookmark, faCoffee } from "@fortawesome/free-solid-svg-icons";

const Blog = (props) => {
  const { thumbnail, authorName, authorImage, publishDate, readTime } =
    props.blog;
  return (
    <div>
      <p className="my-4">
        <img src={thumbnail} alt="" />
        <div className="details-section">
          <div>
            <div className="flex">
              <img src={authorImage} alt="" />
            </div>
            <div>
              <h2>{authorName}</h2>
              <h2>{publishDate}</h2>
            </div>
          </div>
          <div>
            <h4>{readTime}</h4>
            <button>
              <FontAwesomeIcon icon={faBookmark} />
            </button>
          </div>
        </div>
      </p>
    </div>
  );
};

export default Blog;
