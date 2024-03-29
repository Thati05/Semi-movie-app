import { useEffect, useState } from "react";
//useEffect hook will extract data from the API

import MovieCard from "./MovieCard";

import './App.css';
import SearchIcon from './search.svg';

//How to call the API to access all of the movie data
const API_URL = 'http://www.omdbapi.com?apikey=5f9564b3' //This is our API URL, it can be used inside of our component to gather data

const movie1 = {


  "Title": "Son of God 2",
  "Year": "2016",
  "imdbID": "tt5754654",
  "Type": "movie",
  "Poster": "N/A"


};// going to use this as static data

// Creating a const function
const App = () => {

  const [movies, setMovies] = useState([])

  //we can have multiple states and effect hooks per one component
  const [seachTerm, setSearchTerm] = useState('')


  const searchMovie = async (title) => {
    //This is going to call the API
    const response = await fetch(`${API_URL}&s=${title}`);
    // Once we get the response we have to get the data from it by saying:
    const data = await response.json();

    setMovies(data.Search);

  }

  // inside of useEffect we are going to call a function that will fetch the movies from the API
  useEffect(() => {
    searchMovie('Son of God')

  }, []);//This [] is an empty dependency array



  return (
    <div className="app">
      <h1>Dodo Movies</h1>
      <div className="search" >
        <input
          placeholder="Search for movies "
          value={seachTerm}
          onChange={(e) => setSearchTerm(e.target.value)}// This accepts a callback function
        // e represents the event
        />
        <img src={SearchIcon}
          alt="search"
          onClick={() => searchMovie(seachTerm)}
        />
      </div>
      {

        movies?.length > 0
          ? (
            <div className="container">
              {movies.map((movie) => (
                <MovieCard movie={movie} />
              ))}
            </div>

          ) : (
            <div className="empty">
              <h2>No movies found</h2>
            </div>
          )
      }
    </div>
  );
}

export default App;

//API: application programming interface, this is going to give us data for the movie application