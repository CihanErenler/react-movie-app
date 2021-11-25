import React, { useState, useEffect } from "react";
import FeacturedMovie from "./FeacturedMovie";
import ImageNav from "./ImageNav";
import { useGlobalContext } from "../context";
import ArrowForwardIosTwoToneIcon from "@mui/icons-material/ArrowForwardIosTwoTone";
import ArrowBackIosTwoToneIcon from "@mui/icons-material/ArrowBackIosTwoTone";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";

function FeaturedMovies() {
  const [current, setCurrent] = useState(1);
  const { loading, medias } = useGlobalContext();

  const checkIndex = (index) => {
    if (index < 1) return 5;
    if (index > 5) return 1;
    return index;
  };

  return (
    <section className="featured-movies-container">
      {loading ? (
        <div className="featured-movies">
          <SkeletonTheme baseColor="#111111" highlightColor="#222">
            <p>
              <Skeleton count={3} />
            </p>
          </SkeletonTheme>
        </div>
      ) : (
        <div className="featured-movies">
          {medias.movie.slice(0, 5).map((m, index) => {
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
      )}
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
        movies={medias.movie.slice(0, 5)}
        current={current}
        next={setCurrent}
        check={checkIndex}
      />
      <div className="featured-bottom"></div>
    </section>
  );
}

export default FeaturedMovies;
