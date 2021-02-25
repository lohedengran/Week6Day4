import React from "react";
import "./MovieInfo.css";

function MovieInfo({ movie }) {
  return (
    <div className="MovieInfo">
      <h2>
        {movie.title}
        <span className="Star" role="img" aria-label="Favorite">
          {movie.favorite && "⭐"}
        </span>
      </h2>
      <p className="Description">{movie.description}</p>
      <p className="Rating">
        {movie.rating}
        {movie.rating >= 8.7 ? (
          <span role="img" aria-label="Good Rating">
            👍
          </span>
        ) : (
          <span role="img" aria-label="Bad Rating">
            👎
          </span>
        )}
      </p>

      <p className="Analysis">
        {movie.rating >= 8.7 && movie.year < 2000 ? "An old time classic!" : ""}
      </p>
    </div>
  );
}

// rating of 8.7 + before 2000
export default MovieInfo;
