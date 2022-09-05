import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { getMovieReviewsById } from "services/theMovieDbApi"


export default function Reviews(){
    const {movieId} = useParams()
    const [reviews, setReviews] = useState([])

    useEffect(() => {
        getMovieReviewsById(movieId)
        .then((data) => {
            console.log(data)
            setReviews(data.results)
        })
    },[movieId])

    return reviews.length > 0 ? 
     (
        <div>
            <ul> 
                {reviews.map(({id, author, content}) => 
                    <li key={id}>
                        <p><b>Author: {author}</b></p> 
                        <p>{content}</p>
                    </li>
                )}
            </ul>
        </div>
    ):(<p>We don't have any reviews for this movie</p> )
}