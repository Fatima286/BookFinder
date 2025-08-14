
import './css/App.css';
import Home  from './pages/Home.jsx';
import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Favorites from './pages/Favorites.jsx';
import Navbar from './components/Navbar.jsx';
import About from './pages/About.jsx';
import { SearchBooks } from './services/api.js';
import Cart from './pages/Cart.jsx';

function App() {
    const [favorites, setFavorites] = useState([]);
  const [books,setBooks]=useState([]);
const [cart,setCart]=useState([]);


 function addToFavorites(book) {
  setFavorites(prevFavorites => {
    // avoid duplicates
    if (prevFavorites.some(fav => fav.id === book.id)) {
      return prevFavorites;
    }
    return [...prevFavorites, book];
  });
// console.log(favorites);
 
}

  const handleSearch = (query) => {
    SearchBooks(query).then(setBooks);
    
  };
  
const addToCart=(cartbook)=>{
setCart(prevCart => {
    // avoid duplicates
    if (prevCart.some(c => c.id === cartbook.id)) {
      return prevCart;
    }
    return [...prevCart, cartbook];
  });

}

  return (
    <>
    <div >
            
            <Navbar onSearch={handleSearch}  onHomeClick={() => setBooks([])}/>
        </div>
    <main>
   <Routes>
    <Route path='/' element={<Home books={books} addToFavorites={addToFavorites} addToCart={addToCart}/>}/>
    
    <Route path='/About' element={<About/>}/>
    
    <Route path='/favorites' element={<Favorites favorites={favorites}/>}/>
    <Route path='/cart'  element={<Cart cart={cart}/>}/>
    </Routes> 
    </main>
    </>
  );
  
}

export default App;
