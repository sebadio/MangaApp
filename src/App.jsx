import React, { useState } from "react";
import { CurrentManga } from "./components/CurrentManga";
import { MangaItem } from "./components/MangaItem";
import { MangaSearch } from "./components/MangaSearch";
export const App = () => {
  const [mangas, setMangas] = useState(["Tensura"]);
  const [selectedManga, setSelectedManga] = useState(<></>);

  const onNewMangaSearch = (mangaSearch) => {
    setMangas(mangaSearch);
  };

  const populateRightSide = (e) => {
    const { cover, id, href, title } = e.target.attributes;
    setSelectedManga(
      <CurrentManga cover={cover.value} id={id.value} title={title.value} />
    );
  };

  return (
    <>
      <div className="AppContainer">
        <div className="leftSide">
          <MangaSearch onNewMangaSearch={onNewMangaSearch} />
          <MangaItem key={mangas} populate={populateRightSide} manga={mangas} />
        </div>
        <div className="rightSide">{selectedManga}</div>
      </div>
    </>
  );
};
