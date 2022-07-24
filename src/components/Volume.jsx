import React, { useEffect } from "react";
import { Chapter } from "./Chapter";

export const Volume = ({ volumen }) => {
  const { volume, chapters } = volumen;

  const capitulos = Object.values(chapters);

  return (
    <div className={`volumen`}>
      {capitulos.map((capitulo) => (
        <div key={capitulo.chapter} className="chapter">
          <p>Chapter: </p>
          <a href={`#chapter${capitulo.chapter}`} className="linkToChapter">
            <Chapter key={capitulo.id} id={capitulo.id} />
          </a>
        </div>
      ))}
    </div>
  );
};
