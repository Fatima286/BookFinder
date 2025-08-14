import React from 'react'
import image1 from './image1.gif';
import image2 from './image2.gif';
import image3 from './image3.gif';
import image4 from './image4.gif';


export default function Carousel() {
  return (
    <div>
<div id="carouselExample" className="carousel slide" data-bs-ride="carousel">
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src={image1} className="d-block w-100" alt="..." />
    </div>
    <div className="carousel-item">
      <img src={image2} className="d-block w-100" alt="..."/>
    </div>
      <div className="carousel-item">
      <img src={image3} className="d-block w-100" alt="..."/>
    </div>
    
      <div className="carousel-item">
      <img src={image4} className="d-block w-100" alt="..."/>
    </div>
    
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
    </div>
  )
}
