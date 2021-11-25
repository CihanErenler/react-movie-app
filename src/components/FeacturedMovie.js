import React, { useEffect } from "react";
import Genre from "./Genre";
import Rating from "@mui/material/Rating";
import StarIcon from "@mui/icons-material/Star";

function FeacturedMovie({
  id,
  title,
  url,
  desc,
  next,
  check,
  current,
  rating,
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

  return (
    <section
      className={` ${
        id === current ? "featured-movie active" : "featured-movie"
      } `}
    >
      <div className="featured-img-container">
        <img src={url} alt="" />
      </div>
      <div className="container p-relative d-flex align-center justify-s">
        <div className="featured-content">
          <Genre>Fantasy</Genre>
          <div className="rating">
            <Rating
              name="simple-controlled"
              value={rating}
              readOnly={true}
              precision={0.5}
              max={10}
              emptyIcon={
                <StarIcon
                  style={{ opacity: 0.55, color: "white" }}
                  fontSize="inherit"
                />
              }
            />
          </div>
          <h1 className="featured-title">{title}</h1>
          <p className="featured-desc">{desc}</p>
          <button className="btn btn-primary">Learn more</button>
        </div>
      </div>
    </section>
  );
}

export default FeacturedMovie;
