import React from "react";
import { Link } from "react-router-dom";

import { by639_1 } from "iso-language-codes";

const MovieDetails = (props) => {
  const trimInfo = (str, endIndex) => {
    return str.substring(0, endIndex);
  };

  let lang = by639_1[props.movieDetails.originalLanguage];
  if (lang) {
    lang = lang.name;
  }
  const filterDirector = (directorArr) => {
    for (let i = 0; i < directorArr.length; i++) {
      if (directorArr[i] !== undefined) {
        return directorArr[i];
      }
    }
  };

  const getHours = (runtime) => {
    return Math.floor(runtime / 60);
  };

  const getMins = (runtime) => {
    return runtime % 60;
  };

  const styles = {
    backgroundImage: `url(https://image.tmdb.org/t/p/original/${props.movieDetails.backdropPath})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "center",
  };

  return (
    <div className="movie-details-container">
      <div className="back-btn-container">
        <button className="back-btn">
          <Link to="/">
            <i className="fa-solid fa-circle-arrow-left"></i>
          </Link>
        </button>
      </div>
      <div className="movie-details" style={styles}>
        <div className="movie-details-overview">
          <div className="poster-container">
            <img
              src={`https://image.tmdb.org/t/p/original/${props.movieDetails.posterPath}`}
              alt="movie-poster"
              className="movie-poster"
            ></img>
          </div>
          <div className="detail-container">
            <h1 className="movie-title">{props.movieDetails.title}</h1>
            <span className="year-and-genre">
              {trimInfo(props.movieDetails.releaseDate, 4)}
              {" | "}
              {props.movieDetails.genres}
              {" | "}
              <span>
                {getHours(props.movieDetails.runtime)}h{" "}
                {getMins(props.movieDetails.runtime)}m
              </span>
            </span>
            <p className="overview">{props.movieDetails.overview}</p>

            <p className="cast">
              <span>Starring: </span>
              <span>
                <i>
                  {props.movieDetails.cast
                    .slice(0, 3)
                    .map((actor) => actor.name)
                    .join(", ")}
                </i>
              </span>
            </p>

            <div className="watch-button">
              <a
                className="homepage"
                href={props.movieDetails.homepage}
                target="_blank"
                alt="homepage"
              >
                WATCH NOW
              </a>
            </div>

            {props.movieDetails.tagline && <div className="tagline">
              <p>"{props.movieDetails.tagline}"</p>
            </div>}
          </div>
        </div>

        <div className="more-detials">
          <h2>More Details</h2>
          <p>
            Rating: <span className="rating">{props.movieDetails.rating}</span>
          </p>
          <p>
            Vote Count:{" "}
            <span className="vote-count">{props.movieDetails.voteCount}</span>
          </p>
          <p>
            Popularity:{" "}
            <span className="rating">{props.movieDetails.popularity}</span>
          </p>
          <p className="release-date">
            Release date: <span>{props.movieDetails.releaseDate}</span>
          </p>
          <p className="director">
            Directed by:{" "}
            <span>{filterDirector(props.movieDetails.director)}</span>
          </p>
          <p className="producer">
            Produced by: <span>{props.movieDetails.productionCompany}</span>
          </p>
          <p className="budget">
            Budget:{" "}
            {props.movieDetails.budget > 0 ? props.movieDetails.budget : "NA"}
          </p>
          <p className="original-lang">
            Original Language: <span>{lang}</span>
          </p>
          <p className="origin-country">
            Origin Country: <span>{props.movieDetails.originCountry}</span>
          </p>
        </div>
      </div>
        <div>
        <h2 className='review-title'>Reviews</h2>
        <div className='review-container'>
          {props.reviews.authors.map((review) => (
            <div className='review-card'>
              <h3 className='author-name'>{review.author}</h3>
              <h4 className='author-rating'>
                Rating: {review.author_details.rating}/10
              </h4>
              <p className='author-content'>{review.content}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="cast-container">
        <h2 className="cast-title">Cast</h2>
        <div className="actor-container">
          {props.movieDetails.cast.map((actor) => (
            <div
              className="actor-card"
              key={`${actor.name}${Math.floor(Math.random() * 1000)}`}
            >
              <img
                src={`https://image.tmdb.org/t/p/original/${actor.profile_path}`}
                alt="actor-thumbnail"
                className="actor-img"
              />
              <h3 className="actor-name">{actor.name}</h3>
              <p className="character">{actor.character}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MovieDetails;
