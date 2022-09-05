import Loading from "components/Loading";
import { useState } from "react";
import { useEffect } from "react";
import { Suspense } from "react";
import { Link, Outlet, useParams} from "react-router-dom";
import { getMovieById } from "services/theMovieDbApi";

export default function MovieDetails(){
    const {movieId} = useParams()
    const [movie, setMovie] = useState({})

    useEffect(() => {
        getMovieById(movieId)
        .then((data) => {
            console.log(data)
            setMovie(data)
        })
    },[movieId])

    return movie.title ? 
     (  <div>
            <h2>{movie.title + ` (${movie.release_date})`}</h2>
            <img src={"https://image.tmdb.org/t/p/w300" + movie.poster_path} alt="poster"/>
            <p>User score: {parseInt(movie.vote_average * 10)}%</p>
            <h3>Overview</h3> 
            <p>{movie.overview}</p>
            <h3>Genres</h3> 
            <p>{movie.genres.map(({name}) => name).join(', ')}</p>

            <h3>Additional information</h3> 
            <ul>
                <li><Link to="cast">Актори</Link></li>
                <li><Link to="reviews">Огляди</Link></li>
            </ul>
            <Suspense fallback={
                <Loading />
            }>
                <Outlet />
            </Suspense>       
        </div>)
    : <Loading />
}