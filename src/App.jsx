import React, { useState } from "react";
import { MangaItem } from "./components/MangaItem";
import { MangaSearch } from "./components/MangaSearch";
export const App = () => {
  const [mangas, setMangas] = useState(["One Piece"]);
  const [selectedManga, setSelectedManga] = useState({});

  const onNewMangaSearch = (mangaSearch) => {
    setMangas(mangaSearch);
  };

  const populateRightSide = (e) => {
    let { cover, id, href, title } = e.target.attributes;
    return cover, id, href, title;
  };

  return (
    <>
      <div className="AppContainer">
        <div className="leftSide">
          <MangaSearch onNewMangaSearch={onNewMangaSearch} />
          <MangaItem key={mangas} populate={populateRightSide} manga={mangas} />
        </div>
        <div className="rightSide"></div>
      </div>
    </>
  );
};
