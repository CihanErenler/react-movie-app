import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getNowPlaying, getTrends } from "../data";
import { useGlobalContext } from "../context";
import SingleMovie from "../components/SingleMovie";

function DisplayAllPage() {
  const [results, setResults] = useState(null);
  const { type } = useParams();
  const { searchValue } = useGlobalContext();

  useEffect(() => {
    if (type === "trending") {
      getTrends(searchValue)
        .then((res) => {
          setResults(res.results);
        })
        .catch((err) => console.log(err));
    } else {
      getNowPlaying(searchValue)
        .then((res) => {
          setResults(res.results);
        })
        .catch((err) => console.log(err));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <React.Fragment>
      <section className="search">
        <div className="container">
          {results && (
            <div>
              <h1 className="all-title">{type}</h1>

              <div className="search-results">
                {results.map((movie) => {
                  return (
                    <SingleMovie
                      key={movie.id}
                      {...movie}
                      large={false}
                      forceMovie={true}
                    />
                  );
                })}
              </div>
            </div>
          )}
        </div>
      </section>
    </React.Fragment>
  );
}

export default DisplayAllPage;
