import React from 'react'
import CardFilm from './CardFilm';


const ListMovie = ({ movies }) => {
  return (
     <div className='movies-list' style={{marginTop:"100px"}}>
       {movies.map((movies,index) => (
         <CardFilm key={index} movies={movies} />
       ))}
     </div>
  );
 };
 
 export default ListMovie;
