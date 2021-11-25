import React, { useState } from "react";
import FeacturedMovie from "./FeacturedMovie";
import ImageNav from "./ImageNav";
import ArrowForwardIosTwoToneIcon from "@mui/icons-material/ArrowForwardIosTwoTone";
import ArrowBackIosTwoToneIcon from "@mui/icons-material/ArrowBackIosTwoTone";

function FeaturedMovies({ movies }) {
  const [current, setCurrent] = useState(1);

  const checkIndex = (index) => {
    if (index < 1) return 5;
    if (index > 5) return 1;
    return index;
  };

  return (
    <section className="featured-movies-container">
      <div className="featured-movies">
        {movies.map((m, index) => {
          return (
            <FeacturedMovie
              key={m.id}
              {...m}
              current={current}
              next={setCurrent}
              check={checkIndex}
              index={index}
            />
          );
        })}
      </div>

      <button className="featured-left d-flex align-center justify-s">
        <ArrowBackIosTwoToneIcon
          className="feature-navigation"
          onClick={() => setCurrent(checkIndex(current - 1))}
        />
      </button>
      <button className="featured-right d-flex align-center justify-e">
        <ArrowForwardIosTwoToneIcon
          className="feature-navigation"
          onClick={() => setCurrent(checkIndex(current + 1))}
        />
      </button>
      <ImageNav
        movies={movies}
        current={current}
        next={setCurrent}
        check={checkIndex}
      />
      <div className="featured-bottom"></div>
    </section>
  );
}

export default FeaturedMovies;
