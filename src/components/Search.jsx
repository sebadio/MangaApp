import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { getSearch } from "../helpers/getSearch";
import { MangaSearchResult } from "./MangaSearchResult";

export const Search = () => {
  const { state } = useLocation();
  const { manga } = state;

  const [mangaData, setMangaData] = useState();
  const [isLoading, setIsLoading] = useState(true);

  const getData = async () => {
    setMangaData(await getSearch(manga));
    setIsLoading(!isLoading);
  };

  useEffect(() => {
    getData();
  }, [state]);

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
