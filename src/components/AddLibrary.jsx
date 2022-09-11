import React from "react";
import { useLibraryAdd } from "../hooks/useLibraryAdd";

export const AddLibrary = ({ cover, title, id }) => {
  const { addToLibrary, isInLibrary } = useLibraryAdd({ cover, title, id });

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
