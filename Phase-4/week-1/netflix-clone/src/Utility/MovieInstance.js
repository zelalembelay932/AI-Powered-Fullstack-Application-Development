import axios from 'axios'

const movieInstance = axios.create({
    baseURL : "https://api.themoviedb.org/3"
})

export {movieInstance}


    
// https://api.themoviedb.org/3/movie/popular?api_key=206f9ea804517db8009a4c68c46f24a0



