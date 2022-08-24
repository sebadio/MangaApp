import React, { useState } from "react";
import { Link } from "react-router-dom";

export const MangaSearchResult = ({ attr }) => {
  const { cover, title, id, attributes } = attr;
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <>
      {!isLoaded && (
        <div className="loading w-4 h-4 border-8 p-4 rounded-full border-t-slate-900 animate-spin"></div>
      )}

      <Link
        to={`/manga/${title}`}
        className={`flex flex-col text-white h-auto w-32 ${
          !isLoaded && "hidden"
        }`}
        state={id}
      >
        <img
          onLoad={() => {
            setIsLoaded(true);
          }}
          src={`${cover}.512.jpg`}
          alt={`${title} cover`}
          className="h-auto w-min border-2 border-gray-400 p-1 rounded-md"
        />
        <label className="break-words">{title}</label>
      </Link>
    </>
  );
};
