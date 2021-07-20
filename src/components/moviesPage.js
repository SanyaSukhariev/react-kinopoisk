import {useState} from 'react'
import {Link } from "react-router-dom";


const MoviesPage = () => {
    const [stateSearch, setStateSearch] =useState('')
    const  [stateAddFilms, setStateAddFilms] = useState({results:[]})
    const url = `https://api.themoviedb.org/3/search/movie?query=${stateSearch}&api_key=8d4e0a5a0c37d4780eefdf617d0feea1&language=en-US&page=1&include_adult=false`

        const searchFilms=()=>{
                fetch(url)
                    .then((response)=>response.json())
                    .then((commits)=>setStateAddFilms(commits))

        }

    return (

        <div>
            <input  onChange={e =>setStateSearch(e.target.value)} type="text"></input>
            <button onClick={searchFilms}> Search </button>
            <div>
                {stateAddFilms.results.map(({id,original_title})=><Link to={`/movies/${id}`}><ul><li>{original_title}</li></ul></Link>)}
            </div>


        </div>
    )
}

export default MoviesPage
