import React, { useState } from "react";
import { Link } from "react-router-dom";

export const MangaSearchResult = ({ attr, populate }) => {
  const { cover, title, id, attributes } = attr;
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <div className="flex h-48 w-2/4 items-center gap-4  border-2 border-gray-400 p-1 rounded-md">
      {!isLoaded && (
        <div className="loading w-4 h-4 border-8 p-4 rounded-full border-t-slate-900 animate-spin"></div>
      )}
      <img
        onLoad={() => {
          setIsLoaded(true);
        }}
        src={cover}
        alt={`${title} cover`}
        className="h-full w-auto rounded-md"
      />

      <Link to={`/manga/${title}`} className="text-white" state={id}>
        {title}
      </Link>
    </div>
  );
};
