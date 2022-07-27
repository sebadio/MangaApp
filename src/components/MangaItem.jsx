import React from "react";
import { useFetchSearch } from "../hooks/useFetchSearch";
import { MangaSearchResult } from "./MangaSearchResult";

export const MangaItem = ({ manga, populate }) => {
  const { isLoading, mangas } = useFetchSearch(manga);
  return (
    <>
      {isLoading && (
        <div className="loading w-4 h-4 border-8 p-4 rounded-full border-t-slate-900 animate-spin m-auto"></div>
      )}
      <div className="text-gray-200 w-full flex gap-3 flex-col mt-3">
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
