import React from "react";
import { useEffect } from "react";
import { useState } from "react";

export const AddLibrary = ({ cover, title, id }) => {
  const checkLibrary = () => {
    const library = JSON.parse(localStorage.getItem("library"));

    if (localStorage.getItem("library")) {
      if (library.filter((element) => element.id === id).length > 0) {
        setIsInLibrary(true);
      } else {
        setIsInLibrary(false);
      }
    } else {
      setIsInLibrary(false);
    }
  };

  const [isInLibrary, setIsInLibrary] = useState(false);

  useEffect(() => {
    checkLibrary();
  }, []);

  const addToLibrary = () => {
    console.log(isInLibrary);

    if (isInLibrary) {
      const library = JSON.parse(localStorage.getItem("library"));

      const newLibrary = library.filter((element) => element.id !== id);

      localStorage.setItem("library", JSON.stringify(newLibrary));
      setIsInLibrary(false);
    } else {
      if (localStorage.getItem("library")) {
        const library = JSON.parse(localStorage.getItem("library"));

        console.log(library.filter((element) => element.id === id).length);

        library.push({ cover, title, id });
        localStorage.setItem("library", JSON.stringify(library));
      } else {
        localStorage.setItem("library", JSON.stringify([{ cover, title, id }]));
      }
      setIsInLibrary(true);
    }
  };

  return (
    <button
      onClick={addToLibrary}
      className={`p-4 lg:w-1/3 rounded-md font-semibold ${
        isInLibrary ? "bg-red-400" : "bg-green-200"
      } ${isInLibrary ? "hover:bg-red-500" : "hover:bg-green-500"}`}
    >
      {isInLibrary ? "Already in Library" : "Add to your library!"}
    </button>
  );
};
