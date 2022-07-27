import React, { useEffect, useState } from "react";
import { CurrentManga } from "./components/CurrentManga";
import { MangaItem } from "./components/MangaItem";
import { MangaSearch } from "./components/MangaSearch";
import { getChapterPages } from "./helpers/getChapterPages";
import { getCoverImage } from "./helpers/getCoverImage";
import { getMangaById } from "./helpers/getMangaById";
import { usePrevious } from "./hooks/usePrevious";

export const App = () => {
  const [mangas, setMangas] = useState(["Tensura"]);
  const [rightSide, setRightSide] = useState(null);

  const onNewMangaSearch = (mangaSearch) => {
    setMangas(mangaSearch);
  };

  const previousState = usePrevious(rightSide);

  const exitManga = () => {
    console.log("ok");
    setRightSide(previousState);
  };

  const readChapter = async (e) => {
    console.log(e);

    const isChapter = true;

    const id = e.target.id;

    const { baseUrl, chapter } = await getChapterPages(id);

    console.log(chapter);
    console.log(baseUrl);

    const { data, hash } = chapter;

    setRightSide({
      datos: data,
      hash,
      baseUrl,
      id,
      isChapter,
    });
  };

  const populateRightSide = async (e) => {
    const id = e.target.attributes.id.value;

    const { data } = await getMangaById(id);
    const { attributes } = data;
    const { tags, description, title } = attributes;
    const cover = await getCoverImage(id);

    setRightSide({
      cover: `https://mangadex.org/covers/${id}/${cover}`,
      id,
      title: title.en,
      description: description.en,
      tags,
      isChapter: false,
    });
  };

  return (
    <>
      <div className="AppContainer flex bg-zinc-900 p-4 h-screen overflow-hidden">
        <div className="leftSide basis-1/4 overflow-auto relative">
          <MangaSearch onNewMangaSearch={onNewMangaSearch} />
          <MangaItem key={mangas} populate={populateRightSide} manga={mangas} />
        </div>
        <div className="rightSide basis-3/4 overflow-hidden h-full ml-3">
          {rightSide && (
            <CurrentManga
              exitManga={exitManga}
              data={rightSide}
              readChapter={readChapter}
            ></CurrentManga>
          )}
        </div>
      </div>
    </>
  );
};
