import React from "react";
import { useState } from "react";

export const AddLibrary = ({ cover, title, id }) => {
  /*   console.log(localStorage.getItem("library").includes(id));
  console.log(id); */

  const [isInLibrary, setIsInLibrary] = useState(
    localStorage.getItem("library") &&
      !localStorage.getItem("library").includes(id)
  );

  const addToLibrary = () => {
    if (isInLibrary) {
      const library = localStorage.getItem("library");

      console.log(newLibrary);

      localStorage.setItem("library", library);
    } else {
      if (localStorage.getItem("library")) {
        const library = JSON.parse(localStorage.getItem("library"));

        library.push({ cover, title, id });
        localStorage.setItem("library", JSON.stringify(library));
      } else {
        localStorage.setItem("library", JSON.stringify([{ cover, title, id }]));
      }
    }
    setIsInLibrary(!isInLibrary);
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
