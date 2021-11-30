import React, { useContext, useEffect, useState } from "react";
import { getTrends, getNowPlaying, getSearch } from "./data";
import calc from "./calc";

// Create the context for the app data
const AppContext = React.createContext();

export const AppProvider = ({ children }) => {
  // States
  const [medias, setMedias] = useState({ movie: [], tv: [] });
  const [allMedias, setAllMedas] = useState([]);
  const [nowPlaying, setNowPlaying] = useState(null);
  const [loading, setLoading] = useState(true);
  const [trendMovieOnly, setTrendMovieOnly] = useState(true);
  const [searchValue, setSearchValue] = useState("");

  // Base urls
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

  // Fetch the movies that currently in theater
  const getPlayingData = () => {
    getNowPlaying()
      .then((res) => {
        setNowPlaying(res.results);
        console.log(res.results);
      })
      .catch((err) => console.log(err));
  };

  // Get the data for the search query
  const fetchSearchData = () => {
    getSearch(searchValue)
      .then((res) => {
        console.log(res);
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
        searchValue,
        setSearchValue,
        fetchSearchData,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

// A custom hook that distibute all the data thtough app
export const useGlobalContext = () => {
  return useContext(AppContext);
};
