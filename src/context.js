import React, { useContext, useEffect, useState } from "react";
// import { movies } from "./tempData";
import { getTrends } from "./data";

const AppContext = React.createContext();

export const AppProvider = ({ children }) => {
  const [medias, setMedias] = useState({ movie: [], tv: [] });
  const [loading, setLoading] = useState(true);
  const [trendMovieOnly, setTrendMovieOnly] = useState(true);

  const getTrendData = () => {
    getTrends()
      .then((res) => {
        const mediaList = res.results.reduce(
          (total, current) => {
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
    <AppContext.Provider value={{ medias, loading }}>
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};
