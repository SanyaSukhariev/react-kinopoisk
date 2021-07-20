import Cast from "./Cast";
import Reviews from "./Reviews";
import {useState,useEffect} from 'react'
import {BrowserRouter,Route,Switch,Link,useParams,useHistory } from "react-router-dom";



const MovieDetailsPage = () => {

    let {movieId} = useParams()
    const [movieIdState,setMovieId] = useState({genres:[]})
    const url = `https://api.themoviedb.org/3/movie/${movieId}?api_key=8d4e0a5a0c37d4780eefdf617d0feea1&language=en-US`
    const imgUrl = "https://image.tmdb.org/t/p/w500"+ movieIdState.backdrop_path;
    const history = useHistory()

    useEffect(()=>{
        fetch(url)
            .then(response => response.json())
            .then(commits => setMovieId(commits ))
    },[])

    const goBack=()=>{
        history.goBack()
    }
    return (
        <div>
            <div> <button onClick={goBack}>Go back</button></div>

            <img src={imgUrl} alt=""/>

            <div>
                {movieIdState.overview}
            </div>

            <div>{movieIdState.genres.map((genres,index)=>{
                // if(index === movieIdState.genres.length -1 )   return genres.name
                //    return genres.name + ","
                    return index===movieIdState.genres.length -1?genres.name:genres.name + ","
            }
            )}</div>

            <h2>MoviDetailsPage</h2>
            <p>страница с детальной информацией о кинофильме.</p>

            <nav>
                <Link to={`/movies/${movieId}/reviews`}> Reviews </Link>
            <br/>
                <Link to={`/movies/${movieId}/cast`}> Cast </Link>
            </nav>
            <Switch>
                <Route path="/movies/:movieId/cast"  render={()=><Cast movieId={movieId}/>}/>
                <Route path="/movies/:movieId/reviews"  render={()=><Reviews movieId={movieId}/>}/>
            </Switch>

        </div>
    )
}

export default MovieDetailsPage