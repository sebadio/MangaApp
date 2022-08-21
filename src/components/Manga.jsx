import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useLocation } from "react-router-dom";
import { getChapterList } from "../helpers/getChapterList";
import { getCoverImage } from "../helpers/getCoverImage";
import { getMangaById } from "../helpers/getMangaById";
import { Tag } from "./Tag";
import { Volume } from "./Volume";

export const Manga = () => {
  const { state } = useLocation();
  const [mangaData, setMangaData] = useState();
  const [coverImage, setCoverImage] = useState();
  const [chapterList, setChapterList] = useState();

  const { data } = !!mangaData && mangaData;
  const { attributes } = !!data && data;

  const getManga = async () => {
    setMangaData(await getMangaById(state));
    setCoverImage(await getCoverImage(state));
    setChapterList(Object.values(await getChapterList(state)).reverse());
  };

  useEffect(() => {
    getManga();
  }, []);

  return (
    <div className="flex items-center h-screen flex-col gap-2 lg:p-4 p-1 overflow-auto">
      <div className="flex flex-wrap lg:flex-nowrap lg:h-2/5 justify-center items-center gap-6">
        <img
          className="lg:h-full lg:w-auto h-auto max-w-full rounded-md"
          src={coverImage && coverImage}
          alt={attributes && `${attributes.title.en} cover`}
        />

        <div className="flex flex-col lg:h-full p-2 gap-2 lg:p-0 justify-evenly">
          <h1 className="text-white font-bold text-4xl max-w-full">
            {attributes && attributes.title.en}
          </h1>
          <p className="text-white max-w-full lg:h-1/4 overflow-auto">
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
    </div>
  );
};
