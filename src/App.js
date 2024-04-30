import React from 'react';
import './App.css';
import MovieList from './MovieList';
import movieData from './MovieData';
import Grid from '@mui/material/Grid'; 

function App() {
  return (
    <div className="app">
    <h1>Movies</h1>
    <Grid container justifyContent="center"> 
      <Grid item xs={12} sm={8}> 
        <MovieList movies={movieData} />
      </Grid>
    </Grid>
  </div>
  );
}

export default App;
