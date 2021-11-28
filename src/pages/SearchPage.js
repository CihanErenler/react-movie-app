import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getSearch } from "../data";
import { useGlobalContext } from "../context";
import SingleMovie from "../components/SingleMovie";

function SearchPage() {
  const [results, setResults] = useState(null);
  const { query } = useParams();
  const { searchValue } = useGlobalContext();

  useEffect(() => {
    getSearch(searchValue)
      .then((res) => {
        setResults(res.results);
      })
      .catch((err) => console.log(err));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [query]);

  return (
    <React.Fragment>
      {results && (
        <section className="search">
          <div className="container">
            <h1 className="search-title">Results for "{searchValue}"</h1>
            <div className="search-results">
              {results.map((movie) => {
                return <SingleMovie key={movie.id} {...movie} large={false} />;
              })}
            </div>
          </div>
        </section>
      )}
    </React.Fragment>
  );
}

export default SearchPage;
