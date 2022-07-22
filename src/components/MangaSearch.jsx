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
      <form onSubmit={onSubmit}>
        <input
          type="text"
          placeholder="Manga name"
          value={inputValue}
          onChange={onInputChange}
        />
      </form>
    </>
  );
};
