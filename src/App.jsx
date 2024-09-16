// src/App.jsx
import React, { useState } from 'react';
import MovieList from './components/MovieList';
import Filter from './components/Filter';
import AddMovieForm from './components/AddMovieForm';
import './App.css';

const App = () => {
  const [movies, setMovies] = useState([]);
  const [filter, setFilter] = useState({ title: '', rating: '' });

  const handleAddMovie = (movie) => {
    setMovies([...movies, movie]);
  };

  const handleFilter = (filter) => {
    setFilter(filter);
  };

  const filteredMovies = movies.filter((movie) => {
    const matchesTitle = movie.title.toLowerCase().includes(filter.title.toLowerCase());
    const matchesRating = !filter.rating || movie.rating >= parseFloat(filter.rating);
    return matchesTitle && matchesRating;
  });

  return (
    <div className="app">
      <h1>Movie App</h1>
      <AddMovieForm onAdd={handleAddMovie} />
      <Filter onFilter={handleFilter} />
      <MovieList movies={filteredMovies} />
    </div>
  );
};

export default App;
