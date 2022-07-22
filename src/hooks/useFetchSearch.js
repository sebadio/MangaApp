import { useEffect, useState } from "react";
import getSearch from "../helpers/getSearch";

export const useFetchSearch = (mangaName) => {
  const [mangas, setMangas] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const getMangas = async () => {
    const mangas = await getSearch(mangaName);
    setMangas(mangas);
    setIsLoading(false);
  };

  useEffect(() => {
    getMangas(mangaName);
  }, []);

  return { isLoading, mangas };
};
