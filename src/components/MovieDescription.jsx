import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const MovieDescription = ({ movies }) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const movie = movies[parseInt(id, 10)];

  if (!movie) {
    return <div>Movie not found</div>;
  }

  return (
    <div>
      <button onClick={() => navigate('/')}>Back to Home</button>
      <h1>{movie.title}</h1>
      <p>Rating: {movie.rating}</p>
      <p>{movie.description}</p>
      {movie.trailer && (
        <iframe
          width="560"
          height="315"
          src={movie.trailer}
          title="Movie Trailer"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      )}
    </div>
  );
};

export default MovieDescription;
