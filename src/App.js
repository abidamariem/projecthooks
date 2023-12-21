import './App.css';
import movieData from "./movies.json";
import { useState } from 'react';
import ListFilm from './components/ListFilm';
import Add from './components/Add';
import Search from './components/Search';

function App() {
  const [movies,setMovies]=useState(movieData);
  
  const [searchMovie,setSearchMovie]=useState("");

  const handleAdd=(newMovie)=>{
    setMovies([...movies,newMovie])
  }
  console.log(searchMovie)
    const search =(name)=>{
      setSearchMovie(name);


    }
  return ( <>
  <Search search={search}/>
  <h1>movie app</h1>
  <Add handleAdd={handleAdd}/>
  <ListFilm movies={movies.filter((movie)=> { return movie.Title.toLocaleUpperCase().includes(searchMovie.toLocaleUpperCase()) })}/>
  </>

  );
}

export default App;