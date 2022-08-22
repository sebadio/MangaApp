import React from "react";
import { Link } from "react-router-dom";
import { Input } from "./Input";

export const NavBar = () => {
  return (
    <nav className="flex w-full gap-8  items-center justify-between p-2 bg-stone-900 shadow-xl">
      <Link to={"/"} className="lg:text-4xl text-2xl text-white font-bold">
        Home
      </Link>
      <Input />
    </nav>
  );
};
