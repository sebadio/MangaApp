export const getChapterPages = async (id) => {
  const url = `https://api.mangadex.org/at-home/server/${id}`;

  const respuesta = await fetch(url);

  const data = await respuesta.json();

  return data;
};
