import React from "react";

const SideCart = ({ displayTime, displayTitle }) => {
  return (
    <div>
      <div className=" h-14 w-52 mx-auto border border-purple-400 text-purple-500 font-bold rounded-xl  bg-purple-100">
        Spent Time On read: {displayTime} min
      </div>
      <div className=" mx-auto border-4 rounded-xl shadow-lg bg-slate-200 font-bold  mt-3">
        Bookmarked Blogs: {} <br /> {displayTitle}
        <div>{}</div>
      </div>
    </div>
  );
};

export default SideCart;
