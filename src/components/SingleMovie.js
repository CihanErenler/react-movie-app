import React from "react";
import Rating from "@mui/material/Rating";
import StarIcon from "@mui/icons-material/Star";
import { Link } from "react-router-dom";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { useGlobalContext } from "../context";

function SingleMovie({
  id,
  poster_path,
  title,
  vote_average,
  name,
  media_type,
  large,
}) {
  const { poster_base } = useGlobalContext();

  return (
    <article className={large ? "single-movie large" : "single-movie"}>
      <img
        src={`${poster_base}${poster_path}`}
        alt="movie-poster"
        className="single-movie-poster"
      />
      <div className="single-movie-content">
        {/* <Genre>Fantasy</Genre> */}
        {/* <h2 className="poster-title">{title ? title : name}</h2> */}
        <div className="rating">
          {/* <Rating
            name="simple-controlled"
            value={vote_average}
            readOnly={true}
            size="small"
            precision={0.5}
            emptyIcon={
              <StarIcon
                style={{ opacity: 0.55, color: "white" }}
                fontSize="inherit"
              />
            }
          /> */}
        </div>
      </div>
      <div className="single-more">
        <Link
          to={`/${media_type === "tv" ? "tv" : "movie"}/${id}`}
          className="single-link d-flex align-center"
        >
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
