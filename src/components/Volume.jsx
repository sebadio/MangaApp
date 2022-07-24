import React from "react";

export const Volume = ({ volumen }) => {
  const { volume, chapters } = volumen;

  const capitulos = Object.values(chapters);

  return (
    <div className={`volumen`}>
      {capitulos.map((capitulo) => (
        <div key={capitulo.chapter} className="chapter">
          <a href={`#chapter${capitulo.chapter}`} className="linkToChapter">
            Chapter: {capitulo.chapter}
          </a>
        </div>
      ))}
    </div>
  );
};
