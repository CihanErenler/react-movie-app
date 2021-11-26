import React, { useContext, useEffect, useState } from "react";
import { getTrends, getNowPlaying } from "./data";
import calc from "./calc";

const AppContext = React.createContext();

export const AppProvider = ({ children }) => {
  const [medias, setMedias] = useState({ movie: [], tv: [] });
  const [allMedias, setAllMedas] = useState([]);
  const [nowPlaying, setNowPlaying] = useState(null);
  const [loading, setLoading] = useState(true);
  const [trendMovieOnly, setTrendMovieOnly] = useState(true);

  const backdrop_base = "https://image.tmdb.org/t/p/w1280";
  const poster_base = "https://image.tmdb.org/t/p/w500";
  const actor_base = "https://www.themoviedb.org/t/p/w276_and_h350_face/";

  const getTrendData = () => {
    getTrends()
      .then((res) => {
        // Seperate movies and tv shows from mixed result
        const mediaList = res.results.reduce(
          (total, current) => {
            current.vote_average = calc(parseInt(current.vote_average));
            if (current.media_type === "movie") {
              total["movie"].push(current);
            } else {
              total["tv"].push(current);
            }
            return total;
          },
          { movie: [], tv: [] }
        );
        setAllMedas(res.results);
        setMedias(mediaList);
        setLoading(false);
      })
      .catch((err) => console.log(err));
    setLoading(false);
  };

  const getPlayingData = () => {
    getNowPlaying()
      .then((res) => {
        setNowPlaying(res.results);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    setLoading(true);
    getTrendData();
    getPlayingData();
  }, []);

  return (
    <AppContext.Provider
      value={{
        medias,
        loading,
        backdrop_base,
        poster_base,
        allMedias,
        nowPlaying,
        trendMovieOnly,
        setTrendMovieOnly,
        actor_base,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};
