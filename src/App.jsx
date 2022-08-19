import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Input } from "./components/Input";

export const App = () => {
  let navigate = useNavigate();

  return (
    <div className="flex flex-col justify-evenly items-center bg-zinc-900 p-4 h-screen overflow-hidden">
      <h1 className="text-white font-bold text-6xl">Manga App</h1>
      <Input />
    </div>
  );
};
