import React, {useEffect, useState} from 'react';
import './App.css';

import Movie from './components/Movie';

const FEATURED_API = "https://api.themoviedb.org/3/movie/550?api_key=8535fa228b728e9a0af894b763ecdffa";
const IMAGE_API = "https://image.tmdb.org/t/p/w1280";
const SEARCH_API = "https://www.themoviedb.org/search/movie?&api_key=8535fa228b728e9a0af894b763ecdffa";

function App() {

  const [movies, setMovies] = useState([]);

  useEffect(()=>{
      async function getmovies(){
        const moviesResponse = await fetch(FEATURED_API);
      const moviesjson = await moviesResponse.json();
      setMovies(moviesjson);
      }
      getmovies();
  },[])

  return(
    <>
      {movies.map(movie=>(
        <Movie />
      ))}
    </>
  )
}
export default App;
