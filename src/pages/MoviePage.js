import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getMovie } from "../data";
import calc from "../calc";
import { useGlobalContext } from "../context";
import Genre from "../components/Genre";
import Rating from "@mui/material/Rating";
import StarIcon from "@mui/icons-material/Star";

function MoviePage() {
  const [movie, setMovie] = useState(null);
  const [rec, setRec] = useState([]);
  const [cast, setCast] = useState([]);
  const { id } = useParams();

  const { backdrop_base, poster_base } = useGlobalContext();

  useEffect(() => {
    getMovie(id).then((res) => {
      const movieObj = {
        backdrop_path: res.backdrop_path,
        budget: res.budget,
        genres: res.genres,
        homepage: res.homepage,
        language: res.original_language,
        overview: res.overview,
        poster_path: res.poster_path,
        production_companies: res.production_companies,
        release_date: res.release_date,
        title: res.title,
        tagline: res.tagline,
        vote_average: calc(parseInt(res.vote_average)),
      };
      console.log(movieObj);
      setMovie(movieObj);
      setRec(res.recommendations);
      setCast(res.credits.cast);
    });
  }, []);

  return (
    <React.Fragment>
      {movie && (
        <section className="cover p_relative">
          <div className="cover-image-container p_relative">
            <img src={`${backdrop_base}${movie.backdrop_path}`} alt="cover" />
            <div className="featured-bottom"></div>
          </div>
          <div className="container">
            <div className="single-movie-content d-flex">
              <div className="single-movie-poster">
                <img src={`${poster_base}${movie.poster_path}`} alt="poster" />
              </div>
              <div className="single-movie-info">
                <h1 className="single-movie-title">{movie.title}</h1>
                <div className="single-movie-genres">
                  {movie.genres.map((genre) => {
                    return <Genre key={id}>{genre.name}</Genre>;
                  })}
                </div>
                <div className="rating">
                  <Rating
                    name="simple-controlled"
                    value={movie.vote_average}
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
                <p>{movie.overview}</p>
                <p>Languages: {movie.language}</p>
                <p>
                  Production:{" "}
                  {movie.production_companies.map(
                    (item, index) =>
                      `${item.name}${
                        movie.production_companies.length - 1 !== index && ", "
                      }`
                  )}
                </p>
              </div>
            </div>
          </div>
        </section>
      )}
    </React.Fragment>
  );
}

export default MoviePage;
