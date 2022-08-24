import React from "react";
import { useEffect } from "react";
import { useState } from "react";

export const AddLibrary = ({ cover, title, id }) => {
  const checkLibrary = async () => {
    if (localStorage.getItem("library")) {
      const library = JSON.parse(localStorage.getItem("library"));

      if (library.filter((element) => element.id === id).length > 0) {
        return true;
      } else {
        return false;
      }
    } else {
      return false;
    }
  };

  const changeLibraryValue = async () => {
    setIsInLibrary(await checkLibrary());
  };

  const [isInLibrary, setIsInLibrary] = useState(false);

  useEffect(() => {
    changeLibraryValue();
  }, [id]);

  const addToLibrary = () => {
    if (isInLibrary) {
      const library = JSON.parse(localStorage.getItem("library"));

      const newLibrary = library.filter((element) => element.id !== id);

      localStorage.setItem("library", JSON.stringify(newLibrary));
      setIsInLibrary(false);
    } else {
      if (localStorage.getItem("library")) {
        const library = JSON.parse(localStorage.getItem("library"));

        library.push({ cover: `${cover}.256.jpg`, title, id });
        localStorage.setItem("library", JSON.stringify(library));
      } else {
        localStorage.setItem(
          "library",
          JSON.stringify([{ cover: `${cover}.256.jpg`, title, id }])
        );
      }
      setIsInLibrary(true);
    }
  };

  return (
    <button
      onClick={addToLibrary}
      className={`p-4 lg:w-1/3 rounded-md font-semibold ${
        isInLibrary
          ? "bg-red-400 hover:bg-red-500"
          : "bg-green-200 hover:bg-green-500"
      }`}
    >
      {isInLibrary ? "Remove from Library" : "Add to your library!"}
    </button>
  );
};
