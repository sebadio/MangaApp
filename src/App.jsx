import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Input } from "./components/Input";
import { LibraryItem } from "./components/LibraryItem";

export const App = () => {
  let navigate = useNavigate();

  const library = JSON.parse(localStorage.getItem("library"));

  return (
    <>
      <div className="flex h-full justify-center items-center overflow-auto">
        {!library ? (
          <h2 className="text-white">
            Your library will appear here! Try searching some manga in the upper
            right corner.
          </h2>
        ) : (
          <div className="flex flex-wrap justify-start lg:items-center items-baseline h-full p-2 lg:w-3/4 w-full">
            {library.map((manga) => (
              <LibraryItem key={manga.id} manga={manga} />
            ))}
          </div>
        )}
      </div>
    </>
  );
};
