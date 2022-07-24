import React, { useEffect, useState } from "react";
import { getChapterList } from "../helpers/getChapterList";
import { Volume } from "./Volume";

export const CurrentManga = ({ cover, title, id }) => {
  const [volumes, setVolumes] = useState([]);

  const populateChapterList = async (id) => {
    setVolumes(Object.values(await getChapterList(id)));
  };

  useEffect(() => {
    populateChapterList(id);
  }, [volumes]);

  return (
    <>
      <div className="mangaHeader">
        <img src={cover} alt={`${cover} image`} />
        <h1>{title}</h1>
      </div>

      <div className="chapterList">
        {volumes.map((volumen) => (
          <div key={volumen.volume}>
            <h2>Volumen: {volumen.volume}</h2>
            <Volume volumen={volumen} />
          </div>
        ))}
      </div>
    </>
  );
};
