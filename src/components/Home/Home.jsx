import React, { useEffect, useState } from "react";
import Blog from "../Blog/Blog";

const Home = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    fetch("blog-data.json")
      .then((res) => res.json())
      .then((data) => setBlogs(data));
  }, []);
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-28 ">
        <div>
          {blogs.map((blog) => (
            <Blog key={blog.id} blog={blog}></Blog>
          ))}
        </div>
        <div>
          <h1>Blog Details</h1>
          <h2>Bookmarked Blogs: {blogs.length}</h2>
        </div>
      </div>
    </>
  );
};

export default Home;
