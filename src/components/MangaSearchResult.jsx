import React, { createElement, useState } from "react";

export const MangaSearchResult = ({ attr }) => {
  const { cover, title, id, attributes } = attr;
  const [isLoaded, setIsLoaded] = useState(false);
  return (
    <div className="MangaSearchResult">
      {!isLoaded && <div className="coverLoading"></div>}
      <img
        onLoad={() => {
          setIsLoaded(true);
        }}
        src={cover}
        alt={`${title} cover`}
      />
      <h4>{title}</h4>
    </div>
  );
};
