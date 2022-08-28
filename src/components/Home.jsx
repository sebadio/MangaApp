import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { getHomeMangas } from "../helpers/getHomeMangas";

export const Home = () => {
  const [mangas, setMangas] = useState();
  const [isLoaded, setIsLoaded] = useState(false);

  const requestMangas = async () => {
    setMangas(await getHomeMangas());
  };

  useEffect(() => {
    requestMangas();
  }, []);

  return (
    <div className="flex w-full justify-center flex-wrap p-4 gap-4 overflow-auto">
      {mangas &&
        mangas.map((manga) => (
          <div
            key={manga.id}
            className="flex w-max h-1/2 justify-center rounded-md border-2 border-white p-4 gap-4"
          >
            <Link
              className="flex flex-2 flex-col justify-center items-center"
              to={`/manga/${manga.attributes.title.en}`}
              state={manga.id}
            >
              <img
                loading="lazy"
                className="w-auto h-52  max-h-64 rounded-md ease-in-out shadow-white transition-all hover:-translate-y-1 hover:opacity-70"
                src={`https://mangadex.org/covers/${manga.id}/${
                  manga.relationships.filter(
                    (element) => element.type === "cover_art"
                  )[0].attributes.fileName
                }`}
                alt={`${manga.attributes.title} cover`}
              />
              <p className="text-white max-h-12 lg:w-2/3 overflow-hidden break-words text-center">
                {manga.attributes.title.en}
              </p>
            </Link>
          </div>
        ))}
    </div>
  );
};
