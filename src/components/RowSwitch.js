import React from "react";
import { useGlobalContext } from "../context";

function RowSwitch() {
  const { trendMovieOnly, setTrendMovieOnly } = useGlobalContext();

  return (
    <div
      className={`${
        trendMovieOnly
          ? "row-switcher d-flex p-relative"
          : "row-switcher d-flex p-relative active"
      }`}
    >
      <button
        className="btn switch-btn"
        onClick={() => setTrendMovieOnly(true)}
      >
        Movies
      </button>
      <button
        className="btn switch-btn"
        onClick={() => setTrendMovieOnly(false)}
      >
        Tv-shows
      </button>
    </div>
  );
}

export default RowSwitch;
