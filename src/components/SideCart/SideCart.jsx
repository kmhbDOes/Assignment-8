import React from "react";

const SideCart = ({ displayTime, bookmarkedBlogs }) => {
  return (
    <div className="mx-auto">
      <div className="h-14 w-52 mx-auto border border-purple-400 text-purple-500 font-bold rounded-xl bg-purple-100">
        Spent Time On read: {displayTime} min
      </div>
      <div className=" mx-auto border-4 rounded-xl shadow-lg w-52 bg-slate-200 font-bold my-3">
        <div>
          <h1 className="px-8 place-items-center">
            Bookmarked Blogs: {bookmarkedBlogs.length}
          </h1>
          <ul className="text-center">
            {bookmarkedBlogs &&
              bookmarkedBlogs.map((title) => (
                <li className="px-8" key={title}>
                  {title}
                </li>
              ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SideCart;
