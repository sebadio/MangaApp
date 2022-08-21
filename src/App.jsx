import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Input } from "./components/Input";

export const App = () => {
  let navigate = useNavigate();

  return (
    <>
      <div className="flex h-full justify-center items-center">
        <h2 className="text-white">
          Tu Libreria aparecera aqui! Empieza buscando mangas desde el buscador
          de arriba a la derecha
        </h2>
      </div>
    </>
  );
};
