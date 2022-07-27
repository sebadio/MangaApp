import React, { useEffect, useState } from "react";
import { CurrentManga } from "./components/CurrentManga";
import { MangaItem } from "./components/MangaItem";
import { MangaSearch } from "./components/MangaSearch";
import { getChapterPages } from "./helpers/getChapterPages";
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
    const isChapter = true;

    const id = e.target.id;

    const { baseUrl, chapter } = await getChapterPages(id);

    const { data, hash } = chapter;

    setRightSide({
      datos: data,
      hash,
      baseUrl,
      id,
      isChapter,
    });
  };

  const populateRightSide = (e) => {
    const { cover, id, href, title, description } = e.target.attributes;
    setRightSide({
      cover: cover.value,
      id: id.value,
      title: title.value,
      description: description.value,
      isChapter: false,
    });
  };

  return (
    <>
      <div className="AppContainer flex bg-zinc-900 p-4 h-screen">
        <div className="leftSide basis-1/4 overflow-auto relative">
          <MangaSearch onNewMangaSearch={onNewMangaSearch} />
          <MangaItem key={mangas} populate={populateRightSide} manga={mangas} />
        </div>
        <div className="rightSide basis-3/4 overflow-hidden h-full p-3">
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
