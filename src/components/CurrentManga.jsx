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
          className="mangaReaderButton"
          onClick={() => {
            exitManga;
          }}
        >
          X
        </button>
        <div className="mangaPagesContainer">
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
        <div className="mangaHeader">
          <img src={cover} alt={`${cover} image`} />
          <div className="titleAndDescription">
            <h1>{title}</h1>
            <p className="currentMangaDescription">{description}</p>
          </div>
        </div>

        <div className="chapterList">
          {volumes.map((volumen) => (
            <div key={volumen.volume}>
              <h2>Volumen: {volumen.volume}</h2>
              <Volume readChapter={readChapter} volumen={volumen} />
            </div>
          ))}
        </div>
      </>
    );
  }
};
