import React, { useEffect } from "react";
import Genre from "./Genre";
import Rating from "@mui/material/Rating";
import StarIcon from "@mui/icons-material/Star";
import calc from "../calc";

const backdrop_base = "https://image.tmdb.org/t/p/w1280";
const poster_base = "https://image.tmdb.org/t/p/w500";

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
  useEffect(() => {
    const timeOut = setTimeout(() => {
      next(check(current + 1));
    }, 4000);
    return () => {
      clearTimeout(timeOut);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [current]);

  const rating = calc(parseInt(vote_average));

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
              value={rating}
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
          <p className="featured-desc">
            {overview.length > 300
              ? `${overview.substring(0, 400)}...`
              : overview}
          </p>
          <button className="btn btn-primary">Learn more</button>
        </div>
      </div>
    </section>
  );
}

export default FeacturedMovie;
