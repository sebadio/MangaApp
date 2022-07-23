import React, { useState } from "react";
import { MangaItem } from "./components/MangaItem";
import { MangaSearch } from "./components/MangaSearch";
export const App = () => {
  const [mangas, setMangas] = useState(["One Piece"]);

  const onNewMangaSearch = (mangaSearch) => {
    setMangas(mangaSearch);
  };

  const populateRightSide = (e) => {
    const { mangaid, cover } = e.target;
    console.log(e);
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
