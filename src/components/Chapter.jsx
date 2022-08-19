import React, { useEffect, useState } from "react";
import { getChapter } from "../helpers/getChapter";
import { Link } from "react-router-dom";

export const Chapter = ({ id, title }) => {
  const [chapter, setChapter] = useState({});

  const chapterData = async (id) => {
    setChapter(await getChapter(id));
  };

  useEffect(() => {
    chapterData(id);
  }, []);

  return (
    <div className="chapter flex gap-2 p-2 border-2 rounded-md border-zinc-300 border-opacity-20">
      <p className="text-slate-200 font-semibold text-xl">Chapter: </p>
      <Link
        to={`/manga/read/${title}${id}`}
        state={id}
        className="linkToChapter text-zinc-400 w-full flex justify-between items-center"
      >
        <span id={id}>
          {chapter.chapter}: {chapter.title}{" "}
        </span>
        <sup id={id}>{chapter.pages} pages</sup>
      </Link>
    </div>
  );
};
