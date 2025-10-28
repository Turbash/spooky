import React from "react";

const Navbar = () => {
  return (
    <div className="w-full absolute inset-0 z-10">
      <div className="container flex justify-between items-center py-7">
        <a href="" className="font-semibold text-2xl">
          Rupz Web
        </a>
        <ul className="flex items-center gap-12">
          <li>
            <a href="">About</a>
          </li>
          <li>
            <a href="">Demo</a>
          </li>
          <li>
            <a
              href=""
              className="text-orange px-5 py-2 border-2 bg-transparent border-orange rounded-full font-semibold hover:bg-orange hover:text-white transition"
            >
              Code Repo
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
