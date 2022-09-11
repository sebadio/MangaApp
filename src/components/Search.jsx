import React from "react";
import { useSearch } from "../hooks/useSearch";
import { MangaSearchResult } from "./MangaSearchResult";

export const Search = () => {
  const { isLoading, mangaData } = useSearch();

  return (
    <div
      className={`flex ${
        isLoading && "h-full justify-center"
      } items-center flex-col gap-4 p-4 overflow-auto`}
    >
      <div className="flex flex-wrap gap-2 w-1/2">
        {isLoading && (
          <div className="loading mx-auto w-4 h-4 border-8 p-4 rounded-full border-t-slate-900 animate-spin"></div>
        )}

        {mangaData &&
          mangaData.map((manga) => (
            <MangaSearchResult attr={manga} key={manga.id} />
          ))}
      </div>
    </div>
  );
};
