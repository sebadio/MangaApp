import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { getChapterPages } from "../helpers/getChapterPages";
import { MangaPage } from "./MangaPage";

export const ReadChapter = () => {
  const navigate = useNavigate();
  const { state } = useLocation();

  const [pages, setPages] = useState();

  const getPages = async () => {
    setPages(await getChapterPages(state));
  };

  const { baseUrl, chapter } = !!pages && pages;
  const { data, hash } = !!chapter && chapter;

  useEffect(() => {
    getPages();
    console.log(window.innerWidth);
  }, []);

  return (
    <div
      className={`flex flex-col gap-1 items-center bg-zinc-900 lg:p-4 h-screen overflow-auto relative ${
        window.innerWidth < 600 && "noScrollbar"
      }`}
    >
      <div className="sticky top-1 w-full">
        <button
          onClick={() => {
            navigate(-1);
          }}
          className="text-white hover:text-black font-bold bg-black hover:bg-slate-50 hover:bg-opacity-100 bg-opacity-50 p-2 rounded-full
          transition-all aspect-square
          h-10 w-10 text-lg flex justify-center items-center font-mono"
        >
          X
        </button>
      </div>
      {data &&
        data.map((page) => (
          <MangaPage key={page} baseUrl={baseUrl} hash={hash} pagina={page} />
        ))}
    </div>
  );
};
