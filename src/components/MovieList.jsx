import React from 'react';
import { Link } from 'react-router-dom';

const MovieList = ({ movies }) => {
  return (
    <div>
      {movies.map((movie, index) => (
        <div key={index}>
          <Link to={`/movie/${index}`}>
            <h2>{movie.title}</h2>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default MovieList;
