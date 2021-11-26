import React from "react";
import FeaturedMovies from "../components/FeaturedMovies";
import MovieRow from "../components/MovieRow";
import { useGlobalContext } from "../context";

function HomePage() {
  const { medias, loading, trendMovieOnly, allMedias, nowPlaying } =
    useGlobalContext();

  const itemToSend = trendMovieOnly ? medias.movie : medias.tv;

  return (
    <div>
      <React.Fragment>
        {!loading && <FeaturedMovies movies={allMedias.slice(0, 5)} />}
        {!loading && <MovieRow title="Trending" movies={itemToSend} />}
        {nowPlaying && (
          <MovieRow title="In theater" movies={nowPlaying} large={true} />
        )}
      </React.Fragment>
    </div>
  );
}

export default HomePage;
