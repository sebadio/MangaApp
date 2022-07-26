export const getCoverImage = async (mangaId) => {
  const url = `https://api.mangadex.org/cover?limit=2&manga%5B%5D=${mangaId}&order%5Bvolume%5D=desc`;

  try {
    const respuesta = await fetch(url);

    const { data } = await respuesta.json();

    const cover = data[0].attributes.fileName;

    return `https://mangadex.org/covers/${mangaId}/${cover}`;
  } catch (error) {
    console.log(error);
    return;
  }
};
