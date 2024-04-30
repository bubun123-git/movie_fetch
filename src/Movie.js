
import React from 'react';

const Movie = ({ movie }) => {
  return (
    <div className="movie-card">
      <img src={movie.moviemainphotos[0]} alt={movie.movietitle} />
      <h2>{movie.movietitle}</h2>
      <p>Languages: {movie.movielanguages.join(', ')}</p>
      <p>Countries: {movie.moviecountries.join(', ')}</p>
      <p>Genres: {movie.moviegenres.join(', ')}</p>
    </div>
  );
};

export default Movie;
