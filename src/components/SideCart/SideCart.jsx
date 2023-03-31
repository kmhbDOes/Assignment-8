import React from "react";

const SideCart = ({ displayTime }) => {
  return (
    <div>
      <div className="w-72 h-14 mx-auto border-4 text-purple-500 rounded-xl  bg-purple-200">
        Spent Time On read: {displayTime}
      </div>
      <div className="w-72 mx-auto border-4 rounded-xl shadow-lg mt-3">
        Bookmarked Blogs: {}
      </div>
    </div>
  );
};

export default SideCart;
