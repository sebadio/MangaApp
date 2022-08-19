import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useFetchSearch } from "../helpers/getSearch";
import { MangaSearchResult } from "./MangaSearchResult";
import { Input } from "./Input";

export const Search = () => {
  const { state } = useLocation();
  const { manga } = state;

  const [mangaData, setMangaData] = useState();

  const getData = async () => {
    setMangaData(await useFetchSearch(manga));
  };

  useEffect(() => {
    getData();
  }, [state]);

  return (
    <div className="flex items-center flex-col gap-4 bg-zinc-900 p-4 h-screen overflow-auto">
      <Input />

      <div className="flex flex-wrap gap-2 w-1/2">
        {mangaData &&
          mangaData.map((manga) => (
            <MangaSearchResult attr={manga} key={manga.id} />
          ))}
      </div>
    </div>
  );
};
