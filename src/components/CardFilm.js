import React from 'react'
import "./Film.css"

const CardFilm = ({ movies }) => {
	
  return (
    <>
    <figure className="movie">
  <div className="movie__hero">
    <img src={movies.Images[0]} alt={movies.Title} style={{ width:"300px", height:"250px"}}/></div>
  <div className="movie__content">
    <div className="movie__title">
      <h1 className="heading__primary">{movies.Title} <i className="fas fa-fire"></i></h1>
      <div className="movie__tag movie__tag--1">{movies.Released}</div>
      <div className="movie__tag movie__tag--2">{movies.Director}</div>
    </div>
    <p className="movie__description">
     {movies.Plot}
    </p>
    <div className="movie__details">
      <p className="movie__detail"><span className="icons icons-red"><i className="fas fa-camera-retro"></i> </span>{movies.Run}
      </p>
      <p className="movie__detail"><span className="icons icons-grey"><i className="fas fa-clock"></i> </span>{movies.Genre}</p>
      <p className="movie__detail"><span className="icons icons-yellow"><i className="fas fa-file-invoice-dollar"></i>
        </span>{movies.Runtime}</p>
    </div>
  </div>
  <div className="movie__price">{movies.Type}</div>
</figure>
    </>
  )
}
export default CardFilm;
