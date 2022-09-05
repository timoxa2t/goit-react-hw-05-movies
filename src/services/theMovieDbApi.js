
const baseURL = "https://api.themoviedb.org/3/"

let media_type = "movie"

const defaultParams = {
    api_key: "37055092bc16af00ecdaade257ad346c",
    language: "ua"
}


function sendRequest(path, params = {}){
    const urlParams = new URLSearchParams({...defaultParams, ...params}) 

    return fetch(`${baseURL}${path}?${urlParams}`)
    .then(res => res.json())
    .catch(err => err)
}

function getTrends(time_window="day"){
    return sendRequest(`trending/${media_type}/${time_window}`)
}

function getMovieById(movie_id){
    return sendRequest(`movie/${movie_id}`)
}

function getMovieCastById(movie_id){
    return sendRequest(`movie/${movie_id}/credits`)
}

function getMovieReviewsById(movie_id){
    return sendRequest(`movie/${movie_id}/reviews`)
}

function searchMovies(query){
    return sendRequest(`search/movie`, {query})
}

export {getTrends, getMovieById, searchMovies, getMovieCastById, getMovieReviewsById}