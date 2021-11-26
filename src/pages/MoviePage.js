import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getMovie } from "../data";
import calc from "../calc";
import { useGlobalContext } from "../context";
import Genre from "../components/Genre";
import Rating from "@mui/material/Rating";
import StarIcon from "@mui/icons-material/Star";
import Person from "../components/Person";

function MoviePage() {
  const [movie, setMovie] = useState(null);
  const [rec, setRec] = useState([]);
  const [cast, setCast] = useState([]);
  const { id } = useParams();

  const { backdrop_base, poster_base } = useGlobalContext();

  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const getDate = (date) => {
    const d = new Date(date);
    const day = d.getDate();
    const month = parseInt(d.getMonth());
    const year = d.getFullYear();

    return `${day} ${months[month]} ${year}`;
  };

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
      setMovie(movieObj);
      setRec(res.recommendations.results);
      setCast(res.credits.cast);
    });
  }, []);
  console.log(rec);
  return (
    <React.Fragment>
      {movie && (
        <section className="movie-page">
          <div className="cover">
            <div className="cover-image-container">
              <img
                classlist="m-backdrop"
                src={`${backdrop_base}${movie.backdrop_path}`}
                alt="cover"
              />
              <div className="featured-bottom"></div>
            </div>
            <div className="m-content">
              <div className="container d-flex">
                <div className="m-poster">
                  <img
                    src={`${poster_base}${movie.poster_path}`}
                    alt="poster"
                  />
                </div>
                <div className="m-info">
                  <h1 className="m-title">{movie.title}</h1>
                  <div className="m-genres">
                    {movie.genres.map((genre) => {
                      return <Genre key={genre.id}>{genre.name}</Genre>;
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
                  <p>
                    <span className="m-label">Languages:</span> {movie.language}
                  </p>
                  <p>
                    <span className="m-label">Production:</span>
                    {movie.production_companies.map((item, index) => (
                      <span key={index}>
                        {`${item.name}${
                          movie.production_companies.length - 1 !== index
                            ? ", "
                            : ""
                        }`}
                      </span>
                    ))}
                  </p>
                  <p>
                    <span className="m-label">Release date:</span>
                    {getDate(movie.release_date)}
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="m-cast">
            <div className="container">
              <h1 className="m-cast-title">Cast</h1>
              <div className="row-content">
                <div className="cast-row">
                  {cast.map((person) => {
                    return <Person key={person.id} {...person} />;
                  })}
                </div>
              </div>
            </div>
          </div>
        </section>
      )}
    </React.Fragment>
  );
}

export default MoviePage;
