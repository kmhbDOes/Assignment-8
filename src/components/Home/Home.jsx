import React, { useEffect, useState } from "react";

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
          <h1>Helllo</h1>
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
