import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/HomePage";
import MediaPage from "./pages/MediaPage";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import SearchPage from "./pages/SearchPage";
import ErrorPage from "./pages/ErrorPage";
import DisplayAllPage from "./pages/DisplayAllPage";

function App() {
  return (
    <React.Fragment>
      <Router>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route exact path="/:type/:id" element={<MediaPage />} />
          <Route exact path="/search/:query" element={<SearchPage />} />
          <Route exact path="/all/:type" element={<DisplayAllPage />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
        <Footer />
      </Router>
    </React.Fragment>
  );
}

export default App;
