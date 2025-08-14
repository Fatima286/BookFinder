

import React, { useEffect, useState,useRef } from "react";
import { fetchBooks } from "../services/api"; // your API logic
import Bookcard from "./Bookcard";
import "../css/BookRow.css";

const BookRow = ({ title, query, books: passedBooks, addToFavorites,addToCart }) => {
  const [books, setBooks] = useState([]);
const rowRef=useRef(null);
 
    useEffect(() => {
    if (passedBooks && passedBooks.length > 0) {
      // Use the books passed from props (search results)
      setBooks(passedBooks);
    } else if (query) {
      // Fetch only if we have a query
      fetchBooks(query).then(setBooks);
    }
  }, [passedBooks, query]);
 
 const scrollLeft = () => {
  if(rowRef.current){
    rowRef.current.scrollBy({ left: -300, behavior: "smooth" });}
  };

 const scrollRight = () => {

  if(rowRef.current){
    
    rowRef.current.scrollBy({ left: 300, behavior: "smooth" });}
  };


  return (
<>
  <div className="book-row-wrapper">
    <h2>{title}</h2>
    <div className="scroll-buttons">
    <button type="button" onClick={scrollLeft} className="scroll-btn left-btn ">◀</button>
    <button type="button" onClick={scrollRight} className="scroll-btn right-btn">▶</button>
</div>

   
      
      <div className="book-row-scroll" ref={rowRef}>
        {books.map((book) => {
          const volumeInfo = book.volumeInfo;
          return (
            <Bookcard
              key={book.id}
              id={book.id}
              title={volumeInfo.title}
              author={volumeInfo.authors?.join(", ") || "Unknown"}
              image={volumeInfo.imageLinks?.thumbnail || ""}
              link={volumeInfo.infoLink}
              //description={volumeInfo.description || "No description available."}
              addToFavorites={addToFavorites}
              addToCart={addToCart}

            />
          );
        })}
      </div>
    </div>
    </>
  );
};

export default BookRow;

