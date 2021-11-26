import React from "react";

function RowSwitch({ setTrendMovieOnly, trendMovieOnly }) {
  return (
    <React.Fragment>
      <div
        className={`${
          trendMovieOnly
            ? "row-switcher d-flex p-relative"
            : "row-switcher d-flex p-relative active"
        }`}
      >
        <button
          className="btn small-btn"
          onClick={() => setTrendMovieOnly(true)}
        >
          Movies
        </button>
        <button
          className="btn small-btn"
          onClick={() => setTrendMovieOnly(false)}
        >
          Tv-shows
        </button>
      </div>
    </React.Fragment>
  );
}

export default RowSwitch;
