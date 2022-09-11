import { getChapterList } from "../helpers/getChapterList";
import { getMangaById } from "../helpers/getMangaById";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

export const useGetManga = () => {
  const { state } = useLocation();

  const [mangaData, setMangaData] = useState();
  const [chapterList, setChapterList] = useState();
  const [isLoaded, setIsLoaded] = useState(false);

  const { data } = !!mangaData && mangaData;
  const { attributes, relationships } = !!data && data;

  const coverImage =
    !!relationships &&
    `https://mangadex.org/covers/${data.id}/${relationships[2].attributes.fileName}`;

  const getManga = async () => {
    setMangaData(await getMangaById(state));
    setChapterList(Object.values(await getChapterList(state)).reverse());
  };

  useEffect(() => {
    getManga();
  }, []);

  useEffect(() => {
    if (mangaData && attributes && chapterList) {
      setIsLoaded(true);
    }
  }, [mangaData, attributes, chapterList]);

  return {
    isLoaded,
    coverImage,
    mangaData,
    attributes,
    relationships,
    data,
    chapterList,
  };
};
