export const getChapter = async (id) => {
  const respuesta = await fetch(`https://api.mangadex.org/chapter/${id}`, {
    method: "GET",
    mode: "cors",
    headers: { "content-type": "application/json" },
  });

  const { data } = await respuesta.json();

  const { chapter, title, pages, translatedLanguage } = data.attributes;

  return {
    chapter,
    title,
    pages,
    translatedLanguage,
  };
};
