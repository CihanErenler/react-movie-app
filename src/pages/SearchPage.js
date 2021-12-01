import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getSearch } from "../data";
import { useGlobalContext } from "../context";
import SingleMovie from "../components/SingleMovie";

function SearchPage() {
  const [results, setResults] = useState(null);
  const { query } = useParams();
  const { searchValue } = useGlobalContext();

  const navigate = useNavigate();

  useEffect(() => {
    if (searchValue !== "") {
      getSearch(searchValue)
        .then((res) => {
          setResults(res.results);
        })
        .catch((err) => console.log(err));
    } else {
      navigate("/");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [query]);
  return (
    <React.Fragment>
      <section className="search">
        <div className="container">
          {results && (
            <div>
              <h1 className="search-title">
                {results.length === 0 ||
                results === null ||
                results === undefined
                  ? "No results for"
                  : "Results for"}{" "}
                "{searchValue}"
              </h1>

              <div className="search-results">
                {results.map((movie) => {
                  return (
                    <SingleMovie
                      key={movie.id}
                      {...movie}
                      large={false}
                      forceMovie={true}
                      zoom={false}
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

export default SearchPage;
