import { getCoverImage } from "./getCoverImage";

export const useFetchSearch = async (manga) => {
  const url = `https://api.mangadex.org/manga?title=${manga}`;
  const respuesta = await fetch(url);

  const { data } = await respuesta.json();

  const mangasList = [];

  for (let i = 0; i < data.length; i++) {
    const actualManga = data[i];
    let mangaId = actualManga.id;
    let mangaAttributes = actualManga.attributes;
    let mangaTitle = actualManga.attributes.title.en;
    let mangaCover = await getCoverImage(actualManga.id);

    mangasList.push({
      id: mangaId,
      title: mangaTitle,
      attributes: mangaAttributes,
      cover: `https://mangadex.org/covers/${mangaId}/${mangaCover}`,
    });
  }

  return mangasList;
};

export default useFetchSearch;
