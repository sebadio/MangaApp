import React, { useEffect, useState } from "react";
import { CurrentManga } from "./components/CurrentManga";
import { MangaItem } from "./components/MangaItem";
import { MangaSearch } from "./components/MangaSearch";
import { getChapterPages } from "./helpers/getChapterPages";
import { usePrevious } from "./hooks/usePrevious";

export const App = () => {
  const [mangas, setMangas] = useState(["Tensura"]);
  const [selectedManga, setSelectedManga] = useState(<></>);

  const onNewMangaSearch = (mangaSearch) => {
    setMangas(mangaSearch);
  };

  const previousState = usePrevious(selectedManga);

  console.log("Next to definition " + previousState);

  const exitManga = (state) => {
    console.log("Inside exitManga function " + state);
    setSelectedManga(state);
  };

  const readChapter = async (e) => {
    console.log("Inside readChapter function " + previousState);

    const id = e.target.id;

    const { baseUrl, chapter } = await getChapterPages(id);

    const { data, hash } = chapter;

    setSelectedManga(
      <>
        <button
          className="mangaReaderButton"
          onClick={() => {
            console.log("Onclick " + previousState);
            exitManga(previousState);
          }}
        >
          X
        </button>
        <div className="mangaPagesContainer">
          {data.map((pagina) => (
            <img key={pagina} src={`${baseUrl}/data/${hash}/${pagina}`} />
          ))}
        </div>
      </>
    );
  };

  const populateRightSide = (e) => {
    const { cover, id, href, title, description } = e.target.attributes;
    setSelectedManga(
      <CurrentManga
        readChapter={readChapter}
        cover={cover.value}
        id={id.value}
        title={title.value}
        description={description.value}
      />
    );
  };

  return (
    <>
      <div className="AppContainer">
        <div className="leftSide">
          <MangaSearch onNewMangaSearch={onNewMangaSearch} />
          <MangaItem key={mangas} populate={populateRightSide} manga={mangas} />
        </div>
        <div className="rightSide">{selectedManga}</div>
      </div>
    </>
  );
};
