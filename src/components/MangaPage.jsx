import React, { useState } from "react";

export const MangaPage = ({ baseUrl, hash, pagina }) => {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <>
      {!isLoaded && (
        <span className="loading w-4 h-4 border-8 p-4 rounded-full border-t-slate-900 animate-spin"></span>
      )}
      <img
        src={`${baseUrl}/data/${hash}/${pagina}`}
        onLoad={() => {
          setIsLoaded(true);
        }}
        className="mangaPage"
        alt={`Error`}
      />
    </>
  );
};
