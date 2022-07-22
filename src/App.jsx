import React, { useState } from "react";
import { MangaItem } from "./components/MangaItem";
import { MangaSearch } from "./components/MangaSearch";
export const App = () => {
  const [mangas, setMangas] = useState(["One Piece"]);

  const onNewMangaSearch = (mangaSearch) => {
    setMangas(mangaSearch);
  };

  return (
    <div className="AppContainer">
      <h1>Manga App</h1>
      <MangaSearch onNewMangaSearch={onNewMangaSearch} />
      <MangaItem key={mangas} manga={mangas} />;
    </div>
  );
};
