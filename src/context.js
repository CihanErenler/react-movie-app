import React, { useContext, useEffect, useState } from "react";
import { getTrends } from "./data";
import calc from "./calc";

const AppContext = React.createContext();

export const AppProvider = ({ children }) => {
  const [medias, setMedias] = useState({ movie: [], tv: [] });
  const [allMedias, setAllMedas] = useState([]);
  const [loading, setLoading] = useState(true);
  const [trendMovieOnly, setTrendMovieOnly] = useState(true);

  const backdrop_base = "https://image.tmdb.org/t/p/w1280";
  const poster_base = "https://image.tmdb.org/t/p/w500";

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
        console.log(mediaList);
        setAllMedas(res.results);
        setMedias(mediaList);
        setLoading(false);
      })
      .catch((err) => console.log(err));
    setLoading(false);
  };

  useEffect(() => {
    setLoading(true);
    getTrendData();
  }, []);

  return (
    <AppContext.Provider
      value={{
        medias,
        loading,
        backdrop_base,
        poster_base,
        trendMovieOnly,
        setTrendMovieOnly,
        allMedias,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};
