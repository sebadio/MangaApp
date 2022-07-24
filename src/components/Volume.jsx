import React from "react";

export const Volume = ({ volumen }) => {
  const { volume, chapters } = volumen;

  const capitulos = Object.values(chapters);

  return (
    <div className={`volumen`}>
      {capitulos.map((capitulo) => (
        <div key={capitulo.chapter} className="chapter">
          <p>Chapter: {capitulo.chapter}</p>
        </div>
      ))}
    </div>
  );
};
