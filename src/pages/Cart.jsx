import React from 'react'
//import Bookcard from '../components/Bookcard'
import '../css/Favorites.css'
export default function Cart({cart}) {
    console.log(cart);
  return (
    
      
   <div className="favorites">
      <h2>My Books ❤️</h2>

      {cart.length === 0 ? (
        <center><p>No Cart books yet. Click the  button on a book to add it!</p></center>
      ) : (
       
<div className="favorites-grid">
          {cart.map((book) => (
            <div key={book.id} >
              <a href={book.link} target="_blank" rel="noopener noreferrer">
                <img src={book.image} alt={book.title} />
              </a>
              <h3>{book.title}</h3>
              <p>{book.author}</p>
            </div>
          ))};
        </div>
      )}</div>

  );
}
