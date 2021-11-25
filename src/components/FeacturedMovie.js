import React, { useEffect } from "react";
import Genre from "./Genre";
import Rating from "@mui/material/Rating";
import StarIcon from "@mui/icons-material/Star";
import { useGlobalContext } from "../context";

function FeacturedMovie({
  id,
  title,
  backdrop_path,
  overview,
  next,
  check,
  current,
  index,
  vote_average,
  poster_path,
}) {
  const { backdrop_base, poster_base } = useGlobalContext();

  useEffect(() => {
    const timeOut = setTimeout(() => {
      next(check(current + 1));
    }, 5000);
    return () => {
      clearTimeout(timeOut);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [current]);

  return (
    <section
      className={` ${
        index + 1 === current ? "featured-movie active" : "featured-movie"
      } `}
    >
      <div className="featured-img-container">
        <img src={`${backdrop_base}${backdrop_path}`} alt="backdrop" />
      </div>
      <div className="container p-relative d-flex align-center justify-s">
        <img
          className="featured-poster"
          src={`${poster_base}${poster_path}`}
          alt=""
        />
        <div className="featured-content">
          <Genre>Fantasy</Genre>
          <div className="rating">
            <Rating
              name="simple-controlled"
              value={vote_average}
              readOnly={true}
              precision={0.1}
              emptyIcon={
                <StarIcon
                  style={{ opacity: 0.55, color: "white" }}
                  fontSize="inherit"
                />
              }
            />
          </div>
          <h1 className="featured-title">{title}</h1>
          <p className="featured-desc">{overview}</p>
          <button className="btn btn-primary">Learn more</button>
        </div>
      </div>
    </section>
  );
}

export default FeacturedMovie;
