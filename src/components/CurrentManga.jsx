import React, { useEffect, useState } from "react";
import { getChapterList } from "../helpers/getChapterList";
import { Volume } from "./Volume";

export const CurrentManga = ({
  cover,
  title,
  id,
  readChapter,
  description,
}) => {
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
};
