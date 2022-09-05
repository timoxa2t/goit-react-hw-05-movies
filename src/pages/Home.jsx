import { useState } from "react"
import styles from "../css/Home.module.css"
import { getTrends } from "services/theMovieDbApi"
import { useEffect } from "react"
import { Link } from "react-router-dom";

export default function Home(){

    const [trends, setTrends] = useState([])
    useEffect(() => {
        getTrends()
        .then((data) => {
            console.log(data)
            setTrends(data.results)
        })
    }, [])
    return (
        <div className={styles["home"]}>
            Тренди

            <ul>
                {trends.map(({id, title}) => 
                    <li key={id}>
                        <Link to={`movies/${id}`}>
                            {title}
                        </Link>   
                    </li>
                )}
            </ul>
        </div>        
    )
}