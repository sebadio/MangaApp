import React, { useEffect } from "react";
import { Chapter } from "./Chapter";

export const Volume = ({ volumen, readChapter }) => {
  const { volume, chapters } = volumen;

  const capitulos = Object.values(chapters).reverse();

  return (
    <div className={`volumen`}>
      {capitulos.map((capitulo) => (
        <div key={capitulo.chapter} className="chapter">
          <p>Chapter: </p>
          <a
            href={`#chapter${capitulo.chapter}`}
            onClick={readChapter}
            className="linkToChapter"
            id={capitulo.id}
          >
            <Chapter key={capitulo.id} id={capitulo.id} />
          </a>
        </div>
      ))}
    </div>
  );
};
