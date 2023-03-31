import React from "react";

const SideCart = ({ displayTime, handleTitle }) => {
  return (
    <div>
      <div className="w-72 h-14 mx-auto border-4 text-purple-500 font-bold rounded-xl  bg-purple-200">
        Spent Time On read: {displayTime} min
      </div>
      <div className="w-72 mx-auto border-4 rounded-xl shadow-lg bg-slate-200 font-bold   mt-3">
        Bookmarked Blogs: {handleTitle}
      </div>
    </div>
  );
};

export default SideCart;
