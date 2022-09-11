import { useEffect, useState } from "react";
import { getChapterPages } from "../helpers/getChapterPages";
import { useLocation } from "react-router-dom";

export const useGetPages = () => {
  const { state } = useLocation();

  const [pages, setPages] = useState();

  const getPages = async () => {
    setPages(await getChapterPages(state));
  };

  const { baseUrl, chapter } = !!pages && pages;
  const { data, hash } = !!chapter && chapter;

  useEffect(() => {
    getPages();
    console.log(`width: ${window.innerWidth}`);
  }, []);

  return {
    baseUrl,
    data,
    hash,
  };
};
