import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const Input = () => {
  const [currentMangaSearch, setCurrentMangaSearch] = useState("");
  const navigate = useNavigate();

  const onInputChange = (e) => {
    setCurrentMangaSearch(e.target.value);
  };

  const navigateMangaSearch = (e) => {
    e.preventDefault();
    navigate(`/mangaSearch/${currentMangaSearch}`, {
      state: { manga: currentMangaSearch },
    });
  };

  return (
    <form className="w-1/2" onSubmit={navigateMangaSearch}>
      <input
        value={currentMangaSearch}
        className="p-4 text-white bg-transparent border-2 w-full border-gray-500 focus:border-gray-50 rounded-xl outline-none font-semibold text-xl placeholder:opacity-30"
        type="text"
        minLength={1}
        onChange={onInputChange}
        placeholder="Search manga here"
      />
    </form>
  );
};
