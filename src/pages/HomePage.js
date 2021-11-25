import React from "react";
import FeaturedMovies from "../components/FeaturedMovies";
import MovieRow from "../components/MovieRow";

function HomePage() {
  return (
    <div>
      <FeaturedMovies />
      <MovieRow />
    </div>
  );
}

export default HomePage;
