import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getMovie, getShow } from "../data";
import calc from "../calc";
import { useGlobalContext } from "../context";
import Genre from "../components/Genre";
import Rating from "@mui/material/Rating";
import StarIcon from "@mui/icons-material/Star";
import Person from "../components/Person";
import MovieRow from "../components/MovieRow";
import placeholder from "../assets/poster.svg";

function MoviePage() {
  const [media, setMedia] = useState(null);
  // const [cast, setCast] = useState([]);
  // const [recs, setRecs] = useState(null);
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
      name: res.name ? res.name : null,
      tagline: res.tagline,
      vote_average: calc(parseInt(res.vote_average)),
      status: res.status,
      created_by: res.created_by,
      recommendations: res.recommendations
        ? res.recommendations.results
        : res.similar.results,
      credits: res.credits ? res.credits.cast : null,
    };

    return mediaObj;
  };

  const fetchMovies = (id) => {
    getMovie(id).then((res) => {
      const mediaObj = createObj(res);
      console.log(mediaObj);
      setMedia(mediaObj);
    });
  };

  const fetchTv = (id) => {
    getShow(id).then((res) => {
      const mediaObj = createObj(res);
      setMedia(mediaObj);
    });
  };

  useEffect(() => {
    if (type === "movie") {
      fetchMovies(id);
    } else {
      fetchTv(id);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  useEffect(() => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }, [id]);

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
                    src={
                      media.poster_path
                        ? `${poster_base}${media.poster_path}`
                        : placeholder
                    }
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
                        return <span>{person.name}</span>;
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
                  {type === "movie" && media.budget && (
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
                  {media.credits.map((person) => {
                    return <Person key={person.id} {...person} />;
                  })}
                </div>
              </div>
            </div>
          </div>
          {media ? (
            <div className="container" style={{ padding: "0 50px" }}>
              <MovieRow
                title="Recommendations"
                movies={media.recommendations}
                large={false}
                isSwitchOn={false}
                displayAll={false}
              />
            </div>
          ) : (
            ""
          )}
        </section>
      )}
    </React.Fragment>
  );
}

export default MoviePage;
