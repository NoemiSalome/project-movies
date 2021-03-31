import React, {useEffect, useState} from "react"
import { useParams } from "react-router-dom"

export const MovieDetail = ( {original_title, vote_average, poster_path, overview} ) => {
    const { id } = useParams()
    return (
        <section className="movie-detail">
            Game Details
        </section>
    )
}
