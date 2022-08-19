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
    <div className="flex items-center h-screen flex-col gap-2 bg-zinc-900 p-4 overflow-hidden">
      <div className="flex justify-center items-center gap-6">
        <img
          className="w-1/5 rounded-md"
          src={coverImage && coverImage}
          alt={attributes && `${attributes.title.en} cover`}
        />

        <div className="flex flex-col h-full justify-evenly">
          <div>
            <h1 className="text-white font-bold text-4xl">
              {attributes && attributes.title.en}
            </h1>
            <p className="text-white">
              {attributes && attributes.description.en}
            </p>
          </div>
          <div className="flex gap-1">
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

      <div>
        {chapterList &&
          chapterList.map((volume) => (
            <Volume
              key={volume.volume}
              title={attributes.title.en}
              volumen={volume}
            />
          ))}
      </div>
    </div>
  );
};
