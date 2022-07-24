export const getChapterList = async (id) => {
  const respuesta = await fetch(
    `https://api.mangadex.org/manga/${id}/aggregate`
  );

  const { volumes } = await respuesta.json();

  return volumes;
};
