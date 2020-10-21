import React, { useEffect, useState} from 'react';

import Movie from './components/Movie';

const FEATURED_API = "https://api.themoviedb.org/3/discover/movie/?sort_by=popularity.desc&api_key=8535fa228b728e9a0af894b763ecdffa";
// const SEARCH_API = "https://www.themoviedb.org/search/movie?&api_key=8535fa228b728e9a0af894b763ecdffa";

function App() {

  const [movies, setMovies] = useState([]);

  const getMovies = (API)=>{
    fetch(API)
    .then((res)=>res.json())
    .then((data)=>setMovies(data.results));

  }

  useEffect(()=>{
     getMovies(FEATURED_API);
  },[])

  return(
    <>
      <div className="movie-container">
        <header >
          <input className="search" type="text" placeholder="Search..." />
        </header>
        {movies.length>0 && movies.map((movie) => <Movie key={movie.id} {...movie} /> )} {/*spreading the movies ...movies to access individual features in component*/}
      </div>
    </>
  );
}
export default App;
