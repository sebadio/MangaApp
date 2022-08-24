import React from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export const LibraryItem = ({ manga }) => {
  const [isLoaded, setIsLoaded] = useState(false);

  const { id, title, cover } = manga;

  return (
    <>
      {!isLoaded && (
        <div className="loading w-4 h-4 border-8 p-4 m-4 rounded-full border-t-slate-900 animate-spin"></div>
      )}

      <Link
        key={id}
        className={`w-1/2 lg:w-1/6 h-2/5 lg:h-1/3 flex flex-col lg:justify-center justify-around  items-center overflow-hidden p-1 `}
        to={`/manga/${title}`}
        state={id}
      >
        <img
          onLoad={() => {
            setIsLoaded(true);
          }}
          loading="lazy"
          className="w-auto h-52  max-h-64 rounded-md ease-in-out shadow-white transition-all hover:-translate-y-1 hover:opacity-70"
          src={cover}
          alt={`${title} cover`}
        />
        <p className="text-white max-h-12 lg:w-2/3 overflow-hidden break-words text-center">
          {title}
        </p>
      </Link>
    </>
  );
};
