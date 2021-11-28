import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/HomePage";
import MediaPage from "./pages/MediaPage";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import SearchPage from "./pages/SearchPage";

function App() {
  return (
    <React.Fragment>
      <Router>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route exact path="/:type/:id" element={<MediaPage />} />
          <Route exact path="/search/:query" element={<SearchPage />} />
        </Routes>
        <Footer />
      </Router>
    </React.Fragment>
  );
}

export default App;
