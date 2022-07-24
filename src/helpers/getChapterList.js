export const getChapterList = async (id) => {
  const respuesta = await fetch(
    `https://api.mangadex.org/manga/${id}/aggregate?translatedLanguage%5B%5D=en`
  );

  const { volumes } = await respuesta.json();

  return volumes;
};
