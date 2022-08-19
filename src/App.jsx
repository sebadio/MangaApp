import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export const App = () => {
  let navigate = useNavigate();

  const [currentMangaSearch, setCurrentMangaSearch] = useState("");

  const mangaSearch = (e) => {
    e.preventDefault();
    navigate(`/mangaSearch`, { state: { manga: currentMangaSearch } });
  };

  const onInputChange = (e) => {
    setCurrentMangaSearch(e.target.value);
  };

  return (
    <div className="flex flex-col justify-evenly items-center bg-zinc-900 p-4 h-screen overflow-hidden">
      <h1 className="text-white font-bold text-6xl">Manga App</h1>

      <form
        className="w-1/2"
        onSubmit={(e) => {
          mangaSearch(e);
        }}
      >
        <input
          value={currentMangaSearch}
          className="p-4 text-white bg-transparent border-2 w-full border-gray-500 focus:border-gray-50 rounded-xl outline-none font-semibold text-xl placeholder:opacity-30"
          type="text"
          minLength={1}
          onChange={onInputChange}
          placeholder="Search manga here"
        />
      </form>
    </div>
  );
};
