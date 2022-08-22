import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Input } from "./components/Input";

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
          <div className="flex flex-wrap justify-start items-center max-h-full h-min p-2 lg:w-3/4 w-full">
            {library.map((manga) => (
              <Link
                key={manga.id}
                className="w-1/2 lg:w-1/4 h-max flex flex-col justify-center items-center overflow-hidden p-1"
                to={`/manga/${manga.title}`}
                state={manga.id}
              >
                <img
                  className="w-auto max-h-64 h-auto"
                  src={manga.cover}
                  alt={`${manga.title} cover`}
                />
                <p className="text-white max-h-12 lg:w-2/3 overflow-hidden break-words text-center">
                  {manga.title}
                </p>
              </Link>
            ))}
          </div>
        )}
      </div>
    </>
  );
};
