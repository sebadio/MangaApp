export const getChapter = async (id) => {
  const respuesta = await fetch(`https://api.mangadex.org/chapter/${id}`);

  const { data } = await respuesta.json();

  const { chapter, title, pages, translatedLanguage } = data.attributes;

  return {
    chapter,
    title,
    pages,
    translatedLanguage,
  };
};
