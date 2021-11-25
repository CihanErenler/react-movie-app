import React from "react";
import FeaturedMovies from "../components/FeaturedMovies";
import MovieRow from "../components/MovieRow";
import { useGlobalContext } from "../context";

function HomePage() {
  const { medias, loading } = useGlobalContext();

  return (
    <div>
      {!loading && (
        <React.Fragment>
          <FeaturedMovies movies={medias.movie.slice(0, 5)} />
          <MovieRow movies={medias.movie} />
        </React.Fragment>
      )}
    </div>
  );
}

export default HomePage;
