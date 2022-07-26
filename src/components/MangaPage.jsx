import React, { useState } from "react";

export const MangaPage = ({ baseUrl, hash, pagina }) => {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <>
      {!isLoaded && <span className="mangaPageLoading"></span>}
      <img
        src={`${baseUrl}/data/${hash}/${pagina}`}
        onLoad={() => {
          setIsLoaded(true);
        }}
        alt={`Error`}
      />
    </>
  );
};
