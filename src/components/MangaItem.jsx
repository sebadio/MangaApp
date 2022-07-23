import React from "react";
import { useFetchSearch } from "../hooks/useFetchSearch";
import { MangaSearchResult } from "./MangaSearchResult";

export const MangaItem = ({ manga, populate }) => {
  const { isLoading, mangas } = useFetchSearch(manga);
  return (
    <>
      {isLoading && <div className="loading"></div>}
      <div className="searchItem">
        {mangas.map((element) => (
          <MangaSearchResult
            key={element.id}
            attr={element}
            populate={populate}
          />
        ))}
      </div>
    </>
  );
};
