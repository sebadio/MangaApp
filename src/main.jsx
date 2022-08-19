import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Search } from "./components/Search";
import { Manga } from "./components/Manga";
import { App } from "./App";
import { ReadChapter } from "./components/ReadChapter";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/mangaSearch/*" element={<Search />} />
      <Route path="/manga/*" element={<Manga />} />
      <Route path="/manga/read/*" element={<ReadChapter />} />
    </Routes>
  </BrowserRouter>
);
