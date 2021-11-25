import React from "react";
import Rating from "@mui/material/Rating";
import StarIcon from "@mui/icons-material/Star";
import Genre from "./Genre";
import { Link } from "react-router-dom";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

function SingleMovie({ id, url, poster, title, rating }) {
  return (
    <article className="single-movie">
      <img src={poster} alt="movie-poster" className="single-movie-poster" />
      <div className="single-movie-content">
        <Genre>Fantasy</Genre>
        <h2 className="poster-title">{title}</h2>
        <div className="rating">
          <Rating
            name="simple-controlled"
            value={rating}
            readOnly={true}
            size="small"
            precision={0.5}
            emptyIcon={
              <StarIcon
                style={{ opacity: 0.55, color: "white" }}
                fontSize="inherit"
              />
            }
          />
        </div>
      </div>
      <div className="single-more">
        <Link to="/single-movie" className="single-link d-flex align-center">
          Learn more
          <ArrowForwardIcon
            style={{ marginLeft: "0.313rem" }}
            fontSize="small"
            color="white"
          />
        </Link>
      </div>
    </article>
  );
}

export default SingleMovie;
