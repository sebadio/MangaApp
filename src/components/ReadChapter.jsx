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
  }, []);

  return (
    <div className="flex flex-col gap-1 items-center bg-zinc-900 p-4 h-screen overflow-auto">
      <button
        onClick={() => {
          navigate(-1);
        }}
        className="text-white font-bold bg-black bg-opacity-50 p-2 rounded-full fixed top-4 left-4 aspect-square w-8 h-8 text-lg flex justify-center items-center"
      >
        X
      </button>
      {data &&
        data.map((page) => (
          <MangaPage key={page} baseUrl={baseUrl} hash={hash} pagina={page} />
        ))}
    </div>
  );
};
