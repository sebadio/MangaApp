import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useFetchSearch } from "../helpers/getSearch";
import { MangaSearchResult } from "./MangaSearchResult";

export const Search = () => {
  const { state } = useLocation();
  const { manga } = state;

  const [mangaData, setMangaData] = useState();

  const getData = async () => {
    setMangaData(await useFetchSearch(manga));
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="flex justify-center items-center flex-col gap-4 bg-zinc-900 p-4 h-screen overflow-hidden">
      {mangaData &&
        mangaData.map((manga) => (
          <MangaSearchResult attr={manga} key={manga.id} />
        ))}
    </div>
  );
};
