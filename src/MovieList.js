// MovieList.js
import React, { useState } from 'react';
import Movie from './Movie';
import Filter from './Filter';
import Grid from '@mui/material/Grid';

const MovieList = ({ movies }) => {
  const [filter, setFilter] = useState('');

  const uniqueLanguages = [...new Set(movies.flatMap(movie => movie.movielanguages))];
  const uniqueCountries = [...new Set(movies.flatMap(movie => movie.moviecountries))];
  const uniqueGenres = [...new Set(movies.flatMap(movie => movie.moviegenres))];

  const filterMovies = (movie) => {
    if (!filter) return true;
    return (
      movie.movielanguages.includes(filter) ||
      movie.moviecountries.includes(filter) ||
      movie.moviegenres.includes(filter)
    );
  };

  return (
    <div>
      <Grid container spacing={2} justifyContent="flex-end">
        <Grid item xs={12} sm={3}>
          <Filter
            options={['Language', ...uniqueLanguages, 'Country', ...uniqueCountries, 'Genre', ...uniqueGenres]}
            selectedOption={filter}
            setSelectedOption={setFilter}
          />
        </Grid>
      </Grid>
      <Grid container spacing={2}>
        {movies.filter(filterMovies).map(movie => (
          <Grid key={movie.imdbmovieid} item xs={6} sm={3}>
            <Movie movie={movie} />
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default MovieList;
