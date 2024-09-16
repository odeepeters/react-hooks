import React, { useState } from 'react';

const AddMovieForm = ({ onAdd }) => {
  const [title, setTitle] = useState('');
  const [rating, setRating] = useState('');
  const [description, setDescription] = useState('');
  const [trailer, setTrailer] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onAdd({ title, rating: parseFloat(rating), description, trailer });
    setTitle('');
    setRating('');
    setDescription('');
    setTrailer('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      />
      <input
        type="number"
        placeholder="Rating"
        value={rating}
        onChange={(e) => setRating(e.target.value)}
        required
      />
      <textarea
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        required
      />
      <input
        type="text"
        placeholder="Trailer URL"
        value={trailer}
        onChange={(e) => setTrailer(e.target.value)}
      />
      <button type="submit">Add Movie</button>
    </form>
  );
};

export default AddMovieForm;
