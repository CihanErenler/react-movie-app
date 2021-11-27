import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getMovie, getShow } from "../data";
import calc from "../calc";
import { useGlobalContext } from "../context";
import Genre from "../components/Genre";
import Rating from "@mui/material/Rating";
import StarIcon from "@mui/icons-material/Star";
import Person from "../components/Person";
import { Link } from "react-router-dom";

function MoviePage() {
  const [media, setMedia] = useState(null);
  const [cast, setCast] = useState([]);
  const { id, type } = useParams();

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

  const createObj = (res) => {
    const mediaObj = {
      backdrop_path: res.backdrop_path,
      budget: res.budget ? res.budget : null,
      genres: res.genres,
      homepage: res.homepage,
      languages: res.spoken_languages,
      overview: res.overview,
      poster_path: res.poster_path,
      production_companies: res.production_companies,
      release_date: res.release_date ? res.release_date : null,
      title: res.title ? res.title : null,
      revirews: res.reviews.length > 0 ? res.reviews.results : null,
      name: res.name ? res.name : null,
      tagline: res.tagline,
      vote_average: calc(parseInt(res.vote_average)),
      status: res.status,
      created_by: res.created_by,
    };

    return mediaObj;
  };

  const fetchMovies = (id) => {
    getMovie(id).then((res) => {
      const mediaObj = createObj(res);
      console.log(res);
      setMedia(mediaObj);
      setCast(res.credits.cast);
    });
  };

  const fetchTv = (id) => {
    getShow(id).then((res) => {
      const mediaObj = createObj(res);
      console.log(mediaObj);
      setMedia(mediaObj);
      setCast(res.credits.cast);
    });
  };

  useEffect(() => {
    if (type === "movie") {
      fetchMovies(id);
    } else {
      fetchTv(id);
    }
  }, []);

  return (
    <React.Fragment>
      {media && (
        <section className="movie-page">
          <div className="cover">
            <div className="cover-image-container">
              <img
                classlist="m-backdrop"
                src={`${backdrop_base}${media.backdrop_path}`}
                alt="cover"
              />
              <div className="featured-bottom"></div>
            </div>
            <div className="m-content">
              <div className="container d-flex">
                <div className="m-poster">
                  <img
                    src={`${poster_base}${media.poster_path}`}
                    alt="poster"
                  />
                </div>
                <div className="m-info">
                  <h1 className="m-title">
                    {type === "movie" ? media.title : media.name}
                  </h1>
                  <div className="m-genres">
                    {media.genres.map((genre) => {
                      return <Genre key={genre.id}>{genre.name}</Genre>;
                    })}
                  </div>
                  <div className="rating">
                    <Rating
                      name="simple-controlled"
                      value={media.vote_average}
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

                  {type === "tv" && media.created_by.length > 0 && (
                    <p>
                      <span className="m-label">Created by:</span>
                      {media.created_by.map((person) => {
                        return (
                          <Link
                            style={{
                              textDecoration: "underline",
                              color: "white",
                            }}
                            to={`/person/${person.id}`}
                          >
                            {person.name}
                          </Link>
                        );
                      })}
                    </p>
                  )}
                  <p>{media.overview}</p>
                  <p>
                    <span className="m-label">Languages:</span>
                    {media.languages.map((lang, index) => {
                      return (
                        <span key={index}>
                          {lang.name}
                          {media.languages.length - 1 !== index ? ", " : ""}
                        </span>
                      );
                    })}{" "}
                  </p>
                  <p>
                    <span className="m-label">Production:</span>
                    {media.production_companies.map((item, index) => (
                      <span key={index}>
                        {`${item.name}${
                          media.production_companies.length - 1 !== index
                            ? ", "
                            : ""
                        }`}
                      </span>
                    ))}
                  </p>
                  {type === "movie" && (
                    <p>
                      <span className="m-label">Release date:</span>
                      {getDate(media.release_date)}
                    </p>
                  )}
                  {type === "tv" && (
                    <p>
                      <span className="m-label">Status:</span>
                      {media.status}
                    </p>
                  )}
                  {type === "movie" && (
                    <p>
                      <span className="m-label">Budget:</span>
                      {media.budget}$
                    </p>
                  )}
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
