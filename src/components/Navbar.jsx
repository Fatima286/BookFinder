import React, { useState } from 'react'
import { NavLink } from 'react-router-dom';


export default function Navbar({onSearch,onHomeClick}) {

//const[books,setBooks]=useState([]);

  const[searchQuery,setsearchQuery]=useState ("");
   // const [error, setError] = useState(null);
  //const [loading, setLoading] = useState(true);


    const handleSearch = (e) => {
    e.preventDefault(); // Prevent page reload
    if (searchQuery.trim() !== "") {
      onSearch(searchQuery);
    }
  };


  
  
    
  return (
    
         <>
       
       <nav className="navbar navbar-expand-lg bg-body-tertiary" >
        <div className="container-fluid">
          <a className="navbar-brand" href="/">BookFinder</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink className="nav-link " aria-current="page" to="/"  onClick={onHomeClick}>Home</NavLink>
              </li>
                <li className="nav-item">
                <NavLink className="nav-link " aria-current="page" to="/About">About</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link " to="/Favorites">Favorites</NavLink>
              </li>
             <li className="nav-item">
                <NavLink className="nav-link " to="/Cart">Cart</NavLink>
              </li>
              
            </ul>
            <form className="d-flex" role="search" onSubmit={handleSearch}>
              <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" value={searchQuery} onChange={(e)=>setsearchQuery(e.target.value)}/>
              <button className="btn btn-success" type="submit">Search</button>
            </form>
          </div>
        </div>
      </nav>
      
       </>
      
      
  );}