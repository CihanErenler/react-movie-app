import React from "react";
import { Link } from "react-router-dom";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { useGlobalContext } from "../context";
import placeholder from "../assets/poster.svg";

function SingleMovie({ id, poster_path, media_type, large, zoom }) {
  const { poster_base } = useGlobalContext();

  const poster = poster_path ? `${poster_base}${poster_path}` : placeholder;

  return (
    <article className={large ? "single-movie large" : "single-movie"}>
      <img src={poster} alt="movie-poster" className="single-movie-poster" />
      <div className="single-movie-content">
        <div className="rating"></div>
      </div>
      <div className="single-more">
        <Link
          to={`/${
            media_type !== "movie" || !media_type ? "tv" : "movie"
          }/${id}`}
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
