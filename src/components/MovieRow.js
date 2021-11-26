import React from "react";
import SingleMovie from "./SingleMovie";
import { Link } from "react-router-dom";
import ArrowForwardIosTwoToneIcon from "@mui/icons-material/ArrowForwardIosTwoTone";
import RowSwitch from "./RowSwitch";

function MovieRow({ movies, title, large }) {
  return (
    <section className="movie-row">
      <div className="container p-relative">
        <div className="movie-row-title d-flex align-center">
          <Link className="row-title align-center" to="/display-all">
            {title}
            <span className="row-title-link">Display all</span>
            <ArrowForwardIosTwoToneIcon className="row-title-link-icon" />
          </Link>
          {!large && <RowSwitch />}
        </div>
        <div className="row-content ">
          <div className="movies-container d-flex">
            {movies.map((movie) => {
              return <SingleMovie key={movie.id} {...movie} large={large} />;
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

export default MovieRow;
