import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/HomePage";
import MediaPage from "./pages/MediaPage";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import PersonPage from "./pages/PersonPage";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route exact path="/:type/:id" element={<MediaPage />} />
        <Route exact path="/person/:id" element={<PersonPage />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
