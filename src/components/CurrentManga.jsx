import React, { useEffect, useState } from "react";
import { getChapterList } from "../helpers/getChapterList";
import { MangaPage } from "./MangaPage";
import { Volume } from "./Volume";

export const CurrentManga = ({ data, readChapter, exitManga }) => {
  if (data.isChapter) {
    const { datos, hash, id, baseUrl, chapter } = data;

    return (
      <>
        <button
          className="w-8 h-8 text-slate-200 bg-black bg-opacity-40 rounded-full sticky top-0"
          onClick={() => {
            exitManga;
          }}
        >
          X
        </button>
        <div className="flex flex-col gap-1 overflow-auto items-center h-full mb-2">
          {datos.map((pagina) => (
            <MangaPage
              key={pagina}
              baseUrl={baseUrl}
              chapter={chapter}
              hash={hash}
              pagina={pagina}
            />
          ))}
        </div>
      </>
    );
  } else {
    const { cover, title, description, id } = data;

    const [volumes, setVolumes] = useState([]);

    const populateChapterList = async (id) => {
      setVolumes(Object.values(await getChapterList(id)).reverse());
    };

    useEffect(() => {
      populateChapterList(id);
    }, [volumes]);

    return (
      <>
        <div className="mangaHeader h-1/3 flex mb-2 pb-2 border-b-2">
          <img
            src={cover}
            alt={`${cover} image`}
            className="h-full rounded-md"
          />
          <div className="titleAndDescription flex flex-col justify-evenly p-5">
            <h1 className="text-slate-200 text-3xl font-extrabold">{title}</h1>
            <p className="text-slate-300 overflow-auto">{description}</p>
          </div>
        </div>

        <div className="chapterList overflow-auto h-2/3">
          {volumes.map((volumen) => (
            <div
              key={volumen.volume}
              className="m-3 border-b-2 pb-2 border-slate-200 border-opacity-40"
            >
              <h2 className="text-slate-300 text-3xl mb-1">
                Volumen: {volumen.volume}
              </h2>
              <Volume readChapter={readChapter} volumen={volumen} />
            </div>
          ))}
        </div>
      </>
    );
  }
};
