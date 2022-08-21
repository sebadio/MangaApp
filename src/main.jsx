import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { Search } from "./components/Search";
import { Manga } from "./components/Manga";
import { App } from "./App";
import { ReadChapter } from "./components/ReadChapter";
import { Input } from "./components/Input";
import "./index.css";
import { NavBar } from "./components/NavBar";

ReactDOM.createRoot(document.getElementById("root")).render(
  <div className="flex flex-col w-full h-screen bg-neutral-800">
    <BrowserRouter basename="/MangaApp">
      <NavBar />

      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/mangaSearch/*" element={<Search />} />
        <Route path="/manga/*" element={<Manga />} />
        <Route path="/manga/read/*" element={<ReadChapter />} />
      </Routes>
    </BrowserRouter>
  </div>
);
