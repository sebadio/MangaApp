import React, { useEffect, useState } from "react";
import { getChapter } from "../helpers/getChapter";
import { Link } from "react-router-dom";

export const Chapter = ({ id, title }) => {
  const [chapter, setChapter] = useState(false);

  const chapterData = async (id) => {
    setChapter(await getChapter(id));
  };

  useEffect(() => {
    chapterData(id);
  }, []);

  return (
    <div className="w-full flex items-center p-1 border-2 rounded-md border-zinc-300 border-opacity-20">
      <Link
        to={`/manga/read/${title}${id}`}
        state={id}
        className="text-zinc-400 w-full flex gap-1 justify-start items-baseline"
      >
        <p className="text-slate-200 font-semibold lg:text-xl">Chapter: </p>

        <div className="flex w-full justify-between items-center">
          <span className="flex-3 overflow-hidden">
            {chapter
              ? `${chapter.chapter}: ${
                  chapter.title == null || chapter.title == ""
                    ? "No title"
                    : chapter.title
                }`
              : `Loading title...`}
          </span>
          <sup className="flex-2 text-xs lg:text-base whitespace-nowrap">{`${chapter.pages} pages`}</sup>
        </div>
      </Link>
    </div>
  );
};
