import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Search } from "./components/Search";
import { Manga } from "./components/Manga";
import { App } from "./App";
import "./index.css";
import { ReadChapter } from "./components/ReadChapter";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/mangaSearch" element={<Search />} />
      <Route path="/manga/*" element={<Manga />} />
      <Route path="/manga/read/*" element={<ReadChapter />} />
    </Routes>
  </BrowserRouter>
);
