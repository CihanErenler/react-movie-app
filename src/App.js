import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/HomePage";
import MoviePage from "./pages/MoviePage";
import TvPage from "./pages/TvPage";
import Navbar from "./components/Navbar";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route exact path="/movie/:id" element={<MoviePage />} />
        <Route exact path="/tv/:id" element={<TvPage />} />
      </Routes>
    </Router>
  );
}

export default App;
