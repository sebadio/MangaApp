import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useLocation } from "react-router-dom";
import { getChapterList } from "../helpers/getChapterList";
// import { getCoverImage } from "../helpers/getCoverImage";
import { getMangaById } from "../helpers/getMangaById";
import { AddLibrary } from "./AddLibrary";
import { Tag } from "./Tag";
import { Volume } from "./Volume";

export const Manga = () => {
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

  return (
    <div
      className={`flex ${
        !isLoaded && "justify-center"
      } items-center h-screen flex-col gap-2 lg:p-4 p-1 overflow-auto`}
    >
      {!isLoaded ? (
        <div className="loading w-4 h-4 border-8 p-4 rounded-full border-t-slate-900 animate-spin"></div>
      ) : (
        <>
          <div className="flex flex-wrap lg:flex-nowrap lg:h-2/5 lg:w-auto w-full justify-center items-center gap-6">
            <img
              className="lg:h-full lg:w-auto h-auto max-w-full rounded-md"
              src={coverImage && coverImage}
              alt={attributes && `${attributes.title.en} cover`}
            />

            <div className="flex flex-col lg:h-full w-full p-2 gap-2 lg:p-0 justify-evenly">
              <h1 className="text-white font-bold text-4xl max-w-full">
                {attributes && attributes.title.en}
              </h1>
              <p className="text-white max-w-full break-words lg:h-1/4 overflow-auto">
                {attributes && attributes.description.en}
              </p>
              <span className="text-white capitalize flex gap-2 items-center">
                Status:
                {attributes && attributes.status === "ongoing" ? (
                  <div className="w-3 h-3 aspect-square bg-green-400 rounded-full"></div>
                ) : (
                  <div className="w-3 h-3 aspect-square bg-red-700 rounded-full"></div>
                )}
                {attributes && attributes && attributes.status}
              </span>
              <div className="flex gap-1 flex-wrap">
                {attributes &&
                  attributes.tags.map((tag) => (
                    <Tag
                      key={tag.attributes.name.en}
                      tag={tag.attributes.name.en}
                    />
                  ))}
              </div>
              <AddLibrary
                cover={coverImage && coverImage}
                title={attributes && attributes.title.en}
                id={data && data.id}
              />
            </div>
          </div>

          <hr className="w-full" />

          <>
            {chapterList &&
              chapterList.map((volume) => (
                <Volume
                  key={volume.volume}
                  title={attributes.title.en}
                  volumen={volume}
                />
              ))}
          </>
        </>
      )}
    </div>
  );
};
