import React from "react";
import Rating from "../components/Rating";
import "../css/MovieCard.css";
import { Link, Redirect } from "react-router-dom";
/*import Description from "./Description";*/

const MovieCard = ({ movie }) => {
  console.log(movie);

  return (
    <div className="movie_card" id="bright">
      <img className="locandina" src={movie.poster} alt="" />

      <div className="info_section">
        <h1 className="movie">{movie.title}</h1>
        <div className="info">
          <h4>{movie.year}</h4>
          <p className="type">{movie.type}</p>
          <div className="material-icons">
            <Rating rate={movie.rate} />
          </div>
        </div>
        <Link to={{pathname:"/description" , state :{movie}}}>
          <button className="button">Details Movie</button>
        </Link>
      </div>
    </div>
  );
};

export default MovieCard;
