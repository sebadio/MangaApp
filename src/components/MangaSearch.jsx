import React, { useState } from "react";

export const MangaSearch = ({ onNewMangaSearch }) => {
  const [inputValue, setInputValue] = useState("");

  const onInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();

    const input = inputValue.trim();

    if (input.length <= 1) return;

    onNewMangaSearch(input);

    setInputValue("");
  };

  return (
    <>
      <form onSubmit={onSubmit} className="sticky top-0 bg-zinc-900 pb-2">
        <input
          type="text"
          placeholder="Manga name"
          value={inputValue}
          onChange={onInputChange}
          className="bg-transparent text-slate-200 p-4 border-solid border-2 border-stone-500 rounded-xl w-full outline-none sticky top-0"
        />
      </form>
    </>
  );
};
