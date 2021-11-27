import React from "react";
import FeaturedMovies from "../components/FeaturedMovies";
import MovieRow from "../components/MovieRow";
import { useGlobalContext } from "../context";

function HomePage() {
  const {
    setTrendMovieOnly,
    medias,
    loading,
    trendMovieOnly,
    allMedias,
    nowPlaying,
  } = useGlobalContext();

  const itemToSend = trendMovieOnly ? medias.movie : medias.tv;

  return (
    <div>
      <React.Fragment>
        {!loading && <FeaturedMovies movies={allMedias.slice(0, 5)} />}
        <MovieRow
          title="Trending"
          movies={itemToSend}
          isSwitchOn={true}
          setTrendMovieOnly={setTrendMovieOnly}
          trendMovieOnly={trendMovieOnly}
          displayAll={true}
        />
        <MovieRow
          title="In theater"
          movies={nowPlaying}
          large={true}
          isSwitchOn={false}
          displayAll={true}
        />
      </React.Fragment>
    </div>
  );
}

export default HomePage;
