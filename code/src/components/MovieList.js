import React, { useEffect, useState } from "react"
import { Link } from "react-router-dom"

import { MovieThumb } from "./MovieThumb"

export const MovieList = () => {
    const MOVIE_URL = "https://api.themoviedb.org/3/movie/popular?api_key=2c2891737dd5ffa64a8858cdba25ddfe"
    const[movies, setMovies] = useState([])

    useEffect(() => {
        fetch(MOVIE_URL)
        .then((response) => response.json())
        .then((json) => setMovies(json.results))
    }, [])

    return (
        <>
            <section className="movie-list">
                {movies.map((movie) =>  ( 
                    <MovieThumb {...movie} />
                ))}
            </section>
        </>
    )
}

