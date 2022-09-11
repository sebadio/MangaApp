import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { getHomeMangas } from "../helpers/getHomeMangas";
import { Tag } from "./Tag";

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
            className="flex w-full h-1/2 justify-center rounded-md border-2 border-white p-4 gap-4"
          >
            <div className="flex flex-2 flex-col justify-center items-center">
              <img
                loading="lazy"
                className="w-auto h-52  max-h-64 rounded-md ease-in-out shadow-white transition-all"
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
            </div>

            <div className="flex flex-col flex-1">
              <p className="flex-1 text-white overflow-auto">
                {manga.attributes.description.en}
              </p>

              <div className="flex flex-wrap gap-1">
                {manga.attributes.tags.map((tag) => (
                  <Tag key={tag.id} tag={tag.attributes.name.en} />
                ))}
              </div>
            </div>
          </div>
        ))}
    </div>
  );
};
