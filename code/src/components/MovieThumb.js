import React from "react"

export const MovieThumb = ({poster_path, original_title, release_date}) => {
    return(
        <section className="movie-thumb">
            <img src={`https://image.tmdb.org/t/p/w780${poster_path}`} alt={original_title}/>
            <h1>{original_title}</h1>
            <h3>{release_date}</h3>
         </section>
    )
}