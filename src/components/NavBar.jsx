import React from "react";
import { Link } from "react-router-dom";
import { Input } from "./Input";

export const NavBar = () => {
  return (
    <nav className="flex w-full gap-8  items-center justify-between p-2 bg-stone-900 shadow-xl">
      <div className="flex gap-2 justify-center items-baseline">
        <Link
          to={"/"}
          className="lg:text-4xl lg:ml-4 text-2xl text-white font-bold"
        >
          Home
        </Link>
        <Link
          to={"/library"}
          className="lg:text-xl lg:ml-4 text-2xl text-white font-bold"
        >
          Library
        </Link>
      </div>

      <Input />
    </nav>
  );
};
