import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { getMovieCastById } from "services/theMovieDbApi"

export default function Cast(){

    const {movieId} = useParams()
    const [cast, setCast] = useState([])

    useEffect(() => {
        getMovieCastById(movieId)
        .then((data) => {
            console.log(data)
            setCast(data.cast)
        })
    },[movieId])

    return (
        <div>
            <ul> 
                {cast.map(({cast_id, name, character, profile_path}) => 
                    <li key={cast_id}>
                        <img src={"https://image.tmdb.org/t/p/w200" + profile_path} alt="actor" />
                        <p>{name}</p>
                        <p>Character: {character}</p>
                    </li>
                )}
            </ul>
        </div>
    )
}