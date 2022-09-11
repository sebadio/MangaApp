import { useState } from "react";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { getSearch } from "../helpers/getSearch";

export const useSearch = () => {
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

  return {
    mangaData,
    isLoading,
  };
};
