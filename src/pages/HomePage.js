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
          title="trending"
          movies={itemToSend}
          isSwitchOn={true}
          setTrendMovieOnly={setTrendMovieOnly}
          trendMovieOnly={trendMovieOnly}
          displayAll={true}
        />
        <MovieRow
          title="in theater"
          movies={nowPlaying}
          large={true}
          isSwitchOn={false}
          displayAll={true}
          forceMovie={true}
        />
      </React.Fragment>
    </div>
  );
}

export default HomePage;
