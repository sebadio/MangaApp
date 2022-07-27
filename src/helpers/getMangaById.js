export const getMangaById = async (id) => {
  const url = `https://api.mangadex.org/manga/${id}`;

  const respuesta = await fetch(url);

  const data = await respuesta.json();

  return data;
};
