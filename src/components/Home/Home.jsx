import React, { useEffect, useState } from "react";
import Blog from "../Blog/Blog";
import SideCart from "../SideCart/SideCart";

const Home = ({ handleReadTime, handleTitle }) => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    fetch("blog-data.json")
      .then((res) => res.json())
      .then((data) => setBlogs(data));
  }, []);
  return (
    <>
      <div className="my-2">
        <div className="w-full">
          {blogs.map((blog) => (
            <Blog
              key={blog.id}
              handleReadTime={handleReadTime}
              handleTitle={handleTitle}
              blog={blog}
            ></Blog>
          ))}
        </div>
      </div>
    </>
  );
};

export default Home;
