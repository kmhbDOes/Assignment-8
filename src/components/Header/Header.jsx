import React from "react";

const Header = () => {
  return (
    <div className="flex justify-between items-center mx-8">
      <h1 className="text-4xl font-bold">Upskill Camp</h1>
      <div className="flex gap-x-4 items-center">
        <a className="font-bold" href="">
          Circular
        </a>
        <a className="font-bold" href="">
          User
        </a>
        <img src="../../../public/client.png" alt="" />
      </div>
    </div>
  );
};

export default Header;
