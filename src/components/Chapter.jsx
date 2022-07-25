import React, { useEffect, useState } from "react";
import { getChapter } from "../helpers/getChapter";

export const Chapter = ({ id }) => {
  const [chapter, setChapter] = useState({});

  const chapterData = async (id) => {
    setChapter(await getChapter(id));
  };

  useEffect(() => {
    chapterData(id);
  }, []);

  return (
    <>
      <span id={id}>
        {chapter.chapter}: {chapter.title}{" "}
      </span>
      <sup id={id}>{chapter.pages} pages</sup>
    </>
  );
};
