export const getMangaById = async (id) => {
  const url = `https://api.mangadex.org/manga/${id}`;

  const respuesta = await fetch(url, {
    method: "GET",
    headers: { "content-type": "application/json" },
  });

  const data = await respuesta.json();

  return data;
};
