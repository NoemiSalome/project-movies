import React, { useState, useEffect } from "react"
import { Link } from "react-router-dom"

import { MOVIES_URL } from "reusable/urls"
import { MovieThumb } from "components/MovieThumb"


export const MovieList = () => {    
  const [movies, setMovies] = useState([])
    useEffect(() => {
      fetch (MOVIES_URL)
      .then(res => res.json())
      .then(json => setMovies(json.results))  
      .catch(err => console.error(err))   
    }, [])

    return ( 
      
        <section className="movie-list-container"> 
          {movies.map((movie)=> (
            <Link to={`/movies/${movie.id}`}>
                <div key= {movie.id} className="movie-thumb">
                <MovieThumb {...movie} />
                </div>
            </Link>
          ))}
        </section>
      
    )       
}