import React, { useEffect, useState } from "react";
import Blog from "../Blog/Blog";
import SideCart from "../SideCart/SideCart";

const Home = ({ handleReadTime }) => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    fetch("blog-data.json")
      .then((res) => res.json())
      .then((data) => setBlogs(data));
  }, []);
  return (
    <>
      <div className="grid grid-cols-1 my-2">
        <div className="w-full">
          {blogs.map((blog) => (
            <Blog
              key={blog.id}
              handleReadTime={handleReadTime}
              blog={blog}
            ></Blog>
          ))}
        </div>
        {/* <div className="w-72 mx-auto border-4 rounded-xl shadow-lg">
          <SideCart></SideCart>
          <h2 className="mt-3"></h2>
          <h2 className="mt-3">Bookmarked Blogs: {blogs.length}</h2>
        </div> */}
      </div>
    </>
  );
};

export default Home;
