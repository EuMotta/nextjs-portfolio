
import '../styles/globals.css';
import '../tailwind.config';
import React, { useState } from 'react';

const FeedbackForm = () => {
  const [name, setName] = useState('');
  const [comment, setComment] = useState('');
  const [rating, setRating] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch('/api/seed', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name, comment, rating }),
    });
    const result = await response.json();
    console.log(result);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="name">Nome:</label>
      <input
        type="text"
        id="name"
        name="name"
        required
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <br />
      <label htmlFor="comment">Comentário:</label>
      <textarea
        id="comment"
        name="comment"
        required
        value={comment}
        onChange={(e) => setComment(e.target.value)}
      />
      <br />
      <label htmlFor="rating">Classificação:</label>
      <input
        type="number"
        id="rating"
        name="rating"
        min="1"
        max="5"
        required
        value={rating}
        onChange={(e) => setRating(e.target.value)}
      />
      <br />
      <button type="submit">Enviar</button>
    </form>
  );
};

export default FeedbackForm;
