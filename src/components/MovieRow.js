import React from "react";
import SingleMovie from "./SingleMovie";
import { useGlobalContext } from "../context";
import { Link } from "react-router-dom";
import ArrowForwardIosTwoToneIcon from "@mui/icons-material/ArrowForwardIosTwoTone";

function MovieRow() {
  const { movies } = useGlobalContext();
  return (
    <section className="movie-row">
      <div className="movie-row-title">
        <div className="container">
          <Link className="row-title align-center" to="/display-all">
            Trenging now
            <span className="row-title-link">Display all</span>
            <ArrowForwardIosTwoToneIcon className="row-title-link-icon" />
          </Link>
        </div>
      </div>
      <div className="container">
        <div className="movies-container d-flex">
          {movies.map((movie) => {
            return <SingleMovie key={movie.id} {...movie} />;
          })}
        </div>
      </div>
    </section>
  );
}

export default MovieRow;
