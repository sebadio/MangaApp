import React, { useEffect } from "react";
import { Chapter } from "./Chapter";

export const Volume = ({ volumen, readChapter }) => {
  const { volume, chapters } = volumen;

  const capitulos = Object.values(chapters).reverse();

  return (
    <div className={`chapters flex flex-col gap-1`}>
      {capitulos.map((capitulo) => (
        <div
          key={capitulo.chapter}
          className="chapter flex gap-2 p-2 border-2 rounded-md border-zinc-300 border-opacity-20"
        >
          <p className="text-slate-200 font-semibold text-xl">Chapter: </p>
          <a
            href={`#chapter${capitulo.chapter}`}
            onClick={readChapter}
            className="linkToChapter text-zinc-400 w-full flex justify-between items-center"
            id={capitulo.id}
          >
            <Chapter key={capitulo.id} id={capitulo.id} />
          </a>
        </div>
      ))}
    </div>
  );
};
