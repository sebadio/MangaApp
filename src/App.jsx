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
          <div className="flex flex-wrap justify-start lg:items-center items-baseline h-full p-2 lg:w-3/4 w-full">
            {library.map((manga) => (
              <Link
                key={manga.id}
                className="w-1/2 lg:w-1/4 h-2/5 lg:h-1/3 flex flex-col lg:justify-center justify-around  items-center overflow-hidden p-1"
                to={`/manga/${manga.title}`}
                state={manga.id}
              >
                <img
                  loading="lazy"
                  className="w-auto h-52  max-h-64 rounded-sm ease-in-out shadow-white transition-all hover:-translate-y-1 hover:opacity-70"
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
