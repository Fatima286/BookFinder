
import'../css/Home.css';
//import {fetchbooks} from '../services/api.js'
import BookRow from '../components/BookRow.jsx';
import Carousel from '../components/Carousel.jsx';
import '../css/Carousel.css';
export default function Home({books,addToFavorites,addToCart}) {


const categories = [
  { title: "Suspense", query: "suspense novels" },
  { title: "Mystery", query: "mystery novels" },
  { title: "Fantasy", query: "fantasy books" },
  { title: "Science Fiction", query: "science fiction" },
  { title: "Horror", query: "Horror books" },


];
if (books && books.length > 0) {
    return (
      <BookRow
        title="Search Results"
        query={null}
        books={books}
        addToFavorites={addToFavorites}
        addToCart={addToCart}
      />
    );
  }

  return (
    <div>

<div className='carousel-container'><Carousel/></div>
      
      {categories.map((category) => (
        <BookRow
          key={category.query}
          title={category.title}
          query={category.query}
          addToFavorites={addToFavorites}
          addToCart={addToCart}

        />
      ))}
    </div>
  );
};

