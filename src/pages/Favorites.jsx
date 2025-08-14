
import React from 'react';
import '../css/Favorites.css';

export default function Favorites({ favorites }) {

  
  return (
    <div className="favorites">
      <h2>My Favorite Books ❤️</h2>

      {favorites.length === 0 ? (
        <center><p>No favorites yet. Click the ❤️ button on a book to add it!</p></center>
      ) : (
       
<div className="favorites-grid">
          {favorites.map((book) => (
            <div key={book.id} >
              <a href={book.link} target="_blank" rel="noopener noreferrer">
                <img src={book.image} alt={book.title} />
              </a>
              <h3>{book.title}</h3>
              <p>{book.author}</p>
            </div>
          ))}
        </div>
      )}</div>
  );
}









