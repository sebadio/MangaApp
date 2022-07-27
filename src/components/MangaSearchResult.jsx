import React, { useState } from "react";

export const MangaSearchResult = ({ attr, populate }) => {
  const { cover, title, id, attributes } = attr;
  const [isLoaded, setIsLoaded] = useState(false);
  const description = attributes.description.en;

  return (
    <div className="flex h-48 w-full items-center gap-4  border-2 border-gray-400 p-1 rounded-md">
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
      <a
        onClick={populate}
        id={id}
        cover={cover}
        title={title}
        description={description}
        href={`#${title}`}
      >
        {title}
      </a>
    </div>
  );
};
