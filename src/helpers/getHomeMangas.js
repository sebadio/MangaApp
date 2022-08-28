export const getHomeMangas = async () => {
  const url = `https://api.mangadex.org/manga?includedTagsMode=AND&excludedTagsMode=OR&contentRating%5B%5D=safe&order%5BlatestUploadedChapter%5D=desc&includes%5B%5D=manga&includes%5B%5D=cover_art`;

  const response = await fetch(url);

  const { data } = await response.json();

  return data;
};
