
import React from 'react'
import'../css/Bookcard.css';
//import Favorites from '../pages/Favorites';


export default function Bookcard({id,title,author,image,link,addToFavorites,addToCart}) {


  return (
<div>
<center>
    
      <div className='card'>
       <div className='poster'>
        <a href={link} target="_blank" rel="noopener noreferrer">
             <img src={image} alt=""/>
            </a>
      
      <div className='book-overlay'><button className='favorite-btn'  onClick={() => addToFavorites({id,title,author,image,link})}>❤️</button></div>
  </div>
      <div className='book-info' >
        <h3>{title}</h3><br></br>
        
      <p>{author}</p></div>
      <div><button type='button' className="btn btn-dark"   onClick={()=> addToCart({id,title,author,image,link})}>🛒</button></div>

    </div>
</center>

</div>
  );
}






