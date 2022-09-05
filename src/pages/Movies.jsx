import { useEffect } from "react"
import { useState } from "react"
import { searchMovies } from "services/theMovieDbApi"
import { Link } from "react-router-dom";


export default function Movies(){
    
    const [searchText, setSearchText] = useState("")
    const [movies, setMovies] = useState([])
    const handleSubmit = (evt) => {
        evt.preventDefault()
        setSearchText(evt.target[0].value)
    }

    useEffect(() => {
        if(!searchText) return
        console.log(searchText)
        searchMovies(searchText)
        .then(({results}) => {
           setMovies(results)     
        })
    }, [searchText])

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label htmlFor="search_query"></label>
                <input id="search_query"/> 
                <button type="submit">Пошук</button>
            </form>
            <ul>
            {movies.map(({id, title}) => 
                    <li key={id}>
                        <Link to={`${id}`}>
                            {title}
                        </Link>   
                    </li>
                )}
            </ul>
        </div>
    )
}