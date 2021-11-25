import React from "react";
import FeaturedMovies from "../components/FeaturedMovies";
import MovieRow from "../components/MovieRow";
import { useGlobalContext } from "../context";

function HomePage() {
  const { medias, loading, trendMovieOnly, allMedias } = useGlobalContext();

  const itemToSend = trendMovieOnly ? medias.movie : medias.tv;

  return (
    <div>
      {!loading && (
        <React.Fragment>
          <FeaturedMovies movies={allMedias.slice(0, 5)} />
          <MovieRow movies={itemToSend} />
        </React.Fragment>
      )}
    </div>
  );
}

export default HomePage;
