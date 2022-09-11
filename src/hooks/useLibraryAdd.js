import { useEffect } from "react";
import { useState } from "react";

export const useLibraryAdd = ({ cover, id, title }) => {
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

  return {
    addToLibrary,
    isInLibrary,
  };
};
